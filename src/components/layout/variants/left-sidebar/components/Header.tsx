import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <header className='h-[4rem] border-b-2 border-slate-100 flex justify-between items-center px-4'>
      <h1>Title page</h1>
      <div>
        <button onClick={handleLogout} className='hover:underline'>Logout</button>
      </div>
    </header>
  )
}

export default Header
