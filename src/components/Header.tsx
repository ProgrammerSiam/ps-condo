import React from "react";
import Button from "./Button";

const Header: React.FC<{ onExit?: () => void }> = ({ onExit }) => (
  <header className="w-full flex items-center justify-between py-4 px-8 border-b border-gray-100 bg-white">
    <div className="flex items-center gap-2">
      <span className="font-bold text-xl text-[#2563eb]">Rent</span>
      <span className="font-bold text-xl text-gray-900">Yard</span>
    </div>
    <Button
      className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-1.5 text-sm font-medium"
      onClick={onExit}
    >
      Exit
    </Button>
  </header>
);

export default Header;
