function Header() {
  return (
    <header className='h-[4rem] border-b-2 border-slate-100 flex justify-between items-center px-4'>
      <h1>Title page</h1>
      <div>
        <button className='hover:underline'>Logout</button>
      </div>
    </header>
  )
}

export default Header
