import { useParams } from "react-router-dom";

import { productDetails } from "../utils/productConstants";
import Navbar from "../components/navbar";
import ProductHero from "../components/product/productHero";
import ProductHighlight from "../components/product/productHighlight";
import ProductItem from "../components/product/productItem";
import Footer from "../components/footer";
import Information from "../components/landing/information";
import ProductDetail from "../components/product/productDetail";
import ProductRegistation from "../components/product/productRegistration";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const productData = productDetails.find(
    (product) => product.id === parseInt(productId || "0")
  );

  return (
    <div className="max-w-[2560px]">
      <Navbar />
      {productData?.hero && (
        <ProductHero props={{ ...productData.hero, id: parseInt(productId || "0") }} />
      )}
      <ProductHighlight props={productData?.highlights || []}/>
      {productData?.list && (
        <ProductItem props={productData.list || []}/>
      )}
      {productData?.details && (
        <ProductDetail props={productData.details} />
      )}
      {productData?.visual && (
        <ProductRegistation props={productData.visual}/>
      )}
      <Information/>
      <Footer />
    </div>
  );
};

export default ProductPage;
