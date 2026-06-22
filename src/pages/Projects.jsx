import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";

const projects = [
  {
    title: "TrueTripGuide – Travel Companion",
    description:
      "Full-stack travel web app for discovering destinations, building itineraries, and sharing authentic reviews.",
    technology: ["Next.js", "NestJS", "PostgreSQL", "TypeORM", "TypeScript"],
    year: "2025",
    link: "/truetripguide",
    color: "#00ccff",
  },
  {
    title: "MatProv – Study Material Platform",
    description:
      "EdTech platform for CS students to access organized notes, PDFs, and reference material by subject.",
    technology: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    year: "2025",
    link: "/matprov",
    color: "#88ffcc",
  },
  {
    title: "ALLSM – E-commerce Platform",
    description:
      "Full-stack e-commerce platform for browsing products, managing carts, and completing secure online purchases.",
    technology: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    year: "2025",
    link: "/allsm",
    color: "#00ff88",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex flex-col items-center py-24 px-4"
    >
      <div className="w-full max-w-5xl flex flex-col gap-12">
        <div className="reveal">
          <p className="text-[var(--color-3)] text-sm tracking-widest uppercase mb-3">
            Selected Work
          </p>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text section-heading inline-block">
            Projects
          </h1>
        </div>

        <div className="flex flex-col divide-y divide-[rgba(255,255,255,0.05)]">
          {projects.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(item.link);
                window.scrollTo(0, 0);
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="reveal group cursor-pointer py-8 px-4 rounded-xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.02)]"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Index */}
                <div
                  className="text-4xl font-bold tabular-nums transition-colors duration-300"
                  style={{
                    color:
                      hovered === index ? item.color : "rgba(255,255,255,0.08)",
                    minWidth: "3rem",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Main */}
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl md:text-2xl font-semibold group-hover:text-white transition-colors">
                      {item.title}
                    </h2>
                    <ArrowUpRight
                      size={18}
                      className="text-[var(--color-3)] group-hover:text-[var(--text-color)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <p className="text-[var(--color-3)] text-sm leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>

                {/* Tech + Year */}
                <div className="flex flex-col gap-3 md:items-end">
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {item.technology.map((t, i) => (
                      <span key={i} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-3)]">
                    <Calendar size={12} />
                    {item.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
