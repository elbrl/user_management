import Header from "../component/Header";
import ListUser from "../component/ListUser";
import Search from "../component/Search";
import LeftBar from "../component/leftBar";

export default function Dashboard() {
  return (
    <div className="flex flex-row bg-gray-100 ">
      <LeftBar />
      <div style={{ width: "83vw" }}>
        <Header />
        <Search />
        <ListUser />
      </div>
    </div>
  );
}
