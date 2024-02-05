"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-end">
        <div className="h-8   w-[400px] text-gray-500 flex justify-between items-center text-xs">
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
          <div className="w-20 flex justify-between">
            <Image
              src={"/leftArrowDisable.svg"}
              width={16}
              height={16}
              alt="ArrowLeft"
            />
            <Image
              src={"/rightArrowDisable.svg"}
              width={16}
              height={16}
              alt="ArrowRight"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
