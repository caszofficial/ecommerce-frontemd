/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import axios from "axios";
import { useEffect, useState } from "react";

const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const data = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`);
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return { users };
};

export default useGetUsers;
