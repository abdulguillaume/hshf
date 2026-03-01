import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-sm sm:text-base lg:text-lg text-center sm:text-left">
          © 2026 Haitian Sports Hall of Fame
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 sm:gap-6 justify-center sm:justify-end">
          <a
            href="https://web.facebook.com/people/Haitian-Sports-All-Of-Fame/61579017327802/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
          >
            <FaFacebookF size={18} />
          </a>
          {/*<a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md"
          >
            <FaYoutube size={18} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-md"
          >
            <FaTwitter size={18} />
          </a>*/}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
