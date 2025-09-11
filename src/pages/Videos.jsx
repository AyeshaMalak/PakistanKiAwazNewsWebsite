// src/pages/Videos.jsx
import React from "react";

export default function Videos() {
  const videoList = [
    { id: "8NH4EdE3Mlk", title: "Breaking News Update", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "7GqhgaV4Q40", title: "Top Stories: Community Highlights", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "TJN9W8g5uUo", title: "Cricket Highlights", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "RmYFLTj_1bY", title: "Health Awareness Campaign", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "o9rHkfs7ao4", title: "Current Affairs Discussion", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "kS6PFh68rJw", title: "Technology & Innovations", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "8IJ6rdJVdEk", title: "Political Debate", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "lJfLUL3dEYQ", title: "Breaking News: National Update", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "UEEiPrUpo88", title: "Exclusive Coverage", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "n6uiuwt1fcU", title: "Community Stories", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "LbLdKDkJkfE", title: "Cultural Programs", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "pANQryZNK8w", title: "Live News Analysis", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "j94LnXOZulc", title: "Special Report", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "NDKLp76oyII", title: "Political Insights", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "Dl7MDS3a2Ag", title: "Economic Updates", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "CAd1K3GFWao", title: "Sports Analysis", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "czDFExQMcy0", title: "Special Interview Segment", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "sTXVS72GMZU", title: "Lifestyle & Culture", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "KpWEY9QAbJ4", title: "Local News Highlights", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "_F98b4MC79U", title: "Breaking National News", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "AWz2T-ejSz4", title: "Daily News Roundup", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "LIvagruQFrk", title: "Political Debates & Opinions", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "3XkXUwTGBEo", title: "Community Awareness", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "7rl8oLJf7vs", title: "Top Headlines", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "VJVazVjcB8o", title: "Sports Highlights", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "cz2GfICXmt0", title: "Exclusive Stories", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "KhIYhzYHOR4", title: "Cultural Highlights", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "oJIGxjY61Tg", title: "Health & Wellness", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "EKC7FguyUpU", title: "Political Updates", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "Pp1jD6yGIkg", title: "Breaking Reports", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "BSg-3hBdZG8", title: "Local Events Coverage", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "Zzv4b9FsB6A", title: "Exclusive Interviews", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "_jXESFd5Xtw", title: "Community Reports", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "gwyJUgYTqKU", title: "National Coverage", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
  ];

  return (
    <div className="px-6 md:px-20 py-12 bg-green-50">
      {/* Page Header */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-2">
            Pakistan Ki Awaz Videos
          </h1>
          <p className="text-green-900 text-lg">
            Watch the latest videos from Daily Pakistan Ki Awaz News HD.
          </p>
        </div>

        <a
          href="https://www.youtube.com/@Dailypakistankiawaznewshdtv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          View More Videos <span className="ml-2 text-xl">→</span>
        </a>
      </div>

      {/* Video Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videoList.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-4">
              <h3 className="text-green-700 font-semibold mb-1">{video.title}</h3>
              <p className="text-green-900 text-sm line-clamp-3">{video.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
