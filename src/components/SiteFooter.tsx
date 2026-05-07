import { Link } from "@tanstack/react-router";
import { Leaf, Facebook, Instagram, Youtube, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--surface-darker)] text-background mt-20">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            GreenPashu Farm
          </div>
          <p className="mt-4 text-sm text-background/60 leading-relaxed">
            Bihar's trusted multi-livestock farm. We deliver pure A2 milk, free-range eggs,
            fresh fish, and organic dairy direct from farm to your home.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" aria-label="social"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/animals" className="hover:text-primary">Our Animals</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>A2 Cow Milk</li>
            <li>Bilona Desi Ghee</li>
            <li>Free-range Eggs</li>
            <li>Fresh Pond Fish</li>
            <li>Live Goat (Whole)</li>
            <li>Organic Curd & Paneer</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Village Road, Danapur, Patna 801503, Bihar</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> info@greenpashufarm.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-background/40">
          <p>© {new Date().getFullYear()} GreenPashu Farm. All rights reserved.</p>
          <p>FSSAI Certified | Licensed by Animal Husbandry Dept., Bihar</p>
        </div>
      </div>
    </footer>
  );
}
