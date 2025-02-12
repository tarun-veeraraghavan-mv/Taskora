import { useMutation } from "@tanstack/react-query";
import { signin as signinApi } from "../../lib/data-service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignin() {
  const navigate = useNavigate();

  const { mutate: signin, isLoading: isSigningIn } = useMutation({
    mutationFn: async ({ name, avatar, email, password }) => {
      return await signinApi(name, avatar, email, password);
    },
    onSuccess: () => {
      navigate("/profile");
      toast.success("Account creeation successful! Create your profile");
    },
    onError: (error) => {
      alert(error);
      toast.error(error.message);
    },
  });

  return { signin, isSigningIn };
}
