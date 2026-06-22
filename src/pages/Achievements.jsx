import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, ArrowUpRight, Code } from "lucide-react";

const achievements = [
  {
    title: "LeetCode",
    description: "Solved 100+ problems focused on DSA and problem-solving across arrays, trees, graphs, and DP.",
    technology: ["C++", "Data Structures", "Java"],
    location: "/leetcode",
    stat: "100+",
    statLabel: "Problems",
  },
  {
    title: "Code360 – Coding Ninjas",
    description: "Practised DSA problems and core algorithms through structured, level-based problem sets.",
    technology: ["C++", "Data Structures", "Java"],
    location: "/code360",
    stat: "50+",
    statLabel: "Problems",
  },
  {
    title: "GeeksforGeeks",
    description: "Solved DSA problems and revised core computer science concepts including OS and DBMS.",
    technology: ["C++", "Algorithms", "Java"],
    location: "/gfg",
    stat: "GFG",
    statLabel: "Active",
  },
  {
    title: "Platform Badges",
    description: "Badges earned across coding platforms for consistency, streaks, and performance.",
    technology: ["C++", "Data Structures", "Algorithms"],
    location: "/badges",
    stat: "🏅",
    statLabel: "Earned",
  },
];

const Achievements = () => {
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
    <section id="achievements" ref={ref} className="min-h-screen flex justify-center py-24 px-4">
      <div className="w-full max-w-5xl flex flex-col gap-12">
        <div className="reveal">
          <p className="text-[var(--color-3)] text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
            <Trophy size={14} className="text-[var(--text-color)]" /> Competitive Programming
          </p>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text section-heading inline-block">Achievements</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              onClick={() => { navigate(item.location); window.scrollTo(0, 0); }}
              className="reveal glass rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:scale-[1.02] flex flex-col gap-5"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <div className="text-3xl font-bold gradient-text">{item.stat}</div>
                  <div className="text-xs text-[var(--color-3)]">{item.statLabel}</div>
                </div>
                <ArrowUpRight size={20}
                  className="text-[var(--color-3)] group-hover:text-[var(--text-color)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-1">{item.title}</h2>
                <p className="text-sm text-[var(--color-3)] leading-relaxed">{item.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.technology.map((t, i) => (
                  <span key={i} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
