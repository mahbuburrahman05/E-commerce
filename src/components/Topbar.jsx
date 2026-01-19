import { FaTwitter, FaFacebookF, FaPinterestP, FaRedditAlien, FaYoutube, FaInstagram } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#1f628a]">
      <div className="max-w-[1220px] mx-auto border-b text-white px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-center justify-between text-sm font-sans gap-2 sm:gap-0">

        {/* Left Text */}
        <p className="opacity-90 text-center sm:text-left">
          Welcome to Clicon online eCommerce store.
        </p>

        {/* Right Social Icons */}
        <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
          <span className="opacity-90">Follow us:</span>

          <div className="flex items-center gap-3 text-white text-lg flex-wrap justify-center">
            <FaTwitter className="cursor-pointer hover:opacity-75" />
            <FaFacebookF className="cursor-pointer hover:opacity-75" />
            <FaPinterestP className="cursor-pointer hover:opacity-75" />
            <FaRedditAlien className="cursor-pointer hover:opacity-75" />
            <FaYoutube className="cursor-pointer hover:opacity-75" />
            <FaInstagram className="cursor-pointer hover:opacity-75" />
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-5 w-[1px] bg-white/40 ml-2"></div>
        </div>
      </div>
    </div>
  );
}
