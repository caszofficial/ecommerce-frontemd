import axios from "axios";
import { useEffect, useState } from "react";

export const useGetUserInfo = (id: number) => {
  const [userInfo, setUserInfo] = useState({ name: "", email: "", role: "", id:""});

  const getUserInfo = async () => {
    try {
      const userData = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/${id}`);
      setUserInfo(userData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return { userInfo };
};
