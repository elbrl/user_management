import Footer from "../component/Footer";
import Header from "../component/Header";
import ListUser2 from "../component/ListUser2";
import Search from "../component/Search";
import UsersCardMap from "../component/UsersCardMap";
import LeftBar from "../component/leftBar";

export default function Users() {
  return (
    <div className="flex flex-row bg-[#f5f5f5] ">
      <LeftBar />
      <div className="w-[83vw] ">
        <Header />
        <Search />
        <UsersCardMap />
        <ListUser2 />
        <div className="flex flex-end">
          <Footer />
        </div>
      </div>
    </div>
  );
}
