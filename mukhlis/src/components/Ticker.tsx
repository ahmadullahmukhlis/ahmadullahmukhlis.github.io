import { TICKER_ITEMS } from "@/lib/data";

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker-wrap relative border-y border-white/8 bg-charcoal/70 py-4" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 font-mono text-sm text-muted">
            {item}
            <span className="text-gold">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
