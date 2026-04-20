import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cart from "../../assets/bag.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const navigate = useNavigate();

  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <header className="sticky top-0 z-50 bg-white borderb border-stone-200">
      <div className="px-10 py-4 flex items-center justify-between">
        {/* Left — hamburger (mobile) */}
        <button
          className="md:hidden text-stone-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <img src={close} alt="" /> : <img src={menu} alt="" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold md:ml-[45%] tracking-tight text-stone-800 mx-auto"
        >
          Roomé
        </Link>

        {/* Right — links + cart */}
        <div className="hidden md:flex items-center gap-7 text-sm text-stone-500">
          <Link to="/orders" className="hover:text-stone-900 transition">
            Orders
          </Link>
          {/* <Link to="/" className="hover:text-stone-900 transition">
            Home
          </Link> 
           <Link to="/login" className="hover:text-stone-900 transition">
            Login
          </Link>
          <Link to="/register" className="hover:text-stone-900 transition">
            Register
          </Link> */}
          <Link to="/cart" className="relative hover:text-stone-900 transition">
            <img src={cart} alt="" className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-stone-800 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Cart icon on mobile */}
        <Link to="/cart" className="relative md:hidden text-stone-600">
          <img src={cart} alt="" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-stone-800 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* Bottom Bar */}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-100 px-6 py-4 flex flex-col gap-3 text-sm text-stone-600">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/orders" onClick={() => setMenuOpen(false)}>
            Orders
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link to="/register" onClick={() => setMenuOpen(false)}>
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
