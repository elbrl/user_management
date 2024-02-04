"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import Modal from "./Modal";
import { icons } from "./iconsData";
import { ger } from "./HomeData";

export default function Search() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Fragment>
      <div className="mx-8 ">
        <div className="h-12 ml-4 tg:text-lg sm:text-2xl font-bold text-blue-500">
          {ger.map(({ title }) => (
            <div>{pathname === "/" ? <div>{title}</div> : <div></div>}</div>
          ))}
          {icons.map(({ link, title }) => (
            <div>{pathname === link ? <div>{title}</div> : <div></div>}</div>
          ))}
        </div>
        <div className="flex flex-row justify-between">
          <div
            className={`flex flex-row bg-white rounded-2xl  ${
              pathname === "/documents"
                ? "xs:w-[50vw] md:w-[40vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[65vw]"
                : "xs:w-[40vw] md:w-[30vw] lg:w-[35vw] xl:w-[40vw] 2xl:w-[50vw]"
            } `}
          >
            <Image
              className="m-3"
              src={"/search.svg"}
              width={17}
              height={17}
              alt="Search"
            />
            {pathname === "/documents" ? (
              <input
                className="h-12 w-full rounded-r-2xl outline-none text-black"
                placeholder="Search document"
                name="Input"
              ></input>
            ) : (
              <input
                className="h-12 w-full rounded-r-2xl outline-none text-black"
                placeholder="Search"
                name="Input"
              ></input>
            )}
          </div>
          {pathname === "/documents" ? (
            <div></div>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="h-12 w-32 bg-blue-500 rounded flex items-center justify-center font-semibold"
            >
              Add user +
            </button>
          )}

          <div className="tg:hidden md:inline">
            <div className="flex flex-row items-center ">
              <div className="flex flex-row text-black">
                <div>Sort by</div>
                <Image
                  className="m-3"
                  src={"/dropdown.svg"}
                  width={10}
                  height={10}
                  alt="dropdown"
                />
              </div>
              {pathname === "/documents" ? (
                <div></div>
              ) : (
                <div className="tg:hidden lg:inline">
                  <div className="flex flex-row text-black ">
                    <div>Saved search</div>
                    <Image
                      className="m-3"
                      src={"/dropdown.svg"}
                      width={10}
                      height={10}
                      alt="dropdown"
                    />
                  </div>
                </div>
              )}

              <Image
                className="m-3"
                src={"/filter.svg"}
                width={20}
                height={20}
                alt="filter"
              />
            </div>
          </div>
        </div>
      </div>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
}
