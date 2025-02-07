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

export async function signin(name, avatar, email, password) {
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
  } catch (error) {
    console.log(error);
    if (error?.response?.data?.message) {
      alert(error?.response?.data?.message);
    }
  }
}

export async function fetchUser() {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const data = await axios.get("http://127.0.0.1:3000/api/v1/users/me");

    return data.data.data.user;
  } catch (error) {
    console.log(error);
    if (error?.response?.data?.message) {
      alert(error?.response?.data?.message);
    }
  }
}

export async function createProfile(formData) {
  try {
    const createdUser = await axios.post(
      "http://127.0.0.1:3000/api/v1/profile",
      formData
    );

    return createdUser;
  } catch (e) {
    console.log(e);
    if (e?.response?.data?.message) {
      alert(e?.response?.data?.message);
    }
  }
}

export async function getProfile(userId) {
  try {
    const userProfile = await axios.get(
      `http://127.0.0.1:3000/api/v1/profile/${userId}`
    );

    return userProfile.data.data.profile;
  } catch (e) {
    console.log(e);
    if (e?.response?.data?.message) {
      alert(e?.response?.data?.message);
    }
  }
}

// NOTE: COURSES

export async function getAllCourses(userId) {
  try {
    const allCourses = await axios.get(
      `http://127.0.0.1:3000/api/v1/course/${userId}`
    );

    return allCourses.data.data.allCourses;
  } catch (e) {
    console.log(e);
    if (e?.response?.data?.message) {
      alert(e?.response?.data?.message);
    }
  }
}

export async function createCourse(formData) {
  try {
    const newCourse = await axios.post(
      "http://127.0.0.1:3000/api/v1/course",
      formData
    );

    return newCourse.data.data.newCourse;
  } catch (e) {
    console.log(e);
    if (e?.response?.data?.message) {
      alert(e?.response?.data?.message);
    }
  }
}

export async function deleteCourse(courseId) {
  console.log(courseId);
  try {
    const deletedCourse = await axios.delete(
      `http://127.0.0.1:3000/api/v1/course/${courseId}`
    );

    return deletedCourse.data.data.deletedCourse;
  } catch (e) {
    console.log(e);
    if (e?.response?.data?.message) {
      alert(e?.response?.data?.message);
    }
  }
}
