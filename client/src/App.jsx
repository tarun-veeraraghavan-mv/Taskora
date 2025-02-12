import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "./features/auth/Signin";
import Home from "./components/Home";
import Login from "./features/auth/Login";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from "./components/AppLayout";
import ProfileForm from "./features/profile/ProfileForm";
import Profile from "./features/profile/Profile";
import Course from "./features/courses/Course";
import AddCourseModal from "./features/courses/AddCourseModal";
import UpdateCourseModal from "./features/courses/UpdateCourseList";
import TodoTracker from "./pages/TodoTracker";
import Accomplishments from "./pages/Accomplishments";
import CourseDetails from "./features/courses/CourseDetails";
import TodoLayout from "./features/tracker/TodoLayout";
import GoalTracker from "./features/tracker/GoalTracker";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  // console.log(process.env.API_URL);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#F8FAFC",
            color: "#334155",
            fontWeight: "bold",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfileForm />} />
          </Route>

          <Route path="/app" element={<ProtectedRoute />}>
            <Route path="/app" element={<AppLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="me" element={<Profile />} />
              <Route path="course" element={<Course />} />
              <Route path="course/:courseId" element={<CourseDetails />} />
              <Route path="course-add" element={<AddCourseModal />} />
              <Route path="course-update/:id" element={<UpdateCourseModal />} />
              <Route path="todo" element={<TodoLayout />}>
                <Route index element={<Navigate replace to="course" />} />
                <Route path="course" element={<TodoTracker />} />
                <Route path="goals" element={<GoalTracker />} />
              </Route>
              <Route path="accomplishments" element={<Accomplishments />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
