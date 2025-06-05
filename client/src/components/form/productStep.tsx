import type { UseFormReturn } from "react-hook-form";
import type { RegistrationFormData } from "../../validation/registration";
import { productOptions } from "../../utils/productConstants";

interface ProductInfoStepProps {
  form: UseFormReturn<RegistrationFormData>;
}

const ProductInfoStep = ({ form }: ProductInfoStepProps) => {
  const {
    register,
    watch,
    formState: { errors, touchedFields },
  } = form;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="productName"
          className="block text-sm font-medium text-gray-700"
        >
          Product Name *
        </label>
        <select
          id="productName"
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm bg-white
            focus:outline-none focus:ring-2 focus:ring-black focus:border-black
            transition-colors duration-200
            ${errors.productName && touchedFields.productName ? "border-red-500" : "border-gray-300"}
          `}
          {...register("productName")}
        >
          <option value="">Choose your product</option>
          {productOptions.names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        {errors.productName && touchedFields.productName && (
          <p className="text-sm text-red-500">{errors.productName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="productColor"
          className="block text-sm font-medium text-gray-700"
        >
          Color *
        </label>
        <select
          id="productColor"
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm bg-white
            focus:outline-none focus:ring-2 focus:ring-black focus:border-black
            transition-colors duration-200
            ${errors.productColor && touchedFields.productColor ? "border-red-500" : "border-gray-300"}
          `}
          {...register("productColor")}
        >
          <option value="">Choose your color</option>
          {productOptions.getColorsByName(watch("productName") || "").map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        {errors.productColor && touchedFields.productColor && (
          <p className="text-sm text-red-500">{errors.productColor.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="productStorage"
          className="block text-sm font-medium text-gray-700"
        >
          Storage *
        </label>
        <select
          id="productStorage"
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm bg-white
            focus:outline-none focus:ring-2 focus:ring-black focus:border-black
            transition-colors duration-200
            ${errors.productStorage && touchedFields.productStorage ? "border-red-500" : "border-gray-300"}
          `}
          {...register("productStorage")}
        >
          <option value="">Choose your storage</option>
          {productOptions.storages.map((storage) => (
            <option key={storage} value={storage}>
              {storage}
            </option>
          ))}
        </select>
        {errors.productStorage && touchedFields.productStorage && (
          <p className="text-sm text-red-500">
            {errors.productStorage.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductInfoStep;