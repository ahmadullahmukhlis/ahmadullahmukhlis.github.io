This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Run with Docker Compose on Ubuntu/AWS

The `docker-compose.yml` file is in this project directory. If you run `docker compose up --build -d` from another directory, Docker/Podman returns `no configuration file provided: not found`.

On a fresh Ubuntu server, install and start Docker Engine first:

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker
sudo usermod -aG docker ubuntu
exit
```

Log in to the server again after `usermod`, then verify Docker:

```bash
docker version
docker compose version
```

On the server, go to the project directory first:

```bash
cd /path/to/mukhlis
docker compose up --build -d
```

Or run Compose from anywhere by passing the compose file path:

```bash
docker compose -f /path/to/mukhlis/docker-compose.yml up --build -d
```

After it starts, open:

```text
http://SERVER_IP
```

## Enable HTTPS with Nginx and Let's Encrypt

Before issuing SSL, make sure your domain DNS `A` record points to this server and ports `80` and `443` are open in the server firewall/security group.

Run this once on the production server:

```bash
cd /path/to/mukhlis
./scripts/init-letsencrypt.sh
```

The script uses `ahmadullahmukhlis.com` and `ahmadullahmukhlis2019@gmail.com` by default. It starts Nginx, serves the Let's Encrypt HTTP challenge, installs the certificate under `certbot/conf`, reloads Nginx, and starts the renewal container.

For later deployments:

```bash
docker compose --profile ssl up --build -d
```

After renewing certificates, reload Nginx so it reads the renewed files:

```bash
docker compose exec -T nginx nginx -s reload
```

Then open:

```text
https://ahmadullahmukhlis.com
```

Useful commands:

```bash
docker compose ps
docker compose logs -f nginx nextjs
docker compose down
```

### Podman/Docker troubleshooting

If the server prints `Emulate Docker CLI using podman`, the `docker` command is being handled by Podman instead of Docker Engine. The recommended fix on this server is to install Docker Engine using the commands above.

If `docker version` still shows `Client: Podman Engine`, remove the Podman Docker compatibility package and reinstall Docker Engine:

```bash
sudo apt remove -y podman-docker
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker
sudo usermod -aG docker ubuntu
exit
```

Log in again and check that `docker version` shows Docker Engine, not Podman.

If you want to keep Podman instead, the error `Cannot connect to the Docker daemon at unix:///run/user/1000/podman/podman.sock` means the Podman socket is not running for the current user.

Start it with:

```bash
systemctl --user enable --now podman.socket
export DOCKER_HOST=unix:///run/user/$(id -u)/podman/podman.sock
```

Then try again:

```bash
./scripts/init-letsencrypt.sh
docker compose ps
docker compose logs -f nginx nextjs
```

If `systemctl --user` fails on a remote server, enable lingering for the user and reconnect:

```bash
sudo loginctl enable-linger ubuntu
exit
```

Log in again, then run:

```bash
systemctl --user enable --now podman.socket
export DOCKER_HOST=unix:///run/user/$(id -u)/podman/podman.sock
./scripts/init-letsencrypt.sh
```

The `npm: command not found` message is not required for Docker deployment because the Docker image runs `npm ci` and `npm run build` inside the container.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
