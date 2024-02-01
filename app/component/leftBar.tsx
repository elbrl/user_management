"use client";
import { usePathname, useRouter } from "next/navigation";
import { icons } from "./iconsData";
import Link from "next/link";
import Image from "next/image";

export default function LeftBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-1/6 h-screen bg-white">
      <div className="w-full h-3/5 bg-white py-6 pl-10 flex items-center">
        <div className="h-full w-full flex flex-col place-content-between ">
          <Link href={"/"} className="text-black font-bold my-5">
            YOURLOGO
          </Link>
          <div
            style={{ height: "90%" }}
            className="flex flex-col place-content-around text-black"
          >
            {icons.map(({ name, link, active, inactive }) => (
              <Link
                style={name === "Message" ? { paddingTop: "20px" } : {}}
                href={link}
              >
                <div className="flex justify-between text-gray-500 h-10 items-center">
                  <div className="flex flex-row place-content-between w-full">
                    <div className="flex flex-row">
                      <Image
                        width={24}
                        height={24}
                        src={pathname === link ? active : inactive}
                        alt="icons"
                      />
                      <div
                        className={`ml-3 ${
                          pathname === link ? "text-blue-500" : ""
                        }`}
                      >
                        {name}
                      </div>
                    </div>
                  </div>
                  {pathname === link ? (
                    <div className="h-full w-1 bg-blue-500"></div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
