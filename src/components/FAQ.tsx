import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items, title = "Frequently Asked Questions", eyebrow = "FAQ" }: { items: FAQItem[]; title?: string; eyebrow?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">{title}</h2>
          <p className="mt-4 text-muted-foreground">Quick answers to the questions our customers ask most often.</p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-semibold text-foreground">{it.q}</span>
                  {isOpen ? <Minus className="h-5 w-5 text-primary shrink-0" /> : <Plus className="h-5 w-5 text-primary shrink-0" />}
                </button>
                {isOpen && <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{it.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
