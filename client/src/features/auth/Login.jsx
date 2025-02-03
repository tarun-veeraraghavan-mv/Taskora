import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Label, Signup } from "../../components/Form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    try {
      const newUser = await axios.post(
        "http://127.0.0.1:3000/api/v1/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", newUser.data.token);
      

      navigate("/app/home");
    } catch (e) {
      console.log(e);
      if (e?.response?.data?.message) {
        alert(e?.response?.data?.message);
      }
    }
  }

  return (
    <div>
      <Signup onSubmit={login}>
        <h1>Log in to your account</h1>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button>Log in</Button>
      </Signup>
    </div>
  );
}

export default Login;
