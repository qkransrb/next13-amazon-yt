import { LuMenu } from "react-icons/lu";

const BottomHeader: React.FC = () => {
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
      <p className="flex items-center gap-1 h-8 border border-transparent hover:border-white transition cursor-pointer duration-300 px-2">
        <LuMenu className="text-xl" /> All
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white transition cursor-pointer duration-300 px-2">
        Today's Deals
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white transition cursor-pointer duration-300 px-2">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white transition cursor-pointer duration-300 px-2">
        Registry
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white transition cursor-pointer duration-300 px-2">
        Gift Cards
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white transition cursor-pointer duration-300 px-2">
        Sell
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-red-500 hover:text-red-500 transition cursor-pointer duration-300 px-2 text-amazon_yellow">
        Sign Out
      </p>
    </div>
  );
};

export default BottomHeader;
