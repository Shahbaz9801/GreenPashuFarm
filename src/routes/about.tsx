import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Leaf, Heart, Target, Sprout, ShieldCheck, Users, Tractor, Calendar } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import aboutImg from "@/assets/about-farm.jpg";
import heroImg from "@/assets/page-hero-about.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | GreenPashu Farm" },
      { name: "description", content: "GreenPashu Farm is a family-run, multi-livestock farm in Danapur, Bihar, committed to ethical husbandry and pure, traceable produce since 2014." },
      { property: "og:title", content: "About | GreenPashu Farm" },
      { property: "og:description", content: "Our story, mission, certifications and the people behind Bihar's trusted farm." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

const values = [
  { Icon: Leaf, title: "Sustainability", desc: "Closed-loop nutrient cycle: animal manure fertilises our fodder fields, fish ponds enrich orchard soil." },
  { Icon: Heart, title: "Animal Welfare", desc: "Open pastures, climate-appropriate shelters, and a strict no-tether, no-cage commitment." },
  { Icon: ShieldCheck, title: "Transparency", desc: "Customers are welcome to visit, audit and verify every claim we make about our practices." },
  { Icon: Target, title: "Quality First", desc: "Independent lab testing for milk composition, microbial load and adulteration every quarter." },
];

const milestones = [
  { year: "2014", text: "Farm founded with 6 Gir cows on 2 acres of family land in Danapur." },
  { year: "2016", text: "Expanded into goat husbandry and added the first poultry coop." },
  { year: "2018", text: "First fish pond stocked. Reached 100 regular dairy customers." },
  { year: "2020", text: "FSSAI certification and launch of insulated home-delivery network." },
  { year: "2022", text: "Cold-chain depot opened in Patna. Bilona ghee production line installed." },
  { year: "2024", text: "Crossed 500 active households, 4 hotels and 12 wellness centres served." },
  { year: "2026", text: "Expanded fodder cultivation to 10 acres. Solar-powered cold storage installed." },
];

const team = [
  { name: "Ramesh Singh", role: "Founder & Head Farmer", desc: "Third-generation dairy farmer with 25 years of indigenous cattle expertise." },
  { name: "Dr. Anjali Verma", role: "Resident Veterinarian", desc: "BVSc from BAU Sabour, leads animal health and vaccination programmes." },
  { name: "Sunil Yadav", role: "Operations Manager", desc: "Oversees daily harvesting, packaging and the cold-chain delivery network." },
  { name: "Meera Kumari", role: "Quality & Lab Lead", desc: "Manages microbial testing, batch traceability and FSSAI compliance." },
];

const stats = [
  { n: "10+", l: "Years operating" },
  { n: "7", l: "Acres of land" },
  { n: "120+", l: "Animals on farm" },
  { n: "500+", l: "Active customers" },
];

const faqs = [
  { q: "Where is GreenPashu Farm located?", a: "We are in Danapur, Patna, Bihar, about 12 km from the city centre. The farm spans 7 acres of organically managed land." },
  { q: "Are visitors welcome?", a: "Yes. We welcome visitors every Saturday and Sunday between 9 AM and 12 PM. Schools, families and corporate groups can book guided tours." },
  { q: "What certifications do you hold?", a: "We are FSSAI licensed, registered with the Bihar Animal Husbandry Department, and our feed and milk are independently lab tested every quarter." },
  { q: "How can I support or partner with the farm?", a: "We welcome partnerships with restaurants, hotels, wellness centres and bulk buyers. You can also sponsor an animal or buy a corporate gift hamper." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Our Story"
        title="A decade of farming with conscience"
        description="From a single dairy shed in 2014 to one of Bihar's most trusted multi-livestock farms, built on the simple belief that ethics and excellence are inseparable."
      />

      {/* MISSION */}
      <section className="section-pad container-x grid lg:grid-cols-2 gap-12 items-center">
        <img src={aboutImg} alt="Pure milk from GreenPashu Farm" className="rounded-2xl shadow-[var(--shadow-elevated)] w-full" loading="lazy" width={1280} height={960} />
        <div>
          <span className="eyebrow">Our Mission</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Bringing pure food back to the city</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We believe that what reaches your kitchen should be exactly what nature intended. Nothing diluted, nothing adulterated, nothing hidden. GreenPashu Farm exists to bridge the gap between the rural producer and the urban consumer through complete transparency, ethical husbandry and uncompromising freshness.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our farm spans 7 acres of organically managed land in Danapur, Patna. Every animal is raised on indigenous principles, every drop of milk is hand-collected, and every order is dispatched within hours of harvest.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[var(--surface-dark)] text-background">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-background/10">
          {stats.map((s) => (
            <div key={s.l} className="py-10 text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{s.n}</div>
              <div className="mt-1 text-xs md:text-sm text-background/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="section-pad bg-secondary">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Four guiding principles</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="card-elevated p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section-pad container-x relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-40" aria-hidden />
        <div className="relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Journey</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">A decade of growth</h2>
          </div>
          <div className="mt-14 max-w-3xl mx-auto">
            <ol className="relative border-l-2 border-primary/20 ml-3 space-y-8">
              {milestones.map((m) => (
                <li key={m.year} className="pl-8 relative">
                  <span className="absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                    <Sprout className="h-3 w-3 text-primary-foreground" />
                  </span>
                  <div className="text-lg font-bold text-primary">{m.year}</div>
                  <p className="mt-1 text-muted-foreground">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad bg-secondary">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Our People</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">The team behind every bottle</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.name} className="card-elevated p-7 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{t.name}</h3>
                <div className="text-xs uppercase tracking-wider text-primary mt-1">{t.role}</div>
                <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY GALLERY */}
      <section className="section-pad container-x">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={g1} alt="Hand milking" className="rounded-2xl aspect-square object-cover" loading="lazy" />
            <img src={g7} alt="Milk straining" className="rounded-2xl aspect-square object-cover" loading="lazy" />
            <img src={g8} alt="Fodder field" className="rounded-2xl aspect-square object-cover col-span-2" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">Sustainability</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Farming with the planet in mind</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Solar-powered cold storage, rainwater harvesting tanks, biogas from cattle waste and on-farm fodder cultivation. We aim to be carbon-positive by 2028.</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              <li className="flex gap-3"><Tractor className="h-5 w-5 text-primary mt-0.5" /> 100% on-farm green fodder cultivation</li>
              <li className="flex gap-3"><Leaf className="h-5 w-5 text-primary mt-0.5" /> Biogas plant powering kitchen and lights</li>
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 text-primary mt-0.5" /> Rainwater harvesting across all sheds</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CERTS */}
      <section className="section-pad bg-secondary">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Recognition</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Certifications & trust</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {["FSSAI Licensed", "Bihar Animal Husbandry Cert.", "Organic Feed Verified", "Quarterly Lab Tested"].map((t) => (
              <div key={t} className="card-elevated p-6 flex flex-col items-center">
                <Award className="h-10 w-10 text-primary" />
                <div className="mt-3 font-semibold text-foreground text-sm">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="section-pad">
        <div className="container-x">
          <div className="rounded-3xl p-10 md:p-14 text-center text-primary-foreground relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
            <div className="absolute inset-0 bg-pattern-dots opacity-20" aria-hidden />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold">Come visit and see for yourself</h2>
              <p className="mt-3 text-primary-foreground/85">A quiet morning at the farm is the best advertisement we can offer.</p>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-background text-primary px-7 py-3.5 text-sm font-semibold">
                <Calendar className="h-4 w-4" /> Plan a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
