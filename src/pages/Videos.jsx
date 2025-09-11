// src/pages/Videos.jsx
import React from "react";

export default function Videos() {
  const videoList = [
    { id: "8NH4EdE3Mlk", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "7GqhgaV4Q40", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "TJN9W8g5uUo", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "RmYFLTj_1bY", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "o9rHkfs7ao4", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "kS6PFh68rJw", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "8IJ6rdJVdEk", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "lJfLUL3dEYQ", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "UEEiPrUpo88", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "n6uiuwt1fcU", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "LbLdKDkJkfE", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "pANQryZNK8w", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "j94LnXOZulc", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "NDKLp76oyII", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "Dl7MDS3a2Ag", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "CAd1K3GFWao", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "czDFExQMcy0", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "sTXVS72GMZU", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "KpWEY9QAbJ4", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "_F98b4MC79U", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "AWz2T-ejSz4", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "LIvagruQFrk", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "3XkXUwTGBEo", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "7rl8oLJf7vs", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "VJVazVjcB8o", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "cz2GfICXmt0", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "KhIYhzYHOR4", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "oJIGxjY61Tg", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "EKC7FguyUpU", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "Pp1jD6yGIkg", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "BSg-3hBdZG8", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "Zzv4b9FsB6A", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "_jXESFd5Xtw", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
    { id: "gwyJUgYTqKU", description: "News, Current Affairs, Interviews, Top Stories, Sports, Crime, Awami Kathara" },
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
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-4">
              <p className="text-green-900 text-sm line-clamp-3">{video.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
