import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
}) => (
  <h2
    className={`text-[#272B35]  text-[24px] font-bold leading-normal mb-[24px] ${className}`}
  >
    {children}
  </h2>
);

export default SectionTitle;
