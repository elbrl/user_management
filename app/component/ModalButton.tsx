import { users } from "./UsersData";

export default function ModalButton() {
  return (
    <div className="h-16 w-full flex justify-end items-center ">
      <button className="h-8 bg-[#0095FF] w-28 text-white rounded-lg">
        Add User
      </button>
      <button className="h-8 w-28 text-gray-400 rounded-lg">Cancel</button>
    </div>
  );
}
