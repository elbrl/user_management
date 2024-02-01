import Header from "../component/Header";
import Search from "../component/Search";
import LeftBar from "../component/leftBar";

export default function Documents() {
  return (
    <div className="flex flex-row bg-gray-100 ">
      <LeftBar />
      <div style={{ width: "83vw" }}>
        <Header />
        <Search />
      </div>
    </div>
  );
}
