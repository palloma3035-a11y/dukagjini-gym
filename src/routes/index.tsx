import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  Dumbbell,
  Expand,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { couplesPlan, gym, memberships } from "@/content/gym";
import logoAsset from "@/assets/dukagjini-logo.png.asset.json";
import heroImage from "@/assets/gym-hero.jpg";
import strengthImage from "@/assets/gym-strength.jpg";
import cardioImage from "@/assets/gym-cardio.jpg";
import weightsImage from "@/assets/gym-weights.jpg";
import functionalImage from "@/assets/gym-functional.jpg";
import floorImage from "@/assets/gym-floor.jpg";

const navItems = [
  ["Kryefaqja", "home"], ["Rreth nesh", "about"], ["Ambientet", "facilities"],
  ["Anëtarësimi", "membership"], ["Galeria", "gallery"], ["Kontakti", "contact"],
] as const;

const images = [
  { src: strengthImage, alt: "Zona e stërvitjes së forcës", label: "Strength Training" },
  { src: cardioImage, alt: "Zona moderne për kardio", label: "Cardio" },
  { src: weightsImage, alt: "Pesha të lira në palestër", label: "Free Weights" },
  { src: functionalImage, alt: "Stërvitje funksionale me litarë", label: "Functional Training" },
  { src: floorImage, alt: "Pamje e hapësirës së palestrës", label: "Gym Floor" },
] as const;

const features = [
  { icon: Dumbbell, title: "Pajisje moderne", text: "Stërvitje me pajisje dhe hapësira të përshtatshme për objektivat e tua." },
  { icon: Zap, title: "Atmosferë motivuese", text: "Një ambient ku mund të fokusohesh në progresin tënd." },
  { icon: Users, title: "Për të gjitha nivelet", text: "Qoftë nëse sapo ke filluar apo kërkon performancë më të mirë." },
  { icon: Target, title: "Fokus në rezultate", text: "Qëndro konsistent dhe puno drejt objektivave të tua." },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dukagjini GYM | Palestër në Klinë" },
      { name: "description", content: "Dukagjini GYM në Klinë – ambient modern për fitness, forcë dhe stërvitje. Na vizitoni në Rrugën “Dëshmorët e Kombit” ose na kontaktoni në +383 49 45 47 87." },
      { property: "og:title", content: "Dukagjini GYM | Palestër në Klinë" },
      { property: "og:description", content: "Ambient modern për fitness, forcë dhe stërvitje në zemër të Klinës." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "HealthClub", name: gym.name,
        description: "Palestër lokale për fitness dhe stërvitje në Klinë.", telephone: gym.phoneDisplay,
        address: { "@type": "PostalAddress", streetAddress: "Rruga Dëshmorët e Kombit", addressLocality: "Klinë", addressCountry: "XK" },
        sameAs: [gym.instagramUrl], url: "/",
      }),
    }],
  }),
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<(typeof images)[number] | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen || selectedImage ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, selectedImage]);

  return (
    <div id="home" className="min-h-screen bg-background pb-16 text-foreground lg:pb-0">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="section-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-24 lg:grid-cols-[auto_1fr_auto]">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Dukagjini GYM – kryefaqja">
            <img src={logoAsset.url} alt="Logo e Dukagjini GYM" className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-primary/40 lg:h-14 lg:w-14" />
            <span className="font-display text-xl font-extrabold uppercase leading-none sm:text-2xl">Dukagjini <span className="text-primary">GYM</span></span>
          </a>
          <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Navigimi kryesor">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs font-bold uppercase text-muted-foreground transition-colors hover:text-primary">{label}</a>)}
          </nav>
          <Button asChild className="hidden lg:inline-flex"><a href="#contact">Na Kontaktoni <ArrowRight size={17} /></a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Hap menynë"><Menu /></Button>
        </div>
      </header>

      {menuOpen && <div className="fixed inset-0 z-[70] bg-background p-6 lg:hidden">
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-extrabold uppercase">Dukagjini <span className="text-primary">GYM</span></span>
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)} aria-label="Mbyll menynë"><X /></Button>
        </div>
        <nav className="mt-16 flex flex-col" aria-label="Navigimi mobil">
          {navItems.map(([label, id], i) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="flex min-h-16 items-center justify-between border-b border-border font-display text-3xl font-bold uppercase"><span><span className="mr-4 text-sm text-primary">0{i + 1}</span>{label}</span><ChevronRight /></a>)}
        </nav>
      </div>}

      <main>
        <section className="relative flex min-h-[92svh] items-end overflow-hidden pt-24">
          <img src={heroImage} alt="Stërvitje me pesha në një palestër moderne" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover object-[58%_center]" />
          <div className="absolute inset-0 bg-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-background)_0%,transparent_45%)]" />
          <div className="section-shell relative z-10 pb-14 md:pb-20">
            <div className="reveal-up max-w-4xl">
              <div className="section-kicker mb-5"><MapPin size={15} /> Klinë, Kosovë</div>
              <h1 className="font-display text-[clamp(4.5rem,14vw,10.5rem)] font-extrabold uppercase leading-[0.78]">Dukagjini<br /><span className="text-primary">Gym</span></h1>
              <p className="mt-6 text-xl font-semibold sm:text-2xl">{gym.heroTagline}</p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">Transformo trupin, ndërto forcën dhe arrij objektivat e tua në Dukagjini GYM.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg"><a href="#contact">Na Kontaktoni <ArrowRight size={18} /></a></Button>
                <Button asChild size="lg" variant="outline"><a href="#facilities">Shiko palestrën <ArrowDown size={18} /></a></Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-pad scroll-mt-20">
          <div className="section-shell grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div><div className="section-kicker">01 — Rreth nesh</div><h2 className="display-title mt-4">Mirë se vini në <span className="text-primary">Dukagjini GYM</span></h2></div>
            <div><p className="text-lg leading-8 text-muted-foreground">{gym.about}</p><p className="mt-5 text-sm leading-7 text-muted-foreground">Një hapësirë për fillestarë dhe sportistë me përvojë—ku secili punon me ritmin dhe objektivat e veta.</p></div>
          </div>
          <div className="section-shell mt-16 grid grid-cols-1 border-y border-border sm:grid-cols-3">
            {[['1000+', 'Ndjekës në Instagram'], ['Çdo ditë', 'Motivim për progres'], ['100%', 'Fokus në objektiva']].map(([value, label], i) => <div key={label} className={`py-9 sm:px-8 ${i > 0 ? 'border-t border-border sm:border-l sm:border-t-0' : ''}`}><strong className="font-display text-5xl text-primary">{value}</strong><p className="mt-2 text-sm uppercase text-muted-foreground">{label}</p></div>)}
          </div>
        </section>

        <section className="section-pad bg-secondary">
          <div className="section-shell"><div className="section-kicker">02 — Avantazhet</div><h2 className="display-title mt-4">Pse Dukagjini GYM?</h2>
            <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, text }) => <article key={title} className="group min-h-72 bg-card p-7 transition-colors hover:bg-surface-raised"><Icon className="text-primary transition-transform group-hover:-translate-y-1" size={34} /><h3 className="mt-16 text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="facilities" className="section-pad scroll-mt-20">
          <div className="section-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><div className="section-kicker">03 — Hapësira</div><h2 className="display-title mt-4">Ambientet & Pajisjet</h2></div><p className="max-w-md text-sm leading-6 text-muted-foreground">Hapësira të menduara për stërvitje force, kardio dhe lëvizje funksionale.</p></div>
          <div className="section-shell mt-12 grid auto-rows-[240px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((image, i) => <figure key={image.label} className={`group relative overflow-hidden ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : i === 4 ? 'lg:col-span-2' : ''}`}><img src={image.src} alt={image.alt} loading="lazy" width={i === 4 ? 1536 : 1024} height={1024} className="image-hover h-full w-full object-cover" /><div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-overlay),transparent_60%)]"/><figcaption className="absolute inset-x-0 bottom-0 p-5 font-display text-2xl font-bold uppercase">{image.label}</figcaption></figure>)}
            <div className="flex items-end border border-border bg-card p-5"><div><ShieldCheck className="mb-4 text-primary"/><h3 className="text-2xl font-bold">Changing Rooms</h3><p className="mt-2 text-xs text-muted-foreground">Detajet e hapësirës mund të përditësohen me fotografitë reale.</p></div></div>
          </div>
        </section>

        <section id="membership" className="section-pad scroll-mt-20 bg-secondary">
          <div className="section-shell text-center"><div className="section-kicker">04 — Anëtarësimi</div><h2 className="display-title mt-4">Zgjidh anëtarësimin tënd</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-foreground">Çmime të veçanta për femra dhe meshkuj. Rezervo planin tënd përmes WhatsApp.</p></div>
          <div className="section-shell mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {memberships.map((plan) => <article key={plan.name} className={`relative flex min-h-[360px] flex-col border p-7 ${plan.recommended ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card'}`}>
              {plan.recommended && <span className="absolute right-0 top-0 bg-background px-3 py-2 text-[10px] font-bold uppercase text-primary">Vlera më e mirë</span>}
              <p className="text-xs font-bold uppercase">{plan.name}</p>
              <div className="mb-8 mt-8">
                <p className={`text-[11px] font-bold uppercase ${plan.recommended ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>Femra</p>
                <p className="font-display text-5xl font-extrabold">{plan.priceFemale}</p>
                <div className={`my-5 border-t ${plan.recommended ? 'border-primary-foreground/30' : 'border-border'}`} />
                <p className={`text-[11px] font-bold uppercase ${plan.recommended ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>Meshkuj</p>
                <p className="font-display text-5xl font-extrabold">{plan.priceMale}</p>
              </div>
              <Button asChild className={`mt-auto ${plan.recommended ? 'bg-background text-primary hover:bg-background/80' : ''}`} variant={plan.recommended ? 'ghost' : 'primary'}><a href={gym.whatsappUrl} target="_blank" rel="noreferrer">Rezervo ofertën <MessageCircle size={17}/></a></Button>
            </article>)}
          </div>
          <div className="section-shell mt-4">
            <article className="flex flex-col gap-6 border border-primary/50 bg-card p-7 sm:flex-row sm:items-center sm:justify-between">
              <div><p className="text-xs font-bold uppercase text-primary">Ofertë për çifte</p><h3 className="mt-2 font-display text-4xl font-extrabold uppercase">{couplesPlan.name} — {couplesPlan.price}</h3><p className="mt-2 text-sm text-muted-foreground">{couplesPlan.duration}</p></div>
              <Button asChild className="w-fit shrink-0"><a href={gym.whatsappUrl} target="_blank" rel="noreferrer">Rezervo për dy <MessageCircle size={17}/></a></Button>
            </article>
          </div>
        </section>

        <section className="relative min-h-[560px] overflow-hidden py-24">
          <img src={functionalImage} alt="Sportist gjatë stërvitjes funksionale" loading="lazy" width={1024} height={1024} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-overlay"/>
          <div className="section-shell relative z-10 flex min-h-[370px] flex-col justify-end"><div className="section-kicker">Fillo tani</div><h2 className="display-title mt-4 max-w-3xl">Progresi fillon me <span className="text-primary">një hap.</span></h2><p className="mt-5 max-w-xl text-lg text-muted-foreground">Vendos objektivin. Qëndro konsistent. Bëhu versioni më i mirë i vetes.</p><Button asChild size="lg" className="mt-8 w-fit"><a href={gym.whatsappUrl} target="_blank" rel="noreferrer">Fillo sot <ArrowRight size={18}/></a></Button></div>
        </section>

        <section id="gallery" className="section-pad scroll-mt-20">
          <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><div className="section-kicker">05 — Galeria</div><h2 className="display-title mt-4">Brenda stërvitjes</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Fotografitë demonstrative mund të zëvendësohen lehtë me pamjet reale të Dukagjini GYM.</p></div>
          <div className="section-shell mt-12 columns-2 gap-3 lg:columns-4">
            {[...images, ...images.slice(0, 4)].map((image, i) => <button key={`${image.label}-${i}`} onClick={() => setSelectedImage(image)} className="group relative mb-3 block w-full cursor-zoom-in overflow-hidden text-left" aria-label={`Hap fotografinë: ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy" width={1024} height={i % 3 === 0 ? 1280 : 1024} className={`image-hover w-full object-cover ${i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`} /><span className="absolute inset-0 grid place-items-center bg-overlay-soft opacity-0 transition-opacity group-hover:opacity-100"><Expand className="text-primary"/></span></button>)}
          </div>
        </section>

        <section className="section-pad bg-secondary">
          <div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><div className="section-kicker"><Instagram size={16}/> Instagram</div><h2 className="display-title mt-4">Na ndiqni në Instagram</h2><p className="mt-5 text-2xl font-bold text-primary">{gym.instagramHandle}</p><Button asChild className="mt-7"><a href={gym.instagramUrl} target="_blank" rel="noreferrer">Shiko Instagramin <Instagram size={18}/></a></Button></div>
            <div className="grid grid-cols-3 gap-2">{[strengthImage, cardioImage, weightsImage, functionalImage, floorImage, heroImage].map((src, i) => <a key={src} href={gym.instagramUrl} target="_blank" rel="noreferrer" className="group relative aspect-square overflow-hidden"><img src={src} alt={`Pamje stërvitjeje ${i + 1}`} loading="lazy" width={1024} height={1024} className="image-hover h-full w-full object-cover"/><span className="absolute inset-0 grid place-items-center bg-overlay-soft opacity-0 transition-opacity group-hover:opacity-100"><Instagram/></span></a>)}</div>
          </div>
        </section>

        <section id="contact" className="section-pad scroll-mt-20">
          <div className="section-shell grid gap-12 lg:grid-cols-2">
            <div><div className="section-kicker">06 — Kontakti</div><h2 className="display-title mt-4">Na vizitoni në <span className="text-primary">Klinë</span></h2>
              <div className="mt-10 space-y-6"><div className="flex gap-4"><MapPin className="shrink-0 text-primary"/><span>{gym.address}</span></div><div className="flex gap-4"><Phone className="shrink-0 text-primary"/><a href={gym.phoneHref} className="hover:text-primary">{gym.phoneDisplay}</a></div><div className="flex gap-4"><Instagram className="shrink-0 text-primary"/><a href={gym.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-primary">{gym.instagramHandle}</a></div></div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button asChild><a href={gym.phoneHref}><Phone size={17}/> Telefono</a></Button><Button asChild variant="outline"><a href={gym.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a></Button><Button asChild variant="ghost"><a href={gym.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17}/> Instagram</a></Button></div>
            </div>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gym.mapsQuery)}`} target="_blank" rel="noreferrer" className="group relative min-h-[420px] overflow-hidden border border-border bg-card" aria-label="Hap lokacionin në Google Maps"><div className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:44px_44px]"/><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"><span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground ring-8 ring-primary/15 transition-transform group-hover:scale-110"><MapPin size={34}/></span><strong className="mt-6 block font-display text-3xl uppercase">Dukagjini GYM</strong><span className="mt-2 block text-sm text-muted-foreground">Hap lokacionin në Google Maps</span></div></a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary pb-10 pt-16">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div><div className="flex items-center gap-3"><img src={logoAsset.url} alt="Logo e Dukagjini GYM" className="h-16 w-16 rounded-full object-cover"/><span className="font-display text-3xl font-extrabold uppercase">Dukagjini <span className="text-primary">GYM</span></span></div><p className="mt-5 text-muted-foreground">{gym.tagline}</p></div>
          <div><h3 className="text-lg font-bold">Lidhje të shpejta</h3><div className="mt-5 grid grid-cols-2 gap-3">{navItems.map(([label,id]) => <a key={id} href={`#${id}`} className="text-sm text-muted-foreground hover:text-primary">{label}</a>)}</div></div>
          <div><h3 className="text-lg font-bold">Kontakti</h3><p className="mt-5 text-sm leading-6 text-muted-foreground">{gym.address}<br/>{gym.phoneDisplay}<br/>{gym.openingHours}</p></div>
        </div>
        <div className="section-shell mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between"><span>© 2026 Dukagjini GYM. Të gjitha të drejtat e rezervuara.</span><a href="https://enestahiri.com" target="_blank" rel="noreferrer" className="hover:text-primary">created by enestahiri.com</a></div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/95 p-2 backdrop-blur lg:hidden"><a href={gym.phoneHref} className="flex min-h-12 flex-col items-center justify-center gap-1 text-[10px] font-bold uppercase"><Phone size={19} className="text-primary"/>Telefono</a><a href={gym.whatsappUrl} target="_blank" rel="noreferrer" className="flex min-h-12 flex-col items-center justify-center gap-1 border-x border-border text-[10px] font-bold uppercase"><MessageCircle size={19} className="text-primary"/>WhatsApp</a><a href={gym.instagramUrl} target="_blank" rel="noreferrer" className="flex min-h-12 flex-col items-center justify-center gap-1 text-[10px] font-bold uppercase"><Instagram size={19} className="text-primary"/>Instagram</a></div>

      {selectedImage && <div className="fixed inset-0 z-[80] grid place-items-center bg-overlay p-4" role="dialog" aria-modal="true" aria-label="Fotografia e zmadhuar" onClick={() => setSelectedImage(null)}><Button variant="outline" size="icon" className="absolute right-5 top-5" onClick={() => setSelectedImage(null)} aria-label="Mbyll fotografinë"><X/></Button><img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[86vh] max-w-[92vw] object-contain" onClick={(e) => e.stopPropagation()}/></div>}
    </div>
  );
}