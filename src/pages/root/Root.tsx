import { Outlet, Navigate } from "react-router-dom";
import Layout from "components/layout/Layout";


export default function Root() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="login" />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
