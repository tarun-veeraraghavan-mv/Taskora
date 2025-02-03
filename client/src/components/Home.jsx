import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink } from "react-router-dom";
import { useUser } from "../features/auth/useUser";

function Home() {
  const { user, isLoading, error } = useUser();

  if (isLoading) return <p>Loading...</p>;

  if (error) alert(error);

  console.log(user._id);

  return (
    <div>
      <h1>Your user</h1>
      <p>{user.name}</p>
    </div>
  );
}

export default Home;
