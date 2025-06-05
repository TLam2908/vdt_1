import type { UseFormReturn } from "react-hook-form"
import type { RegistrationFormData } from "../../validation/registration"

interface AddressInfoStepProps {
  form: UseFormReturn<RegistrationFormData>
}

const AddressInfoStep = ({ form }: AddressInfoStepProps) => {
  const {
    register,
    formState: { errors },
  } = form

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City *
        </label>
        <input
          id="city"
          type="text"
          placeholder="Enter your city"
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-black focus:border-black
            transition-colors duration-200
            ${errors.city ? "border-red-500" : "border-gray-300"}
          `}
          {...register("city")}
        />
        {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="district" className="block text-sm font-medium text-gray-700">
          District *
        </label>
        <input
          id="district"
          type="text"
          placeholder="Enter your district"
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-black focus:border-black
            transition-colors duration-200
            ${errors.district ? "border-red-500" : "border-gray-300"}
          `}
          {...register("district")}
        />
        {errors.district && <p className="text-sm text-red-500">{errors.district.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="street" className="block text-sm font-medium text-gray-700">
          Street *
        </label>
        <input
          id="street"
          type="text"
          placeholder="Enter your street"
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-black focus:border-black
            ${errors.street ? "border-red-500" : "border-gray-300"}
          `}
          {...register("street")}
        />
        {errors.street && <p className="text-sm text-red-500">{errors.street.message}</p>}
      </div>
    </div>
  )
}

export default AddressInfoStep