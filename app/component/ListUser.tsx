import Image from "next/image";
import { users } from "./UsersData";
import Footer from "./Footer";

interface mapType {
  name: String;
  _id: String;
  role: String;
  createdAt: String;
  status: String;
  mail: String;
}
const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Faild to fetch users");
    }
    return res.json();
  } catch (erorr) {
    console.log("Error loading users: ", erorr);
  }
};

export default async function ListUser() {
  const { users } = await getUsers();
  const limitedUsers = users.slice(0, 8);
  return (
    <div className="mx-8 text-black h-[73.6vh]">
      <div className=" h-[65vh] mt-8 rounded-2xl bg-white w-full ">
        <div className="">
          <div className="h-14 flex items-center">
            <div className="m-6">List Users</div>
          </div>
        </div>
        <div className="bg-slate-100 h-14 flex items-center ">
          <div className="tg:text-xs md:text-sm m-6 text-slate-400 w-full flex flex-row">
            <div className="w-[50%]">Name</div>
            <div className="flex justify-between w-[50%] md:mx-4">
              <div className="">Create Date</div>
              <div className=" tg:hidden 2lg:inline w-28">Role</div>
              <div className="">Action</div>
            </div>
          </div>
        </div>

        {limitedUsers.map((t: mapType) => (
          <div>
            <div className="flex justify-center">
              <div className="h-[1px] w-full bg-slate-100 mx-4"></div>
            </div>
            <div className="flex flex-row">
              <div className="2xl:h-[70px] tg:h-[64px] flex items-center w-[50vw] justify-between">
                <div className="m-6 ml-[70px] w-40">
                  <div className="tg:text-xs md:text-sm"> {t.name}</div>
                  <div className="tg:text-[10px] md:text-xs text-gray-400 ">
                    {t.mail}
                  </div>
                </div>
                <div className="tg:hidden 2lg:inline">
                  <div
                    className={`w-28 mr-[70px] ${
                      t.status === "Employee"
                        ? "bg-slate-100 text-slate-400"
                        : "bg-[#0095FF] text-white"
                    } h-7 rounded-lg  flex items-center justify-center`}
                  >
                    <div className="tg:text-xs md:text-sm">{t.status}</div>
                  </div>
                </div>
              </div>
              <div className="h-16 flex items-center w-[50vw] justify-between md:mx-4">
                <div className="text-gray-600 tg:text-[10px] md:text-xs">
                  {t.createdAt.slice(0, 10)}
                </div>
                <div className="tg:hidden 2lg:inline text-gray-600 tg:text-[10px] md:text-xs">
                  {t.role}
                </div>
                <div className="flex flex-row">
                  <Image
                    className="m-3"
                    src={"/pencil.svg"}
                    width={22}
                    height={22}
                    alt="Pencil"
                  />
                  <Image
                    className="m-3"
                    src={"/trash.svg"}
                    width={22}
                    height={22}
                    alt="Trash"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[75px]  flex items-end justify-center">
        <div className="mb-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
