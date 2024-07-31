import React from "react";
import { ticket, check, chats, speaker, analytics, games } from '../../assets/icons'

const features = [
  {
    icon: ticket,
    title: "Ticketing",
    description:
      "Create a buzz and streamline entry with an interactive ticketing system",
  },
  {
    icon: check,
    title: "Event Check-in",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    icon: games,
    title: "Games and Polls",
    description: "Create interactive polls and QnA on live sessions",
  },
  {
    icon: speaker,
    title: "Speaker Profile",
    description:
      "Speaker's detailed information for sessions with their socials",
  },
  {
    icon: analytics,
    title: "Analytics",
    description:
      "Gain actionable insights with comprehensive analytics to optimize future events",
  },
  {
    icon: chats,
    title: "Chats / Matchmaking",
    description: "1:1 messaging and meeting to increase attendee engagement.",
  },
];

const Features = () => {
  return (
    <section className="px-5 md:px-10 lg:px-28  bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Tailor-made features
        </h2>
        <p className="text-gray-600 mt-2">
          From seamless ticketing to real-time insights, Eventeev empowers you
          to create unforgettable experiences for both organizers and attendees.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={feature.icon} className="w-12 h-12 mb-4 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
