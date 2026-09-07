"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-solid-gold no-print !px-4 !py-2 !text-xs"
    >
      Print / Save as PDF
    </button>
  );
}