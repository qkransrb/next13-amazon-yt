import Banner from "@/components/Banner";
import Products from "@/components/Products";

import { Product } from "../../types";

const Home = ({ products }: { products: Product[] }) => {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products products={products} />
        </div>
      </div>
    </main>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default Home;
