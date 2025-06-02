import { Link } from "react-router-dom";
import type { ProductRegistrationProps } from "../../types/interface";

const ProductRegistation = ({ props }: { props: ProductRegistrationProps }) => {
  const getBgColor = () => {
    if (props.name === "16e") {
      return "bg-[#f5f5f7]";
    } else if (props.name === "16Pro") {
      return "bg-black";
    } else {
      return "bg-white";
    }
  };

  const getTextColor = () => {
    if (props.name === "16Pro") {
      return "text-white";
    } else {
      return "text-gray-800";
    }
  };

  const getShadow = () => {
    if (props.name === "16") {
      return "shadow-lg max-lg:shadow-none";
    } else {
      return "";
    }
  };

  const handleRegistration = () => {
    // Xử lý logic đăng ký ở đây
    console.log(`Registering ${props.name}`);
  };

  const getButtonStyle = () => {
    if (props.name === "16Pro") {
      return "bg-white text-black hover:bg-gray-100";
    } else {
      return "bg-blue-600 text-white hover:bg-blue-700";
    }
  };

  return (
    <section className="w-full bg-white pb-20">
      <div
        className={`flex flex-center max-w-7xl mx-auto ${getBgColor()} ${getShadow()} rounded-2xl`}
      >
        <div className="flex flex-row justify-around items-center w-full gap-10 pt-10 max-lg:flex-col max-lg:gap-20">
          <div
            className={`flex flex-col max-lg:text-center ${getTextColor()} `}
          >
            <span className="text-4xl font-bold">iPhone Registration</span>
            <p className="text-md mt-2">
              Sign up now to pre-order our product and stay updated.{" "}
            </p>
            <button
              onClick={handleRegistration}
              className={`w-[200px] py-4 mt-10 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 ${getButtonStyle()}`}
            >
              <Link to="/registration">Register Now</Link>
            </button>
          </div>
          <div>
            <img
              src={props.image}
              alt="iPhone Registration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRegistation;
