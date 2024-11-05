import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="w-11/12 mx-auto my-4 md:my-6 lg:my-8">
      <Outlet />
    </div>
  );
};

export default Users;
