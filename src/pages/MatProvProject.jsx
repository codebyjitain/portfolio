import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Github, ExternalLink, BookOpen, FileText, Search, Upload, Users, Layout } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: <BookOpen size={18}/>, title: "Subject-Wise Material", desc: "Study content organized by subject, topic, and difficulty — students go straight to what they need." },
  { icon: <FileText size={18}/>, title: "Notes & PDFs", desc: "Upload and access handwritten notes, PDFs, and reference documents across all subjects." },
  { icon: <Search size={18}/>, title: "Quick Search", desc: "Instant search across all material — find any topic, chapter, or resource in seconds." },
  { icon: <Upload size={18}/>, title: "Contributor Uploads", desc: "Verified contributors can upload new material — admin-reviewed before going live." },
  { icon: <Users size={18}/>, title: "Role-Based Access", desc: "Students, contributors, and admins each see a different interface with appropriate permissions." },
  { icon: <Layout size={18}/>, title: "Clean Reader UI", desc: "Distraction-free reading mode for PDFs and notes — built for actual study sessions." },
];

const subjects = [
  "Data Structures", "Algorithms", "DBMS", "Operating Systems",
  "Computer Networks", "System Design", "OOP", "Mathematics",
];

const stack = [
  { label: "React", note: "Component UI" },
  { label: "Node.js", note: "Server runtime" },
  { label: "Express.js", note: "REST API" },
  { label: "MongoDB", note: "Document store" },
  { label: "Tailwind CSS", note: "Styling" },
  { label: "Multer", note: "File uploads" },
  { label: "JWT", note: "Auth" },
  { label: "Cloudinary", note: "Media storage" },
];

const MatProvProject = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [activeSubject, setActiveSubject] = useState(0);

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
            <span className="tag-pill">EdTech</span>
            <span className="tag-pill">Study Material</span>
            <span className="tag-pill">MERN Stack</span>
            <span className="tag-pill">2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            MatProv
          </h1>
          <p className="text-3xl md:text-4xl font-light" style={{ color: "var(--text-color)" }}>
            Study smarter, not harder.
          </p>
          <p className="text-lg max-w-3xl leading-relaxed" style={{ color: "var(--color-3)" }}>
            A study material platform built for CS students — organized by subject, searchable, and
            contributor-powered. Notes, PDFs, and reference material in one clean place.
            No clutter. No paywalls. Just solid content.
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
            { value: "MERN", label: "Stack", sub: "Full-Stack" },
            { value: "3", label: "User Roles", sub: "Student · Contributor · Admin" },
            { value: "PDFs", label: "Material Type", sub: "Notes + Docs" },
            { value: "Free", label: "Access Model", sub: "Open to Students" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5 flex flex-col gap-1">
              <div className="text-xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm font-medium text-white">{s.label}</div>
              <div className="text-xs" style={{ color: "var(--color-3)" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Subject browser mockup */}
        <div className="reveal flex flex-col gap-8">
          <div>
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "var(--color-3)" }}>Content Structure</p>
            <h2 className="text-3xl md:text-4xl font-bold">Organized by <span className="gradient-text">Subject</span></h2>
          </div>
          <div className="glass rounded-2xl p-6 flex flex-col gap-6">
            {/* Subject chips */}
            <div className="flex flex-wrap gap-2">
              {subjects.map((s, i) => (
                <button key={i} onClick={() => setActiveSubject(i)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    background: activeSubject === i ? "var(--text-color)" : "rgba(255,255,255,0.04)",
                    color: activeSubject === i ? "#000" : "var(--color-3)",
                    border: activeSubject === i ? "none" : "1px solid rgba(255,255,255,0.08)",
                  }}>
                  {s}
                </button>
              ))}
            </div>
            {/* Mock content preview */}
            <div className="rounded-xl p-5" style={{ background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.1)" }}>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={18} style={{ color: "var(--text-color)" }} />
                <span className="font-semibold text-white">{subjects[activeSubject]}</span>
                <span className="tag-pill ml-auto">12 resources</span>
              </div>
              <div className="flex flex-col gap-2">
                {["Chapter Notes (PDF)", "Previous Year Questions", "Quick Reference Sheet", "Video Links"].map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-4 py-3 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="flex items-center gap-3">
                      <FileText size={14} style={{ color: "var(--color-3)" }} />
                      <span className="text-sm text-white">{item}</span>
                    </div>
                    <span className="text-xs" style={{ color: "var(--text-color)" }}>Download</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="reveal flex flex-col gap-8">
          <div>
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "var(--color-3)" }}>What It Does</p>
            <h2 className="text-3xl md:text-4xl font-bold">Core <span className="gradient-text">Features</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="glass rounded-2xl p-6 flex flex-col gap-4 transition-all hover:scale-[1.02]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
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

        {/* Problem it solves */}
        <div className="reveal glass rounded-2xl p-8 md:p-10 flex flex-col gap-5">
          <p className="text-sm tracking-widest uppercase" style={{ color: "var(--text-color)" }}>The Problem</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Why build this?</h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-3)" }}>
            Study material for CS subjects is scattered — half on YouTube, half in random Google Drive links,
            and the rest buried in Telegram groups. MatProv centralizes everything: organized by subject,
            searchable, and maintained by a contributor system so content stays fresh. Built specifically
            with GATE and university exam prep in mind.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MatProvProject;
