import { Outlet, Navigate } from "react-router-dom";
import Header from "components/header/Header";
import SideBar from "components/sidebar/SideBar";

export default function Root() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="login" />;
  }

  return (
    <div className="grid grid-cols-[200px_auto]">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="col-start-2">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
