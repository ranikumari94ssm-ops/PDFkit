import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-purple-700">
            <span className="p-1.5 bg-purple-100 rounded-lg text-purple-700">📄</span>
            <span>PDFkit</span>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link to="/tool/word-to-pdf" className="hover:text-purple-600 transition-colors">Convert PDF</Link>
            <Link to="/tool/merge-pdf" className="hover:text-purple-600 transition-colors">Merge PDF</Link>
            <Link to="/tool/split-pdf" className="hover:text-purple-600 transition-colors">Split PDF</Link>
            <Link to="/tool/sign-pdf" className="hover:text-purple-600 transition-colors">Sign PDF</Link>
            <Link to="/tool/fill-form" className="hover:text-purple-600 transition-colors">Fill PDF</Link>
          </nav>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
            Log in
          </button>
          <button className="px-5 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-sm transition-all">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
