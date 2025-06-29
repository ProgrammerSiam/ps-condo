import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px] bg-opacity-40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl mx-4 relative">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 rounded-t-xl">
          <span className="font-semibold text-base text-gray-900">{title}</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-xl px-2 py-1"
          >
            &times;
          </button>
        </div>
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
