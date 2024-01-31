"use client";
import Image from "next/image";

export default function FooterDashboard() {
  return (
    <div className=" w-full flex ">
      <div className="w-full h-24 flex justify-center items-end">
        <div className="h-8 w-2/5 text-gray-500 flex justify-between">
          <div>Items per page:</div>
          <div>
            <div className="flex flex-row items-center justify-between">
              <div>6</div>
              <div>
                <Image src={"/nabla.svg"} width={16} height={16} alt="nabla" />
              </div>
            </div>
            <div className="">
              <div style={{ height: 1.5 }} className="w-10 bg-gray-500 "></div>
            </div>
          </div>
          <div>1-4 of 10</div>
          <div className="w-28 flex justify-between">
            <Image
              src={"/leftArrowDisable.svg"}
              width={24}
              height={24}
              alt="ArrowLeft"
            />
            <Image
              src={"/rightArrowDisable.svg"}
              width={24}
              height={24}
              alt="ArrowRight"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
