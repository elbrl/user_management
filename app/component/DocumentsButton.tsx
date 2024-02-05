import Image from "next/image";
import { documentsIcon } from "./iconsData";

export default function DocumentsButton() {
  return (
    <div className="h-20 flex items-center w-full">
      <div className="mx-8 text-black flex justify-between items-center w-full">
        <div className=" tg:hidden lg:inline">
          <div className="flex justify-between w-[260px]">
            {documentsIcon.map(({ link }) => (
              <div className="border border-gray-300 w-10 h-10 rounded flex items-center justify-center">
                <Image width={16} height={16} src={link} alt="icons" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row w-[450px] justify-between">
          <div className="border border-gray-300 w-48 h-10 rounded flex justify-around items-center">
            <div className="font-light text-gray-600 tg:text-xs md:text-sm ">
              This Month
            </div>
            <Image
              src={"dropdown_big.svg"}
              width={12}
              height={12}
              alt="dropdown"
            />
          </div>
          <div className="border border-gray-300 w-48 h-10 rounded flex justify-around items-center">
            <div className="font-light text-gray-600 tg:text-xs md:text-sm">
              Documents
            </div>
            <Image
              src={"dropdown_big.svg"}
              width={12}
              height={12}
              alt="dropdown"
            />
          </div>
          <div className="border border-gray-300 w-10 h-10 rounded bg-[#4A85F6] text-white flex items-center justify-center text-xl font-semibold">
            +
          </div>
        </div>
      </div>
    </div>
  );
}
