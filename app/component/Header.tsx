"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function Header() {
  const Menus = [
    "Profile",
    "Edit Profile",
    "Settings",
    "Help & support",
    "LogOut",
  ];
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && imgRef.current) {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
          setOpen(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("click", handleClickOutside);

      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }
  }, [open]);

  return (
    <div className="w5/6 h-24 flex justify-between items-center tg:mx-5 sm:mx-12 text-black ">
      <div className="tg:hidden sm:inline">
        <div className="text-lg">Hello, Username</div>
        <div className="text-xs text-gray-400 mt-[2px]">Have a nice day</div>
      </div>
      <div className="h-12 w-56 flex items-center justify-between">
        <Image
          className="tg:hidden sm:inline"
          src={"bell_active.svg"}
          width={24}
          height={24}
          alt="honh"
        />
        <div className=" tg:w-[0px] sm:w-[1px] h-full bg-gray-400"></div>
        <div className="h-10 w-10 bg-gray-400 rounded-full"></div>
        <div className="">
          <div>Username</div>
          <div className="text-xs text-gray-400">Admin</div>
        </div>

        <div className="relative">
          <Image
            ref={imgRef}
            onClick={() => setOpen(!open)}
            src={"dropdown_big.svg"}
            width={12}
            height={12}
            alt="dropdown"
          />
          {open && (
            <div
              ref={menuRef}
              className="bg-white p-4 w-52 shadow-lg -left-48 top-10 absolute"
            >
              <ul>
                {Menus.map((menu) => (
                  <li
                    onClick={() => setOpen(false)}
                    className="p-2 text-sm font-light cursor-pointer rounded hover:bg-[#4A85F6] hover:text-white"
                    key={menu}
                  >
                    {menu}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
