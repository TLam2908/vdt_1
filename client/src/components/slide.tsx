import type { SlideProps } from "../types/interface";

const Slide = ({ title, heroSubtitle, img, color }: SlideProps) => {
  // Xác định màu chữ dựa trên prop color
  const textColorClass = color === 'white' ? 'text-white' : 'text-black';

  return (
    <div className="relative flex flex-col">
      <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-auto object-cover max-h-[800px]"
        />
      </div>
     <div className="absolute p-6 flex flex-col">
         <h3 className={`text-md max-sm:text-sm font-semibold ${textColorClass}`}>
        {title}
      </h3>
      <p className={`text-2xl max-sm:text-xl font-semibold ${color === 'white' ? 'text-white' : 'text-black'}`}>
        {heroSubtitle}
      </p>
     </div>
    </div>
  );
};

export default Slide;