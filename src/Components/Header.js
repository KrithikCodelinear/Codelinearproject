import React from 'react';

const Header = () => {
  return (
    <div className="bg-F9F9F9 py-1 flex justify-between items-center bg-F9F9F9">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-99.1 h-45.71 ml-4 mt-0 m-0"
      />
      <div className="relative">
        <hr className="border-b-2 border-black w-10 transform rotate-45 mb-2" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <hr className="border-b-2 border-black w-10 transform -rotate-45" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      </div>
    </div>
  );
};

export default Header;
