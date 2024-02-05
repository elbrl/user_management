"use client";

import Image from "next/image";

export default function ModalInput() {
  return (
    <div className="h-56 w-full flex justify-center items-center">
      <div className="h-44 w-[72vw] flex flex-col justify-between ">
        <div>
          <input
            className="w-full h-8 rounded-lg outline-none placeholder-[#222B45] font-light font-sm text-xs border border-solid border-slate-100 p-1 border border-solid border-slate-100 p-1 "
            placeholder="User ID *"
          ></input>
        </div>

        <div className="flex justify-between">
          <input
            className="w-[35vw] h-8 rounded-lg placeholder-[#222B45] font-light font-sm text-xs outline-none border border-solid border-slate-100 p-1"
            placeholder="First Name *"
          ></input>
          <input
            className="w-[35vw] h-8 rounded-lg placeholder-[#222B45] font-light font-sm text-xs outline-none border border-solid border-slate-100 p-1"
            placeholder="Last Name *"
          ></input>
        </div>
        <div className="flex justify-between">
          <input
            className="w-[23vw] h-8 rounded-lg placeholder-[#222B45] font-light font-sm text-xs outline-none border border-solid border-slate-100 p-1"
            placeholder="Email ID *"
          ></input>
          <input
            className="w-[23vw] h-8 rounded-lg placeholder-[#222B45] font-light font-sm text-xs outline-none border border-solid border-slate-100 p-1"
            placeholder="Mobile No"
          ></input>
          <input
            className="w-[23vw] h-8 rounded-lg placeholder-[#222B45] font-light font-sm text-xs outline-none border border-solid border-slate-100 p-1"
            placeholder="Select Role Type"
          ></input>
        </div>
        <div className="flex justify-between">
          <input
            className="w-[23vw] h-8 rounded-lg placeholder-[#222B45] font-light font-sm text-xs outline-none border border-solid border-slate-100 p-1"
            placeholder="Username *"
          ></input>
          <input
            className="w-[23vw] h-8 rounded-lg placeholder-[#222B45] font-light font-sm text-xs outline-none border border-solid border-slate-100 p-1"
            placeholder="Password*"
          ></input>
          <input
            className="w-[23vw] h-8 rounded-lg placeholder-[#222B45] font-light font-sm text-xs outline-none border border-solid border-slate-100 p-1"
            placeholder="Confirm Password*"
          ></input>
        </div>
      </div>
    </div>
  );
}
