import Image from "next/image";
import { users2 } from "./UsersData";

export default function ListUser2() {
  return (
    <div className="mx-8 text-black h-[45vh]">
      <div className="h-[33vh] mt-8 rounded-2xl bg-white w-full">
        <div className="bg-[#EFF4FA] h-16 flex justify-around items-center">
          <div className="text-slate-400 w-[45%] flex flex-row justify-between">
            <div className="w-3/12">Name</div>
            <div className="w-2/12">User ID</div>
            <div className="w-2/12">Lorem ipsum</div>
          </div>
          <div className="text-slate-400 w-[45%] flex flex-row  justify-between">
            <div className="w-4/12">Date</div>
            <div className="w-2/12">Lorem ipsum</div>
            <div className="w-[11%]">Action</div>
          </div>
        </div>
        {users2.map(({ name, userId, date, role }) => (
          <div>
            <div className="h-16 flex justify-around items-center font-light text-sm">
              <div className="w-[45%] flex flex-row justify-between">
                <div className="w-3/12 font-normal text-base">{name}</div>
                <div className="w-2/12">{userId}</div>
                <div className="w-2/12">{role}</div>
              </div>
              <div className="w-[45%] flex flex-row items-center justify-between">
                <div className="w-4/12">{date}</div>
                <div className="w-2/12">{role}</div>
                <div className="w-2/12">
                  <div className="flex flex-row">
                    <Image
                      className="m-3"
                      src={"/check.svg"}
                      width={25}
                      height={25}
                      alt="Check"
                    />
                    <Image
                      className="m-3"
                      src={"/trash.svg"}
                      width={25}
                      height={25}
                      alt="Trash"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-slate-100 mx-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
