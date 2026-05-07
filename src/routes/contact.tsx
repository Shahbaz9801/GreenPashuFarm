import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Truck, Send, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import heroImg from "@/assets/page-hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | GreenPashu Farm" },
      { name: "description", content: "Reach GreenPashu Farm in Danapur, Patna. Call, WhatsApp or email us to place an order or schedule a farm visit." },
      { property: "og:title", content: "Contact | GreenPashu Farm" },
      { property: "og:description", content: "Get in touch for orders, subscriptions or farm visits." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ContactPage,
});

const info = [
  { Icon: MapPin, title: "Farm Address", lines: ["GreenPashu Farm, Village Road,", "Danapur, Patna 801503, Bihar"] },
  { Icon: Phone, title: "Phone & WhatsApp", lines: ["+91 98765 43210", "+91 91234 56789"] },
  { Icon: Mail, title: "Email", lines: ["info@greenpashufarm.com", "orders@greenpashufarm.com"] },
  { Icon: Clock, title: "Working Hours", lines: ["Mon to Sun, 5:00 AM to 7:00 PM", "Open all 365 days"] },
  { Icon: Truck, title: "Delivery Coverage", lines: ["Patna, Danapur, Phulwari, Maner,", "Bihta, Khagaul (within 30 km)"] },
];

const zones = [
  { area: "Danapur", time: "5:00 to 6:00 AM", fee: "Free above ₹200" },
  { area: "Khagaul & Phulwari", time: "5:30 to 6:30 AM", fee: "Free above ₹300" },
  { area: "Patna City & Kankarbagh", time: "6:00 to 7:30 AM", fee: "Free above ₹400" },
  { area: "Boring Road & Patliputra", time: "6:30 to 8:00 AM", fee: "Free above ₹400" },
  { area: "Bihta & Maner", time: "6:30 to 8:30 AM", fee: "Flat ₹40" },
  { area: "Outside 30 km", time: "Bulk only", fee: "Custom quote" },
];

const channels = [
  { Icon: Phone, title: "Call us", desc: "Fastest response, 5 AM to 7 PM", value: "+91 98765 43210", href: "tel:+919876543210" },
  { Icon: MessageCircle, title: "WhatsApp", desc: "Send a message anytime", value: "Chat with us", href: "https://wa.me/919876543210" },
  { Icon: Mail, title: "Email", desc: "For bulk orders & partnerships", value: "info@greenpashufarm.com", href: "mailto:info@greenpashufarm.com" },
];

const faqs = [
  { q: "How do I place my first order?", a: "Use the form on this page, call us, or send a WhatsApp message. We will confirm and start delivery the next morning." },
  { q: "Do you charge for delivery?", a: "Delivery is free across most Patna zones above the minimum order value listed above. Outside our zones, a custom flat fee applies." },
  { q: "Can I schedule a farm visit?", a: "Yes. We host guided tours every Saturday and Sunday from 9 AM to 12 PM. Mention 'Farm Visit' in the message and we will confirm the slot." },
  { q: "Do you cater for events or weddings?", a: "Yes. We supply bulk milk, paneer, curd, ghee, eggs, fish and live goats for weddings, functions and ceremonies. Please book at least 7 days in advance." },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Get in Touch"
        title="We're here to help"
        description="Place an order, set up a subscription, or schedule a farm visit. Our team typically responds within 30 minutes."
      />

      {/* QUICK CHANNELS */}
      <section className="container-x py-12 grid gap-6 md:grid-cols-3">
        {channels.map(({ Icon, title, desc, value, href }) => (
          <a key={title} href={href} className="card-elevated p-7 flex gap-4 items-start group">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>
              <div className="mt-2 text-sm font-semibold text-primary group-hover:underline">{value}</div>
            </div>
          </a>
        ))}
      </section>

      {/* FORM + INFO */}
      <section className="container-x pb-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {info.map(({ Icon, title, lines }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                {lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
              </div>
            </div>
          ))}
          <div className="flex gap-3 pt-2">
            {[Facebook, Instagram, Youtube, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <form
          className="lg:col-span-3 card-elevated p-8"
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        >
          <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">Fill in your details and we'll get back to you shortly.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" type="text" placeholder="Your name" required />
            <Field label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" required />
          </div>
          <div className="mt-4">
            <Field label="Email Address" type="email" placeholder="you@email.com" />
          </div>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">I'm interested in</label>
              <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option>A2 Cow Milk</option>
                <option>Bilona Desi Ghee</option>
                <option>Curd / Paneer / Butter</option>
                <option>Free-Range Eggs</option>
                <option>Fresh Fish</option>
                <option>Live Goat</option>
                <option>Subscription Plan</option>
                <option>Farm Visit</option>
                <option>Bulk / Wholesale Enquiry</option>
              </select>
            </div>
            <Field label="Delivery Pincode" type="text" placeholder="801503" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-foreground mb-1.5">Your Message</label>
            <textarea rows={4} placeholder="Tell us about your requirement..." className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>

          <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
            <Send className="h-4 w-4" /> Send Message
          </button>
          {submitted && (
            <p className="mt-4 text-sm text-primary text-center">Thank you! We will contact you shortly.</p>
          )}
        </form>
      </section>

      {/* DELIVERY ZONES */}
      <section className="section-pad bg-secondary">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Delivery Zones</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">When and where we deliver</h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary text-foreground">
                <tr>
                  <th className="p-4 font-semibold">Area</th>
                  <th className="p-4 font-semibold">Delivery Window</th>
                  <th className="p-4 font-semibold">Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {zones.map((z) => (
                  <tr key={z.area} className="text-muted-foreground">
                    <td className="p-4 font-medium text-foreground">{z.area}</td>
                    <td className="p-4">{z.time}</td>
                    <td className="p-4">{z.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="container-x py-20">
        <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)] h-[400px]">
          <iframe
            title="GreenPashu Farm location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6048745693285!2d85.0509!3d25.6105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844857df583%3A0x1f9ee85b54c01bd4!2sDanapur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1699000000000"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <FAQ items={faqs} />
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
