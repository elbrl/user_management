import { cardsData } from "./RandomDatas";

export default function UsersCard() {
  return (
    <div className="tg:hidden sm:inline">
      <div className="flex flex-row justify-around mx-4 h-32 items-center">
        {cardsData.map(({ text, too }) => (
          <div className="bg-white h-[85px] w-[23%] rounded-lg flex justify-center flex-col">
            <div className="mx-5 text-gray-400 my-1 font-light tg:text-xs lg:text-sm">
              {text}
            </div>
            <div className="mx-5 text-black text-lg font-semibold my-1">
              {too}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
