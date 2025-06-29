import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <label
      className={`flex items-center gap-2 cursor-pointer text-sm ${className}`}
    >
      <input
        type="checkbox"
        className="accent-[#2563eb] w-4 h-4 rounded transition focus:ring-2 focus:ring-[#2563eb]"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
