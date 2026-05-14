export default function YoutubeResources() {
  const videos = [
    { title: "DSA Crash Course", url: "https://youtu.be/n60Dn0UsbEk?si=Ma7v31NoKKzQJoeW"},
    { title: "React Full Course", url: "https://youtu.be/3LRZRSIh_KE?si=FF7dthZz1oz7rItC" },
    { title: "Machine Learning Course", url: "https://youtu.be/1L420xXpDTg?si=70mFd_UOKKaFCvxV"},
    { title: "Core CS Subjects Roadmap", url: "https://www.youtube.com/watch?v=U4G5nQZ2qk4"},
    { title: "Cloud Computing", url: "https://www.youtube.com/watch?v=U4G5nQZ2qk4"},
    { title: "System Design", url: "https://youtu.be/AK0hu0Zxua4?si=rMbBZcYNcvGa1Z3G"},
    { title: "SQL and NoSQL Crash Course", url: "https://youtu.be/dmGybCohHsw?si=bjZUQ-a4lNUVno4A"},
    { title: "Big Data", url: "https://youtu.be/Tyg1FVNq40g?si=yl_0YZ6ZUWni_j9n" },
     { title: "Docker", url: "https://youtu.be/Uf6PXnagtsg?si=DYbnPGZfQnuEJogw" },
    { title: "Git and GitHub Tutorial", url: "https://youtu.be/apGV9Kg7ics?si=giJBmsEWOHhFfmUJ"}
  ];

  return (
    <div className="text-white p-4 overflow-y-auto h-full">

      <h2 className="text-2xl font-bold mb-4">
         YouTube Resources
      </h2>

      <div className="space-y-3">

        {videos.map((video, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded shadow flex justify-between items-center"
          >
            <p className="text-white">{video.title}</p>

            <a
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              Watch
            </a>
          </div>
        ))}

      </div>
    </div>
  );
}