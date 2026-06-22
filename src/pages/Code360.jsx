import { useState, useEffect } from "react";
import { ArrowLeft, Search, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const solvedProblems = [
  // 3 months ago → Sep 2025
  { name: "Rotate Matrix by 90 Degrees", level: "Medium", date: "2025-09-01" },
  { name: "Set Matrix Zeros", level: "Medium", date: "2025-09-01" },
  { name: "Leaders in an Array", level: "Easy", date: "2025-09-01" },
  { name: "Next Greater Permutation", level: "Medium", date: "2025-09-01" },

  // 4 months ago → Aug 2025
  { name: "Alternate Positive and Negative", level: "Medium", date: "2025-08-01" },
  { name: "Maximum Subarray Sum", level: "Medium", date: "2025-08-01" },
  { name: "Majority Element", level: "Easy", date: "2025-08-01" },
  { name: "Hate Equality", level: "Medium", date: "2025-08-01" },
  { name: "Sort Array of 0s, 1s and 2s", level: "Easy", date: "2025-08-01" },
  { name: "Two Sum", level: "Easy", date: "2025-08-01" },
  { name: "Longest Subarray With Sum K", level: "Medium", date: "2025-08-01" },
  { name: "Intersection Of Two Sorted Arrays", level: "Easy", date: "2025-08-01" },
  { name: "Rotate Array", level: "Easy", date: "2025-08-01" },
  { name: "Left Rotate Array by One", level: "Easy", date: "2025-08-01" },
  { name: "Remove Duplicates from Sorted Array", level: "Easy", date: "2025-08-01" },
  { name: "Check Sorted Array", level: "Easy", date: "2025-08-01" },
  { name: "Second Largest Element in Array", level: "Easy", date: "2025-08-01" },
  { name: "Magic Index", level: "Medium", date: "2025-08-01" },
  { name: "Largest Element in Array", level: "Easy", date: "2025-08-01" },
  { name: "Greatest Common Divisor", level: "Easy", date: "2025-08-01" },
  { name: "Check Prime", level: "Easy", date: "2025-08-01" },
  { name: "Print All Divisors of a Number", level: "Easy", date: "2025-08-01" },
  { name: "Armstrong Number", level: "Easy", date: "2025-08-01" },
  { name: "Palindrome Partitioning", level: "Hard", date: "2025-08-01" },
  { name: "Sudoku Solver", level: "Hard", date: "2025-08-01" },
  { name: "N Queens", level: "Hard", date: "2025-08-01" },
  { name: "Subset Sum", level: "Medium", date: "2025-08-01" },
  { name: "Combination Sum II", level: "Medium", date: "2025-08-01" },
  { name: "Print Subsequences", level: "Medium", date: "2025-08-01" },
  { name: "Palindrome Number", level: "Easy", date: "2025-08-01" },
  { name: "Reverse of a Number", level: "Easy", date: "2025-08-01" },
  { name: "Number of Digits", level: "Easy", date: "2025-08-01" },

  // 8 months ago → Apr 2025
  { name: "Cyclically Rotate Array by One", level: "Easy", date: "2025-04-01" },
  { name: "Find the Lone Set Bit", level: "Easy", date: "2025-04-01" },

  // 9 months ago → Mar 2025
  { name: "Boundary Traversal of Binary Tree", level: "Medium", date: "2025-03-01" },
  { name: "Queue Using Array", level: "Easy", date: "2025-03-01" },
  { name: "Interleave Queue Halves", level: "Medium", date: "2025-03-01" },
  { name: "Reverse First K Elements of Queue", level: "Medium", date: "2025-03-01" },

  // 10 months ago → Feb 2025
  { name: "Reversing Queue", level: "Easy", date: "2025-02-01" },
  { name: "Check If Binary Tree Is Sum Tree", level: "Medium", date: "2025-02-01" },
  { name: "Sort a Stack", level: "Medium", date: "2025-02-01" },
  { name: "Reverse Stack Using Recursion", level: "Medium", date: "2025-02-01" },
  { name: "Insert Element at Bottom of Stack", level: "Medium", date: "2025-02-01" },
  { name: "Valid Parentheses", level: "Easy", date: "2025-02-01" },
  { name: "Delete Middle Element from Stack", level: "Medium", date: "2025-02-01" },
  { name: "Two Stacks", level: "Easy", date: "2025-02-01" },
  { name: "Merge Sort Linked List", level: "Medium", date: "2025-02-01" },
  { name: "Sort Linked List of 0s 1s 2s", level: "Easy", date: "2025-02-01" },
  { name: "Check Identical Trees", level: "Easy", date: "2025-02-01" },
  { name: "Implement Deque", level: "Medium", date: "2025-02-01" },
  { name: "Circular Queue", level: "Easy", date: "2025-02-01" },
  { name: "Implement Queue", level: "Easy", date: "2025-02-01" },
  { name: "Design Stack with getMin()", level: "Hard", date: "2025-02-01" },
  { name: "N Stacks in an Array", level: "Hard", date: "2025-02-01" },
  { name: "Next Smaller Element", level: "Medium", date: "2025-02-01" },
  { name: "Minimum Cost to Make String Valid", level: "Medium", date: "2025-02-01" },
  { name: "Redundant Brackets", level: "Easy", date: "2025-02-01" },

  // 1 year ago → Dec 2024
  { name: "Permutations of a String", level: "Medium", date: "2024-12-01" },
  { name: "Subsequences of String", level: "Medium", date: "2024-12-01" },
  { name: "Quick Sort", level: "Medium", date: "2024-12-01" },
  { name: "Merge Sort", level: "Medium", date: "2024-12-01" },
  { name: "Binary Search", level: "Easy", date: "2024-12-01" },
  { name: "Modular Exponentiation", level: "Medium", date: "2024-12-01" },
  { name: "Print Like a Wave", level: "Easy", date: "2024-12-01" },
  { name: "Replace Spaces", level: "Easy", date: "2024-12-01" },
  { name: "Check Palindrome String", level: "Easy", date: "2024-12-01" },
  { name: "Move Zeroes to End", level: "Easy", date: "2024-12-01" },
  { name: "Merge Two Sorted Arrays", level: "Easy", date: "2024-12-01" },
  { name: "Reverse the Array", level: "Easy", date: "2024-12-01" },
  { name: "Insertion Sort", level: "Easy", date: "2024-12-01" },
  { name: "Bubble Sort", level: "Easy", date: "2024-12-01" },
  { name: "Selection Sort", level: "Easy", date: "2024-12-01" },
  { name: "Search in Rotated Sorted Array", level: "Medium", date: "2024-12-01" },
  { name: "First and Last Position in Sorted Array", level: "Medium", date: "2024-12-01" },
];

const levelConfig = {
  Easy: { bg: "rgba(34,197,94,0.1)", text: "#22c55e", dot: "#22c55e" },
  Medium: { bg: "rgba(234,179,8,0.1)", text: "#eab308", dot: "#eab308" },
  Hard: { bg: "rgba(239,68,68,0.1)", text: "#ef4444", dot: "#ef4444" },
};

const Code360 = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const PER_PAGE = 30;

  const easy = solvedProblems.filter((p) => p.level === "Easy").length;
  const medium = solvedProblems.filter((p) => p.level === "Medium").length;
  const hard = solvedProblems.filter((p) => p.level === "Hard").length;
  const total = solvedProblems.length;

  const filtered = solvedProblems.filter(
    (p) =>
      (filter === "All" || p.level === filter) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );
  const paginated = filtered.slice(0, page * PER_PAGE);
  const hasMore = paginated.length < filtered.length;

  useEffect(() => {
    setPage(1);
  }, [filter, search]);

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
              Competitive Programming
            </p>
            <h1 className="text-5xl md:text-6xl font-bold">
              Code360 <span className="gradient-text">Journey</span>
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
            { label: "Total", count: total, color: "var(--text-color)" },
            { label: "Easy", count: easy, color: "#22c55e" },
            { label: "Medium", count: medium, color: "#eab308" },
            { label: "Hard", count: hard, color: "#ef4444" },
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

        {/* Progress bar */}
        <div className="glass rounded-2xl p-5 flex flex-col gap-3">
          <p className="text-sm" style={{ color: "var(--color-3)" }}>
            Difficulty breakdown
          </p>
          <div className="flex h-2.5 rounded-full overflow-hidden gap-0.5">
            <div
              style={{ width: `${(easy / total) * 100}%`, background: "#22c55e" }}
              className="rounded-l-full"
            />
            <div style={{ width: `${(medium / total) * 100}%`, background: "#eab308" }} />
            <div
              style={{ width: `${(hard / total) * 100}%`, background: "#ef4444" }}
              className="rounded-r-full"
            />
          </div>
          <div className="flex gap-5 text-xs" style={{ color: "var(--color-3)" }}>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#22c55e" }} />
              Easy {Math.round((easy / total) * 100)}%
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#eab308" }} />
              Medium {Math.round((medium / total) * 100)}%
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#ef4444" }} />
              Hard {Math.round((hard / total) * 100)}%
            </span>
          </div>
        </div>

        {/* Filters + Search */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-4 top-1/2 -translate-y-1/2"
              style={{ color: "var(--color-3)" }}
            />
            <input
              type="text"
              placeholder="Search problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full text-sm text-white outline-none glass"
              style={{ background: "rgba(255,255,255,0.03)" }}
            />
          </div>
          <div className="flex gap-2">
            {["All", "Easy", "Medium", "Hard"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: filter === f ? "var(--text-color)" : "rgba(255,255,255,0.04)",
                  color: filter === f ? "#000" : "var(--color-3)",
                  border: filter === f ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p className="text-sm -mt-4" style={{ color: "var(--color-3)" }}>
          Showing {paginated.length} of {filtered.length} problems
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginated.map((problem, i) => {
            const cfg = levelConfig[problem.level];
            return (
              <div
                key={i}
                className="glass rounded-2xl p-5 flex flex-col gap-3 transition-all hover:scale-[1.02]"
              >
                <h2 className="font-medium text-sm text-white leading-snug">{problem.name}</h2>
                <div className="flex items-center justify-between mt-auto">
                  <span
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: cfg.bg, color: cfg.text }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: cfg.dot }} />
                    {problem.level}
                  </span>
                  {problem.date && (
                    <span className="text-xs" style={{ color: "var(--color-3)" }}>
                      {problem.date}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="glass px-8 py-3 rounded-full text-sm font-medium transition-all hover:text-[var(--text-color)]"
              style={{ color: "var(--color-3)" }}
            >
              Load more ({filtered.length - paginated.length} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Code360;