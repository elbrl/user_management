import Image from "next/image";
import { documentsListData } from "./RandomDatas";

export default function DocumentsList() {
  return (
    <div className="mx-8 text-black h-[63.27vh]">
      <div className="h-[65vh] rounded-2xl bg-white w-full ">
        <div className="flex flex-col mx-6 h-20 justify-center">
          <div className="text-base">List of documents</div>
          <div className="text-sm text-gray-400">Lorem ipsum lorem uojuhn </div>
        </div>
        <div className="h-[1px] w-full bg-slate-100 "></div>
        <div className="">
          {documentsListData.map(({ idk, date, txt }) => (
            <div>
              <div className="h-14 flex items-center justify-between">
                <div className="flex flex-row w-1/6 items-center">
                  <div className="border border-gray-200 w-10 h-10 rounded flex items-center justify-center bg-slate-200 mx-6">
                    <Image
                      width={28}
                      height={28}
                      src={"note.svg"}
                      alt="icons"
                    />
                  </div>
                  <div className="ml-6">
                    <div className="font-light">{idk}</div>
                    <div className="text-gray-400 font-light text-sm">
                      {date}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-[70%] justify-between">
                  <div className="text-gray-400 font-light text-sm max-w-[40%]">
                    {txt}
                  </div>
                  <div className="flex flex-row w-24 justify-between mr-6">
                    <div className="border w-10 h-10 rounded flex items-center justify-center">
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
              <div className="h-[1px] w-full bg-slate-100 "></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
