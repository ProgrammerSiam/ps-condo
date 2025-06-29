import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC<{ onExit?: () => void }> = ({ onExit }) => (
  <header className="w-full flex items-center justify-between py-[16px] px-[24px] border-b border-gray-100 bg-white">
    <Link href="/">
      <Image src="/logo.png" alt="RentYard Logo" width={200} height={200} />
    </Link>
    <button
      className="bg-white rounded-[12px] border border-[#E0E0E0] text-[#272B35] hover:bg-gray-50 px-[24px] py-[12px] text-[16px] font-medium shadow-none"
      onClick={onExit}
    >
      Save & Exit
    </button>
  </header>
);

export default Header;
