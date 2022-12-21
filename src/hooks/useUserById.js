import React from "react";

export const useUserById = (userId) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userById);

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch]);

  return user;
};
