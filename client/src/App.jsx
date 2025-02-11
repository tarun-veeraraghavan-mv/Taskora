import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./features/auth/Signin";
import Home from "./components/Home";
import Login from "./features/auth/Login";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./components/AppLayout";
import ProfileForm from "./features/profile/ProfileForm";
import Profile from "./features/profile/Profile";
import Course from "./features/courses/Course";
import AddCourseModal from "./features/courses/AddCourseModal";
import UpdateCourseModal from "./features/courses/UpdateCourseList";
import TodoTracker from "./pages/TodoTracker";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
              <Route path="course-add" element={<AddCourseModal />} />
              <Route path="course-update/:id" element={<UpdateCourseModal />} />
              <Route path="todo" element={<TodoTracker />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
