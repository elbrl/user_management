import Image from "next/image";
import { users } from "./UsersData";

export default function ListUser() {
  return (
    <div className="mx-8 text-black">
      <div className=" h-[61vh] mt-8 rounded-2xl bg-white w-full ">
        <div className="tg:hidden 2xl:inline">
          <div className="h-16 flex items-center">
            <div className="m-6">List Users</div>
          </div>
        </div>
        <div className="bg-slate-100 h-16 flex items-center">
          <div className="tg:text-sm md:text-lg m-6 text-slate-400 w-full flex flex-row">
            <div className="w-5/12">List Users</div>
            <div className="flex justify-between w-7/12 md:mx-16">
              <div className="">Create Date</div>
              <div className=" tg:hidden lg:inline">Role</div>
              <div className="">Action</div>
            </div>
          </div>
        </div>
        {users.map(({ name, mail, status, date, role }) => (
          <div>
            <div className="flex justify-center">
              <div className="h-[1px] w-full bg-slate-100 mx-4"></div>
            </div>
            <div className="flex flex-row tg:text-sm md:text-lg">
              <div className="h-16 flex items-center w-5/12 justify-between">
                <div className="m-6">
                  <div>{name}</div>
                  <div className="text-gray-400">{mail}</div>
                </div>
                <div className="tg:hidden lg:inline">
                  <div
                    className={`w-32 ${
                      status === "Employee"
                        ? "bg-slate-100 text-slate-400"
                        : "bg-blue-500 text-white"
                    } h-8 rounded-lg  flex items-center justify-center`}
                  >
                    {status}
                  </div>
                </div>
              </div>
              <div className="h-16 flex items-center w-7/12 justify-between md:mx-16">
                <div className="text-gray-600">{date}</div>
                <div className="tg:hidden lg:inline text-gray-600">{role}</div>
                <div className="flex flex-row">
                  <Image
                    className="m-3"
                    src={"/pencil.svg"}
                    width={25}
                    height={25}
                    alt="Pencil"
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
        ))}
      </div>
    </div>
  );
}
