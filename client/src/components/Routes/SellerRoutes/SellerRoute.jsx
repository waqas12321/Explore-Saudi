import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const SellerRoute = () => {
  const [auth, setAuth] = useAuth();
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const autoCheck = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/auth/seller-auth"
        );

        if (res && res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.warn(error);
      }
    };
    if (auth?.token) {
      autoCheck();
    }
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner />;
};

export default SellerRoute;
