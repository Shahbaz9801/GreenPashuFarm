import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Stethoscope, Sprout, Droplets, Sun, Calendar } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import cowImg from "@/assets/animal-cow.jpg";
import goatImg from "@/assets/animal-goat.jpg";
import poultryImg from "@/assets/animal-poultry.jpg";
import fishImg from "@/assets/animal-fish.jpg";
import heroImg from "@/assets/page-hero-animals.jpg";
import vetImg from "@/assets/gallery-9.jpg";
import fodderImg from "@/assets/gallery-8.jpg";

export const Route = createFileRoute("/animals")({
  head: () => ({
    meta: [
      { title: "Our Animals: Cows, Goats, Poultry & Fish | GreenPashu Farm" },
      { name: "description", content: "Indigenous Gir cows, Jamunapari goats, free-range poultry and pond fisheries. Meet every species we raise at GreenPashu Farm." },
      { property: "og:title", content: "Our Animals | GreenPashu Farm" },
      { property: "og:description", content: "Discover the four livestock categories of GreenPashu Farm: cows, goats, poultry and fisheries." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AnimalsPage,
});

const sections = [
  {
    img: cowImg,
    title: "Indigenous Cows: Gir & Sahiwal",
    breeds: ["Gir", "Sahiwal", "Tharparkar"],
    desc: "Our heritage cattle are raised on a 4-acre rotational grazing pasture and fed a calibrated mix of green fodder, jowar, dry hay and mineral licks. Hand-milking is performed twice daily by trained dairy hands following FSSAI hygiene protocols.",
    points: [
      "A2 beta-casein milk verified by independent lab tests",
      "Average yield: 8 to 12 litres per cow per day",
      "Calves nursed naturally for the first 90 days",
      "Daily veterinary checks and quarterly vaccinations",
    ],
  },
  {
    img: goatImg,
    title: "Goat Husbandry: Barbari & Jamunapari",
    breeds: ["Barbari", "Jamunapari", "Beetal"],
    desc: "We breed indigenous goat varieties known for hardiness and lean meat quality. Our goats roam open paddocks with elevated shelters and feed primarily on neem, bajra and seasonal greens.",
    points: [
      "Free-range pasture covering 2 acres",
      "No growth hormones or steroids used",
      "Whole live goats sold for ceremonies and households",
      "Buck and doe records maintained for traceability",
    ],
  },
  {
    img: poultryImg,
    title: "Free-Range Poultry",
    breeds: ["Aseel", "Kadaknath", "Rhode Island Red", "Broiler"],
    desc: "Our hens live in spacious, ventilated coops with daytime access to grass runs. Eggs are collected three times a day, candled, weighed and refrigerated within an hour to preserve freshness.",
    points: [
      "Average flock size: 800 birds across 4 coops",
      "Deep-orange yolk sourced from foraging hens",
      "Country eggs, brown eggs and white eggs available",
      "Vaccinated against Newcastle and Marek's disease",
    ],
  },
  {
    img: fishImg,
    title: "Pond Fisheries",
    breeds: ["Rohu", "Katla", "Tilapia", "Pangasius", "Common Carp"],
    desc: "Two natural-bottom ponds totalling 1.6 hectares are stocked with composite fish polyculture. Water quality is monitored weekly for pH, dissolved oxygen and ammonia.",
    points: [
      "Zero antibiotic, zero pesticide aquaculture",
      "Aerated, filtered ponds with seasonal harvesting",
      "Fish cleaned, gutted and packed in ice on order",
      "Wholesale supply available for restaurants",
    ],
  },
];

const care = [
  { Icon: Stethoscope, title: "On-Site Veterinarian", desc: "Daily health rounds, vaccination tracking and emergency care." },
  { Icon: Sprout, title: "Organic Feed Only", desc: "Indigenous fodder, neem, mineral mix. No chemicals or hormones." },
  { Icon: Droplets, title: "Clean Water 24/7", desc: "Borewell water tested monthly and refilled in shaded troughs." },
  { Icon: Sun, title: "Open Pastures", desc: "Daily grazing with shaded shelters during peak summer." },
];

const schedule = [
  { time: "5:00 AM", label: "Morning milking & egg collection" },
  { time: "7:00 AM", label: "Veterinary rounds & feed dispatch" },
  { time: "10:00 AM", label: "Pasture rotation & pond aeration" },
  { time: "1:00 PM", label: "Shade rest & water refill" },
  { time: "4:00 PM", label: "Afternoon grazing" },
  { time: "6:30 PM", label: "Evening milking & shelter" },
];

const faqs = [
  { q: "What breeds of cow do you raise?", a: "We raise indigenous Indian breeds: Gir, Sahiwal and Tharparkar. They are chosen for their A2 protein milk, climate resilience and gentle temperament." },
  { q: "Do you use antibiotics or growth hormones?", a: "No. Our animals are raised on natural fodder, neem-based supplements and clean water. We use vaccinations only for disease prevention." },
  { q: "Can I adopt or sponsor an animal?", a: "Yes, we run a sponsorship programme. You can sponsor a cow, goat or laying hen and receive monthly updates with photos." },
  { q: "Are your fish ponds chemically treated?", a: "Never. We use natural water aeration, weekly quality testing and biological filtration. No antibiotics or pesticides are used." },
  { q: "Do you sell processed mutton?", a: "We only sell whole live goats. Customers can pick a goat at the farm or arrange live home delivery." },
];

function AnimalsPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Meet the Farm"
        title="Four species, one philosophy"
        description="Every animal at GreenPashu lives by the same principles: open space, indigenous breeds, organic feed and humane handling."
      />

      {/* CARE PILLARS */}
      <section className="section-pad relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-50" aria-hidden />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Animal Welfare</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">How we care for every animal</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {care.map(({ Icon, title, desc }) => (
              <div key={title} className="card-elevated p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SECTIONS */}
      <section className="container-x py-20 space-y-24">
        {sections.map((s, i) => (
          <article key={s.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div>
              <img src={s.img} alt={s.title} className="rounded-2xl shadow-[var(--shadow-elevated)] w-full aspect-[4/3] object-cover" loading="lazy" width={1024} height={768} />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {s.breeds.map((b) => (
                  <span key={b} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">{b}</span>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* DAILY SCHEDULE */}
      <section className="section-pad bg-secondary">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">A Day on the Farm</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Our daily care schedule</h2>
            <p className="mt-4 text-muted-foreground">Predictable, repeatable routines reduce stress and keep our animals calm, healthy and productive.</p>
            <ol className="mt-8 space-y-4">
              {schedule.map((s) => (
                <li key={s.time} className="flex gap-5 items-start">
                  <div className="w-24 shrink-0 font-bold text-primary">{s.time}</div>
                  <div className="flex-1 text-foreground">{s.label}</div>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid gap-4">
            <img src={vetImg} alt="Veterinarian checking calf" className="rounded-2xl shadow-[var(--shadow-elevated)] w-full aspect-video object-cover" loading="lazy" />
            <img src={fodderImg} alt="Green fodder field" className="rounded-2xl shadow-[var(--shadow-elevated)] w-full aspect-video object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="section-pad">
        <div className="container-x">
          <div className="rounded-3xl p-10 md:p-14 text-center text-primary-foreground relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
            <div className="absolute inset-0 bg-pattern-dots opacity-20" aria-hidden />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold">Visit our farm and meet the animals</h2>
              <p className="mt-3 text-primary-foreground/85">Guided weekend tours every Saturday and Sunday, 9 AM to 12 PM.</p>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-background text-primary px-7 py-3.5 text-sm font-semibold">
                <Calendar className="h-4 w-4" /> Book a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
