import Image from "next/image";

export default function Header() {
  return (
    <div className="w5/6 h-24 flex justify-between items-center mx-12 text-black ">
      <div>
        <div>Hello, Boyusername</div>
        <div className="text-xs text-gray-400">Have a nice day</div>
      </div>
      <div className="h-12 w-56 flex items-center justify-between">
        <Image src={"bell_active.svg"} width={24} height={24} alt="" />
        <div style={{ width: 1 }} className="h-full  bg-gray-400"></div>
        <div className="h-10 w-10 bg-gray-400 rounded-full"></div>
        <div>
          <div>Username</div>
          <div className="text-xs text-gray-400">Admin</div>
        </div>
        <Image src={"dropdown_big.svg"} width={12} height={12} alt="" />
      </div>
    </div>
  );
}
