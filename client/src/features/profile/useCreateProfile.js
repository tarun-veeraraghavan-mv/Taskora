import { useMutation } from "@tanstack/react-query";
import { createProfile as createProfileApi } from "../../lib/data-service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCreateProfile() {
  const navigate = useNavigate();

  const { mutate: createProfile, isLoading: isCreating } = useMutation({
    mutationFn: (formData) => {
      createProfileApi(formData);
    },
    onSuccess: () => {
      navigate("/app/home");
      toast.success("Profile created! Welcome");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  return { createProfile, isCreating };
}
