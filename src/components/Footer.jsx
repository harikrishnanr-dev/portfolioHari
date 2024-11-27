import React from "react";

function Footer() {
  return (
    <div className=" text-white py-16 border-t border-neutral-700/80">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-6">Get in Touch</h2>
          <p className="text-lg mb-4">Ernakulam, Kerala, India</p>
          <p className="text-lg mb-4">+91 9074841107</p>
          <a 
            href="mailto:dev.harikrishnanr@gmail.com" 
            className="text-lg text-blue-400 hover:text-blue-600 border-b border-blue-400"
          >
            dev.harikrishnanr@gmail.com
          </a>
        </div>
    </div>
  );
}

export default Footer;
