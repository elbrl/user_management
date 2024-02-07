import Image from "next/image";
import Footer from "./Footer";

interface mapType {
  name: String;
  _id: String;
  role: String;
  createdAt: String;
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

export default async function ListUser2() {
  const { users } = await getUsers();
  const limitedUsers = users.slice(0, 4);
  return (
    <div className="mx-8 text-black h-80 ">
      <div className="rounded-lg bg-white">
        <div className="rounded-t-lg bg-[#EFF4FA] h-16 flex justify-around items-center">
          <div className="text-slate-400 w-[45%] flex flex-row items-center justify-between tg:text-sm md:text-base">
            <div className="w-[30%]">Name</div>
            <div className="tg:w-16 lg:w-2/12 tg:mr-10 lg:mr-0">User ID</div>
            <div className="w-[120px] tg:hidden lg:inline ">Lorem ipsum</div>
          </div>
          <div className="text-slate-400 w-[45%] flex flex-row items-center justify-between">
            <div className="w-4/12 tg:ml-6 lg:ml-0">Date</div>
            <div className="w-[120px] tg:hidden lg:inline ">Lorem ipsum</div>
            <div className="w-[15%]">Action</div>
          </div>
        </div>
        {limitedUsers.map((t: mapType) => (
          <div>
            <div className="h-16 flex justify-around items-center font-light tg:text-xs md:text-sm">
              <div className="w-[45%] flex flex-row justify-between">
                <div className="w-3/12 ml-8 font-normal tg:text-xs md:text-sm">
                  {t.name}
                </div>
                <div className="tg:w-16 lg:w-2/12 tg:text-[10px] md:text-xs tg:mr-10 lg:mr-0">
                  {t._id.slice(-6)}
                </div>
                <div className="w-[120px] tg:hidden lg:inline tg:text-[10px] md:text-xs ">
                  {t.role}
                </div>
              </div>
              <div className="w-[45%] flex flex-row items-center justify-between ">
                <div className="tg:w-60 lg:w-4/12 tg:text-[10px] md:text-xs tg:ml-6 lg:ml-0">
                  {t.createdAt.slice(0, 10)}
                </div>
                <div className="w-[100px] tg:hidden lg:inline tg:text-[10px] md:text-xs ">
                  {t.role}
                </div>
                <div className="tg:w-16 lg:w-2/12 tg:mr-6 lg:mr-0">
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
      <div className="tg:h-[350px] sm:h-[222px] flex items-end justify-center ">
        <div className="mb-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
