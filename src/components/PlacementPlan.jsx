export default function PlacementPlan() {

  // 🔥 FULL ROADMAP (DYNAMIC + STRUCTURED)
  const roadmap = {
    Aptitude: {
      "Quantitative Aptitude": [
        {
          name: "Percentages",
          link: "https://www.youtube.com/results?search_query=percentage+aptitude+tricks"
        },
        {
          name: "Profit & Loss",
          link: "https://www.youtube.com/results?search_query=profit+and+loss+aptitude"
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
          name: "Simple & Compound Interest",
          link: "https://www.youtube.com/results?search_query=compound+interest+aptitude"
        },
        {
          name: "Ratio & Proportion",
          link: "https://www.youtube.com/results?search_query=ratio+proportion+aptitude"
        }
      ],

      "Logical Reasoning": [
        {
          name: "Number Series",
          link: "https://www.youtube.com/results?search_query=number+series+reasoning"
        },
        {
          name: "Coding-Decoding",
          link: "https://www.youtube.com/results?search_query=coding+decoding+reasoning"
        },
        {
          name: "Blood Relations",
          link: "https://www.youtube.com/results?search_query=blood+relation+reasoning"
        },
        {
          name: "Syllogism",
          link: "https://www.youtube.com/results?search_query=syllogism+reasoning"
        },
        {
          name: "Direction Sense",
          link: "https://www.youtube.com/results?search_query=direction+sense+reasoning"
        },
        {
          name: "Seating Arrangement",
          link: "https://www.youtube.com/results?search_query=seating+arrangement+reasoning"
        }
      ],

      "Verbal Ability": [
        {
          name: "Reading Comprehension",
          link: "https://www.youtube.com/results?search_query=reading+comprehension+verbal+ability"
        },
        {
          name: "Synonyms & Antonyms",
          link: "https://www.youtube.com/results?search_query=synonyms+antonyms+english"
        },
        {
          name: "Sentence Correction",
          link: "https://www.youtube.com/results?search_query=sentence+correction+english"
        },
        {
          name: "Fill in the Blanks",
          link: "https://www.youtube.com/results?search_query=fill+in+the+blanks+english"
        },
        {
          name: "Para Jumbles",
          link: "https://www.youtube.com/results?search_query=para+jumbles+english"
        }
      ]
    },

    DSA: [
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
    ],

    "Core Subjects": [
      {
        name: "Operating Systems",
        link: "https://www.youtube.com/results?search_query=operating+system+full+course"
      },
      {
        name: "DBMS",
        link: "https://www.youtube.com/results?search_query=dbms+sql+normalization+full+course"
      },
      {
        name: "Computer Networks",
        link: "https://www.youtube.com/results?search_query=computer+networks+full+course"
      },
      {
        name: "OOP Concepts",
        link: "https://www.youtube.com/results?search_query=oop+concepts+java+cpp+full+course"
      }
    ],

    "AI Tools": [
      {
        name: "ChatGPT / Gemini API",
        link: "https://www.youtube.com/results?search_query=gemini+api+chatgpt+api+tutorial"
      },
      {
        name: "Hugging Face",
        link: "https://www.youtube.com/results?search_query=huggingface+transformers+tutorial"
      },
      {
        name: "GitHub Copilot",
        link: "https://www.youtube.com/results?search_query=github+copilot+tutorial"
      }
    ],

    Technologies: [
      {
        name: "Artificial Intelligence",
        link: "https://www.youtube.com/results?search_query=generative+ai+gpt+gemini+explained"
      },
      {
        name: "Machine Learning",
        link: "https://www.youtube.com/results?search_query=machine+learning+full+course"
      },
      {
        name: "Cloud Computing",
        link: "https://www.youtube.com/results?search_query=aws+azure+gcp+full+course"
      },
      {
        name: "DevOps",
        link: "https://www.youtube.com/results?search_query=docker+kubernetes+devops+full+course"
      }
    ],

    "Mock Interview": [
      {
        name: "Self Introduction",
        link: "https://www.youtube.com/results?search_query=how+to+introduce+yourself+in+interview"
      },
      {
        name: "DSA Interview Questions",
        link: "https://www.youtube.com/results?search_query=dsa+interview+questions+practice"
      },
      {
        name: "HR Questions",
        link: "https://www.youtube.com/results?search_query=hr+interview+questions+answers"
      }
    ]
  };

  // 🔥 RENDER FUNCTION (HANDLES BOTH SIMPLE + NESTED)
  const renderList = (data) => {

    // if nested (Aptitude)
    if (!Array.isArray(data)) {
      return Object.entries(data).map(([sub, items]) => (
        <div key={sub} className="mt-4">
          <h4 className="text-yellow-300 font-semibold">
            {sub}
          </h4>

          <ul className="list-disc ml-6 mt-2 space-y-1">
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
        </div>
      ));
    }

    // normal sections
    return (
      <ul className="list-disc ml-6 mt-2 space-y-1">
        {data.map((item) => (
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
  };

  return (
    <div className="text-white p-4">

      <h2 className="text-3xl font-bold mb-6">
        Placement Preparation Roadmap
      </h2>

      {Object.entries(roadmap).map(([section, data]) => (
        <div key={section} className="bg-gray-700 p-4 rounded mb-4">

          <h3 className="text-xl font-bold mb-2">
            {section}
          </h3>

          {renderList(data)}

        </div>
      ))}

    </div>
  );
}