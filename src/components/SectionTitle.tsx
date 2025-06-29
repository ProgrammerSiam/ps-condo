import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
}) => (
  <h2 className={`text-lg font-semibold text-gray-900 mb-4 ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;
