import React from "react";
import Button from "./Button";

const RentYardLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" fill="#2563eb" />
    <path d="M10 22V10h12v12H10z" fill="#fff" />
    <path d="M16 14v4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 16h4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Header: React.FC<{ onExit?: () => void }> = ({ onExit }) => (
  <header className="w-full flex items-center justify-between py-4 px-8 border-b border-gray-100 bg-white">
    <div className="flex items-center gap-2">
      <RentYardLogo />
      <span className="font-bold text-xl text-[#2563eb]">Rent</span>
      <span className="font-bold text-xl text-gray-900">Yard</span>
    </div>
    <Button
      className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-1.5 text-sm font-medium shadow-none"
      onClick={onExit}
    >
      Save & Exit
    </Button>
  </header>
);

export default Header;
