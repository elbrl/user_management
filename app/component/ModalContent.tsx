"use client";

import Image from "next/image";
import ModalInput from "./ModalInput";
import ModalCheckBox from "./ModalCheckBox";

export default function ModalContent() {
  return (
    <div className="">
      <div className="flex justify-between m-4">
        <div>Add User</div>
        <Image src={"close.svg"} width={24} height={24} alt="honh" />
      </div>
      <div className="h-[1px] w-full bg-slate-100 "></div>
      <ModalInput />
      <div className="h-14 text-[13px] bg-slate-100 flex flex-row justify-between items-center text-slate-400">
        <div className="flex justify-between w-5/12 ml-8">
          Module Permission
        </div>
        <div className="flex justify-around w-7/12">
          <div>Read</div>
          <div>Write</div>
          <div>Delete</div>
        </div>
      </div>
      <ModalCheckBox />
      <div className="h-14 w-full flex justify-end items-center text-[13px] font-light">
        <button className="h-7 bg-[#0095FF] w-24 text-white rounded-lg">
          Add User
        </button>
        <button className="h-7 w-28 text-gray-400 rounded-lg">Cancel</button>
      </div>
    </div>
  );
}
