import React, { useState } from "react";

export default function PricingFaqs() {
  const faqs = [
    {
      question: "What is One Credit?",
      answer:
        "A credit is a standard unit that equals one successful data operation across our platform. Whether you're discovering prospects, enriching contacts, revealing contact details, or using our API, each successful request costs one credit.",
    },
    {
      question: "How does the free license work?",
      answer:
        "SEO helps improve your website visibility on search engines, drives organic traffic, and increases brand awareness and conversions for your business.",
    },
    {
      question: "Does Nexora integrate with my CRM?",
      answer:
        "SEO is a long-term strategy. Typically, noticeable improvements can take between 3 to 6 months depending on your competition and industry.",
    },
     {
      question: "Is Nexora's data GDPR aligned and CCPA compliant?",
      answer:
        "SEO is a long-term strategy. Typically, noticeable improvements can take between 3 to 6 months depending on your competition and industry.",
    },
    {
      question: "Does Nexora provides multi-year discounts?",
      answer:
        "SEO is a long-term strategy. Typically, noticeable improvements can take between 3 to 6 months depending on your competition and industry.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-start">
          
          {/* Left Side Heading */}
          <div className="col-lg-5">
            <div className="section_title pe-lg-5 mb-5">
             

              <div className="section_main_title1 text-left">
                <h1>Frequently Asked Questions</h1>
              </div>

              {/* <p className="mt-4 text-muted">
                We help businesses grow through modern marketing strategies,
                SEO optimization, and performance-driven digital campaigns.
              </p> */}
            </div>
          </div>

          {/* Right Side FAQs */}
          <div className="col-lg-7">
            <div className="faq-wrapper">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </button>

                  {activeIndex === index && (
                    <div className="faq-answer text-left">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .faq-area {
          background: #fff;
        }

        .section_sub_title1 h6 {
          color: #0d6efd;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .section_main_title1 h1 {
          font-size: 42px;
          line-height: 1.3;
          font-weight: 700;
          color: #111827;
        }

        .faq-wrapper {
          width: 100%;
        }

        .faq-item {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          margin-bottom: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item.active {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
        }

        .faq-question {
          width: 100%;
          padding: 22px 25px;
          background: #fff;
          border: none;
          outline: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          color: #111827;
        }

        .faq-question span {
          font-size: 28px;
          font-weight: 400;
        }

        .faq-answer {
          padding: 0 25px 25px;
        }

        .faq-answer p {
          color: #6b7280;
          line-height: 1.8;
          margin: 0;
        }

        @media (max-width: 991px) {
          .section_main_title1 h1 {
            font-size: 34px;
          }

          .faq-question {
            font-size: 16px;
          }
        }

        @media (max-width: 767px) {
          .faq-area {
            padding: 70px 0;
          }

          .section_main_title1 h1 {
            font-size: 28px;
          }

          .faq-question {
            padding: 18px 20px;
          }

          .faq-answer {
            padding: 0 20px 20px;
          }
        }
      `}</style>
    </div>
  );
}