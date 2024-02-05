import Image from "next/image";

export default function Header() {
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
        <Image src={"dropdown_big.svg"} width={12} height={12} alt="dropdown" />
      </div>
    </div>
  );
}
