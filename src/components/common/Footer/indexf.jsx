import React from "react";
//import "./styles.css";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-black py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-2">Contact Us</h3>
          <ul>
            <li><a href="#" className="hover:underline">Email</a></li>
            <li><a href="#" className="hover:underline">Phone</a></li>
            <li><a href="#" className="hover:underline">Location</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Careers</h3>
          <ul>
            <li><a href="#" className="hover:underline">Open Positions</a></li>
            <li><a href="#" className="hover:underline">Internships</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <ul>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Live Chat</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Investors</h3>
          <ul>
            <li><a href="#" className="hover:underline">Reports</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">&copy; {new Date().getFullYear()} Crypto Price Tracker. All rights reserved.</div>
    </footer>
  );
};

export default Footer;