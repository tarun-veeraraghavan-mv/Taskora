import React from "react";

import { useUser } from "../features/auth/useUser";
import LoaderScreen from "./LoaderScreen";

function Home() {
  const { user, isLoading, error } = useUser();

  if (isLoading) return <LoaderScreen />;

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
