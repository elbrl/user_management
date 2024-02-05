import Image from "next/image";
import { documentsListData } from "./RandomDatas";

export default function DocumentsList() {
  return (
    <div className="mx-8 text-black h-[63.27vh]">
      <div className="h-[65vh] rounded-2xl bg-white w-full">
        <div className="flex flex-col mx-6 h-20 justify-center">
          <div className="text-base">List of documents</div>
          <div className="text-sm text-gray-400">Lorem ipsum lorem uojuhn </div>
        </div>
        <div className="h-[1px] w-full bg-slate-100 "></div>
        <div className="h-[56vh] overflow-y-auto bg-white rounded-b-2xl">
          {documentsListData.map(({ idk, date, txt }) => (
            <div>
              <div className="h-16 flex items-center justify-between bg-white rounded-2xl">
                <div className="flex flex-row w-[20%] items-center">
                  <div className="tg:hidden lg:inline">
                    <div className="w-[40px] h-[40px] rounded flex items-center bg-[#ECF0F3] justify-center ml-6">
                      <div>
                        <Image
                          width={22}
                          height={22}
                          src={"note.svg"}
                          alt="icons"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-10 w-40">
                    <div className="font-light tg:text-[10px] sm:text-sm ">
                      {idk}
                    </div>
                    <div className="text-gray-400 font-light tg:text-[10px] ">
                      {date}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-[75%] justify-between">
                  <div className="text-gray-400 font-light tg:text-[8px] sm:text-[10px] md:text-xs max-w-[40%]">
                    {txt}
                  </div>
                  <div className="flex flex-row w-24 justify-between mr-14">
                    <div className=" border w-10 h-10 rounded flex items-center justify-center">
                      <Image
                        width={18}
                        height={18}
                        src={"pencilBlue.svg"}
                        alt="icons"
                      />
                    </div>
                    <div className="border w-10 h-10 rounded flex items-center justify-center">
                      <Image
                        width={18}
                        height={18}
                        src={"fifth.svg"}
                        alt="icons"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full ">
                <div className="h-[1px] w-[90%] bg-slate-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
