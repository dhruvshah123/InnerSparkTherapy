/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { axiosInstance } from '../axiosInstance.js';
import { ApiError } from "../../../Backend/src/utils/ApiError.js";

const Freeconsult = ({ isModalOpen, toggleModal }) => {
  // ... [previous state management code remains the same] ...
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    emailId: "",
    previousCounseling: "",
    previousCounselingDetails: "",
    isAbove18: "",
    parentConsent: "",
    selfDescription: "",
    consent: false,
    reference: ""
  });
  const [errors, setErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.contactNo) newErrors.contactNo = "Contact Number is required.";
    if (!formData.emailId || !/^\S+@\S+\.\S+$/.test(formData.emailId)) 
      newErrors.emailId = "Valid email is required.";
    
    if (formData.previousCounseling === "Yes" && !formData.previousCounselingDetails)
      newErrors.previousCounselingDetails = "Please specify previous counseling details.";
    
    if (!formData.isAbove18) newErrors.isAbove18 = "Please specify your age status.";
    
    if (formData.isAbove18 === "No" && !formData.parentConsent)
      newErrors.parentConsent = "Parent consent is required for minors.";
    
    if (!formData.selfDescription) newErrors.selfDescription = "Short description is required.";
    
    if (!formData.consent) newErrors.consent = "Consent is required.";

    return newErrors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
        setIsSubmitting(true);
        
        try {
          // Replace with your actual API endpoint
          const response = await axiosInstance.post('/users/form', formData);

          if(!response){
              throw new ApiError("Form cant be submitted")
          }
          
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 3000);
          toggleModal();
  
          // Reset form
          setFormData({
            fullName: "",
            contactNo: "",
            emailId: "",
            previousCounseling: "",
            previousCounselingDetails: "",
            isAbove18: "",
            parentConsent: "",
            selfDescription: "",
            consent: false,
            reference: ""
          });
          setErrors({});
        } catch (error) {
          console.error("Error submitting form:", error);
          // Handle API error (show error message to user)
          setErrors({
            submit: "Failed to submit form. Please try again."
          });
        } finally {
          setIsSubmitting(false);
        }
      } else {
        setErrors(validationErrors);
      }
    };

  // If modal is not open, return null
  if (!isModalOpen) return null;
  return (
    <>
      {/* Modal Section */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-2xl text-left relative max-h-[60vh] flex flex-col">
          <h3 className="text-3xl font-bold mb-4 text-gray-800 flex-shrink-0">Schedule Your Consultation</h3>
          
          {/* Scrollable form container */}
          <div className="overflow-y-auto pr-4 flex-grow">
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-l font-medium text-gray-700">
                  Your Full Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 text-gray-900 rounded-md h-10 px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>

              {/* Contact No and Mail ID */}
              <div className="mb-4">
                <label className="block text-l font-medium text-gray-700">
                  Your Contact No and Mail ID*
                </label>
                <input
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md h-10 px-4 text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 mb-2"
                  placeholder="Enter your contact number"
                />
                {errors.contactNo && <p className="text-red-500 text-sm">{errors.contactNo}</p>}
                
                <input
                  type="email"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  className="w-full border border-gray-300 text-gray-900 rounded-md h-10 px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
                  placeholder="Enter your email"
                />
                {errors.emailId && <p className="text-red-500 text-sm">{errors.emailId}</p>}
              </div>

              {/* Previous Counseling */}
              <div className="mb-4">
                <label className="block text-l font-medium text-gray-700">
                  Did you ever take any Counseling session before?*
                </label>
                <div className="text-gray-700">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="previousCounseling"
                      value="No"
                      checked={formData.previousCounseling === "No"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">No</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="previousCounseling"
                      value="Yes"
                      checked={formData.previousCounseling === "Yes"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                </div>
              </div>

              {/* Previous Counseling Details */}
              {formData.previousCounseling === "Yes" && (
                <div className="mb-4">
                  <label className="block text-l font-medium text-gray-700">
                    If Yes, please specify
                  </label>
                  <input
                    type="text"
                    name="previousCounselingDetails"
                    value={formData.previousCounselingDetails}
                    onChange={handleChange}
                    className="w-full border border-gray-300 text-gray-900 rounded-md h-10 px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
                    placeholder="Provide details of previous counseling"
                  />
                  {errors.previousCounselingDetails && 
                    <p className="text-red-500 text-sm">{errors.previousCounselingDetails}</p>
                  }
                </div>
              )}

              {/* Age Verification */}
              <div className="mb-4">
                <label className="block text-l font-medium text-gray-700">
                  Are you above 18?*
                </label>
                <div className="text-gray-700">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="isAbove18"
                      value="Yes"
                      checked={formData.isAbove18 === "Yes"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="isAbove18"
                      value="No"
                      checked={formData.isAbove18 === "No"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {errors.isAbove18 && <p className="text-red-500 text-sm">{errors.isAbove18}</p>}
              </div>

              {/* Parent Consent */}
              {formData.isAbove18 === "No" && (
                <div className="mb-4">
                  <label className="block text-l font-medium text-gray-700">
                    Does your Parents know about you taking Counseling?
                  </label>
                  <div className="text-gray-700">
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        name="parentConsent"
                        value="Yes"
                        checked={formData.parentConsent === "Yes"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="parentConsent"
                        value="No"
                        checked={formData.parentConsent === "No"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    We require your Parents consent before we start our sessions. 
                    Only applicable to those who are below the age of 18.
                  </p>
                  {errors.parentConsent && 
                    <p className="text-red-500 text-sm">{errors.parentConsent}</p>
                  }
                </div>
              )}

              {/* Self Description */}
              <div className="mb-4">
                <label className="block text-l font-medium text-gray-700">
                  A short description about yourself*
                </label>
                <textarea
                  name="selfDescription"
                  value={formData.selfDescription}
                  onChange={handleChange}
                  className="w-full border border-gray-300 text-gray-900 rounded-md h-10 px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500 pt-1 "
                  placeholder="Tell us a bit about yourself"
                  rows="4"
                ></textarea>
                {errors.selfDescription && 
                  <p className="text-red-500 text-sm">{errors.selfDescription}</p>
                }
              </div>

              {/* Reference */}
              <div className="mb-4">
                <label className="block text-l font-medium text-gray-700">
                  Reference
                </label>
                <input
                  type="text"
                  name="reference"
                  value={formData.reference}
                  onChange={handleChange}
                  className="w-full border border-gray-300 text-gray-900 rounded-md h-10 px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1"
                  placeholder="Optional: How did you hear about us?"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-l text-gray-700">
                    I give my consent to Mr. Manav Mehta from Inner Spark Therapy 
                    to start my counseling sessions and hereby declare that all 
                    of the information given by me is true.*
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={toggleModal}
          >
            ✖
          </button>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg z-50">
          Form submitted successfully!
        </div>
      )}
    </>
  );
};

export default Freeconsult;