import React, { useState } from "react";
import {right} from "../../assets/icons"

const faqData = [
  {
    question: "What is Eventeev?",
    answer:
      "Eventeev is a comprehensive platform for managing events, including ticketing, check-ins, and more.",
  },
  {
    question:
      "Do I need to pay to Instapay even when there is no transaction going on in my business?",
    answer:
      "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!",
  },
  {
    question: "What platforms does ACME payment gateway support?",
    answer:
      "ACME supports a wide range of platforms including online stores, mobile apps, and more.",
  },
  {
    question: "Does ACME provide international payments support?",
    answer:
      "Yes, ACME supports international payments, allowing you to accept payments from customers around the world.",
  },
  {
    question:
      "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
    answer:
      "No, there are no setup fees or annual maintenance fees. You only pay per transaction.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setVisibleCount(faqData.length);
    setShowMore(false);
  };

  const handleShowLess = () => {
    setVisibleCount(3);
    setShowMore(true);
  };

  return (
    <div className=" px-5 md:px-10 lg:px-28 ">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row  md:relative">
        {/* Questions List */}
        <div className="w-full md:w-1/2 md:z-50">
          <ul>
            {faqData.slice(0, visibleCount).map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex justify-between items-center p-4 mb-2 rounded-lg ${
                  activeIndex === index
                    ? "bg-[#FAFBFF] text-orange-600 font-bold"
                    : "bg-white text-gray-700"
                }`}
              >
                {item.question}<img src={right} alt="icon" />
              </li>
            ))}
          </ul>
          {showMore && faqData.length > visibleCount && (
            <button
              onClick={handleShowMore}
              className="text-orange-600 font-bold mt-4"
            >
              See More
            </button>
          )}
          {!showMore && (
            <button
              onClick={handleShowLess}
              className="text-orange-600 font-bold mt-4"
            >
              See Less
            </button>
          )}
        </div>

        {/* Answer Display */}
        <div className="w-full md:w-1/2 p-4 bg-[#FAFBFF] md:absolute md:-z-40 right-0 h-full rounded-lg shadow-md md:ml-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {faqData[activeIndex].question}
          </h3>
          <p className="text-gray-700">{faqData[activeIndex].answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
