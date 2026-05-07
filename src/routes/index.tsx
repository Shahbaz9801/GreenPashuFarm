import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Award, Truck, Leaf, ShieldCheck, Users, Star, Phone, Milk, Egg, Fish, Beef, Droplet, Calendar, MessageCircle, MapPin, ChevronLeft, ChevronRight, Quote, ChefHat, Building2, Home as HomeIcon } from "lucide-react";
import { FAQ } from "@/components/FAQ";

import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import cowImg from "@/assets/animal-cow.jpg";
import goatImg from "@/assets/animal-goat.jpg";
import poultryImg from "@/assets/animal-poultry.jpg";
import fishImg from "@/assets/animal-fish.jpg";
import aboutImg from "@/assets/about-farm.jpg";

const slides = [
  { img: slide1, alt: "Indigenous Gir cows grazing in green pasture" },
  { img: slide2, alt: "Fresh A2 milk in glass bottles" },
  { img: slide3, alt: "Indian farmer with healthy goats" },
];

function CountUp({ value, duration = 2000 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / duration, 1);
          setN(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GreenPashu Farm: Pure A2 Milk, Eggs & Fish from Bihar" },
      { name: "description", content: "Family-owned multi-livestock farm in Danapur, Patna. Pure A2 milk, free-range eggs, fresh pond fish and goat delivered same day." },
      { property: "og:image", content: slide1 },
    ],
  }),
  component: HomePage,
});

const stats = [
  { num: "500+", label: "Happy Households" },
  { num: "10+", label: "Years of Farming" },
  { num: "4", label: "Livestock Categories" },
  { num: "100%", label: "Chemical Free" },
];

const animals = [
  { img: cowImg, title: "Indigenous Cows", desc: "Gir & Sahiwal breeds producing pure A2 protein milk.", to: "/animals" },
  { img: goatImg, title: "Goat Husbandry", desc: "Barbari & Jamunapari breeds raised on green fodder.", to: "/animals" },
  { img: poultryImg, title: "Free-Range Poultry", desc: "Desi & broiler hens roaming open pastures daily.", to: "/animals" },
  { img: fishImg, title: "Pond Fisheries", desc: "Rohu, Katla, Tilapia and Pangasius in clean ponds.", to: "/animals" },
];

const products = [
  { Icon: Milk, name: "A2 Cow Milk", desc: "Single-source, hand-milked daily at sunrise." },
  { Icon: Droplet, name: "Bilona Desi Ghee", desc: "Slow-churned from cultured A2 curd." },
  { Icon: Egg, name: "Free-Range Eggs", desc: "Deep orange yolks, packed with protein." },
  { Icon: Fish, name: "Fresh Pond Fish", desc: "Pesticide-free aquaculture, cleaned on order." },
  { Icon: Beef, name: "Live Goat", desc: "Healthy live goats sold whole for ceremonies and customers." },
  { Icon: Leaf, name: "Organic Curd", desc: "Probiotic-rich, set in clay pots." },
];

const why = [
  { Icon: Leaf, title: "100% Organic Feed", desc: "Only natural fodder, neem-based supplements and clean water. No antibiotics or growth hormones." },
  { Icon: ShieldCheck, title: "Government Certified", desc: "Licensed by the Bihar Animal Husbandry Department and FSSAI compliant cold-chain handling." },
  { Icon: Truck, title: "Same-Day Home Delivery", desc: "Insulated packaging covering Patna, Danapur, Phulwari, Maner, Bihta and Khagaul within 30 km." },
  { Icon: Users, title: "Trained Farm Team", desc: "On-site veterinarian, certified handlers and dairy technicians ensure welfare and hygiene." },
  { Icon: Award, title: "Decade of Trust", desc: "Over 10 years serving Bihar's homes, hotels and wellness institutes with consistent quality." },
];

const testimonials = [
  { name: "Sunita Devi", loc: "Patna", text: "Since switching to GreenPashu A2 milk, my children refuse store-bought packets. The taste, thickness and aroma are unmatched." },
  { name: "Rajesh Kumar", loc: "Muzaffarpur", text: "I order fresh fish three times a week. Always cleaned, never any odour, and delivery is always on time. Truly the best fish in the region." },
  { name: "Priya Sharma", loc: "Gaya", text: "The eggs have a deep-orange yolk and you can feel the difference in baking. Our family's go-to source for everything dairy." },
];

const process = [
  { step: "01", title: "Sunrise Harvest", desc: "Milking, egg collection and fish netting begin at 5 AM under hygienic supervision." },
  { step: "02", title: "Lab Quality Check", desc: "Every batch is tested for fat, SNF, microbial load and freshness before packing." },
  { step: "03", title: "Insulated Packaging", desc: "Glass bottles, food-grade containers and ice packs preserve freshness in transit." },
  { step: "04", title: "Same-Day Delivery", desc: "Reach your doorstep within hours of harvest, across Patna and surrounding areas." },
];

const serves = [
  { Icon: HomeIcon, title: "Households", desc: "Daily and weekly subscriptions for families across 30+ Patna localities." },
  { Icon: ChefHat, title: "Restaurants & Cafés", desc: "Bulk supply of milk, paneer, eggs and fish with priority delivery slots." },
  { Icon: Building2, title: "Hotels & Resorts", desc: "Custom contracts with traceable batch reporting and on-time fulfilment." },
  { Icon: Users, title: "Wellness Centres", desc: "Specialised A2 dairy, Kadaknath eggs and lean meat for nutrition programmes." },
];

const faqs = [
  { q: "Is GreenPashu milk really 100% A2 protein?", a: "Yes. We only milk indigenous Gir, Sahiwal and Tharparkar cows, and every batch is verified through independent A2/A1 protein testing." },
  { q: "How quickly will my order be delivered?", a: "Orders placed before 10 PM are delivered the next morning between 5 and 8 AM. Same-day slots are available for orders placed before 10 AM." },
  { q: "Which areas do you currently serve?", a: "We deliver across Patna, Danapur, Phulwari, Maner, Bihta and Khagaul (within a 30 km radius). Bulk delivery beyond this zone is available on request." },
  { q: "Can I visit the farm before subscribing?", a: "Absolutely. We host guided farm visits every Saturday and Sunday between 9 AM and 12 PM. Schedule via the contact page." },
  { q: "Do you sell goat meat or live goats?", a: "We sell whole live goats only. Customers can pick the goat at the farm or have it delivered live; we do not sell processed mutton cuts." },
];

function HomePage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO SLIDER */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((s, i) => (
            <img
              key={i}
              src={s.img}
              alt={s.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
              width={1920}
              height={1080}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-pattern-lines opacity-30" aria-hidden />

        <div className="container-x relative py-24 md:py-32 text-background min-h-[72vh] flex flex-col justify-center text-left">
          <span className="eyebrow !text-background bg-background/15 backdrop-blur w-fit">Bihar's Trusted Multi-Livestock Farm</span>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-[1.05]">
            Farm-Fresh Nutrition,<br />
            <span className="text-[oklch(0.85_0.15_95)]">Straight to Your Table</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-background/90 leading-relaxed drop-shadow">
            Indigenous cows, free-range poultry, pond fisheries and ethically reared goats. One trusted farm in Danapur, delivering pure A2 milk, eggs, fish and dairy across Patna.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-background/60 bg-background/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-background hover:bg-background/20 transition">
              Schedule a Farm Visit
            </Link>
          </div>

          {/* slider controls */}
          <div className="mt-10 flex items-center gap-4">
            <button onClick={() => setActive((a) => (a - 1 + slides.length) % slides.length)} className="flex h-10 w-10 items-center justify-center rounded-full bg-background/15 hover:bg-background/30 backdrop-blur" aria-label="Previous slide">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === active ? "w-10 bg-background" : "w-2 bg-background/50"}`} />
              ))}
            </div>
            <button onClick={() => setActive((a) => (a + 1) % slides.length)} className="flex h-10 w-10 items-center justify-center rounded-full bg-background/15 hover:bg-background/30 backdrop-blur" aria-label="Next slide">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[var(--surface-dark)] text-background">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-background/10">
          {stats.map((s) => (
            <div key={s.label} className="py-8 text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <CountUp value={s.num} />
              </div>
              <div className="mt-1 text-xs md:text-sm text-background/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ANIMALS */}
      <section className="section-pad relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-50" aria-hidden />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Our Livestock</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Four ecosystems, one farm</h2>
            <p className="mt-4 text-muted-foreground">Each species lives in dedicated, climate-appropriate enclosures with daily veterinary checks and species-specific organic diets.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {animals.map((a) => (
              <Link key={a.title} to={a.to} className="card-elevated overflow-hidden group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.img} alt={a.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" width={1024} height={768} />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Learn more <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section-pad bg-secondary">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Farm Catalogue</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Pure produce, no middlemen</h2>
            <p className="mt-4 text-muted-foreground">Every item is harvested, packed and dispatched within hours. Subscriptions and bulk orders available for cafés, hotels and gyms.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(({ Icon, name, desc }) => (
              <div key={name} className="card-elevated p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
              View Full Catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-60" aria-hidden />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">From Farm to Table</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Our 4-step daily workflow</h2>
            <p className="mt-4 text-muted-foreground">A transparent journey, repeated 365 days a year.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="card-elevated p-7 relative">
                <div className="text-5xl font-bold text-primary/20 font-[var(--font-display)]">{p.step}</div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad bg-secondary">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={aboutImg} alt="Pure milk being poured" className="rounded-2xl shadow-[var(--shadow-elevated)] w-full" loading="lazy" width={1280} height={960} />
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-5 shadow-[var(--shadow-elevated)] w-44">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-xs text-muted-foreground mt-1">Years of trusted, transparent farming</div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Why GreenPashu</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">A standard the city can taste</h2>
            <p className="mt-4 text-muted-foreground">From the soil our cattle graze on to the cold-chain that brings milk to your door. Every step is documented, audited and certified.</p>
            <div className="mt-8 space-y-5">
              {why.map(({ Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section-pad">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Who We Serve</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Trusted by homes and businesses</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serves.map(({ Icon, title, desc }) => (
              <div key={title} className="card-elevated p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-[var(--surface-darker)] text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-lines opacity-20" aria-hidden />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow !text-[oklch(0.78_0.14_95)] bg-[oklch(0.78_0.14_95)]/15">Customer Stories</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">Trusted by 500+ families across Bihar</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-background/10 bg-background/5 p-7 backdrop-blur">
                <Quote className="h-7 w-7 text-[oklch(0.85_0.15_95)]" />
                <div className="mt-3 flex gap-1 text-[oklch(0.85_0.15_95)]">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-background/80 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-background/10">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-background/50">{t.loc}, Bihar</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section-pad">
        <div className="container-x">
          <div className="card-elevated p-8 md:p-12 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="eyebrow">Stay Connected</span>
              <h2 className="mt-4 text-2xl md:text-4xl font-bold text-foreground">Seasonal recipes, farm news & exclusive offers</h2>
              <p className="mt-3 text-muted-foreground">Join 2,000+ readers receiving our monthly farm letter. No spam, ever.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Enter your email" className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <button className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} />

      {/* CTA */}
      <section className="section-pad">
        <div className="container-x">
          <div className="rounded-3xl p-10 md:p-16 text-center text-primary-foreground relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
            <div className="absolute inset-0 bg-pattern-dots opacity-20" aria-hidden />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
                First delivery on us. Place your order today.
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
                New customers receive complimentary first-day delivery and 10% off your first month's subscription.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="tel:+919876543210" className="inline-flex items-center gap-2 rounded-full bg-background text-primary px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition">
                  <Phone className="h-4 w-4" /> Call +91 98765 43210
                </a>
                <a href="https://wa.me/919876543210" className="inline-flex items-center gap-2 rounded-full border border-background/40 px-7 py-3.5 text-sm font-semibold hover:bg-background/10 transition">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-background/40 px-7 py-3.5 text-sm font-semibold hover:bg-background/10 transition">
                  <Calendar className="h-4 w-4" /> Send Enquiry
                </Link>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4" /> Danapur, Patna 801503, Bihar
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
