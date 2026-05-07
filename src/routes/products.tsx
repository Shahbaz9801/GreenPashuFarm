import { createFileRoute, Link } from "@tanstack/react-router";
import { Milk, Droplet, Egg, Fish, Beef, Leaf, Package, Clock, Truck, ShieldCheck, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import heroImg from "@/assets/page-hero-products.jpg";
import paneerImg from "@/assets/product-paneer.jpg";
import gheeImg from "@/assets/product-ghee.jpg";
import curdImg from "@/assets/product-curd.jpg";
import butterImg from "@/assets/product-butter.jpg";
import lassiImg from "@/assets/product-lassi.jpg";
import malaiImg from "@/assets/product-malai.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Pricing | GreenPashu Farm" },
      { name: "description", content: "Pure A2 milk, Bilona ghee, free-range eggs, fresh pond fish, organic curd, paneer, butter, lassi and live goats. Daily delivery across Patna." },
      { property: "og:title", content: "Products & Pricing | GreenPashu Farm" },
      { property: "og:description", content: "Browse the full catalogue of GreenPashu Farm dairy, poultry and fisheries with transparent pricing." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ProductsPage,
});

const dairy = [
  { Icon: Milk, img: null, name: "A2 Cow Milk", price: "₹90 / litre", units: "500 ml, 1 L, 2 L", desc: "Single-source Gir & Sahiwal milk, hand-milked at 5 AM and chilled instantly. Delivered in food-grade glass bottles." },
  { Icon: Droplet, img: gheeImg, name: "Bilona Desi Ghee", price: "₹2,400 / kg", units: "250 g, 500 g, 1 kg", desc: "Slow-churned from cultured A2 curd using the traditional bilona method. Granular, golden and aromatic." },
  { Icon: Leaf, img: curdImg, name: "Organic Curd / Dahi", price: "₹120 / kg", units: "500 g, 1 kg clay pot", desc: "Probiotic-rich, set in earthen pots. Mild tang and creamy texture, made fresh daily." },
  { Icon: Leaf, img: paneerImg, name: "Farm-Made Paneer", price: "₹420 / kg", units: "250 g, 500 g, 1 kg", desc: "Soft, hand-pressed cottage cheese made from full-fat A2 milk. No preservatives." },
  { Icon: Droplet, img: butterImg, name: "White Butter (Makhan)", price: "₹780 / kg", units: "250 g, 500 g", desc: "Hand-churned creamy white butter from cultured A2 cream. Salt-free and additive-free." },
  { Icon: Droplet, img: malaiImg, name: "Fresh Malai (Cream)", price: "₹360 / kg", units: "250 g, 500 g", desc: "Thick yellow cream skimmed from the top of boiled A2 milk. Ideal for sweets and desserts." },
  { Icon: Milk, img: lassiImg, name: "Sweet & Salted Lassi", price: "₹60 / glass (300 ml)", units: "Bottles of 500 ml & 1 L", desc: "Refreshing curd-based drink, churned daily. Sweet (cardamom) and salted (cumin) variants." },
  { Icon: Milk, img: null, name: "Buttermilk (Chaas)", price: "₹40 / litre", units: "500 ml, 1 L", desc: "Light, spiced traditional chaas. Perfect digestive aid for hot Bihar afternoons." },
  { Icon: Milk, img: null, name: "Khoya / Mawa", price: "₹520 / kg", units: "250 g, 500 g", desc: "Reduced milk solids made fresh on order. Ideal for traditional Indian sweets." },
  { Icon: Milk, img: null, name: "Flavoured Milk", price: "₹70 / 250 ml", units: "Kesar, chocolate, rose", desc: "Sterilised flavoured A2 milk in returnable glass bottles. School-tiffin favourite." },
];

const others = [
  { Icon: Egg, name: "Free-Range Country Eggs", price: "₹14 / egg", units: "Tray of 6, 12, 30", desc: "Brown-shelled eggs from foraging hens. Deep-orange yolks rich in Omega-3 and Vitamin D." },
  { Icon: Egg, name: "Kadaknath Eggs", price: "₹35 / egg", units: "Tray of 6, 12", desc: "Premium black-meat breed eggs known for their high protein, low fat and Ayurvedic properties." },
  { Icon: Fish, name: "Fresh Rohu / Katla", price: "₹260 / kg", units: "1 kg, 2 kg, Whole", desc: "Cleaned, gutted and packed in ice on order. Same-day pond-to-door delivery within 4 hours." },
  { Icon: Fish, name: "Tilapia & Pangasius", price: "₹220 / kg", units: "1 kg, 2 kg", desc: "Boneless fillets available. Ideal for grilling, fry and curry preparations." },
  { Icon: Beef, name: "Live Goat (Whole)", price: "₹450 / kg live weight", units: "10 kg to 35 kg sizes", desc: "Healthy live Barbari and Jamunapari goats sold whole only. Pre-orders required 48 hours in advance for ceremonies and customers." },
];

const plans = [
  { name: "Daily Essentials", price: "₹2,400 / month", items: ["1 L A2 milk daily", "1 dozen eggs / week", "Free home delivery"] },
  { name: "Family Plus", price: "₹4,800 / month", items: ["2 L A2 milk daily", "2 dozen eggs / week", "500 g paneer / week", "10% off ghee"] },
  { name: "Wellness Pro", price: "₹7,200 / month", items: ["2 L A2 milk daily", "1 kg fish / week", "1 dozen Kadaknath eggs / week", "250 g ghee / month", "Priority delivery slot"], highlight: true },
  { name: "Dairy Delight", price: "₹3,600 / month", items: ["1 L A2 milk daily", "500 g paneer / week", "500 g curd / week", "200 g butter / month"] },
  { name: "Restaurant / Bulk", price: "Custom quote", items: ["10 L+ daily milk", "Wholesale eggs & fish", "Dedicated account manager", "Invoice billing"] },
  { name: "Festival Pack", price: "₹1,990 (one-time)", items: ["500 g ghee", "1 kg paneer", "1 kg curd", "1 kg malai", "Gift packaging"] },
];

const trust = [
  { Icon: ShieldCheck, t: "FSSAI certified facility" },
  { Icon: Truck, t: "Same-day delivery" },
  { Icon: Star, t: "4.9/5 customer rating" },
  { Icon: Leaf, t: "100% organic feed" },
];

const faqs = [
  { q: "Are your prices final or do they change?", a: "Listed prices are indicative. Subscription customers receive a discounted locked rate, and bulk orders get a custom quote based on quantity and frequency." },
  { q: "How is milk packaged and delivered?", a: "All milk is delivered in returnable food-grade glass bottles inside an insulated chilled box. We collect empties on the next delivery." },
  { q: "Can I pause or cancel my subscription?", a: "Yes, anytime. Pause for vacations, swap items, or cancel with no questions asked. Just inform us at least 12 hours before the next delivery." },
  { q: "Do you accept online payments?", a: "Yes. We accept UPI, Paytm, Google Pay, PhonePe, bank transfer and cash on delivery for one-time orders." },
  { q: "What is your return / refund policy?", a: "If you receive a product that does not meet our quality standards, message us within 4 hours. We replace it free or refund instantly." },
];

function ProductsPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Catalogue & Pricing"
        title="Pure produce, transparent pricing"
        description="Indicative rates below. Final pricing depends on quantity and delivery zone. Subscriptions unlock additional savings."
      />

      <section className="bg-secondary py-6">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-4">
          {trust.map(({ Icon, t }) => (
            <div key={t} className="flex items-center gap-3 text-sm">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DAIRY */}
      <section className="container-x py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Dairy Range</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Our complete dairy collection</h2>
          <p className="mt-4 text-muted-foreground">From morning milk to evening lassi. Everything made fresh, traditional and pure.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dairy.map(({ Icon, img, name, price, units, desc }) => (
            <div key={name} className="card-elevated overflow-hidden flex flex-col">
              {img && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img} alt={name} className="h-full w-full object-cover" loading="lazy" width={1024} height={768} />
                </div>
              )}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">{price}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{units}</div>
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <Link to="/contact" className="mt-5 inline-flex w-fit text-sm font-semibold text-primary hover:underline">
                  Order this
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OTHERS */}
      <section className="section-pad bg-secondary">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Eggs, Fish & Goats</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Beyond dairy</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map(({ Icon, name, price, units, desc }) => (
              <div key={name} className="card-elevated p-7 flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">{price}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{units}</div>
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <Link to="/contact" className="mt-5 inline-flex w-fit text-sm font-semibold text-primary hover:underline">
                  Order this
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONTHLY PLANS */}
      <section className="section-pad relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-50" aria-hidden />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Monthly Plans</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Save more with a subscription</h2>
            <p className="mt-4 text-muted-foreground">Lock in your daily essentials and never run out. Pause, swap or cancel anytime.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl p-8 border ${p.highlight ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-glow)]" : "border-border bg-card"}`}>
                <h3 className={`text-xl font-semibold ${p.highlight ? "" : "text-foreground"}`}>{p.name}</h3>
                <div className={`mt-3 text-3xl font-bold ${p.highlight ? "" : "text-primary"}`}>{p.price}</div>
                <ul className={`mt-6 space-y-3 text-sm ${p.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                  {p.items.map((it) => <li key={it} className="flex gap-2"><Package className="h-4 w-4 mt-0.5 shrink-0" /> {it}</li>)}
                </ul>
                <Link to="/contact" className={`mt-7 block text-center rounded-full px-5 py-3 text-sm font-semibold transition ${p.highlight ? "bg-background text-primary hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"}`}>
                  Choose plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="section-pad bg-secondary">
        <div className="container-x grid md:grid-cols-3 gap-8">
          {[
            { Icon: Clock, title: "Order before 10 PM", desc: "For next-day morning delivery between 5 and 8 AM." },
            { Icon: Package, title: "Glass & food-grade packaging", desc: "Returnable bottles and recyclable containers." },
            { Icon: Leaf, title: "100% transparent sourcing", desc: "Every batch traceable to the animal and the date." },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
    </>
  );
}
