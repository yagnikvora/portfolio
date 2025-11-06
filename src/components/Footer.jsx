import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by{' '}
            <span className="text-blue-400 font-semibold">Yagnik Vora</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
