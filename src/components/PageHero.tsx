type Props = {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
};

export function PageHero({ image, eyebrow, title, description }: Props) {
  return (
    <section className="page-hero">
      <img src={image} alt="" className="page-hero-img" width={1920} height={800} />
      <div className="page-hero-overlay" />
      <div className="absolute inset-0 bg-pattern-lines opacity-40" aria-hidden />
      <div className="container-x relative py-20 md:py-28">
        <span className="eyebrow !text-background bg-background/15 backdrop-blur">{eyebrow}</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl leading-[1.1]">{title}</h1>
        <p className="mt-5 max-w-2xl text-background/85 text-lg leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
