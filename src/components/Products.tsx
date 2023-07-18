import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

import { Product } from "../../types";
import FormattedPrice from "./FormattedPrice";

const Products = ({ products }: { products: Product[] }) => {
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden shadow-md"
        >
          <div className="w-full h-[260px] relative">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-full object-contain scale-90 hover:scale-100 transition-transform duration-300"
            />
            <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition duration-300">
              <span className="w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer transition duration-300">
                <HiShoppingCart />
              </span>
              <span className="w-full h-full flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer transition duration-300">
                <FaHeart />
              </span>
            </div>
            {product.isNew && (
              <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                save{" "}
                <FormattedPrice amount={product.oldPrice - product.price} />
              </p>
            )}
          </div>
          <hr />

          <div className="px-4 py-3 flex flex-col gap-1">
            <p className="text-xs text-gray-500 tracking-wide">
              {product.category}
            </p>
            <p className="text-base font-medium">{product.title}</p>
            <p className="flex items-center gap-2">
              <span className="text-sm line-through">
                <FormattedPrice amount={product.oldPrice} />
              </span>
              <span className="text-amazon_blue font-semibold">
                <FormattedPrice amount={product.price} />
              </span>
            </p>
            <p className="text-xs text-gray-600 text-justify">
              {product.description.substring(0, 120)}
            </p>
            <button
              type="button"
              className="h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black transition duration-300 mt-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
