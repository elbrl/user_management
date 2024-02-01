import { users } from "./UsersData";

export default function ModalCheckBox() {
  return (
    <div className="max-h-80 overflow-y-auto">
      {users.map(({ status }) => (
        <div>
          <div className="h-16 flex flex-row justify-between items-center text-sm">
            <div className="flex justify-between w-5/12 ml-8">{status}</div>
            <div className="flex justify-around w-7/12 accent-[#222B45] ">
              <input type="checkbox" id="" name="" value={""}></input>
              <input type="checkbox" id="" name="" value={""}></input>
              <input type="checkbox" id="" name="" value={""}></input>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-[1px] w-[95%] bg-slate-100 "></div>
          </div>
        </div>
      ))}
    </div>
  );
}
