import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Home,
  User,
  Image as ImageIcon,
  Sparkles,
  Mail,
  Instagram,
  MessageCircle,
  Play,
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Ruler,
  Weight,
  Eye,
  Scissors,
  Globe,
  Languages,
  Trophy,
  Camera,
  Crown,
  Newspaper,
  Star,
  X,
  Phone,
  Send,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import ig1 from "@/assets/ig1.jpg";
import ig2 from "@/assets/ig2.jpg";
import ig3 from "@/assets/ig3.jpg";
import ig4 from "@/assets/ig4.jpg";
import ig5 from "@/assets/ig5.jpg";
import ig6 from "@/assets/ig6.jpg";
import reel from "@/assets/reel.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ---------------- Loading Screen ---------------- */
function Loader({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              className="absolute -inset-16 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(212,175,55,0.25), transparent 60%)" }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl tracking-tight"
            >
              <span className="gold-text">A</span>
              <span className="text-white">V</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-[10px] uppercase tracking-[0.5em] text-muted-foreground"
            >
              Portfolio
            </motion.div>
            <div className="mt-6 h-px w-40 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-gold to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- Section title ---------------- */
function SectionEyebrow({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-8 flex flex-col items-center text-center"
    >
      <span className="text-[10px] uppercase tracking-[0.5em] text-gold">{label}</span>
      <h2 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">{title}</h2>
      {sub && <p className="mt-3 max-w-sm text-sm text-muted-foreground">{sub}</p>}
      <div className="hairline mt-6 w-24" />
    </motion.div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={hero}
          alt="Aria Vaughn portrait"
          className="h-full w-full object-cover object-[center_15%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(212,175,55,0.15),transparent_60%)]" />
      </motion.div>

      {/* Top bar */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-6"
      >
        <div className="font-display text-lg tracking-wide">
          <span className="gold-text">A</span>V
        </div>
        <div className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-widest">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          Available 2026
        </div>
      </motion.div>

      {/* Floating socials */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 sm:flex"
      >
        {[Instagram, Camera, Send].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="glass grid h-10 w-10 place-items-center rounded-full text-white/80 transition-all hover:scale-110 hover:text-gold"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-28">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.5em] text-gold"
        >
          Professional Model — Milan · Paris · NYC
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-3 font-display text-[68px] leading-[0.9] tracking-[-0.03em] sm:text-[96px]"
        >
          Aria
          <br />
          <span className="italic gold-text">Vaughn</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground"
        >
          Editorial, runway, and campaign work for houses that write the language of fashion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-black gold-glow transition-transform active:scale-95"
          >
            <span className="relative z-10">Book Now</span>
            <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#portfolio"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition-transform active:scale-95"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/50">Scroll</span>
        <div className="relative h-8 w-5 rounded-full border border-white/25">
          <span
            className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 rounded-full bg-gold"
            style={{ animation: "scroll-hint 1.6s ease-in-out infinite" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- About ---------------- */
const stats = [
  { icon: Ruler, label: "Height", value: "5'11\"" },
  { icon: Weight, label: "Weight", value: "54 kg" },
  { icon: Scissors, label: "Hair", value: "Dark Brown" },
  { icon: Eye, label: "Eyes", value: "Hazel" },
  { icon: Languages, label: "Languages", value: "EN · FR · IT" },
  { icon: Globe, label: "Nationality", value: "British" },
];

function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <SectionEyebrow
        label="About"
        title="Poise. Precision. Presence."
        sub="Seven years walking runways from Paris Fashion Week to Milan, with campaigns spanning couture, beauty, and lifestyle."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="glass mx-auto max-w-md rounded-3xl p-6"
      >
        <p className="text-sm leading-relaxed text-white/85">
          Aria is a British-born international model represented across three continents.
          Her work blends editorial minimalism with the romance of couture — carrying
          quiet confidence into every frame.
        </p>
      </motion.div>

      <div className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass group relative overflow-hidden rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 text-gold">
              <s.icon className="h-3.5 w-3.5" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                {s.label}
              </span>
            </div>
            <div className="mt-2 font-display text-xl">{s.value}</div>
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-80" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Portfolio ---------------- */
type Cat = "All" | "Fashion" | "Editorial" | "Lifestyle" | "Commercial" | "Runway";
const items: { src: string; cat: Cat; span: string; title: string }[] = [
  { src: g1, cat: "Fashion", span: "row-span-2", title: "Noir Silk" },
  { src: g3, cat: "Editorial", span: "row-span-1", title: "Gilded" },
  { src: g4, cat: "Lifestyle", span: "row-span-2", title: "Golden Hour" },
  { src: g6, cat: "Editorial", span: "row-span-1", title: "Shadow Play" },
  { src: g2, cat: "Runway", span: "row-span-2", title: "Milan SS26" },
  { src: g5, cat: "Commercial", span: "row-span-2", title: "Studio 07" },
];
const cats: Cat[] = ["All", "Fashion", "Editorial", "Lifestyle", "Commercial", "Runway"];

function Portfolio_() {
  const [active, setActive] = useState<Cat>("All");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = items.filter((i) => active === "All" || i.cat === active);

  return (
    <section id="portfolio" className="relative px-6 py-24">
      <SectionEyebrow label="Portfolio" title="Selected Work" sub="A living archive of runway, campaign, and editorial." />

      <div className="mx-auto mb-6 flex max-w-md gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`relative shrink-0 rounded-full border px-4 py-1.5 text-xs transition-all ${
              active === c
                ? "border-gold bg-gold text-black"
                : "border-white/10 bg-white/[0.03] text-white/70 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mx-auto grid max-w-md auto-rows-[130px] grid-cols-2 gap-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((it, i) => (
            <motion.button
              layout
              key={it.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setOpen(items.indexOf(it))}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 text-left">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-gold">{it.cat}</div>
                  <div className="mt-0.5 font-display text-sm">{it.title}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/70 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              className="glass absolute right-4 top-6 grid h-10 w-10 place-items-center rounded-full"
            >
              <X className="h-4 w-4" />
            </button>
            <motion.img
              key={items[open].src}
              src={items[open].src}
              alt={items[open].title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute inset-x-0 bottom-6 text-center">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
                {items[open].cat}
              </div>
              <div className="mt-1 font-display text-xl">{items[open].title}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Featured Video ---------------- */
function Video() {
  return (
    <section className="relative px-6 py-24">
      <SectionEyebrow label="Reel" title="Motion" sub="Fashion film — Autumn 2026." />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="glass group relative mx-auto aspect-video max-w-md overflow-hidden rounded-3xl"
      >
        <img src={reel} alt="Fashion reel preview" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 grid place-items-center">
          <button className="group/btn relative grid h-16 w-16 place-items-center rounded-full bg-gold text-black gold-glow transition-transform hover:scale-110 active:scale-95">
            <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
            <Play className="h-6 w-6 translate-x-0.5 fill-black" />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
          <div>
            <div className="text-[9px] uppercase tracking-[0.4em] text-gold">Featured Film</div>
            <div className="mt-1 font-display text-lg">Maison Étoile — Nocturne</div>
          </div>
          <div className="text-xs text-white/60">02:14</div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- Achievements Timeline ---------------- */
const timeline = [
  { year: "2025", icon: Crown, title: "Model of the Year — Elle Style", desc: "Named Emerging Model of the Year." },
  { year: "2024", icon: Trophy, title: "Paris Fashion Week", desc: "Opened for Maison Étoile SS25." },
  { year: "2023", icon: Newspaper, title: "Vogue Italia Cover", desc: "September issue — editorial by L. Rossi." },
  { year: "2022", icon: Star, title: "Dior Beauty Campaign", desc: "Global face of Rouge Nocturne fragrance." },
];

function Achievements() {
  return (
    <section className="relative px-6 py-24">
      <SectionEyebrow label="Career" title="Milestones" sub="Highlights from covers, runways, and campaigns." />
      <div className="relative mx-auto max-w-md pl-8">
        <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-gold/60 via-white/10 to-transparent" />
        {timeline.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative mb-6"
          >
            <div className="absolute -left-[26px] top-1 grid h-6 w-6 place-items-center rounded-full bg-background ring-1 ring-gold/60">
              <t.icon className="h-3 w-3 text-gold" />
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">{t.year}</div>
              <div className="mt-1 font-display text-lg">{t.title}</div>
              <div className="mt-1 text-xs text-muted-foreground">{t.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const services = [
  { title: "Fashion Modeling", desc: "Editorial, magazine, and lookbook.", icon: Sparkles },
  { title: "Runway", desc: "Couture, RTW, and haute couture shows.", icon: Crown },
  { title: "Brand Promotion", desc: "Ambassador and social partnerships.", icon: Star },
  { title: "Commercial Shoot", desc: "Beauty, lifestyle & product.", icon: Camera },
  { title: "Product Campaign", desc: "Global 360º campaign work.", icon: Trophy },
];

function Services() {
  return (
    <section id="services" className="relative px-6 py-24">
      <SectionEyebrow label="Services" title="How we can work" sub="Bookings via management. Custom collaborations welcome." />
      <div className="mx-auto grid max-w-md gap-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass group relative flex items-center gap-4 overflow-hidden rounded-2xl p-4"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30 transition-all group-hover:bg-gold group-hover:text-black">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-lg leading-tight">{s.title}</div>
              <div className="text-xs text-muted-foreground">{s.desc}</div>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const quotes = [
  { name: "Luca Rossi", role: "Editor, Vogue Italia", text: "Aria carries a rare stillness — the frame comes to her." },
  { name: "Camille Aubert", role: "Creative Director, Maison Étoile", text: "A muse in the truest sense. She elevates every look on the runway." },
  { name: "Noor Khan", role: "Photographer", text: "Every shoot with Aria feels like a masterclass in restraint." },
];

function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="px-6">
        <SectionEyebrow label="Voices" title="What they say" />
      </div>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {quotes.map((q, i) => (
          <motion.div
            key={q.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass w-[280px] shrink-0 snap-center rounded-3xl p-6"
          >
            <div className="flex gap-0.5 text-gold">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="h-3 w-3 fill-gold" />
              ))}
            </div>
            <p className="mt-4 font-display text-base italic leading-snug text-white/90">
              "{q.text}"
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gold/20 font-display text-sm text-gold">
                {q.name[0]}
              </div>
              <div>
                <div className="text-sm">{q.name}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{q.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Instagram Grid ---------------- */
const igs = [ig1, ig2, ig3, ig4, ig5, ig6];

function InstagramGrid() {
  return (
    <section className="relative px-6 py-24">
      <SectionEyebrow label="@ariavaughn" title="Instagram" sub="Follow the studio diary." />
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        {igs.map((src, i) => (
          <motion.a
            href="#"
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 grid place-items-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
              <Instagram className="h-5 w-5 text-gold" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <SectionEyebrow label="Contact" title="Let's create" sub="For bookings, campaigns, and collaborations." />
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        onSubmit={(e) => e.preventDefault()}
        className="glass mx-auto max-w-md space-y-3 rounded-3xl p-6"
      >
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm placeholder:text-white/40 focus:border-gold/60 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm placeholder:text-white/40 focus:border-gold/60 focus:outline-none"
        />
        <textarea
          rows={4}
          placeholder="Project details"
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm placeholder:text-white/40 focus:border-gold/60 focus:outline-none"
        />
        <button
          type="submit"
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gold py-3.5 text-sm font-medium text-black gold-glow transition-transform active:scale-[0.98]"
        >
          Send Enquiry
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </motion.form>

      <div className="mx-auto mt-4 grid max-w-md grid-cols-2 gap-3">
        {[
          { icon: MessageCircle, label: "WhatsApp", value: "+44 20 7946" },
          { icon: Instagram, label: "Instagram", value: "@ariavaughn" },
          { icon: Mail, label: "Email", value: "book@aria.co" },
          { icon: MapPin, label: "Based", value: "London · Milan" },
        ].map((c) => (
          <a
            key={c.label}
            href="#"
            className="glass group flex items-center gap-3 rounded-2xl p-3.5"
          >
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gold/10 text-gold ring-1 ring-gold/25">
              <c.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[9px] uppercase tracking-[0.3em] text-white/50">{c.label}</div>
              <div className="truncate text-sm">{c.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="px-6 pb-32 pt-10 text-center">
      <div className="hairline mx-auto mb-8 w-24" />
      <div className="font-display text-2xl">
        <span className="gold-text">Aria</span> Vaughn
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        Portfolio · Est. 2018
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {[Instagram, Camera, Send, Phone].map((I, i) => (
          <a key={i} href="#" className="glass grid h-9 w-9 place-items-center rounded-full text-white/70 hover:text-gold">
            <I className="h-4 w-4" />
          </a>
        ))}
      </div>
      <div className="mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aria Vaughn. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------------- Bottom Nav ---------------- */
const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "portfolio", label: "Gallery", icon: ImageIcon },
  { id: "services", label: "Services", icon: Sparkles },
  { id: "contact", label: "Contact", icon: Mail },
];

function BottomNav() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollY } = useScroll();
  const last = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > last.current && y > 200) setHidden(true);
    else setHidden(false);
    last.current = y;
  });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: hidden ? 120 : 0 }}
      transition={{ type: "spring", damping: 22, stiffness: 240 }}
      className="fixed inset-x-0 bottom-4 z-50 mx-auto flex w-fit max-w-[95vw] items-center gap-1 rounded-full glass-strong px-2 py-2 shadow-2xl"
    >
      {navItems.map((n) => {
        const isActive = active === n.id;
        return (
          <a
            key={n.id}
            href={`#${n.id}`}
            className="group relative flex items-center gap-1.5 rounded-full px-3 py-2 text-xs transition-colors"
          >
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-gold gold-glow"
                transition={{ type: "spring", damping: 22, stiffness: 260 }}
              />
            )}
            <n.icon className={`relative h-4 w-4 ${isActive ? "text-black" : "text-white/80"}`} />
            <span className={`relative hidden sm:inline ${isActive ? "text-black font-medium" : "text-white/80"}`}>
              {n.label}
            </span>
          </a>
        );
      })}
    </motion.nav>
  );
}

/* ---------------- Page ---------------- */
function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader done={loaded} />
      <main className="relative overflow-x-hidden">
        <Hero />
        <About />
        <Portfolio_ />
        <Video />
        <Achievements />
        <Services />
        <Testimonials />
        <InstagramGrid />
        <Contact />
        <Footer />
      </main>
      <BottomNav />
    </>
  );
}
