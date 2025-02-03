import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink } from "react-router-dom";

function Home() {
  const { user } = useContext(UserContext);

  console.log(user);

  if (user.loading) return <p>Loading...</p>;

  return <div>You are in home pahe</div>;
}

export default Home;
