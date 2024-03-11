/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store";
const UserDetails = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const HandleDeleteUser = (name) => {
    dispatch(deleteUser({ name }));
  };
  return (
    <div className="mt-12 ml-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users?.map((user, index) => (
        <div
          key={index}
          className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{user.name}</div>
            <p className="text-gray-700 text-base">Email :{user.email}</p>
            <p className="text-gray-700 text-base">Address: {user.address}</p>
          </div>
          <div className="px-6 py-4">
            <button
              onClick={() => HandleDeleteUser(user.name)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
