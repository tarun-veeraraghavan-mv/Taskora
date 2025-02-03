import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, Input, Label, Signup } from "../../components/Form";

function Signin() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signin(e) {
    e.preventDefault();
    try {
      const newUser = await axios.post(
        "http://127.0.0.1:3000/api/v1/users/signin",
        {
          name,
          avatar,
          email,
          password,
        }
      );

      localStorage.setItem("token", newUser.data.token);

      navigate("/profile");
    } catch (e) {
      console.log(e);
      if (e?.response?.data?.message) {
        alert(e?.response?.data?.message);
      }
    }
  }

  return (
    <div>
      <Signup onSubmit={signin}>
        <h1>Create your account!</h1>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="avatar">Avatar</Label>
          <Input
            type="text"
            id="avatar"
            placeholder="johndoe.jpg"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button>Create account</Button>
      </Signup>
    </div>
  );
}

export default Signin;
