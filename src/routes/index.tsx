import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import {
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  ArrowUpRight,
  ArrowUp,
  X,
  ChevronDown,
} from "lucide-react";

import heroAsset from "@/assets/hero.jpg.asset.json";
import p1Asset from "@/assets/p1.jpg.asset.json";
import p2Asset from "@/assets/p2.jpg.asset.json";
import p3Asset from "@/assets/p3.jpg.asset.json";
import p4Asset from "@/assets/p4.jpg.asset.json";
import p5Asset from "@/assets/p5.jpg.asset.json";
import p6Asset from "@/assets/p6.jpg.asset.json";

const hero = heroAsset.url;

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const EMAIL = "saumya@shekhar.model";
const INSTA = "https://www.instagram.com/_saumyashekhar__?igsh=ODUwYXZkMzF6bDgx";

const galleryItems = [
  { src: p3Asset.url, category: "Editorial", tall: true },
  { src: p2Asset.url, category: "Commercial", tall: false },
  { src: p1Asset.url, category: "Runway", tall: true },
  { src: p4Asset.url, category: "Print", tall: false },
  { src: p6Asset.url, category: "Fashion", tall: true },
  { src: p5Asset.url, category: "Lookbook", tall: false },
];

const measurements = [
  { label: "Height", value: "5'11\"" },
  { label: "Hair", value: "Black" },
  { label: "Eyes", value: "Brown" },
  { label: "Nationality", value: "Indian" },
  { label: "Languages", value: "English / Hindi" },
  { label: "Age", value: "18" },
];

const aboutCards = [
  { label: "Nationality", value: "Indian" },
  { label: "Gender", value: "Male" },
  { label: "Height", value: "5'11\"" },
  { label: "Languages", value: "English · Hindi" },
  { label: "Age", value: "18" },
];

const services = [
  { title: "Commercial Shoots", desc: "Brand photography with commercial polish." },
  { title: "Fashion Campaigns", desc: "Seasonal and evergreen campaign imagery." },
  { title: "Editorial Shoots", desc: "Story-driven editorial narratives." },
  { title: "Print Shoots", desc: "Catalogue, magazine and lookbook print work." },
  { title: "Brand Promotions", desc: "Ambassadorship and digital brand content." },
];

const brands = ["ATELIER", "MAISON NORD", "VESTIRE", "NOIR & CO", "ARÔME", "CANVAS", "ORFÈVRE", "SOLENNE"];

const testimonials = [
  {
    quote: "A rare presence in front of the lens — quietly commanding, effortlessly editorial.",
    author: "Creative Director, Maison Nord",
  },
  {
    quote: "Saumya delivers with the discipline of someone twice his experience. A dream to shoot.",
    author: "Fashion Photographer, Mumbai",
  },
  {
    quote: "The kind of face campaigns are built around. Refined, distinctive, memorable.",
    author: "Casting Lead, Atelier",
  },
];

// Section fade-up wrapper
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[10px] tracking-luxury text-gold">
      <span className="h-px w-8 bg-gold/50" />
      {children}
    </div>
  );
}

function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showTop, setShowTop] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Mouse parallax for hero
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  // Cursor follower
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const scx = useSpring(cx, { stiffness: 300, damping: 30 });
  const scy = useSpring(cy, { stiffness: 300, damping: 30 });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    const onMove = (e: MouseEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
      const nx = (e.clientX / window.innerWidth - 0.5) * 30;
      const ny = (e.clientY / window.innerHeight - 0.5) * 30;
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, [cx, cy, mx, my]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            <div className="text-center">
              <motion.div
                initial={{ letterSpacing: "0.05em", opacity: 0 }}
                animate={{ letterSpacing: "0.4em", opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-2xl md:text-3xl uppercase text-white"
              >
                Saumya <span className="text-gold">·</span> Shekhar
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
                className="mt-6 h-px bg-gold/60 mx-auto"
                style={{ maxWidth: 220 }}
              />
              <div className="mt-4 text-[10px] tracking-luxury text-muted-foreground">Portfolio</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursor follower (desktop only) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[90] hidden md:block h-8 w-8 rounded-full border border-gold/60 mix-blend-difference"
        style={{ x: scx, y: scy, translateX: "-50%", translateY: "-50%" }}
      />

      {/* Nav */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.4 }}
        className="fixed top-0 inset-x-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-display text-lg md:text-xl uppercase tracking-[0.3em]">
            S<span className="text-gold">·</span>S
          </button>
          <nav className="hidden md:flex items-center gap-9 text-[11px] tracking-luxury text-white/70">
            {["about", "portfolio", "services", "contact"].map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="hover:text-white transition-colors">
                {s}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo("contact")}
            className="text-[11px] tracking-luxury text-white/80 hover:text-gold transition-colors"
          >
            Book <span className="hidden sm:inline">Now</span>
          </button>
        </div>
      </motion.header>

      {/* ================= HERO ================= */}
      <section id="hero" ref={heroRef} className="relative h-[100svh] w-full overflow-hidden">
        <motion.div
          style={{ y: heroY, scale: heroScale, x: sx, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <motion.img
            src={hero}
            alt="Saumya Shekhar — fashion model editorial portrait"
            initial={{ scale: 1.2, filter: "blur(20px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover object-[60%_center] md:object-center"
            style={{ y: sy }}
            width={1280}
            height={1600}
          />
        </motion.div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="mb-6"
            >
              <SectionLabel>Portfolio · 2026</SectionLabel>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[18vw] md:text-[10vw] leading-[0.85] font-light uppercase"
              >
                Saumya
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 2.05, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[18vw] md:text-[10vw] leading-[0.85] font-light uppercase italic text-white/95"
              >
                Shekhar
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.4 }}
              className="mt-8 max-w-xl"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/85">
                  Professional Fashion Model
                </p>
              </div>
              <p className="mt-3 text-[11px] tracking-[0.4em] uppercase text-white/50">
                Commercial · Print · Editorial
              </p>
              <p className="mt-6 text-sm md:text-base text-white/70 leading-relaxed max-w-md font-light">
                Available for fashion campaigns, commercial shoots and brand collaborations worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.6 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <LuxButton primary onClick={() => scrollTo("contact")}>Book Now</LuxButton>
              <LuxButton onClick={() => scrollTo("contact")}>Contact</LuxButton>
              <LuxButton onClick={() => scrollTo("portfolio")}>View Portfolio</LuxButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-luxury text-white/50">Scroll</span>
          <ChevronDown className="h-4 w-4 text-gold" style={{ animation: "scroll-hint 2s ease-in-out infinite" }} />
        </motion.div>

        {/* Side runner */}
        <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4 text-[10px] tracking-luxury text-white/40">
          <span className="[writing-mode:vertical-rl] rotate-180">Est. 2026 — Mumbai · Delhi · Milano</span>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="relative py-28 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>01 — About</SectionLabel>
          </Reveal>

          <div className="mt-8 grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-7">
              <Reveal delay={0.05}>
                <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95]">
                  About <span className="italic text-gold">Saumya</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 text-base md:text-lg text-white/70 leading-relaxed max-w-xl font-light">
                  Hey, I'm <span className="text-white">Saumya Shekhar</span> — an 18-year-old professional
                  Indian model available for print shoots, commercial shoots, fashion campaigns and brand
                  collaborations.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="mt-4 text-sm md:text-base text-white/50 leading-relaxed max-w-xl font-light">
                  Trained in editorial expression and runway presence, I approach every frame with quiet
                  discipline and precision — refined for luxury houses, campaigns and editorial features.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-3">
              {aboutCards.map((c, i) => (
                <Reveal key={c.label} delay={0.1 + i * 0.08} className={i === 4 ? "col-span-2" : ""}>
                  <div className="glass rounded-lg p-5 md:p-6 h-full group hover:border-gold/40 transition-colors duration-500">
                    <div className="text-[10px] tracking-luxury text-gold/80">{c.label}</div>
                    <div className="mt-3 font-display text-2xl md:text-3xl text-white group-hover:text-gold transition-colors duration-500">
                      {c.value}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-hairline mx-auto max-w-6xl" />

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="relative py-28 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <Reveal><SectionLabel>02 — Portfolio</SectionLabel></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-5xl md:text-7xl font-light leading-[0.95]">
                  Selected <span className="italic text-gold">Work</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="text-sm text-white/50 max-w-xs font-light">
                Editorial narratives, campaign work and lookbooks — curated across the past year.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {galleryItems.map((it, i) => (
              <motion.button
                key={i}
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-md bg-charcoal ${
                  it.tall ? "row-span-2 aspect-[3/5]" : "aspect-[3/4]"
                } ${i === 0 ? "md:row-span-2 md:aspect-[3/5]" : ""}`}
              >
                <img
                  src={it.src}
                  alt={`${it.category} — Saumya Shekhar`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-700" />
                <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6 flex items-end justify-between translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                  <div>
                    <div className="text-[9px] tracking-luxury text-gold">{String(i + 1).padStart(2, "0")}</div>
                    <div className="mt-1 font-display text-xl md:text-2xl text-white">{it.category}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/80" />
                </div>
                <div className="absolute top-3 left-3 md:top-4 md:left-4 text-[9px] tracking-luxury text-white/70 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  {it.category}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-hairline mx-auto max-w-6xl" />

      {/* ================= MEASUREMENTS ================= */}
      <section className="relative py-28 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionLabel>03 — Measurements</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-5xl md:text-7xl font-light leading-[0.95]">
              The <span className="italic text-gold">Details</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {measurements.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06}>
                <div className="relative rounded-lg border border-white/8 bg-[var(--charcoal)] p-6 md:p-8 h-full overflow-hidden group hover:border-gold/40 transition-all duration-700">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gold/8 to-transparent" />
                  <div className="relative">
                    <div className="text-[10px] tracking-luxury text-gold">{m.label}</div>
                    <div className="mt-4 font-display text-3xl md:text-4xl text-white font-light">
                      {m.value}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-hairline mx-auto max-w-6xl" />

      {/* ================= SERVICES ================= */}
      <section id="services" className="relative py-28 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionLabel>04 — Services</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-5xl md:text-7xl font-light leading-[0.95]">
              What I <span className="italic text-gold">Offer</span>
            </h2>
          </Reveal>

          <div className="mt-14 divide-y divide-white/8 border-y border-white/8">
            {services.map((s, i) => (
              <motion.a
                key={s.title}
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="group relative flex items-center justify-between py-6 md:py-9 px-2 md:px-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <div className="relative flex items-baseline gap-6 md:gap-10">
                  <span className="text-[10px] tracking-luxury text-gold group-hover:text-black transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl md:text-5xl font-light text-white group-hover:text-black transition-colors duration-500">
                    {s.title}
                  </span>
                </div>
                <div className="relative flex items-center gap-4">
                  <span className="hidden md:block text-xs text-white/50 group-hover:text-black/70 transition-colors duration-500 max-w-xs">
                    {s.desc}
                  </span>
                  <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-white group-hover:text-black transition-colors duration-500 group-hover:rotate-45 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-hairline mx-auto max-w-6xl" />


      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative py-28 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal><div className="flex justify-center"><SectionLabel>05 — Contact</SectionLabel></div></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-display text-6xl md:text-9xl font-light leading-[0.9]">
              Book <span className="italic text-gold">Me</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-white/60 max-w-lg mx-auto font-light">
              For campaigns, editorials and brand collaborations — reach out directly. Response within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-12 inline-flex flex-col items-center">
              <div className="text-[10px] tracking-luxury text-gold">Direct email</div>
              <a href={`mailto:${EMAIL}`} className="mt-3 font-display text-2xl md:text-5xl text-white hover:text-gold transition-colors break-all">
                {EMAIL}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-14 flex flex-wrap justify-center gap-3">
              <ContactBtn href={`mailto:${EMAIL}`} icon={<Mail className="h-4 w-4" />} label="Email Me" primary />
              <ContactBtn href={INSTA} icon={<Instagram className="h-4 w-4" />} label="Instagram" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/6 px-6 md:px-10 py-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-sm uppercase tracking-[0.4em] text-white/60">
            Saumya <span className="text-gold">·</span> Shekhar
          </div>
          <div className="text-[10px] tracking-luxury text-white/40 order-3 md:order-2">
            © {new Date().getFullYear()} — All Rights Reserved
          </div>
          <div className="flex items-center gap-3 order-2 md:order-3">
            <a href={INSTA} target="_blank" rel="noopener noreferrer" className="glass h-9 w-9 rounded-full flex items-center justify-center hover:border-gold/50 transition-colors">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a href={`mailto:${EMAIL}`} className="glass h-9 w-9 rounded-full flex items-center justify-center hover:border-gold/50 transition-colors">
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full glass-strong border border-gold/40 flex items-center justify-center hover:gold-glow transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 text-gold" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 h-10 w-10 rounded-full glass flex items-center justify-center"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <motion.img
              key={lightbox}
              src={galleryItems[lightbox].src}
              alt=""
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-luxury text-gold">
              {galleryItems[lightbox].category}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LuxButton({
  children,
  onClick,
  primary,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
}) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-full px-7 py-3.5 text-[11px] tracking-luxury transition-all duration-500 ${
        primary
          ? "bg-gold text-black hover:gold-glow"
          : "border border-white/20 text-white hover:border-gold/60 hover:text-gold"
      }`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

function ContactBtn({
  href,
  icon,
  label,
  primary,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
}) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[11px] tracking-luxury transition-all duration-500 ${
        primary
          ? "bg-gold text-black hover:gold-glow"
          : "border border-white/15 text-white hover:border-gold/50 hover:text-gold"
      }`}
    >
      {icon}
      {label}
    </motion.a>
  );
}
