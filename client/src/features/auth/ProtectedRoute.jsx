import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const userToken = localStorage.getItem("token");
  console.log(userToken);

  return userToken ? <Outlet /> : <Navigate replace to="/" />;
}

export default ProtectedRoute;
