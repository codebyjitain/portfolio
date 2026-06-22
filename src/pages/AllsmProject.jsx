import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Github, ExternalLink, Shield, ShoppingCart, BarChart3, Package, Users, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stack = [
  {
    category: "Frontend",
    icon: "⚛️",
    items: ["React", "Vite", "Tailwind CSS", "Redux Toolkit", "React Router", "Axios"],
    color: "rgba(0,255,136,0.08)",
    borderColor: "rgba(0,255,136,0.2)",
  },
  {
    category: "Backend",
    icon: "🔧",
    items: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    color: "rgba(100,180,255,0.08)",
    borderColor: "rgba(100,180,255,0.2)",
  },
  {
    category: "Security & Tools",
    icon: "🔒",
    items: ["bcrypt", "Helmet", "CORS", "Multer", "Postman"],
    color: "rgba(180,120,255,0.08)",
    borderColor: "rgba(180,120,255,0.2)",
  },
];

const userFeatures = [
  { icon: <Lock size={16}/>, text: "JWT-based authentication & protected routes" },
  { icon: <Package size={16}/>, text: "Product browsing with search and filters" },
  { icon: <ShoppingCart size={16}/>, text: "Cart, wishlist, and checkout flow" },
  { icon: <Users size={16}/>, text: "Profile management & order history" },
];

const ownerFeatures = [
  { icon: <Shield size={16}/>, text: "Secure role-based owner authentication" },
  { icon: <Package size={16}/>, text: "Full product CRUD with image upload" },
  { icon: <BarChart3 size={16}/>, text: "Inventory & stock level management" },
  { icon: <ShoppingCart size={16}/>, text: "Order tracking and payment status" },
];

const AllsmProject = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState("user");

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

      {/* Back button */}
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
          <div className="flex items-center gap-3">
            <span className="tag-pill">E-Commerce</span>
            <span className="tag-pill">Full-Stack</span>
            <span className="tag-pill">2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            ALLSM <br />
            <span className="gradient-text">E-Commerce Platform</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed" style={{ color: "var(--color-3)" }}>
            A full-stack dual-panel e-commerce platform — one side for customers, one for store owners.
            Built on clean REST architecture with role-based access, scalable MongoDB schemas,
            and a component-driven React frontend.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://github.com/codebyjitain/AllSM.git" className="btn-glow flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
              <Github size={16} /> GitHub Repo
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "2", label: "User Roles", sub: "Customer + Owner" },
            { value: "REST", label: "API Architecture", sub: "Clean & Scalable" },
            { value: "JWT", label: "Auth System", sub: "Secure Routes" },
            { value: "2025", label: "Year Built", sub: "Production Ready" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5 flex flex-col gap-1">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm font-medium text-white">{s.label}</div>
              <div className="text-xs" style={{ color: "var(--color-3)" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Features with tabs */}
        <div className="reveal flex flex-col gap-8">
          <div>
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "var(--color-3)" }}>Features</p>
            <h2 className="text-3xl md:text-4xl font-bold">Dual-Panel <span className="gradient-text">Architecture</span></h2>
          </div>

          {/* Tab switcher */}
          <div className="flex gap-2 glass rounded-full p-1.5 w-fit">
            {["user", "owner"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all capitalize"
                style={{
                  background: activeTab === tab ? "var(--text-color)" : "transparent",
                  color: activeTab === tab ? "#000" : "var(--color-3)",
                }}>
                {tab === "user" ? "👤 Customer" : "🏪 Owner"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(activeTab === "user" ? userFeatures : ownerFeatures).map((f, i) => (
              <div key={i} className="glass rounded-xl p-5 flex items-start gap-4 transition-all hover:scale-[1.02]">
                <div className="mt-0.5 flex-shrink-0" style={{ color: "var(--text-color)" }}>{f.icon}</div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-3)" }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="reveal flex flex-col gap-8">
          <div>
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "var(--color-3)" }}>Built With</p>
            <h2 className="text-3xl md:text-4xl font-bold">Tech <span className="gradient-text">Stack</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {stack.map((s, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col gap-4 border"
                style={{ background: s.color, borderColor: s.borderColor }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-semibold text-white text-lg">{s.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item, j) => (
                    <span key={j} className="tag-pill">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="reveal flex flex-col gap-6">
          <div>
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "var(--color-3)" }}>Design</p>
            <h2 className="text-3xl md:text-4xl font-bold">Architecture & <span className="gradient-text">Decisions</span></h2>
          </div>
          <div className="glass rounded-2xl p-8 flex flex-col gap-6">
            {[
              { title: "Role-Based Access Control", body: "Owner and Customer routes are completely separated with JWT middleware. Unauthorized access is blocked at the API level — not just the frontend." },
              { title: "Scalable MongoDB Schemas", body: "Product, User, and Order collections are designed for real-world scale — indexed fields, ref-based population, and status tracking built into the schema." },
              { title: "Component-Driven Frontend", body: "React components are reusable and state is managed via Redux Toolkit, keeping UI logic predictable and easy to extend." },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start border-b last:border-0 pb-6 last:pb-0"
                style={{ borderColor: "rgba(0,255,136,0.08)" }}>
                <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-sm font-bold"
                  style={{ background: "rgba(0,255,136,0.1)", color: "var(--text-color)" }}>
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-3)" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllsmProject;
