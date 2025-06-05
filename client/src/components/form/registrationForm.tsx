import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  type RegistrationFormData,
} from "../../validation/registration";
import { createRegistration } from "../../api/registrationApi";

import PersonalInfoStep from "./personalStep";
import AddressInfoStep from "./addressStep";
import ProductInfoStep from "./productStep";
import SuccessStep from "./successStep";

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submittedData, setSubmittedData] =
    useState<RegistrationFormData | null>(null);

  const totalSteps = 4;

  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      city: "",
      district: "",
      street: "",
      productName: "",
      productColor: "",
      productStorage: "",
    },
  });

  const {
    handleSubmit,
    trigger,
    formState: { isSubmitting },
    reset,
  } = form;

  const progress = (currentStep / totalSteps) * 100;

  const getFieldsForStep = (step: number): (keyof RegistrationFormData)[] => {
    switch (step) {
      case 1:
        return ["name", "email", "phone"];
      case 2:
        return ["city", "district", "street"];
      case 3:
        return ["productName", "productColor", "productStorage"];
      default:
        return [];
    }
  };

  const nextStep = async () => {
    const currentFields = getFieldsForStep(currentStep);
    const isValid = await trigger(currentFields);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      await createRegistration(data);
      console.log("Form submitted:", data);
      //   await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmittedData(data);
      setCurrentStep(4);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const startOver = () => {
    reset();
    setSubmittedData(null);
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep form={form} />;
      case 2:
        return <AddressInfoStep form={form} />;
      case 3:
        return <ProductInfoStep form={form} />;
      case 4:
        return submittedData ? (
          <SuccessStep formData={submittedData} onStartOver={startOver} />
        ) : null;
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Personal Information";
      case 2:
        return "Address";
      case 3:
        return "Product Information";
      case 4:
        return "Congratulations!";
      default:
        return "";
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Please provide your personal information";
      case 2:
        return "Please provide your address information";
      case 3:
        return "Please provide product information";
      case 4:
        return "Your registration is complete!";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 rounded-t-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-black">
                Register Product
              </h1>
              <p className="text-black mt-1">{getStepDescription()}</p>
            </div>
            <div className="text-md text-black font-semibold bg-white bg-opacity-20 px-3 py-1 rounded-full">
              Step {currentStep} / {totalSteps}
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                  transition-all duration-300 ease-in-out
                  ${
                    step < currentStep
                      ? "bg-green-500 text-white shadow-lg scale-110"
                      : step === currentStep
                      ? "bg-black text-white shadow-lg scale-110 ring-4 ring-blue-200"
                      : "bg-gray-200 text-gray-600"
                  }
                `}
                >
                  {step < currentStep ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
                {step < 4 && (
                  <div
                    className={`w-12 h-1 mx-2 transition-all duration-500 ease-in-out ${
                      step < currentStep ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {currentStep < 4 ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6 text-black border-l-4 border-black pl-4">
                  {getStepTitle()}
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  {renderStep()}
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`
                    flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200
                    ${
                      currentStep === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md"
                    }
                  `}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back{" "}
                </button>

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                  >
                    Next
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200
                      ${
                        isSubmitting
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg transform hover:scale-105"
                      }
                    `}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {isSubmitting ? "Loading..." : "Registration Successful"}
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-l-4 border-green-500 pl-4">
                {getStepTitle()}
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                {renderStep()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
