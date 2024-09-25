import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Voter Sahayak. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://wa.me/9599745473" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            WhatsApp
          </a>
          <a href="#" rel="noopener noreferrer" className="hover:text-gray-400">
            Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61564886816636" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="#" rel="noopener noreferrer" className="hover:text-gray-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
