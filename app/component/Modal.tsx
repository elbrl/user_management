import { NextPage } from "next";

export default function Modal({ isVisible, onClose }) {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center text-black"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-11/12">
        <button onClick={() => onClose()} className="text-white text-xl">
          x
        </button>
        <div className="bg-white rounded ">
          mgvjhjhjghodal
          <div>jiljiljil</div>
          <input></input>
        </div>
      </div>
    </div>
  );
}
