import { PROFILE } from "@/lib/data";

export function WhatsAppFloat() {
  return (
    <a
      href={PROFILE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with me on WhatsApp"
      className="no-print group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full p-0 shadow-[0_12px_36px_-8px_rgba(37,211,102,0.55)] transition-all duration-300 hover:gap-3 hover:pr-4"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366]/40 [animation-duration:2.4s]" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1.5 -z-10 rounded-full border border-[#25d366]/30"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 inline-block h-full w-full animate-pulse rounded-full bg-[#25d366]/25 [animation-duration:3.6s]"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2ee767] to-[#14c051] text-white transition-transform duration-300 group-hover:scale-105">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.44 4.43-9.87 9.89-9.87a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 7 9.89 9.89 0 0 1-9.89 9.86Zm8.42-18.3A11.78 11.78 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.94L.07 24l6.32-1.66a11.87 11.87 0 0 0 5.66 1.44h.01c6.54 0 11.88-5.34 11.88-11.89 0-3.18-1.24-6.16-3.47-8.4Z" />
        </svg>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-sans text-sm font-semibold text-white transition-all duration-300 group-hover:max-w-48">
        Chat on WhatsApp
      </span>
    </a>
  );
}