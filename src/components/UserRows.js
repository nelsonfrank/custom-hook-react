import React from "react";
import { useUserById } from "../hooks/useUserById";

const UserRows = (userId) => {
  const user = useUserById(userId);
  return (
    <>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </>
  );
};

// orderMain.js
<UserRows userId={order.userId} />;
