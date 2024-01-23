import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Luxury Hotels</h2>
          <ul>
            <li>497 Evergreen Rd. Roseville, CA 95673</li>
            <li>+44 345 678 903</li>
            <li>luxury_hotels@gmail.com</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4"></h2>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <ul>
            <li>
              <i className="fab fa-facebook mr-2"></i>Facebook
            </li>
            <li>
              <i className="fab fa-twitter mr-2"></i>Twitter
            </li>
            <li>
              <i className="fab fa-instagram mr-2"></i>Instagram
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Subscribe</h2>
          <ul className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-[rgb(209,171,99)] p-2 mb-2 md:mr-2 md:mb-0 text-black"
            />
            <button className="bg-[rgb(209,171,99)] text-gray-800 px-4 py-2 rounded-sm">
              OK
            </button>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
