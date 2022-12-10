import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="h-screen grid place-items-center bg-slate-100">
      <form className="shadow m-2 md:w-[24rem] bg-slate-300 p-4 box-border rounded">
        <input className="w-full my-4 rounded px-4 py-2" placeholder="Name" />
        <input
          className="w-full my-4 rounded px-4 py-2"
          placeholder="Last name"
        />
        <input className="w-full my-4 rounded px-4 py-2" placeholder="E-mail" />
        <input
          className="w-full my-4 rounded px-4 py-2"
          placeholder="Password"
          type="password"
        />
        <input
          className="w-full my-4 rounded px-4 py-2"
          placeholder="Repeat password"
          type="password"
        />
        <button className="bg-blue-400 text-slate-50 px-4 py-2 rounded my-4 hover:bg-blue-500">Submit</button>
        <Link to="/login" className="text-blue-500 px-4 py-2 rounded my-4 hover:underline">Login</Link>
      </form>
    </div>
  );
}

export default Registration;
