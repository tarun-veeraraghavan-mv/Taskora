import { Button, Form, Input, Label, Select } from "../../components/Form";
import { useUser } from "../auth/useUser";
import { useCreateProfile } from "./useCreateProfile";

function ProfileForm() {
  const { user, isLoading, error } = useUser();
  console.log(user);
  const { createProfile, isCreating } = useCreateProfile();

  console.log(user?._id);

  function onSubmit(e) {
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
      <Form onSubmit={onSubmit} centered={true}>
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
      </Form>
    </div>
  );
}

export default ProfileForm;
