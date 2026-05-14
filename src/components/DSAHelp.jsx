export default function DSAHelp() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <h1 className="text-2xl font-bold">DSA Roadmap</h1>

      {/* BASICS */}
      <section className="p-4 bg-gray-800 rounded">
        <h2 className="text-xl font-semibold"></h2>

        <p className="text-white-700 mt-2">
  <b>DSA</b> (Data Structures & Algorithms) is a core skill in computer science that helps build efficient, scalable, and optimized solutions for real-world and interview problems.
      </p>
      </section>


      <section className="p-4 bg-gray-800 rounded">
        <h2 className="text-xl font-semibold">Time Complexity</h2>

        <ul className="list-disc ml-6 mt-2">
          <li>O(1) → constant</li>
          <li>O(n) → single loop</li>
          <li>O(n²) → nested loops</li>
          <li>O(log n) → binary search</li>
        </ul>
      </section>


   <section className="p-4 bg-gray-800 rounded">
        <h2 className="text-xl font-semibold">Topics</h2>

        <div className="grid grid-cols-1 gap-2 mt-2">
          <div>Arrays</div>
          <div>Strings</div>
          <div>Linked List</div>
          <div>Stack</div>
          <div>Queue</div>
          <div>Tree</div>
          <div>Graph</div>
          <div>DP</div>
        </div>
      </section>

      {/* PATTERNS */}
      <section className="p-4 bg-gray-800 rounded">
        <h2 className="text-xl font-semibold"> Important Patterns</h2>

        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><b>Sliding Window</b> → substring, subarray problems</li>
          <li><b>Two Pointer</b> → sorted arrays, pair sum</li>
          <li><b>Binary Search</b> → search problems, optimization</li>
          <li><b>Recursion</b> → tree, backtracking</li>
          <li><b>DP</b> → optimization problems</li>
          <li><b>Graph BFS/DFS</b> → traversal problems</li>
        </ul>
      </section>


      {/* PROBLEMS */}
      <section className="p-4 bg-gray-800 rounded">
       {/* PRACTICE PATTERNS */}
<section className="p-4 bg-gray-800 rounded">

  <h2 className="text-xl font-semibold mb-3">
     Practice Patterns
  </h2>

  <ul className="space-y-2 text-sm">

    <li>
      <b>1. Two Pointer Pattern</b>
      <p className="opacity-80">
        Used in sorted arrays, pair sum, removing duplicates
      </p>
    </li>

    <li>
      <b>2. Sliding Window Pattern</b>
      <p className="opacity-80">
        Used in subarray problems, max/min window problems
      </p>
    </li>

    <li>
      <b>3. Binary Search Pattern</b>
      <p className="opacity-80">
        Used in sorted search, rotated arrays, optimization problems
      </p>
    </li>

    <li>
      <b>4. Recursion Pattern</b>
      <p className="opacity-80">
        Used in tree problems, factorial, fibonacci, decision trees
      </p>
    </li>

    <li>
      <b>5. Backtracking Pattern</b>
      <p className="opacity-80">
        Used in permutations, subsets, N-Queens, maze problems
      </p>
    </li>

    <li>
      <b>6. Hashing Pattern</b>
      <p className="opacity-80">
        Used in Two Sum, frequency counting, duplicates
      </p>
    </li>

    <li>
      <b>7. Stack Pattern</b>
      <p className="opacity-80">
        Used in parentheses, expression evaluation, monotonic stack
      </p>
    </li>

    <li>
      <b>8. Graph Pattern (BFS/DFS)</b>
      <p className="opacity-80">
        Used in traversal, shortest path, connected components
      </p>
    </li>

    <li>
      <b>9. Dynamic Programming Pattern</b>
      <p className="opacity-80">
        Used in optimization problems like knapsack, LIS, fibonacci
      </p>
    </li>

  </ul>

</section>
      </section>
    </div>
  );
}