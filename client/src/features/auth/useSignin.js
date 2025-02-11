import { useMutation } from "@tanstack/react-query";
import { signin as signinApi } from "../../lib/data-service";
import { useNavigate } from "react-router-dom";

export function useSignin() {
  const navigate = useNavigate();

  const { mutate: signin, isLoading: isSigningIn } = useMutation({
    mutationFn: async ({ name, avatar, email, password }) => {
      return await signinApi(name, avatar, email, password);
    },
    onSuccess: () => {
      navigate("/profile");
    },
    onError: (error) => {
      alert(error);
    },
  });

  return { signin, isSigningIn };
}
