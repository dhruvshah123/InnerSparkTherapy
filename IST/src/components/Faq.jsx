/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Mail, Phone, HelpCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Faq = () => {
  const faqs = [
    {
      question: "What is therapy and how can it help me?",
      answer: `Therapy is a collaborative process between you and a trained professional to help you address personal challenges, improve mental health, and achieve personal growth. It can help with:

      • Managing anxiety, depression, and stress
      • Improving relationships and communication
      • Processing trauma or life transitions
      • Developing coping strategies
      • Building self-awareness and confidence
      • Working through grief and loss`
    },
    {
      question: "How long does each therapy session last?",
      answer: "Standard therapy sessions are 50 minutes long, known as a 'therapeutic hour.' We also offer extended 80-minute sessions for couples therapy or more intensive work when needed."
    },
    {
      question: "How often will I need to attend therapy?",
      answer: "The frequency of sessions varies based on individual needs. Most clients start with weekly sessions and adjust the frequency as they progress. We'll work together to determine the best schedule for your situation."
    },
    {
      question: "Is everything I say in therapy confidential?",
      answer: `Yes, our services are strictly confidential and protected by law. However, there are a few specific exceptions where therapists are legally required to break confidentiality:

      • If there is imminent risk of harm to yourself or others
      • In cases of suspected child, elder, or dependent adult abuse
      • If required by a court order
      • When you provide written permission to share information`
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept several major insurance providers and can provide documentation for out-of-network reimbursement. Please contact our office with your insurance information, and we'll verify your coverage and explain any applicable copays or deductibles."
    },
    {
      question: "What happens in the first therapy session?",
      answer: `Your first session, also called an intake session, focuses on:

      • Getting to know each other and building rapport
      • Discussing what brings you to therapy
      • Reviewing your personal history and current concerns
      • Setting initial goals for therapy
      • Answering any questions you have about the process
      • Creating a preliminary treatment plan`
    },
    {
      question: "Can I switch therapists if I don't feel it's a good fit?",
      answer: "Absolutely. The therapeutic relationship is crucial for successful therapy. If you feel your current therapist isn't the right match, we'll help you transition to another therapist in our practice. There's no obligation to continue with a therapist if you don't feel comfortable."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section */}
      <div className="bg-white border-b w-full px-4 sm:px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <Link to='/' className="flex items-center text-gray-600 hover:text-gray-900 text-sm sm:text-base">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-2">Find answers to common questions about our therapy services.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl w-full px-4 py-8">
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border p-6">
          <div className="text-center">
            <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">We're here to help. Contact us through any of these channels:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ContactMethod icon={<Mail />} title="Email Us" contact="coach@innersparktherapy.com" />
              <ContactMethod icon={<Phone />} title="Call Us" contact="+91 703 9972 867" />
              <ContactMethod icon={<MessageCircle />} title="Live Chat" contact="Available 9 AM - 6 PM" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Item Component with accordion functionality
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg border p-4 hover:border-blue-200 transition-all">
      <button className="w-full flex items-center justify-between focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'mt-3' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
      </div>
    </div>
  );
};

// Contact Method Component
const ContactMethod = ({ icon, title, contact }) => (
  <div className="p-4 text-center bg-gray-50 rounded-lg">
    <div className="inline-block p-3 bg-blue-50 rounded-full text-blue-500 mb-3">{icon}</div>
    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-gray-600">{contact}</p>
  </div>
);

export default Faq;
