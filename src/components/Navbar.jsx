import PropTypes from "prop-types";

Navbar.prototype = {
  children: PropTypes.element,
};

export default function Navbar({ children }) {
  return (
    <div className="bg-sky-600 rounded-lg px-5 py-7 flex justify-between items-center">
      <a href="/" className="text-2xl font-bold basis-3/12">
        🍿usePopcorn
      </a>
      {children}
    </div>
  );
}
