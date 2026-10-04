import { TICKER_ITEMS } from "@/lib/data";

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker-wrap relative border-b border-rule bg-panel py-3" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-soft"
          >
            {item}
            <span className="text-gold">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
