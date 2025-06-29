import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  selected = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={`border rounded-xl p-5 cursor-pointer transition select-none ${
        selected
          ? "border-[#2563eb] bg-[#f5f8ff]"
          : "border-gray-200 bg-white hover:border-[#2563eb]"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
