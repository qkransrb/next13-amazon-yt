import Image from "next/image";

import Logo from "@/images/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
      <Image src={Logo} alt="Logo" className="w-24" />
      <p className="text-sm -mt-4">All rights reserved &copy; 2023</p>
    </div>
  );
};

export default Footer;
