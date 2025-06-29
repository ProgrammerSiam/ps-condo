import React, { useRef } from "react";

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
  file?: File | null;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange, file }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex items-center gap-3 bg-gray-50 min-h-[48px] cursor-pointer"
      onClick={() => inputRef.current?.click()}
    >
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path
          d="M10 13V3M10 3L6 7M10 3l4 4"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="3" y="15" width="14" height="2" rx="1" fill="#2563eb" />
      </svg>
      <span className="text-gray-500 text-sm">
        {file ? file.name : "(Pdf only)"}
      </span>
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={(e) => onFileChange(e.target.files?.[0] || null)}
      />
    </div>
  );
};

export default FileUpload;
