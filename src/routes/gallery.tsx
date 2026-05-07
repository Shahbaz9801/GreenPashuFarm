import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/page-hero-gallery.jpg";
import farmImg from "@/assets/hero-farm.jpg";
import s1 from "@/assets/hero-slide-1.jpg";
import s2 from "@/assets/hero-slide-2.jpg";
import s3 from "@/assets/hero-slide-3.jpg";
import cowImg from "@/assets/animal-cow.jpg";
import goatImg from "@/assets/animal-goat.jpg";
import poultryImg from "@/assets/animal-poultry.jpg";
import fishImg from "@/assets/animal-fish.jpg";
import aboutImg from "@/assets/about-farm.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";
import g10 from "@/assets/gallery-10.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | GreenPashu Farm" },
      { name: "description", content: "A visual tour of GreenPashu Farm. Pastures, livestock, dairy operations and farm life in Danapur, Bihar." },
      { property: "og:title", content: "Gallery | GreenPashu Farm" },
      { property: "og:description", content: "See our pastures, animals and produce." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: farmImg, label: "Open pastures at sunrise", cat: "Landscape" },
  { src: s1, label: "Gir cows in golden hour", cat: "Cows" },
  { src: g1, label: "Hand-milking at dawn", cat: "Dairy" },
  { src: g2, label: "Mother and calf bond", cat: "Cows" },
  { src: cowImg, label: "Sahiwal in the meadow", cat: "Cows" },
  { src: goatImg, label: "Jamunapari herd", cat: "Goats" },
  { src: g6, label: "Goats feeding on neem leaves", cat: "Goats" },
  { src: poultryImg, label: "Free-range coop interior", cat: "Poultry" },
  { src: g3, label: "Brown laying hens", cat: "Poultry" },
  { src: g5, label: "Tray of country eggs", cat: "Poultry" },
  { src: fishImg, label: "Pond fishery overview", cat: "Fisheries" },
  { src: g4, label: "Net harvest in the pond", cat: "Fisheries" },
  { src: aboutImg, label: "Daily fresh A2 milk", cat: "Dairy" },
  { src: g7, label: "Straining and storing milk", cat: "Dairy" },
  { src: s2, label: "Glass bottles ready to ship", cat: "Dairy" },
  { src: g8, label: "Green fodder fields", cat: "Landscape" },
  { src: g9, label: "Veterinary care in action", cat: "Welfare" },
  { src: s3, label: "Farmer with healthy goats", cat: "Goats" },
  { src: g10, label: "Pre-dawn delivery dispatch", cat: "Logistics" },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Inside the Farm"
        title="A walk through GreenPashu"
        description="Honest snapshots from our 7-acre farm in Danapur. No stock photos, no filters."
      />

      {/* MASONRY */}
      <section className="container-x py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {items.map((it, i) => (
            <figure key={i} className="relative overflow-hidden rounded-2xl group mb-4 break-inside-avoid">
              <img src={it.src} alt={it.label} className="w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-background bg-gradient-to-t from-black/75 via-black/30 to-transparent">
                <div className="text-xs uppercase tracking-wider text-background/70">{it.cat}</div>
                <div className="text-sm font-semibold mt-0.5">{it.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* VIDEO PROMO */}
      <section className="section-pad bg-secondary">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Behind the Scenes</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">A morning at GreenPashu</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">From the first lantern at 4:30 AM to the last delivery van leaving at 9 AM. Watch how we begin every day at the farm.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground">Book a Live Tour</Link>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
            <img src={farmImg} alt="Farm tour preview" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-background/90 flex items-center justify-center">
                <div className="ml-1 w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISITS */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-lines opacity-50" aria-hidden />
        <div className="container-x relative text-center max-w-2xl mx-auto">
          <span className="eyebrow">Farm Visits</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Come see for yourself</h2>
          <p className="mt-4 text-muted-foreground">Guided tours run every Saturday and Sunday between 9 AM and 12 PM. School groups, families and corporate teams welcome.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground">Schedule a Visit</Link>
        </div>
      </section>
    </>
  );
}
