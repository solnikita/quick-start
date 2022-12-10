import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="h-screen grid place-items-center bg-slate-100">
      <form className="shadow m-2 md:w-[24rem] bg-slate-300 p-4 box-border rounded">
        <input className="w-full my-4 rounded px-4 py-2" placeholder="E-mail" />
        <input
          className="w-full my-4 rounded px-4 py-2"
          placeholder="Password"
          type="password"
        />
        <button className="bg-blue-400 text-slate-50 px-4 py-2 rounded my-4 hover:bg-blue-500">Login</button>
        <Link to="/registration" className="text-blue-500 px-4 py-2 rounded my-4 hover:underline">Registration</Link>
      </form>
    </div>
  )
}

export default Login
