// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { updateProfile as updateProfileApi } from "../../lib/data-service";

// export function useUpdateProfile() {
//   const queryClient = useQueryClient();

//   const {
//     mutate: updateProfile,
//     isLoading: isUpdatingProfile,
//     error: updateError,
//   } = useMutation({
//     mutationFn: ({ id, data }) => updateProfileApi(id, data),
//     onSuccess: ({ id }) => {
//       alert("Profile successfully updated");
//       queryClient.invalidateQueries(["profile", id]);
//     },
//     onError: (e) => {
//       alert(e.message);
//     },
//   });

//   return { updateProfile, isUpdatingProfile, updateError };
// }

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile as updateProfileApi } from "../../lib/data-service";

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
      // if (context?.previousProfile) {
      //   queryClient.setQueryData(["profile", id], context.previousProfile);
      // }
      alert(err.message);
    },
    onSuccess: () => {
      alert("Profile successfully updated");
    },
    onSettled: (_, __, { id }) => {
      queryClient.invalidateQueries(["profile", id]);
    },
  });

  return { updateProfile, isUpdatingProfile, updateError };
}
