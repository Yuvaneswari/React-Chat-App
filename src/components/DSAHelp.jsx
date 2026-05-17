export default function DSAHelp() {


  const roadmap = [
    {
      title: "What is DSA?",
      description:
        "DSA (Data Structures & Algorithms) is the foundation of programming interviews and efficient problem solving.",
      points: [
        "Data Structure = Organizing data efficiently",
        "Algorithm = Step-by-step problem solving method",
        "Used in real systems like Google, Amazon, etc."
      ]
    },

    {
      title: "Time & Space Complexity",
      description:
        "Used to measure how fast and efficient your code is.",
      points: [
        "O(1) → constant time (fastest)",
        "O(log n) → binary search type problems",
        "O(n) → single loop",
        "O(n²) → nested loops (avoid if possible)",
        "Space complexity = memory usage"
      ]
    },

    {
      title: "Core Data Structures",
      points: [
        "Arrays → fixed size, fast access",
        "Strings → character manipulation",
        "Linked List → dynamic memory",
        "Stack → LIFO (undo, recursion)",
        "Queue → FIFO (scheduling)",
        "Tree → hierarchical structure",
        "Graph → network problems",
        "Heap → priority handling",
        "HashMap → fast lookup"
      ]
    },

    {
      title: "Important DSA Patterns",
      points: [
        "Two Pointer → sorted arrays, pair problems",
        "Sliding Window → substring / subarray optimization",
        "Binary Search → sorted search & optimization",
        "Recursion → tree, backtracking problems",
        "Backtracking → permutations, subsets",
        "Greedy → local optimal choice",
        "Dynamic Programming → overlapping subproblems",
        "Graph BFS/DFS → traversal problems"
      ]
    },

    {
      title: "Interview Problem Types",
      points: [
        "Array manipulation (Two Sum, Kadane’s Algorithm)",
        "String problems (palindrome, anagram)",
        "Linked List problems (reverse, cycle detection)",
        "Tree problems (traversals, LCA)",
        "Graph problems (shortest path, components)",
        "DP problems (knapsack, LIS)",
        "Stack problems (valid parentheses, monotonic stack)"
      ]
    },

    {
      title: "How to Study DSA (Roadmap)",
      points: [
        "Step 1: Learn basics (arrays, loops)",
        "Step 2: Learn patterns (two pointer, sliding window)",
        "Step 3: Solve easy LeetCode problems",
        "Step 4: Move to medium level problems",
        "Step 5: Practice daily (consistency > speed)",
        "Step 6: Revise patterns weekly"
      ]
    }
  ];

  return (
    <div className="p-4 bg-gray-900 text-white space-y-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold">
         Complete DSA Roadmap
      </h1>

      {/* 🔥 DYNAMIC RENDER */}
      {roadmap.map((section, i) => (
        <div
          key={i}
          className="bg-gray-800 p-4 rounded shadow"
        >
          <h2 className="text-xl font-semibold mb-2">
            {section.title}
          </h2>

          {section.description && (
            <p className="text-gray-300 mb-2">
              {section.description}
            </p>
          )}

          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            {section.points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  );
}