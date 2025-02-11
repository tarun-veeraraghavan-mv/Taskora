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

export async function updateProfile(id, data) {
  console.log(id, data);

  try {
    const updatedProfile = await axios.patch(
      `http://127.0.0.1:3000/api/v1/profile/${id}`,
      data
    );

    return updatedProfile.data.data.updatedProfile;
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

export async function getCourseById(courseId) {
  console.log(courseId);

  try {
    const course = await axios.get(
      `http://127.0.0.1:3000/api/v1/course/courses/${courseId}`
    );

    return course.data.data.course;
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

export async function updateCourse(courseId, data) {
  console.log(courseId, data);

  try {
    const updatedCourse = await axios.patch(
      `http://127.0.0.1:3000/api/v1/course/${courseId}`,
      data
    );

    return updatedCourse.data.data.updatedCourse;
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

export async function updateUser(userId, data) {
  console.log(userId);
  console.log(data);

  try {
    const updatedUser = await axios.patch(
      `http://127.0.0.1:3000/api/v1/user/${userId}`,
      data
    );

    return updatedUser.data.data.updatedUser;
  } catch (e) {
    console.log(e);
    if (e?.response?.data?.message) {
      alert(e?.response?.data?.message);
    }
  }
}

export async function getAllTodos() {
  try {
    const todos = await axios.get("http://127.0.0.1:3000/api/v1/todo");

    return todos.data.data.todos;
  } catch (e) {
    console.log(e);
    if (e?.response?.data?.message) {
      alert(e?.response?.data?.message);
    }
  }
}

export async function createTodo(data) {
  try {
    const newTodo = await axios.post("http://127.0.0.1:3000/api/v1/todo", data);

    return newTodo.data.data.newTodo;
  } catch (e) {
    console.log(e);
    if (e?.response?.data?.message) {
      alert(e?.response?.data?.message);
    }
  }
}
