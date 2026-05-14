export default function PlacementPlan() {

  // 🔥 DSA TOPICS
  const dsaTopics = [
    {
      name: "Arrays & Strings",
      link: "https://www.youtube.com/results?search_query=arrays+and+strings+dsa+full+course"
    },
    {
      name: "Sliding Window",
      link: "https://www.youtube.com/results?search_query=sliding+window+pattern+dsa"
    },
    {
      name: "Binary Search",
      link: "https://www.youtube.com/results?search_query=binary+search+algorithm+full+course"
    },
    {
      name: "Recursion & Backtracking",
      link: "https://www.youtube.com/results?search_query=recursion+backtracking+dsa"
    },
    {
      name: "Linked List, Stack, Queue",
      link: "https://www.youtube.com/results?search_query=linked+list+stack+queue+dsa"
    },
    {
      name: "Dynamic Programming",
      link: "https://www.youtube.com/results?search_query=dynamic+programming+dsa+full+course"
    }
  ];

  // 📊 APTITUDE
  const aptitudeTopics = [
    {
      name: "Percentages & Profit/Loss",
      link: "https://www.youtube.com/results?search_query=aptitude+percentage+profit+loss"
    },
    {
      name: "Time & Work",
      link: "https://www.youtube.com/results?search_query=time+and+work+aptitude"
    },
    {
      name: "Time, Speed & Distance",
      link: "https://www.youtube.com/results?search_query=speed+time+distance+aptitude"
    },
    {
      name: "Probability & Permutation",
      link: "https://www.youtube.com/results?search_query=probability+permutation+aptitude"
    },
    {
      name: "Data Interpretation",
      link: "https://www.youtube.com/results?search_query=data+interpretation+aptitude"
    }
  ];

  // 🖥 CORE SUBJECTS
  const coreSubjects = [
    {
      name: "Operating Systems",
      link: "https://www.youtube.com/results?search_query=operating+system+full+course"
    },
    {
      name: "DBMS (SQL, Normalization)",
      link: "https://www.youtube.com/results?search_query=dbms+sql+normalization+full+course"
    },
    {
      name: "Computer Networks",
      link: "https://www.youtube.com/results?search_query=computer+networks+full+course"
    },
    {
      name: "OOP Concepts (Java/C++)",
      link: "https://www.youtube.com/results?search_query=oop+concepts+java+cpp+full+course"
    }
  ];

  // 🤖 AI TOOLS
  const aiTools = [
    {
      name: "ChatGPT / Gemini API",
      link: "https://www.youtube.com/results?search_query=gemini+api+chatgpt+api+tutorial"
    },
    {
      name: "Hugging Face Models",
      link: "https://www.youtube.com/results?search_query=huggingface+transformers+tutorial"
    },
    {
      name: "GitHub Copilot",
      link: "https://www.youtube.com/results?search_query=github+copilot+tutorial"
    },
    {
      name: "Perplexity AI",
      link: "https://www.youtube.com/results?search_query=perplexity+ai+tutorial"
    }
  ];

  // 🚀 TECHNOLOGIES
  const technologies = [
    {
      name: "Artificial Intelligence (AI)",
      link: "https://www.youtube.com/results?search_query=generative+ai+gpt+gemini+explained"
    },
    {
      name: "Machine Learning",
      link: "https://www.youtube.com/results?search_query=machine+learning+scikit+learn+full+course"
    },
    {
      name: "Deep Learning",
      link: "https://www.youtube.com/results?search_query=pytorch+deep+learning+full+course"
    },
    {
      name: "Cloud Computing",
      link: "https://www.youtube.com/results?search_query=aws+azure+gcp+full+course"
    },
    {
      name: "Programming Languages",
      link: "https://www.youtube.com/results?search_query=python+java+c+full+course"
    },
    {
      name: "Mobile Development",
      link: "https://www.youtube.com/results?search_query=flutter+kotlin+full+course"
    },
    {
      name: "DevOps",
      link: "https://www.youtube.com/results?search_query=docker+kubernetes+devops+full+course"
    },
    {
      name: "Databases",
      link: "https://www.youtube.com/results?search_query=postgresql+mongodb+full+course"
    },
    {
      name: "Version Control",
      link: "https://www.youtube.com/results?search_query=git+github+full+course"
    }
  ];

  // 🎤 MOCK INTERVIEW
  const mockInterview = [
    {
      name: "Self Introduction Practice",
      link: "https://www.youtube.com/results?search_query=how+to+introduce+yourself+in+interview"
    },
    {
      name: "DSA Problem Solving",
      link: "https://www.youtube.com/results?search_query=dsa+interview+questions+practice"
    },
    {
      name: "HR Questions",
      link: "https://www.youtube.com/results?search_query=hr+interview+questions+answers"
    },
    {
      name: "System Design Basics",
      link: "https://www.youtube.com/results?search_query=system+design+basics"
    },
    {
      name: "Project Explanation",
      link: "https://www.youtube.com/results?search_query=how+to+explain+project+in+interview"
    }
  ];

  // 🔥 reusable UI
  const renderList = (items) => (
    <ul className="list-disc ml-6 mt-2">
      {items.map((item) => (
        <li
          key={item.name}
          className="cursor-pointer text-blue-400 hover:underline"
          onClick={() => window.open(item.link, "_blank")}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="text-white p-4">

      <h2 className="text-3xl font-bold mb-6">
        Placement Preparation Roadmap
      </h2>

      {/* APTITUDE */}
      <div className="bg-gray-700 p-4 rounded mb-4">
        <h3 className="text-xl font-bold">Aptitude</h3>
        {renderList(aptitudeTopics)}
      </div>

      {/* DSA */}
      <div className="bg-gray-700 p-4 rounded mb-4">
        <h3 className="text-xl font-bold">DSA</h3>
        {renderList(dsaTopics)}
      </div>

      {/* CORE */}
      <div className="bg-gray-700 p-4 rounded mb-4">
        <h3 className="text-xl font-bold">Core Subjects</h3>
        {renderList(coreSubjects)}
      </div>

      {/* AI TOOLS */}
      <div className="bg-gray-700 p-4 rounded mb-4">
        <h3 className="text-xl font-bold">AI Tools</h3>
        {renderList(aiTools)}
      </div>

      {/* TECHNOLOGIES */}
      <div className="bg-gray-700 p-4 rounded mb-4">
        <h3 className="text-xl font-bold">Technologies & Trends</h3>
        {renderList(technologies)}
      </div>

      {/* MOCK INTERVIEW */}
      <div className="bg-gray-700 p-4 rounded mb-4">
        <h3 className="text-xl font-bold">Mock Interview</h3>
        {renderList(mockInterview)}
      </div>

    </div>
  );
}