"use client";
import React, { useEffect, useState } from "react";

const FaqSelector = ({ setState, actionProvider }) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const stripHtml = (htmlString) => {
    return htmlString.replace(/<[^>]*>/g, "").trim();
  };

  const handleFaqSelect = (answer) => {
    const cleanAnswer = stripHtml(answer);
    actionProvider.handleAnswer(cleanAnswer);
  };

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const res = await fetch("https://petrofund.org/portal/api/faqs");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (!data || !Array.isArray(data.data)) {
          throw new Error("Invalid API response format");
        }

        setFaqs(data.data);
      } catch (err) {
        setError(err.message || "Failed to fetch FAQs");
      } finally {
        setLoading(false);
      }
    }

    fetchFaqs();
  }, []);

  if (loading) {
    return <p className="text-gray-600 p-2">Loading FAQs...</p>;
  }

  if (error) {
    return <p className="text-red-500 p-2">Error: {error}</p>;
  }

  if (faqs.length === 0) {
    return (
      <p className="text-gray-700 p-2">
        No frequently asked questions available at the moment.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap">
      {faqs.map((faq) => (
        <button
          key={faq.id}
          className="bg-white border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5 m-1 hover:bg-gray-100 transition"
          onClick={() => handleFaqSelect(faq.answer)}
        >
          {faq.question}
        </button>
      ))}
    </div>
  );
};

export default FaqSelector;
