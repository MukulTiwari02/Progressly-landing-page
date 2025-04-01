import Image from "next/image";
import LogoImage from "@/assets/images/logo.png";
export const Navbar = () => {
  return (
    <div className="bg-black"><div className="px-4">
      <div className="py-4 flex justify-between items-center ">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] blur-md"></div>
          <Image
            src={LogoImage}
            alt="Logo Image"
            className="h-12 w-12 relative"
          />
        </div>
        <div className="border-white border-opacity-30 inline-flex h-10 w-10 justify-center items-center rounded-lg border-2 sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <div className="gap-6 hidden sm:flex items-center">
          <a href="/" className="text-white text-opacity-60 hover:text-opacity-100 transition">About</a>
          <a href="/" className="text-white text-opacity-60 hover:text-opacity-100 transition">Features</a>
          <a href="/" className="text-white text-opacity-60 hover:text-opacity-100 transition">Updates</a>
          <a href="/" className="text-white text-opacity-60 hover:text-opacity-100 transition">Help</a>
          <a href="/" className="text-white text-opacity-60 hover:text-opacity-100 transition">Customers</a>
          <button className="py-2 px-4 bg-white rounded-lg">Get for free</button>
        </div>
      </div>
    </div></div>
  );
};
