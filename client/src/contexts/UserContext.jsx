import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext({ user: null, loading: true, error: null });

function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const token = localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  async function fetchUser() {
    const data = await axios.get("http://127.0.0.1:3000/api/v1/users/me");

    // console.log(data);
    setUser({
      user: data.data.data.user,
      loading: false,
      error: null,
    });
  }

  console.log(user);

  

  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
