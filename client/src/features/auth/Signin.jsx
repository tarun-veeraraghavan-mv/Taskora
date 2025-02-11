import { useState } from "react";

import { Button, Form, Input, Label } from "../../components/Form";
import { useSignin } from "./useSignin";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signin, isSigningIn } = useSignin();

  const navigate = useNavigate()

  function handleSignin(e) {
    e.preventDefault();

    signin({ name, avatar, email, password });

    navigate('/profile')

  }

  if (isSigningIn) return <p>Loading...</p>;

  return (
    <div>
      <Form onSubmit={handleSignin}>
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
      </Form>
      <Link to='/login'>Already have an account? Log in</Link>
    </div>
  );
}

export default Signin;
