import type { RegistrationFormData } from "../../validation/registration"

interface SuccessStepProps {
  formData: RegistrationFormData
  onStartOver: () => void
}

const SuccessStep = ({ formData, onStartOver }: SuccessStepProps) => {
  return (
    <div className="text-center space-y-6">
      {/* Success Animation */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-green-600">Registration Successful!</h2>
        <p className="text-gray-600">
          Thank you for registering the product. We will contact you as soon as possible.
        </p>
      </div>

      {/* Registration Summary */}
      <div className="bg-gray-50 rounded-lg p-6 text-left space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Your Registration Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-gray-500">Full Name:</span>
              <p className="text-gray-800 font-medium">{formData.name}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Email:</span>
              <p className="text-gray-800 font-medium">{formData.email}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Address:</span>
              <p className="text-gray-800 font-medium">
                {formData.street}, {formData.district}, {formData.city}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-gray-500">Product:</span>
              <p className="text-gray-800 font-medium">{formData.productName}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Color:</span>
              <p className="text-gray-800 font-medium">{formData.productColor}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Storage:</span>
              <p className="text-gray-800 font-medium">{formData.productStorage}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 rounded-lg p-4 text-left">
        <h4 className="font-semibold text-blue-800 mb-2">Next Steps:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• We will send a confirmation email within 24 hours</li>
          <li>• Our consulting team will contact you within 2-3 business days</li>
          <li>• The product will be delivered within 5-7 business days</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onStartOver}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
        >
          Register Another Product
        </button>
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-all duration-200"
        >
          Print Registration Details
        </button>
      </div>
    </div>
  )
}

export default SuccessStep