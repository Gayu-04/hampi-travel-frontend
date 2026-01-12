import { useState } from "react";

function Faq() {
  const faqs = [
    {
      question: "How do I book a trip on your website?",
      answer:
        "You can browse available trips, select your preferred package, choose dates, and complete the booking by filling in your details and making a secure payment.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, debit cards, UPI, net banking, and popular digital wallets.",
    },
    {
      question: "Is my payment secure?",
      answer:
        "Yes, all payments are processed through secure and encrypted payment gateways to ensure your data is protected.",
    },
    {
      question: "When will my credit card be charged?",
      answer:
        "Your card will be charged immediately after you complete the booking process.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking depending on the package terms. Please check the cancellation policy for details.",
    },
    {
      question: "What are your cancellation and refund policies?",
      answer:
        "Refunds depend on the cancellation time and package type. Detailed policies are mentioned on each trip page.",
    },
    {
      question: "Do I need a visa to travel to my destination?",
      answer:
        "Visa requirements depend on your nationality and destination. We recommend checking with the relevant embassy before travel.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-2">
      <div className="max-w-2xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            FAQs
          </h1>
          <p className="text-gray-500 text-xs">
            Find answers to common booking and travel questions.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-sky-200 pb-3"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="font-medium text-gray-900 text-sm">
                  {faq.question}
                </h3>

                <span className="text-sky-500 text-base">
                  {openIndex === index ? "˄" : "˅"}
                </span>
              </button>

              {openIndex === index && (
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Faq;
