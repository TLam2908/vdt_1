import { useParams } from "react-router-dom";

import { productDetails } from "../utils/productConstants";
import Navbar from "../components/navbar";
import HeroProduct from "../components/product/heroProduct";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const productData = productDetails.find(
    (product) => product.id === parseInt(productId || "0")
  );

  return (
    <div className="max-w-[2560px]">
      <Navbar />
      {productData?.hero && (
        <HeroProduct props={{ ...productData.hero, id: parseInt(productId || "0") }} />
      )}
    </div>
  );
};

export default ProductPage;
