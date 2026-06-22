import { useEffect, useRef } from "react";
import { ArrowLeft, Github, ExternalLink, Map, Search, Star, Globe, Zap, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: <Search size={18}/>, title: "Smart Destination Search", desc: "Search cities and destinations with autocomplete, powered by third-party geo APIs for accurate results." },
  { icon: <Map size={18}/>, title: "Trip Itinerary Builder", desc: "Users can build day-by-day trip plans, add attractions, and reorder their schedule with drag-and-drop." },
  { icon: <Star size={18}/>, title: "Reviews & Ratings", desc: "Authenticated users can rate destinations and leave detailed reviews — moderated by NestJS guards." },
  { icon: <Globe size={18}/>, title: "SEO-Optimized Pages", desc: "Next.js SSR and SSG ensure every destination page is indexed — fast loads and optimal Lighthouse scores." },
  { icon: <Zap size={18}/>, title: "Fast API Layer", desc: "NestJS backend with modular architecture — controllers, services, and DTOs cleanly separated per feature." },
  { icon: <Database size={18}/>, title: "Persistent Data", desc: "PostgreSQL via TypeORM handles relational trip data — users, trips, destinations, and reviews." },
];

const stack = [
  { label: "Next.js", note: "App Router, SSR, SSG" },
  { label: "NestJS", note: "Modular backend" },
  { label: "TypeORM", note: "ORM layer" },
  { label: "PostgreSQL", note: "Relational DB" },
  { label: "Tailwind CSS", note: "Utility styling" },
  { label: "JWT + Guards", note: "Auth & security" },
  { label: "REST APIs", note: "Clean contracts" },
  { label: "TypeScript", note: "End-to-end typed" },
];

const TrueTripGuideProject = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full min-h-screen px-5 md:px-16 lg:px-24 py-12 text-white"
      style={{ background: "var(--background-color)" }}>

      <button onClick={() => { navigate("/"); window.scrollTo(0,0); }}
        className="flex items-center gap-2 text-sm mb-12 transition-colors"
        style={{ color: "var(--color-3)" }}
        onMouseEnter={e => e.currentTarget.style.color = "var(--text-color)"}
        onMouseLeave={e => e.currentTarget.style.color = "var(--color-3)"}>
        <ArrowLeft size={16} /> Back to Portfolio
      </button>

      <div className="max-w-6xl mx-auto flex flex-col gap-24">

        {/* Hero */}
        <div className="reveal flex flex-col gap-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="tag-pill">Travel</span>
            <span className="tag-pill">Next.js</span>
            <span className="tag-pill">NestJS</span>
            <span className="tag-pill">2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            TrueTripGuide
          </h1>
          <p className="text-3xl md:text-4xl font-light" style={{ color: "var(--text-color)" }}>
            Your Real Travel Companion.
          </p>
          <p className="text-lg max-w-3xl leading-relaxed" style={{ color: "var(--color-3)" }}>
            A full-stack travel web app for discovering destinations, building itineraries,
            and sharing authentic reviews. Built with Next.js for a fast, SEO-ready frontend and
            NestJS for a clean, modular backend — both fully typed in TypeScript.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#" className="btn-glow flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
              <Github size={16} /> GitHub Repo
            </a>
            <a href="#" className="glass flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold hover:text-[var(--text-color)] transition-colors">
              <ExternalLink size={16} /> Live Site
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "Next.js", label: "Frontend", sub: "App Router + SSR" },
            { value: "NestJS", label: "Backend", sub: "Modular Architecture" },
            { value: "TypeScript", label: "Language", sub: "End-to-End" },
            { value: "SSR + SSG", label: "Rendering", sub: "SEO Optimized" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5 flex flex-col gap-1">
              <div className="text-xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm font-medium text-white">{s.label}</div>
              <div className="text-xs" style={{ color: "var(--color-3)" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="reveal flex flex-col gap-8">
          <div>
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "var(--color-3)" }}>What It Does</p>
            <h2 className="text-3xl md:text-4xl font-bold">Core <span className="gradient-text">Features</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="glass rounded-2xl p-6 flex flex-col gap-4 transition-all hover:scale-[1.02]"
                style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,255,136,0.1)", color: "var(--text-color)" }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-3)" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="reveal flex flex-col gap-8">
          <div>
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "var(--color-3)" }}>Built With</p>
            <h2 className="text-3xl md:text-4xl font-bold">Tech <span className="gradient-text">Stack</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stack.map((s, i) => (
              <div key={i} className="glass rounded-xl p-4 flex flex-col gap-1 hover:scale-[1.03] transition-transform">
                <span className="font-semibold text-white text-sm">{s.label}</span>
                <span className="text-xs" style={{ color: "var(--color-3)" }}>{s.note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture highlights */}
        <div className="reveal flex flex-col gap-6">
          <div>
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "var(--color-3)" }}>Engineering</p>
            <h2 className="text-3xl md:text-4xl font-bold">Why <span className="gradient-text">Next.js + NestJS?</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="glass rounded-2xl p-7 flex flex-col gap-4 border-l-2" style={{ borderLeftColor: "var(--text-color)" }}>
              <h3 className="font-bold text-white text-lg">Next.js — Frontend</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-3)" }}>
                App Router enables hybrid rendering — SSG for popular destination pages (blazing fast loads),
                SSR for user-specific content like saved trips. Built-in image optimization and route-level code
                splitting make it production-ready without extra config.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 flex flex-col gap-4 border-l-2" style={{ borderLeftColor: "#60aaff" }}>
              <h3 className="font-bold text-white text-lg">NestJS — Backend</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-3)" }}>
                Modular architecture means each feature (auth, trips, reviews, users) lives in its own
                NestJS module — services, controllers, DTOs. Guards handle JWT validation. TypeORM
                keeps PostgreSQL interactions type-safe and migration-friendly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrueTripGuideProject;
