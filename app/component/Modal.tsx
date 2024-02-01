"use client";

import ModalContent from "./ModalContent";

export default function Modal({ isVisible, onClose }) {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center text-black"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-9/12 h-4/5 bg-white rounded-md ">
        <ModalContent />
      </div>
    </div>
  );
}
