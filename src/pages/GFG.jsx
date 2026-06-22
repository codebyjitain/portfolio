import { useState, useEffect } from "react";
import { ArrowLeft, Search, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const solvedProblems = [
  // ---------- EASY (24) ----------
  { name: "Reverse a linked list", level: "Easy" },
  { name: "Inorder Traversal", level: "Easy" },
  { name: "Height of Binary Tree", level: "Easy" },
  { name: "Balanced Tree Check", level: "Easy" },
  { name: "Left View of Binary Tree", level: "Easy" },
  { name: "DFS of Graph", level: "Easy" },
  { name: "BFS of graph", level: "Easy" },
  { name: "Identical Trees", level: "Easy" },
  { name: "Reverse first K of a Queue", level: "Easy" },
  { name: "Reverse an Array", level: "Easy" },
  { name: "Array Leaders", level: "Easy" },
  { name: "Parenthesis Checker", level: "Easy" },
  { name: "Missing in Array", level: "Easy" },
  { name: "Sorted and Rotated Minimum", level: "Easy" },
  { name: "Search in a Row-Column sorted matrix", level: "Easy" },
  { name: "Move All Zeroes to End", level: "Easy" },
  { name: "Second Largest", level: "Easy" },
  { name: "Two Sum - Pair with Given Sum", level: "Easy" },
  { name: "Number of occurrence", level: "Easy" },
  { name: "Stock Buy and Sell – Max one Transaction Allowed", level: "Easy" },
  { name: "Count Pairs whose sum is less than target", level: "Easy" },
  { name: "Search in a row-wise sorted matrix", level: "Easy" },
  { name: "Find Only Repetitive Element from 1 to n-1", level: "Easy" },
  { name: "Unique Number I", level: "Easy" },

  // ---------- MEDIUM (40) ----------
  { name: "Merge Sort", level: "Medium" },
  { name: "Quick Sort", level: "Medium" },
  { name: "Bottom View of Binary Tree", level: "Medium" },
  { name: "Diameter of a Binary Tree", level: "Medium" },
  { name: "Sum Tree", level: "Medium" },
  { name: "Tree Boundary Traversal", level: "Medium" },
  { name: "LCA in Binary Tree", level: "Medium" },
  { name: "The Celebrity Problem", level: "Medium" },
  { name: "Gas Station", level: "Medium" },
  { name: "Rat in a Maze", level: "Medium" },
  { name: "Top View of Binary Tree", level: "Medium" },
  { name: "Level order traversal", level: "Medium" },
  { name: "Maximum path sum", level: "Medium" },
  { name: "Sum of nodes on the longest path", level: "Medium" },
  { name: "Kth Ancestor in a Tree", level: "Medium" },
  { name: "ZigZag Tree Traversal", level: "Medium" },
  { name: "Maximum Non-Adjacent Nodes Sum", level: "Medium" },
  { name: "Smallest Positive Missing", level: "Medium" },
  { name: "Rotate Array", level: "Medium" },
  { name: "Kadane's Algorithm", level: "Medium" },
  { name: "Count Inversions", level: "Medium" },
  { name: "Union of 2 Sorted Arrays", level: "Medium" },
  { name: "Merge Without Extra Space", level: "Medium" },
  { name: "Spirally traversing a matrix", level: "Medium" },
  { name: "Search in a sorted Matrix", level: "Medium" },
  { name: "Rotate by 90 degree", level: "Medium" },
  { name: "Longest Consecutive Subsequence", level: "Medium" },
  { name: "Rotten Oranges", level: "Medium" },
  { name: "Stock Buy and Sell – Multiple Transaction Allowed", level: "Medium" },
  { name: "Sort 0s, 1s and 2s", level: "Medium" },
  { name: "Maximum Product Subarray", level: "Medium" },
  { name: "k largest elements", level: "Medium" },
  { name: "Next Permutation", level: "Medium" },
  { name: "Stream First Non-repeating", level: "Medium" },
  { name: "Flood fill Algorithm", level: "Medium" },
  { name: "Overlapping Intervals", level: "Medium" },
  { name: "Majority Element - More Than n/3", level: "Medium" },
  { name: "Set Matrix Zeros", level: "Medium" },
  { name: "Count pairs with given sum", level: "Medium" },
  { name: "Connected Components in an Undirected Graph", level: "Medium" },

  // ---------- HARD (Remaining) ----------
  { name: "Clone List with Next and Random", level: "Hard" },
  { name: "Max Circular Subarray Sum", level: "Hard" },
  { name: "Solve the Sudoku", level: "Hard" },
  { name: "Burning Tree", level: "Hard" },
  { name: "Count Reverse Pairs", level: "Hard" },
];

const levelConfig = {
  Easy: { bg: "rgba(34,197,94,0.1)", text: "#22c55e", dot: "#22c55e" },
  Medium: { bg: "rgba(234,179,8,0.1)", text: "#eab308", dot: "#eab308" },
  Hard: { bg: "rgba(239,68,68,0.1)", text: "#ef4444", dot: "#ef4444" },
};

const GFG = () => {
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
              GeeksforGeeks <span className="gradient-text">Journey</span>
            </h1>
          </div>
          <a href="https://www.geeksforgeeks.org/profile/jitain" target="_blank" rel="noreferrer">
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

export default GFG;