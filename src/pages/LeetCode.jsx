import { useState,  useEffect } from "react";
import { ArrowLeft, Search, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const solvedProblems = [
  { name: "Check If All 1's Are at Least Length K Places Away", level: "Easy", date: "2024-11-17" },
  { name: "Minimum Time to Make Rope Colorful", level: "Medium", date: "2024-11-03" },
  { name: "Smallest Number With All Set Bits", level: "Easy", date: "2024-10-29" },
  { name: "Number of Laser Beams in a Bank", level: "Medium", date: "2024-10-27" },
  { name: "Simple Bank System", level: "Medium", date: "2024-10-26" },
  { name: "Final Value of Variable After Performing Operations", level: "Easy", date: "2024-10-20" },
  { name: "Maximize Alternating Sum Using Swaps", level: "Hard", date: "2024-09-27" },
  { name: "Distinct Points Reachable After Substring Removal", level: "Medium", date: "2024-09-27" },
  { name: "Climbing Stairs II", level: "Medium", date: "2024-09-27" },
  { name: "Majority Frequency Characters", level: "Easy", date: "2024-09-27" },
  { name: "Largest Triangle Area", level: "Easy", date: "2024-09-27" },
  { name: "Valid Triangle Number", level: "Medium", date: "2024-09-26" },
  { name: "Triangle", level: "Medium", date: "2024-09-25" },
  { name: "Fraction to Recurring Decimal", level: "Medium", date: "2024-09-24" },
  { name: "Compare Version Numbers", level: "Medium", date: "2024-09-23" },
  { name: "Count Elements With Maximum Frequency", level: "Easy", date: "2024-09-22" },
  { name: "Design Movie Rental System", level: "Hard", date: "2024-09-21" },
  { name: "Number of Provinces", level: "Medium", date: "2024-09-20" },
  { name: "Implement Router", level: "Medium", date: "2024-09-20" },
  { name: "Strictly Palindromic Number", level: "Medium", date: "2024-09-19" },
  { name: "Design Spreadsheet", level: "Medium", date: "2024-09-19" },
  { name: "Design Task Manager", level: "Medium", date: "2024-09-18" },
  { name: "Design a Food Rating System", level: "Medium", date: "2024-09-17" },
  { name: "Replace Non-Coprime Numbers in Array", level: "Hard", date: "2024-09-16" },
  { name: "4Sum", level: "Medium", date: "2024-09-15" },
  { name: "Maximum Number of Words You Can Type", level: "Easy", date: "2024-09-15" },
  { name: "Binary Tree Level Order Traversal", level: "Medium", date: "2024-09-14" },
  { name: "3Sum", level: "Medium", date: "2024-09-13" },
  { name: "Majority Element II", level: "Medium", date: "2024-09-07" },
  { name: "Pascal's Triangle II", level: "Easy", date: "2024-09-07" },
  { name: "Pascal's Triangle", level: "Easy", date: "2024-09-07" },
  { name: "Subarray Sum Equals K", level: "Medium", date: "2024-09-07" },
  { name: "Spiral Matrix", level: "Medium", date: "2024-09-06" },
  { name: "Rotate Image", level: "Medium", date: "2024-09-06" },
  { name: "Set Matrix Zeroes", level: "Medium", date: "2024-09-05" },
  { name: "Longest Consecutive Sequence", level: "Medium", date: "2024-09-04" },
  { name: "Next Permutation", level: "Medium", date: "2024-09-04" },
  { name: "Find Closest Person", level: "Easy", date: "2024-09-04" },
  { name: "Palindrome Partitioning", level: "Medium", date: "2024-09-01" },
  { name: "Sudoku Solver", level: "Hard", date: "2024-08-31" },
  { name: "N-Queens", level: "Hard", date: "2024-08-29" },
  { name: "Permutations", level: "Medium", date: "2024-08-28" },
  { name: "Subsets II", level: "Medium", date: "2024-08-28" },
  { name: "Subsets", level: "Medium", date: "2024-08-28" },
  { name: "Combination Sum II", level: "Medium", date: "2024-08-28" },
  { name: "Sort Matrix by Diagonals", level: "Medium", date: "2024-08-28" },
  { name: "Combination Sum", level: "Medium", date: "2024-08-27" },
  { name: "Rearrange Array Elements by Sign", level: "Medium", date: "2024-08-27" },
  { name: "Maximum Subarray", level: "Medium", date: "2024-08-27" },
  { name: "Majority Element", level: "Easy", date: "2024-08-27" },
  { name: "Diagonal Traverse", level: "Medium", date: "2024-08-25" },
  { name: "Sort Colors", level: "Medium", date: "2024-08-25" },
  { name: "Two Sum", level: "Easy", date: "2024-08-25" },
  { name: "Single Number II", level: "Medium", date: "2024-08-25" },
  { name: "Single Number", level: "Easy", date: "2024-08-25" },
  { name: "Max Consecutive Ones", level: "Easy", date: "2024-08-25" },
  { name: "Missing Number", level: "Easy", date: "2024-08-25" },
  { name: "Intersection of Two Arrays", level: "Easy", date: "2024-08-24" },
  { name: "Move Zeroes", level: "Easy", date: "2024-08-24" },
  { name: "Rotate Array", level: "Medium", date: "2024-08-24" },
  { name: "Remove Duplicates from Sorted Array", level: "Easy", date: "2024-08-23" },
  { name: "Maximum 69 Number", level: "Easy", date: "2024-08-16" },
  { name: "Fruits Into Baskets II", level: "Easy", date: "2024-08-05" },
  { name: "Search in a Binary Search Tree", level: "Easy", date: "2024-03-26" },
  { name: "Flatten Binary Tree to Linked List", level: "Medium", date: "2024-03-26" },
  { name: "Construct Binary Tree from Inorder and Postorder Traversal", level: "Medium", date: "2024-03-20" },
  { name: "Construct Binary Tree from Preorder and Inorder Traversal", level: "Medium", date: "2024-03-20" },
  { name: "Lowest Common Ancestor of a Binary Tree", level: "Medium", date: "2024-03-19" },
  { name: "Binary Tree Right Side View", level: "Medium", date: "2024-03-18" },
  { name: "Vertical Order Traversal of a Binary Tree", level: "Hard", date: "2024-03-16" },
  { name: "Add Two Numbers", level: "Medium", date: "2024-03-12" },
  { name: "Maximum Count of Positive Integer and Negative Integer", level: "Easy", date: "2024-03-12" },
  { name: "Binary Tree Zigzag Level Order Traversal", level: "Medium", date: "2024-03-11" },
  { name: "Check if Number is a Sum of Powers of Three", level: "Medium", date: "2024-03-04" },
  { name: "Partition Array According to Given Pivot", level: "Medium", date: "2024-03-03" },
  { name: "Same Tree", level: "Easy", date: "2024-03-01" },
  { name: "Balanced Binary Tree", level: "Easy", date: "2024-03-01" },
  { name: "Diameter of Binary Tree", level: "Easy", date: "2024-02-27" },
  { name: "Maximum Depth of Binary Tree", level: "Easy", date: "2024-02-27" },
  { name: "Largest Rectangle in Histogram", level: "Hard", date: "2024-02-17" },
  { name: "Maximal Rectangle", level: "Hard", date: "2024-02-17" },
  { name: "Merge Two Sorted Lists", level: "Easy", date: "2024-12-26" },
  { name: "Remove Duplicates from Sorted List", level: "Easy", date: "2024-12-25" },
  { name: "Linked List Cycle II", level: "Medium", date: "2024-12-24" },
  { name: "Linked List Cycle", level: "Easy", date: "2024-12-24" },
  { name: "Reverse Linked List", level: "Easy", date: "2024-12-21" },
  { name: "Number of 1 Bits", level: "Easy", date: "2024-08-08" },
  { name: "Subtract the Product and Sum of Digits of an Integer", level: "Easy", date: "2024-08-08" },
  { name: "Make Two Arrays Equal by Reversing Subarrays", level: "Easy", date: "2024-08-03" },
  { name: "Number of Senior Citizens", level: "Easy", date: "2024-08-01" },
  { name: "Find if Digit Game Can Be Won", level: "Easy", date: "2024-07-28" },
  { name: "Sort an Array", level: "Medium", date: "2024-07-25" },
  { name: "Middle of the Linked List", level: "Easy", date: "2024-07-24" },
  { name: "Sort the People", level: "Easy", date: "2024-07-22" },
  { name: "Merge Strings Alternately", level: "Easy", date: "2024-07-19" },
  { name: "Lucky Numbers in a Matrix", level: "Easy", date: "2024-07-19" },
  { name: "Crawler Log Folder", level: "Easy", date: "2024-07-10" },
  { name: "Average Waiting Time", level: "Medium", date: "2024-07-09" },
  { name: "Median of Two Sorted Arrays", level: "Hard", date: "2024-07-05" },
  { name: "Letter Combinations of a Phone Number", level: "Medium", date: "2024-07-02" },
  { name: "Intersection of Two Arrays II", level: "Easy", date: "2024-07-02" },
  { name: "Minimum Number of Moves to Seat Everyone", level: "Easy", date: "2024-06-13" },
  { name: "Relative Sort Array", level: "Easy", date: "2024-06-12" },
  { name: "Score of a String", level: "Easy", date: "2024-06-02" },
  { name: "Reverse String", level: "Easy", date: "2024-06-02" },
  { name: "Count Primes", level: "Medium", date: "2024-06-02" },
  { name: "Search a 2D Matrix II", level: "Medium", date: "2024-06-01" },
  { name: "Search a 2D Matrix", level: "Medium", date: "2024-06-01" },
  { name: "Remove All Occurrences of a Substring", level: "Medium", date: "2024-04-19" },
  { name: "Valid Palindrome", level: "Easy", date: "2024-04-19" },
  { name: "Find All Duplicates in an Array", level: "Medium", date: "2024-03-20" },
  { name: "Unique Number of Occurrences", level: "Easy", date: "2024-03-19" },
  { name: "Sqrt(x)", level: "Easy", date: "2024-03-18" },
  { name: "Power of Two", level: "Easy", date: "2024-03-03" },
  { name: "Complement of Base 10 Integer", level: "Easy", date: "2024-03-03" },
  { name: "Reverse Integer", level: "Medium", date: "2024-03-03" },
  { name: "Palindrome Number", level: "Easy", date: "2024-02-02" },
];

const levelConfig = {
  Easy:   { bg: "rgba(34,197,94,0.1)",  text: "#22c55e", dot: "#22c55e" },
  Medium: { bg: "rgba(234,179,8,0.1)",  text: "#eab308", dot: "#eab308" },
  Hard:   { bg: "rgba(239,68,68,0.1)",  text: "#ef4444", dot: "#ef4444" },
};

const LeetCode = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const PER_PAGE = 30;

  const easy   = solvedProblems.filter(p => p.level === "Easy").length;
  const medium = solvedProblems.filter(p => p.level === "Medium").length;
  const hard   = solvedProblems.filter(p => p.level === "Hard").length;
  const total  = solvedProblems.length;

  const filtered = solvedProblems.filter(p =>
    (filter === "All" || p.level === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const paginated = filtered.slice(0, page * PER_PAGE);
  const hasMore = paginated.length < filtered.length;

  useEffect(() => { setPage(1); }, [filter, search]);

  return (
    <div className="w-full min-h-screen px-5 md:px-16 py-12 text-white" style={{ background: "var(--background-color)" }}>
      <button onClick={() => { navigate("/"); window.scrollTo(0,0); }}
        className="flex items-center gap-2 text-sm mb-10 transition-colors"
        style={{ color: "var(--color-3)" }}
        onMouseEnter={e => e.currentTarget.style.color = "var(--text-color)"}
        onMouseLeave={e => e.currentTarget.style.color = "var(--color-3)"}>
        <ArrowLeft size={16} /> Back to Portfolio
      </button>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "var(--color-3)" }}>Competitive Programming</p>
            <h1 className="text-5xl md:text-6xl font-bold">
              LeetCode <span className="gradient-text">Journey</span>
            </h1>
          </div>
          <a href="https://leetcode.com/u/jitain6d/" target="_blank">
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
              <div className="text-3xl font-bold" style={{ color: s.color }}>{s.count}</div>
              <div className="text-sm" style={{ color: "var(--color-3)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="glass rounded-2xl p-5 flex flex-col gap-3">
          <p className="text-sm" style={{ color: "var(--color-3)" }}>Difficulty breakdown</p>
          <div className="flex h-2.5 rounded-full overflow-hidden gap-0.5">
            <div style={{ width: `${(easy/total)*100}%`, background: "#22c55e" }} className="rounded-l-full" />
            <div style={{ width: `${(medium/total)*100}%`, background: "#eab308" }} />
            <div style={{ width: `${(hard/total)*100}%`, background: "#ef4444" }} className="rounded-r-full" />
          </div>
          <div className="flex gap-5 text-xs" style={{ color: "var(--color-3)" }}>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full inline-block" style={{ background: "#22c55e" }} />Easy {Math.round(easy/total*100)}%</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full inline-block" style={{ background: "#eab308" }} />Medium {Math.round(medium/total*100)}%</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full inline-block" style={{ background: "#ef4444" }} />Hard {Math.round(hard/total*100)}%</span>
          </div>
        </div>

        {/* Filters + Search */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--color-3)" }} />
            <input type="text" placeholder="Search problems..." value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full text-sm text-white outline-none glass"
              style={{ background: "rgba(255,255,255,0.03)" }} />
          </div>
          <div className="flex gap-2">
            {["All", "Easy", "Medium", "Hard"].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: filter === f ? "var(--text-color)" : "rgba(255,255,255,0.04)",
                  color: filter === f ? "#000" : "var(--color-3)",
                  border: filter === f ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}>
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
              <div key={i} className="glass rounded-2xl p-5 flex flex-col gap-3 transition-all hover:scale-[1.02]">
                <h2 className="font-medium text-sm text-white leading-snug">{problem.name}</h2>
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: cfg.bg, color: cfg.text }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: cfg.dot }} />
                    {problem.level}
                  </span>
                  {problem.date && (
                    <span className="text-xs" style={{ color: "var(--color-3)" }}>{problem.date}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center">
            <button onClick={() => setPage(p => p + 1)}
              className="glass px-8 py-3 rounded-full text-sm font-medium transition-all hover:text-[var(--text-color)]"
              style={{ color: "var(--color-3)" }}>
              Load more ({filtered.length - paginated.length} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeetCode;