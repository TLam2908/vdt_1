import { Plus } from "lucide-react"

const ReasonSlide = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl border-0 overflow-hidden w-full max-w-lg mx-auto p-4 h-[300px] relative">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
          <img src={img} className="w-10 h-10 text-gray-600" />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed mb-8">
        {description}
        <sup className="text-sm">*</sup>
      </p>

      {/* Plus Button */}
      <div className="absolute bottom-6 right-6">
        <button
          className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-white shadow-lg flex items-center justify-center"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ReasonSlide;
