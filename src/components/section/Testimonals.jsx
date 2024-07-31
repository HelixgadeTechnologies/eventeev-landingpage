import React from "react";
import { helixgade, gdg, olotu, mark, quote } from '../../assets/icons'
const testimonials = [
//   {
//     icon: helixgade,
//     quote:
//       "Since using Eventeev, our events run like clockwork. The chat-ticketing feature is a huge hit, and the games and polls add a fun element that keeps everyone involved. We've seen a significant increase in attendee engagement, and our team feels much more organized. Thanks for making event planning enjoyable again!",
//     name: "Floyd Miles",
//     title: "Vice President, GoPro",
//   },
  {
    icon: gdg,
    quote:
      "Eventeev has been a game-changer for our conferences. We can see which sessions were most popular, what topics sparked the most conversation during polls, and how attendees connected through the matchmaking feature.",
    name: "Jane Cooper",
    title: "Program Manager, GDG Port Harcourt",
  },
  {
    icon: olotu,
    quote:
      "Before Eventeev, our events felt impersonal. We've seen a remarkable increase in attendee satisfaction and a stronger sense of community at our events. It's truly rewarding to see people making genuine connections.",
    name: "Kristin Watson",
    title: "Co-Founder, Strapli",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:pb-0 px-5 relative bg-[#D93F1661]">
      <img
        src={quote}
        className="absolute lg:ml-[50px] -z-30 opacity-40"
        alt="icon"
      />
      <div className=" mb-12 z-50 md:mx-5 md:pt-10 lg:w-[400px] lg:ml-[150px] lg:absolute top-28">
        <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-gray-900">
          Real Stories from Real Customers
        </h2>
        <p className="text-gray-600 mt-2 md:text-lg">
          Get inspired by these stories.
        </p>
      </div>

      <aside className="lg:flex lg:tems-center lg:mx-[100px]  lg:pt-32">
        <div className="bg-white p-6 rounded-lg lg:place-self-center shadow-md md:mx-5   mb-8">
          <img src={helixgade} className="mb-8" />

          <div>
            <blockquote className="text-gray-600 flex gap-3 italic mb-4">
              <img src={mark} className="place-self-start" alt="icon" />" Since
              using Eventeev, our events run like clockwork. The chat-ticketing
              feature is a huge hit, and the games and polls add a fun element
              that keeps everyone involved. We've seen a significant increase in
              attendee engagement, and our team feels much more organized.
              Thanks for making event planning enjoyable again!"
            </blockquote>
            <div className="ml-7">
              <p className="font-bold text-gray-900">Floyd Miles</p>
              <p className="text-gray-500 text-sm">Vice President, GoPro</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:mx-5 md:flex-wrap md:justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md  ">
              <img src={testimonial.icon} className="mb-8" />

              <div>
                <blockquote className="text-gray-600 flex gap-3 italic mb-4">
                  <img src={mark} className="place-self-start" alt="icon" />"
                  {testimonial.quote}"
                </blockquote>
                <div className="ml-7">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Testimonials;
