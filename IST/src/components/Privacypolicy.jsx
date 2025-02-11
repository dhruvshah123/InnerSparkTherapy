/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacypolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p className="text-sm sm:text-base text-gray-700 mb-6">
                At Inner Spark Therapy, protecting your privacy and maintaining the confidentiality of your personal and health information is fundamental to our therapeutic relationship. This privacy policy explains how we collect, use, and protect your information.
              </p>

              <section className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">1. Confidentiality Commitment</h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">We adhere to strict professional standards of confidentiality in accordance with:</p>
                <ul className="list-disc pl-4 sm:pl-6 mb-4 text-sm sm:text-base text-gray-700 space-y-1">
                  <li>Professional psychological practice guidelines</li>
                  <li>Healthcare privacy regulations</li>
                  <li>State and federal privacy laws</li>
                  <li>Professional ethics codes</li>
                </ul>
                <div className="bg-blue-50 p-3 sm:p-4 rounded-md text-sm sm:text-base">
                  <p className="text-blue-800 font-medium">Important Note:</p>
                  <p className="text-blue-700">There are legal limits to confidentiality, such as risk of harm to self or others, which will be discussed during your first session.</p>
                </div>
              </section>

              <section className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">2. Information We Collect</h2>
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">Clinical Information</h3>
                  <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
                    <li>Mental health history</li>
                    <li>Treatment records</li>
                    <li>Session notes</li>
                    <li>Assessment results</li>
                    <li>Treatment plans</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">Administrative Information</h3>
                  <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
                    <li>Contact details</li>
                    <li>Insurance information</li>
                    <li>Emergency contacts</li>
                    <li>Billing records</li>
                    <li>Appointment schedules</li>
                  </ul>
                </div>
              </section>

              {/* Sections 3-7 follow the same responsive pattern */}
              <section className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">3. How We Use Your Information</h2>
                <p className="text-sm sm:text-base text-gray-700 mb-2">Your information is used solely for:</p>
                <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
                  <li>Providing therapeutic services</li>
                  <li>Treatment planning and coordination</li>
                  <li>Billing and payment processing</li>
                  <li>Appointment scheduling</li>
                  <li>Legal and ethical compliance</li>
                  <li>Emergency situations</li>
                </ul>
              </section>

              <section className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">4. Information Sharing</h2>
                <p className="text-sm sm:text-base text-gray-700 mb-2">We may share your information only:</p>
                <ul className="list-disc pl-4 sm:pl-6 mb-4 text-sm sm:text-base text-gray-700 space-y-1">
                  <li>With your explicit written consent</li>
                  <li>For insurance billing purposes</li>
                  <li>In case of emergency or risk of harm</li>
                  <li>When required by law</li>
                  <li>For professional consultation (anonymized)</li>
                </ul>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-md">
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Professional Consultation:</p>
                  <p className="text-gray-700 text-sm sm:text-base">When consulting with colleagues, your identity remains confidential and only necessary details are discussed.</p>
                </div>
              </section>

              <section className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">5. Your Rights</h2>
                <p className="text-sm sm:text-base text-gray-700 mb-2">You have the right to:</p>
                <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
                  <li>Access your records</li>
                  <li>Request corrections to your information</li>
                  <li>Receive an accounting of disclosures</li>
                  <li>Request restrictions on information sharing</li>
                  <li>Obtain a copy of your records</li>
                  <li>File a complaint about privacy practices</li>
                </ul>
              </section>

              <section className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">6. Security Measures</h2>
                <p className="text-sm sm:text-base text-gray-700 mb-2">We protect your information through:</p>
                <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
                  <li>Encrypted electronic health records</li>
                  <li>Secure messaging systems</li>
                  <li>Limited access to authorized personnel</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Secure disposal of records</li>
                  <li>Staff training on privacy procedures</li>
                </ul>
              </section>

              <section className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">7. Contact Information</h2>
                <p className="text-sm sm:text-base text-gray-700">For privacy-related questions or concerns:</p>
                <p className="text-sm sm:text-base text-gray-700">Email: <a href="mailto:coach@innersparktherapy.com" className="text-blue-600 hover:text-blue-800">coach@innersparktherapy.com</a></p>
                <p className="text-sm sm:text-base text-gray-700">Phone: +91 703 9972 867</p>
              </section>

              <section className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Updates to Privacy Policy:</h2>
                <p className="text-sm sm:text-base text-gray-700 mb-2">We may update this privacy policy periodically. Any changes will be posted on this page with a revised "Last Updated" date.</p>
                <p className="text-sm sm:text-base text-gray-600 italic">Last Updated: March 14, 2024</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacypolicy;