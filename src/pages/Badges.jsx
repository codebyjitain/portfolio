import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dsaBadges = [
  {
    tier: "Master",
    count: 2,
    image: "https://files.codingninjas.in/sensei-30761.svg",
    categories: {
      dsaTopics: ["Backtracking"],
      guidedPath: ["Pointers"],
    },
  },
  {
    tier: "Specialist",
    count: 5,
    image: "https://files.codingninjas.in/samurai-30760.svg",
    categories: {
      dsaTopics: ["Arrays", "Backtracking", "Binary Trees", "Recursion"],
      guidedPath: ["Pointers"],
    },
  },
  {
    tier: "Achiever",
    count: 8,
    image: "https://files.codingninjas.in/ronin-30759.svg",
    categories: {
      dsaTopics: ["Arrays", "Backtracking", "Binary Trees", "Linked List", "Recursion"],
      guidedPath: ["Pointers"],
    },
  },
  {
    tier: "50 Days Badge 2025",
    count: 1,
    image: "https://assets.leetcode.com/static_assets/others/2550.gif",
    categories: {
      dsaTopics: ["Arrays", "Backtracking", "Binary Trees", "Linked List", "Recursion"],
      guidedPath: ["LeetCode"],
    },
  },
];

const Badges = () => {
  const navigate = useNavigate();
  const totalBadges = dsaBadges.reduce((sum, b) => sum + b.count, 0);

  return (
    <div
      className="w-full min-h-screen px-5 md:px-16 py-12 text-white"
      style={{ background: "var(--background-color)" }}
    >
      <button
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        className="flex items-center gap-2 text-sm mb-10 transition-colors"
        style={{ color: "var(--color-3)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-color)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-3)")}
      >
        <ArrowLeft size={16} /> Back to Portfolio
      </button>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p
              className="text-sm tracking-widest uppercase mb-2"
              style={{ color: "var(--color-3)" }}
            >
              Achievements
            </p>
            <h1 className="text-5xl md:text-6xl font-bold">
              DSA <span className="gradient-text">Badges</span>
            </h1>
          </div>
          <a
            href="https://www.naukri.com/code360/profile/jitain"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-glow flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold flex-shrink-0">
              <ExternalLink size={15} /> View Profile
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Badges", count: totalBadges, color: "var(--text-color)" },
            ...dsaBadges.slice(0, 3).map((b) => ({
              label: b.tier,
              count: b.count,
              color: "var(--text-color)",
            })),
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5 flex flex-col gap-1 text-center">
              <div className="text-3xl font-bold" style={{ color: s.color }}>
                {s.count}
              </div>
              <div className="text-sm" style={{ color: "var(--color-3)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Badge cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dsaBadges.map((badge) => (
            <div
              key={badge.tier}
              className="glass rounded-2xl p-6 flex flex-col gap-5 transition-all hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <img src={badge.image} alt={badge.tier} className="w-20 h-20 object-contain" />
                <h2 className="text-xl font-semibold text-white">{badge.tier}</h2>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "var(--color-3)",
                  }}
                >
                  {badge.count} badge{badge.count > 1 ? "s" : ""} earned
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: "var(--color-3)" }}
                  >
                    DSA Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {badge.categories?.dsaTopics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-3)" }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: "var(--color-3)" }}
                  >
                    Guided Path
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {badge.categories?.guidedPath.map((path) => (
                      <span
                        key={path}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-3)" }}
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Badges;