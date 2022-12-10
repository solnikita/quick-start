import Header from "./components/Header";
import SideBar from "./components/SideBar";

interface Props {
  children: React.ReactNode;
}

function LeftSideBar({children}: Props) {
  return (
    <div className="grid grid-cols-[200px_auto]">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="col-start-2">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default LeftSideBar
