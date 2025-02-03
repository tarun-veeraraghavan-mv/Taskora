import { useContext } from "react";
import { Button, Input, Label, Signup } from "../../components/Form";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../auth/useUser";
import { useCreateProfile } from "./useCreateProfile";

const Select = styled.select`
  font-size: 16px;
  width: 100%;
  padding: 8px 16px;
`;

function ProfileForm() {
  const { user, isLoading, error } = useUser();
  console.log(user);
  const { createProfile, isCreating } = useCreateProfile();

  console.log(user?._id);

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("DATA", data);

    const finalData = {
      ...data,
      userId: user?._id,
      age: Number(data.age),
    };

    console.log("FINAL DATA", finalData);

    createProfile(finalData);
  }

  if (isCreating) return <p>Loading...</p>;

  if (error) alert(error);

  return (
    <div>
      <Signup onSubmit={onSubmit}>
        <h1>Finish up your profile</h1>
        <div>
          <Label>Your date of birth</Label>
          <Input placeholder="dd/mm/yyyy" type="date" name="dateOfBirth" />
        </div>
        <div>
          <Label>Your gender</Label>
          <Select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </div>
        <div>
          <Label>Location</Label>
          <Input placeholder="Current Location" name="location" />
        </div>
        <div>
          <Label>Current college</Label>
          <Input placeholder="Current college" name="currentCollege" />
        </div>
        <div>
          <Label>Your chosen major</Label>
          <Input placeholder="Major" name="major" />
        </div>
        <div>
          <Label>Your chosen minor</Label>
          <Input placeholder="Minor" name="minor" />
        </div>
        <Button>Create your profile</Button>
      </Signup>
    </div>
  );
}

export default ProfileForm;
