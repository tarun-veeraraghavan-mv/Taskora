import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile as updateProfileApi } from "../../lib/data-service";
import toast from "react-hot-toast";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  const {
    mutate: updateProfile,
    isLoading: isUpdatingProfile,
    error: updateError,
  } = useMutation({
    mutationFn: ({ id, data }) => updateProfileApi(id, data),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries(["profile", id]);

      const previousProfile = queryClient.getQueryData(["profile", id]);

      queryClient.setQueryData(["profile", id], (oldProfile) => ({
        ...oldProfile,
        ...data,
      }));

      return { previousProfile };
    },
    onError: (err, _, context) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success("Profile successfully updated");
    },
    onSettled: (_, __, { id }) => {
      queryClient.invalidateQueries(["profile", id]);
    },
  });

  return { updateProfile, isUpdatingProfile, updateError };
}
