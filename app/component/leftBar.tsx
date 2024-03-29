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
      <div className="w-full h-[65%] bg-white pt-10  xs:pl-0 lg:pl-10 flex items-center">
        <div className="h-full w-full flex flex-col place-content-between ">
          <div className="tg:hidden sm:inline xs:text-center lg:text-start">
            <Link href={"/"} className="text-black font-bold my-5 text-[19px]">
              YOURLOGO
            </Link>
          </div>
          <div
            style={{ height: "90%" }}
            className="flex flex-col place-content-around text-black mt-10"
          >
            {icons.map(({ name, link, active, inactive }) => (
              <Link
                style={name === "Message" ? { paddingTop: "30px" } : {}}
                href={link}
              >
                <div className="flex justify-between text-gray-500 hover:text-blue-500 h-10 items-center">
                  <div className="flex flex-row tg:place-content-center lg:place-content-between w-full">
                    <div className="flex flex-row ">
                      <Image
                        width={26}
                        height={26}
                        src={pathname === link ? active : inactive}
                        alt="icons"
                      />
                      <div
                        className={`ml-5 tg:hidden lg:inline${
                          pathname === link
                            ? " tg:hidden lg:inline text-blue-500"
                            : ""
                        }`}
                      >
                        {name}
                      </div>
                    </div>
                  </div>
                  {pathname === link ? (
                    <div className="h-full w-1 bg-blue-500 "></div>
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
