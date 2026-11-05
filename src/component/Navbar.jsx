import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="w-full bg-white border  sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between  ">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-purple-700">
            <span className="p-1.5 bg-purple-100 rounded-lg text-purple-700">📄</span>
            <span>PDFkit</span>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-purple-600 transition-colors">Convert PDF</Link>
            <Link to="/merge" className="hover:text-purple-600 transition-colors">Merge PDF</Link>
            <Link to="/split" className="hover:text-purple-600 transition-colors">Split PDF</Link>
            <Link to="/sign" className="hover:text-purple-600 transition-colors">Sign PDF</Link>
            <Link to="/my-files" className="hover:text-purple-600 transition-colors">My Files</Link>

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