import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../lib/data-service";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: ({ userId, userData }) => updateUserApi(userId, userData),
    onMutate: async ({ userData }) => {
      await queryClient.cancelQueries({ queryKey: ["user"] });

      const previousUser = queryClient.getQueryData(["user"]);

      queryClient.setQueryData(["user"], (oldUser) => ({
        ...oldUser,
        ...userData,
      }));

      return { previousUser };
    },
    onError: (err, _, context) => {
      if (context?.previousUser) {
        queryClient.setQueryData(["user"], context.previousUser);
      }
      alert(err.message);
    },
    onSuccess: () => {
      alert("User successfully updated");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { updateUser, isUpdating };
}
