import React from "react";
import faqs from "../data/faq.json";

const FaqSelector = (props) => {
  const { setState, actionProvider } = props;

  const handleFaqSelect = (answer) => {
    actionProvider.handleAnswer(answer);
  };

  return (
    <div className="flex flex-wrap">
      {faqs.map((faq, index) => (
        <button
          key={index}
          className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-1"
          onClick={() => handleFaqSelect(faq.answer)}
        >
          {faq.question}
        </button>
      ))}
    </div>
  );
};

export default FaqSelector;