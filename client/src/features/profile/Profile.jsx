import styled from "styled-components";
import { useUser } from "../auth/useUser";
import { useUserProfile } from "./useUserProfile";
import { useState } from "react";
import { Label, Input, Form, Button } from "../../components/Form";
import { useUpdateUser } from "./useUpdateUser";
import { useUpdateProfile } from "./useUpdateProfile";
import LoaderScreen from "../../components/LoaderScreen";

const StyledProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const StyledProfileLayout = styled.div`
  max-width: 720px;
  margin: 40px auto;
  padding: 0 32px;
`;

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledNavEl = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  background-color: #e5e7eb;
`;

function Profile() {
  const { user, isLoading, error } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const [currentTab, setCurrentTab] = useState("settings");
  function handleCurrentTab(tab) {
    setCurrentTab(tab);
  }

  const {
    profile,
    isLoading: isProfiling,
    error: profileError,
  } = useUserProfile(user?._id);

  const { updateProfile, isUpdatingProfile, updateError } = useUpdateProfile();

  function handleUpdateUser(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const finalData = Object.fromEntries(formData);

    console.log(finalData);

    updateUser({ userId: user?._id, userData: finalData });
  }

  function handleUpdateProfile(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const finalData = Object.fromEntries(formData);

    console.log(finalData);

    updateProfile({ id: profile?._id, data: finalData });
  }

  if (isLoading || isProfiling) return <LoaderScreen />;

  if (isUpdating) return <LoaderScreen />;

  if (isUpdatingProfile) return <LoaderScreen />;

  if (error || profileError) alert(error);

  return (
    <StyledProfileLayout>
      <StyledNav>
        <StyledNavEl
          onClick={() => {
            handleCurrentTab("settings");
          }}
        >
          Settings
        </StyledNavEl>
        <StyledNavEl
          onClick={() => {
            handleCurrentTab("profile");
          }}
        >
          Profile
        </StyledNavEl>
      </StyledNav>
      {currentTab === "settings" && (
        <div>
          <StyledProfileImage src={user?.avatar} />
          <Form onSubmit={handleUpdateUser}>
            <div>
              <Label>Your avatar</Label>
              <Input defaultValue={user?.avatar} name="avatar" />
            </div>
            <div>
              <Label>Your name</Label>
              <Input defaultValue={user?.name} name="name" />
            </div>
            <div>
              <Label>Your email</Label>
              <Input defaultValue={user?.email} name="email" />
            </div>
            <Button>Update settings</Button>
          </Form>
        </div>
      )}
      {currentTab === "profile" && (
        <div>
          <Form onSubmit={handleUpdateProfile}>
            <div>
              <Label>Your gender</Label>
              <Input defaultValue={profile?.gender} name="gender" />
            </div>
            <div>
              <Label>Your location</Label>
              <Input defaultValue={profile?.location} name="location" />
            </div>
            <div>
              <Label>Your current college</Label>
              <Input
                defaultValue={profile?.currentCollege}
                name="currentCollege"
              />
            </div>
            <div>
              <Label>Your Major</Label>
              <Input defaultValue={profile?.major} name="major" />
            </div>
            <div>
              <Label>Your minor</Label>
              <Input defaultValue={profile?.minor} name="minor" />
            </div>
            <Button>Update Profile</Button>
          </Form>
        </div>
      )}
    </StyledProfileLayout>
  );
}

export default Profile;
