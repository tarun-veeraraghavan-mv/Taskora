import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import styled from "styled-components";
import axios from "axios";
import { profile } from "../../lib/data-service";
import { getProfile } from "../../../../server/controller/profileController";

const StyledProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

function Profile() {
  const { user } = useContext(UserContext);
  const [additionalDeatils, setAddDetails] = useState(null);
  console.log(user);

  async function fetchProfile() {
    const userProfile = await axios.get(
      `http://127.0.0.1:3000/api/v1/profile/${user.user._id}`
    );
    console.log(userProfile);
  }

  if (user?.user?.loading) return <p>Loading...</p>;

  return (
    <div>
      <StyledProfileImage src={user?.user?.avatar} />
      <div>
        <p>{user?.user?.name}</p>
        <p>{user?.user?.email}</p>

        <hr />

        <button onClick={fetchProfile}>Get more details</button>

        {additionalDeatils && (
          <>
            <p>{additionalDeatils?.location}</p>
            {/* <p>{currentProfile?.dateOfBirth}</p>
            <p>{currentProfile?.gender}</p>
            <p>{currentProfile?.currentCollege}</p>
            <p>{currentProfile?.major}</p>
            <p>{currentProfile?.minor}</p> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
