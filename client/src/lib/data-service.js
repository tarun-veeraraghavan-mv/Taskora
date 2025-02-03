import axios from "axios";

export async function profile(id) {
  try {
    const profile = await axios.get(
      `http://127.0.0.1:3000/api/v1/profile/${id}`
    );

    return profile.data.data.profile;
  } catch (error) {
    console.log(error);
  }
}
