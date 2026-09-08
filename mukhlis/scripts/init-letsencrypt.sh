#!/bin/sh
set -eu

NGINX_HOST="${NGINX_HOST:-ahmadullahmukhlis.com}"
LETSENCRYPT_EMAIL="${LETSENCRYPT_EMAIL:-ahmadullahmukhlis2019@gmail.com}"

if [ -z "${LETSENCRYPT_EMAIL:-}" ]; then
  echo "Set LETSENCRYPT_EMAIL to your email address for Let's Encrypt notices."
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "Docker Compose is not available or the Docker/Podman daemon is not running."
  echo
  echo "If this server shows a Podman socket error like:"
  echo "  unix:///run/user/1000/podman/podman.sock: no such file or directory"
  echo
  echo "Use Docker Engine instead:"
  echo "  sudo apt remove -y podman-docker"
  echo "  sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin"
  echo "  sudo systemctl enable --now docker"
  echo "  sudo usermod -aG docker $(id -un)"
  echo "  exit"
  echo
  echo "Then log in again and rerun:"
  echo "  ./scripts/init-letsencrypt.sh"
  exit 1
fi

cert_path="./certbot/conf/live/${NGINX_HOST}"

mkdir -p "${cert_path}" ./certbot/www

if [ ! -s "${cert_path}/fullchain.pem" ] || [ ! -s "${cert_path}/privkey.pem" ]; then
  echo "Creating temporary certificate for ${NGINX_HOST} so Nginx can start."
  docker compose run --rm --entrypoint sh certbot -c "mkdir -p /etc/letsencrypt/live/${NGINX_HOST} && openssl req -x509 -nodes -newkey rsa:2048 -days 1 -keyout /etc/letsencrypt/live/${NGINX_HOST}/privkey.pem -out /etc/letsencrypt/live/${NGINX_HOST}/fullchain.pem -subj /CN=${NGINX_HOST} && cp /etc/letsencrypt/live/${NGINX_HOST}/fullchain.pem /etc/letsencrypt/live/${NGINX_HOST}/chain.pem"
fi

docker compose up --build -d nginx

echo "Requesting Let's Encrypt certificate for ${NGINX_HOST}."
docker compose run --rm --entrypoint sh certbot -c "rm -rf /etc/letsencrypt/live/${NGINX_HOST} /etc/letsencrypt/archive/${NGINX_HOST} /etc/letsencrypt/renewal/${NGINX_HOST}.conf"
docker compose run --rm --entrypoint certbot certbot certonly \
  --webroot \
  --webroot-path /var/www/certbot \
  --email "${LETSENCRYPT_EMAIL}" \
  --agree-tos \
  --no-eff-email \
  --force-renewal \
  -d "${NGINX_HOST}"

docker compose exec -T nginx nginx -s reload
docker compose --profile ssl up -d certbot

echo "HTTPS is configured for ${NGINX_HOST}."
