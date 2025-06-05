import type { UseFormReturn } from "react-hook-form"
import type { RegistrationFormData } from "../../validation/registration"

interface PersonalInfoStepProps {
  form: UseFormReturn<RegistrationFormData>
}

const PersonalInfoStep = ({ form }: PersonalInfoStepProps) => {
  const {
    register,
    formState: { errors },
  } = form

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name *
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-black focus:border-black
            transition-colors duration-200
            ${errors.name ? "border-red-500" : "border-gray-300"}
          `}
          {...register("name")}
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-black focus:border-black
            transition-colors duration-200
            ${errors.email ? "border-red-500" : "border-gray-300"}
          `}
          {...register("email")}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>
       <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Phone Number *
        </label>
        <input
          id="phone"
          type="text"
          placeholder="Enter your phone number"
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-black focus:border-black
            transition-colors duration-200
            ${errors.phone ? "border-red-500" : "border-gray-300"}
          `}
          {...register("phone")}
        />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
      </div>
    </div>
  )
}

export default PersonalInfoStep