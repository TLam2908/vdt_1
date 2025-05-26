import Title from "./title";
import { productLanding } from "../utils/constants";
import type { ProductLanding } from "../types/productLanding";
import ProductCard from "./productCard";

const Explore = () => {
  return (
   <section className="w-full bg-gray-50">
     <div className="flex flex-col w-10/12 max-md:w-9/12 px-16 max-md:px-5 mx-auto pt-20 pb-20">
      <div id="title" className="flex flex-row justify-between items-center">
        <Title text="Explore the lineup." />
        <a>Compare all models</a>
      </div>
      <div id="products" className="grid grid-cols-4 max-md:grid-cols-1 max-2xl:grid-cols-2 gap-5 mt-10">
        {productLanding.map((product: ProductLanding) => (
            <ProductCard product={product} key={product.id}
            />
        ))}
      </div>
    </div>
   </section>
  );
};

export default Explore;
