// src/pages/Videos.jsx
import React from "react";

export default function Videos() {
  const videoList = [
    { id: "lJfLUL3dEYQ", title: "Breaking News: National Update", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "o9rHkfs7ao4", title: "Current Affairs Discussion", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "7GqhgaV4Q40", title: "Top Stories: Community Highlights", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "TJN9W8g5uUo", title: "Cricket Highlights", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "RmYFLTj_1bY", title: "Health Awareness Campaign", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "kS6PFh68rJw", title: "Technology & Innovations", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "NDKLp76oyII", title: "Political Insights", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "bRgLsczHpxo", title: "Crime Reports", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "gx4wfN1CFJ0", title: "Exclusive Interviews", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "h6f2xSEJDe4", title: "Culture & Lifestyle", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "uAWwRjt3ZYk", title: "Awami Kathara", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
  ];

  return (
    <div className="px-6 md:px-20 py-12 bg-green-50">
      {/* Page Header with View More */}
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
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoList.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allowFullScreen
              className="w-full"
            ></iframe>

            <div className="p-4">
              <h3 className="text-green-700 font-semibold mb-2">{video.title}</h3>
              <p className="text-green-900 text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
