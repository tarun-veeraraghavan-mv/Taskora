import { useContext } from "react";
import { Button, Input, Label, Signup } from "../../components/Form";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Select = styled.select`
  font-size: 16px;
  width: 100%;
  padding: 8px 16px;
`;

function ProfileForm() {
  const { user } = useContext(UserContext);
  console.log(user);
  const navigate = useNavigate();
  console.log(user._id);

  async function onSubmit(e) {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      console.log("DATA", data);

      const finalData = {
        ...data,
        userId: user?.user?._id,
        age: Number(data.age),
      };

      console.log("FINAL DATA", finalData);

      const createdUser = await axios.post(
        "http://127.0.0.1:3000/api/v1/profile",
        finalData
      );

      console.log(createdUser);
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
