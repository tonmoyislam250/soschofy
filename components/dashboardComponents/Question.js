import React, { useState } from "react";

const Question = () => {
  const [question, setQuestion] = useState("");

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Question submitted:", question);
    setQuestion(""); // Clear the input field after submission
  };

  return (
    <div className="bg-slate-100 min-h-screen p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-slate-900 text-center mb-10">
        Ask a Question
      </h1>

      {/* Question Form */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          Have a question? Ask here!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={question}
            onChange={handleQuestionChange}
            rows="4"
            className="w-full p-4 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-indigo-300"
            placeholder="Type your question here..."
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Submit Question
          </button>
        </form>
      </div>

      {/* Popular Questions */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Popular Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">
              How do I submit a lost item report?
            </h3>
            <p className="mt-2 text-slate-700">
              To submit a lost item, go to the "Submit Lost Item" section, fill out the form, and submit the details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">
              How do I claim a found item?
            </h3>
            <p className="mt-2 text-slate-700">
              You can claim a found item by visiting the "Found Items" section and following the steps outlined for item recovery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">
              What should I do if I find a lost item?
            </h3>
            <p className="mt-2 text-slate-700">
              If you find a lost item, you can submit it using the "Submit Found Item" form. Provide as much detail as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Search for Answers */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Search for Answers</h2>
        <input
          type="text"
          className="w-full p-4 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-indigo-300"
          placeholder="Search for a question..."
        />
      </section>
    </div>
  );
};

export default Question;
