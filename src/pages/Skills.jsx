import { useEffect, useRef } from "react";

const skills = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    title: "React.js",
    level: 88,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    title: "Next.js",
    level: 78,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    title: "Node.js",
    level: 85,
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    title: "Express.js",
    level: 84,
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_pjo-FuphQ1tuKBRg_q5KlY3kJ-ZcR-RIg&s",
    title: "NestJS",
    level: 72,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    title: "TypeScript",
    level: 75,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    title: "JavaScript",
    level: 87,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    title: "MongoDB",
    level: 80,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    title: "PostgreSQL",
    level: 70,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    title: "Tailwind CSS",
    level: 90,
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    title: "Git / GitHub",
    level: 85,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png",
    title: "Postman",
    level: 88,
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
    title: "Linux",
    level: 72,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    title: "C / C++",
    level: 80,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "Python",
    level: 70,
  },
];

const SkillCard = ({ item, index }) => (
  <div
    className="glass rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,255,136,0.12)] reveal"
    style={{ transitionDelay: `${index * 40}ms` }}
  >
    <div className="flex items-center gap-3">
      <img
        src={item.image}
        alt={item.title}
        className="h-10 w-10 object-contain flex-shrink-0"
      />
      <h3 className="font-semibold text-white text-sm">{item.title}</h3>
    </div>
    {/* Progress bar */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xs text-[var(--color-3)]">Proficiency</span>
        <span className="text-xs text-[var(--text-color)] font-medium">
          {item.level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
        <div
          className="h-full rounded-full skill-bar"
          style={{
            width: `${item.level}%`,
            background: "linear-gradient(90deg, #00ff88, #00cc6a)",
          }}
        />
      </div>
    </div>
  </div>
);

const Skills = () => {
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
      id="skills"
      ref={ref}
      className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-24 flex justify-center"
    >
      <div className="w-full max-w-7xl flex flex-col gap-14">
        <div className="reveal text-center md:text-left">
          <p className="text-[var(--color-3)] text-sm tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h1 className="text-4xl md:text-6xl font-bold section-heading inline-block">
            Core <span className="gradient-text">Skills</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map((item, i) => (
            <SkillCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
