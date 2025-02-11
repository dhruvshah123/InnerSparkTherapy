/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <Link
            to='/' 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Terms and Conditions</h1>
            
            <div className="space-y-6 sm:space-y-8">
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">1. Nature of Services</h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3">Inner Spark Therapy provides psychological consultation services, including:</p>
                <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
                  <li>Individual psychological counseling</li>
                  <li>Couples therapy</li>
                  <li>Family counseling</li>
                  <li>Online consultation sessions</li>
                  <li>Mental health assessment and support</li>
                </ul>
                <div className="mt-3 bg-yellow-50 p-3 sm:p-4 rounded-md">
                  <p className="text-sm sm:text-base text-yellow-800">Note: Our services do not constitute emergency mental health services. If you're experiencing a mental health emergency, please contact emergency services or visit your nearest emergency room.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">2. Professional Relationship</h2>
                <p className="text-sm sm:text-base text-gray-700">The therapeutic relationship is professional and not social. Contact will be limited to paid therapeutic sessions. Your therapist will not engage with clients on social media or in social settings to maintain professional boundaries and protect your confidentiality.</p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">3. Confidentiality</h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3">Your privacy is protected by professional ethics and law. However, there are legal limits to confidentiality:</p>
                <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
                  <li>Risk of harm to self or others</li>
                  <li>Suspected abuse of children, elderly, or vulnerable adults</li>
                  <li>Court order or legal requirement</li>
                  <li>Insurance billing requirements (if applicable)</li>
                  <li>Professional consultation (details remain anonymous)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">4. Session Policies</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">Session Duration</h3>
                    <p className="text-sm sm:text-base text-gray-700">Standard sessions are 50 minutes long. Extended sessions may be arranged when necessary.</p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">Cancellation Policy</h3>
                    <p className="text-sm sm:text-base text-gray-700">24-hour notice is required for cancellations. Late cancellations or missed sessions will be charged at the full session rate.</p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">Online Sessions</h3>
                    <p className="text-sm sm:text-base text-gray-700">Clients are responsible for ensuring they have a private space and stable internet connection for online sessions.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">5. Fees and Payment</h2>
                <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
                  <li>Payment is required at the time of service</li>
                  <li>Accepted payment methods include credit cards and bank transfers</li>
                  <li>Insurance claims are the client's responsibility</li>
                  <li>Fee adjustments require prior arrangement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">6. Communication</h2>
                <div className="bg-blue-50 p-3 sm:p-4 rounded-md">
                  <p className="font-medium text-blue-800 mb-2">Important Notice:</p>
                  <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-blue-700 space-y-1">
                    <li>Email and text messages are for scheduling only</li>
                    <li>Therapeutic advice is not provided via email or text</li>
                    <li>Response time may be up to 24 business hours</li>
                    <li>For emergencies, contact emergency services or crisis hotline</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">7. Client Rights</h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3">As a client, you have the right to:</p>
                <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
                  <li>Receive respectful and ethical treatment</li>
                  <li>Understand your treatment plan and progress</li>
                  <li>Ask questions about therapeutic methods</li>
                  <li>Decline any therapeutic suggestions</li>
                  <li>Request referrals to other professionals</li>
                  <li>End therapy at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">8. Therapeutic Process</h2>
                <p className="text-sm sm:text-base text-gray-700">Therapy may involve discussing difficult aspects of your life and you might experience uncomfortable feelings. Changes in relationships or beliefs may occur. While therapy often leads to better relationships and solutions to specific problems, there are no guarantees of what you will experience.</p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">9. Record Keeping</h2>
                <p className="text-sm sm:text-base text-gray-700">Professional records are maintained in accordance with legal and ethical requirements. Records are kept secure and confidential. You have the right to request a copy of your records, though we may provide a summary instead when appropriate.</p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">10. Termination</h2>
                <p className="text-sm sm:text-base text-gray-700">Either party may terminate therapy at any time. We recommend at least one final session to review progress and discuss any referrals that might be needed.</p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">11. Contact Information</h2>
                <p className="text-lg sm:text-xl font-medium text-gray-800 mb-2">For appointments and inquiries:</p>
                <p className="text-sm sm:text-base text-gray-700">Email: <a href="mailto:coach@innersparktherapy.com" className="text-blue-600 hover:text-blue-800">coach@innersparktherapy.com</a></p>
                <p className="text-sm sm:text-base text-gray-700">Phone: +91 703 9972 867</p>
                <p className="mt-3 text-sm sm:text-base text-gray-700">For emergencies, please contact your local emergency services or crisis hotline.</p>
              </section>

              <section className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Agreement:</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">By using our services, you acknowledge that you have read, understood, and agree to these terms and conditions. You also acknowledge that you have received a copy of our Privacy Policy.</p>
                <p className="text-sm sm:text-base text-gray-600 italic">Last Updated: March 14, 2024</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;