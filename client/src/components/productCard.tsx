import type { ProductLanding } from "../types/productLanding";
import { ChevronRight, Minus } from "lucide-react";

const AppleIntelligenceIcon = ({ img }: { img: string }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={img} alt="Apple Intelligence" className="w-10 h-14" />
      <span className="text-sm text-gray-700">Apple Intelligence</span>
    </div>
  );
};

const ChipIcon = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={img} />
      <span className="text-sm text-gray-700">{title}</span>
    </div>
  );
};

const CameraControl = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={img} alt={title} className="w-11 h-14" />
      <span className="text-sm text-gray-700">{title}</span>
    </div>
  );
};

const CameraSystem = ({
  img,
  type,
  details,
}: {
  img: string;
  type: string;
  details: string[];
}) => {
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt={type} className="w-11 h-16" />
      <span className="text-sm text-gray-700 mb-1">{type}</span>
      <ul className="text-sm text-gray-600 flex flex-col items-center">
        {details.map((detail, index) =>
          detail[index] ? (
            <li key={index} className="flex items-center mb-1">
              {detail}
            </li>
          ) : (
            <Minus className="w-4 h-4 mb-2 text-black" />
          )
        )}
      </ul>
    </div>
  );
};

const Battery = ({ img, title }: { img: string, title: string }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={img} alt={title} className="w-11 h-14" />
      <span className="text-sm text-gray-700">{title}</span>
    </div>
  )
}

const ProductCard = ({ product }: { product: ProductLanding }) => {
  return (
    <div className="flex flex-col items-center">
      <a>
        <img
          src={product.image}
          alt={product.name}
          className="object-fit w-[240px] h-[340px] transition-transform duration-300 hover:scale-105"
        />
      </a>
      <div className="flex justify-center gap-2 pt-10">
        {product.colors.map((color, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full border-2 border-gray-200`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <h3 className="text-3xl font-semibold mb-2 pt-5">{product.name}</h3>
      <p className="text-black mb-2 mt-4 text-md">{product.tagline}</p>
      <p className="text-md font-semibold text-black mb-4">
        From {product.price} or {product.monthlyPrice}
      </p>
      <div className="flex items-center gap-5">
        <button className=" bg-[#0076df] text-white px-4 py-2 rounded-full hover:bg-[#0066c0] transition-colors duration-300">
          Learn more
        </button>
        <button className="text-[#0076df] flex items-center">
          Buy <ChevronRight className="w-4 h-4 ml-1 mt-1" />
        </button>
      </div>

      <div className="flex flex-col gap-14 pt-16">
        <div className="flex flex-col items-center gap-2">
          {product.intelligence ? (
            <AppleIntelligenceIcon img={product.intelligence.image} />
          ) : (
            <Minus className="w-7 h-7 mb-15 text-black" />
          )}
        </div>

        <ChipIcon img={product.chip.image} title={product.chip.title} />

        <div className="flex flex-col items-center">
          {product.control ? (
            <CameraControl
              img={product.control.image}
              title={product.control.title}
            />
          ) : (
            <Minus className="w-7 h-7 mb-15 text-black" />
          )}
        </div>

        <div className="flex flex-col items-center gap-2">
          {product.cameraSystem ? (
            <CameraSystem
              img={product.cameraSystem.image}
              type={product.cameraSystem.type}
              details={product.cameraSystem.details}
            />
          ) : (
            <Minus className="w-7 h-7 mb-15 text-black" />
          )}
        </div>

        <div className="flex flex-col items-center gap-2">
          {product.battery ? (
            <Battery img={product.battery.image} title={product.battery.description} />
          ) : (
            <Minus className="w-7 h-7 mb-15 text-black" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
