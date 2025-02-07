import styled from "styled-components";
import { useUser } from "../auth/useUser";
import { useUserProfile } from "./useUserProfile";

const StyledProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const StyledProfileLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 32px;
`

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
    <StyledProfileLayout>
      <div>
        <StyledProfileImage src={user.avatar} />
      </div>

      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{profile.major}</p>
        <p>{profile.minor}</p>
        <p>{profile.location}</p>
        <p>{profile.gender}</p>
        <p>{profile.dateOfBirth}</p>
        <p>{profile.gender}</p>
      </div>
    </StyledProfileLayout>
  );
}

export default Profile;
