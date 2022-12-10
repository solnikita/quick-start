import LeftSideBar from "./variants/left-sidebar/LeftSideBar";

interface Props {
  type?: 'left-sidebar';
  children?: React.ReactNode;
}

function Layout({type, children}: Props) {
  return (
    <LeftSideBar>
      {!!children && children}
    </LeftSideBar>
  )
}

export default Layout
