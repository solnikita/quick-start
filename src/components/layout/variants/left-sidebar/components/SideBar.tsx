function SideBar() {
  return (
    <aside className="h-screen bg-slate-100 overflow-y-auto">
      <div className="h-[4rem] px-4 flex items-center text-blue-400">
        LOGO
      </div>
      <ul className="w-full pt-8">
        <li className="hover:bg-slate-200 w-full p-4 cursor-pointer">Home</li>
        <li className="hover:bg-slate-200 w-full p-4 cursor-pointer">Settings</li>
        <li className="hover:bg-slate-200 w-full p-4 cursor-pointer">Contacts</li>
      </ul>
    </aside>
  )
}

export default SideBar
