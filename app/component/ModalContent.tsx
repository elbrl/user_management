"use client";

import Image from "next/image";
import ModalInput from "./ModalInput";
import ModalCheckBox from "./ModalCheckBox";
import ModalButton from "./ModalButton";

export default function ModalContent() {
  return (
    <div className="">
      <div className="flex justify-between m-4">
        <div>Add User</div>
        <Image src={"close.svg"} width={24} height={24} alt="honh" />
      </div>
      <div style={{ height: 1 }} className="w-full bg-slate-100 "></div>
      <ModalInput />
      <div className="h-16 bg-slate-100 flex flex-row justify-between items-center text-slate-400">
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
      <ModalButton />
    </div>
  );
}
