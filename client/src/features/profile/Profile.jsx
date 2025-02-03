import styled from "styled-components";
import { useUser } from "../auth/useUser";
import { useUserProfile } from "./useUserProfile";
import { useEffect } from "react";

const StyledProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

function Profile() {
  const { user, isLoading, error } = useUser();

  const {
    profile,
    isLoading: isProfiling,
    error: profileError,
  } = useUserProfile(user?._id);

  if (isLoading || isProfiling) return <p>Loading...</p>;

  if (error || profileError) alert(error);

  return (
    <div>
      <StyledProfileImage src={user.avatar} />

      <button>Fetch more details</button>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <hr />

        <p>{profile.major}</p>
        <p>{profile.minor}</p>
        <p>{profile.location}</p>
        <p>{profile.gender}</p>
        <p>{profile.dateOfBirth}</p>
        <p>{profile.gender}</p>
      </div>
    </div>
  );
}

export default Profile;
