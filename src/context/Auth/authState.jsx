import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./authContext";
import { BASE_URL } from "../../constant";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  showErrorMessage,
  showSuccessMessage,
} from "../../utils/helpers";
import { toast } from "react-toastify";
import CustomSpinner from "../../components/CustomSpinner";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const AuthState = (props) => {
  const initialState = {
    token: getFromLocalStorage("token"),
    loading: false,
    user: null,
  };

  const [state, setState] = useState(initialState);
  const [globalLoading, setGlobalLoader] = useState(false);

  const { push, replace } = useHistory();

  const setLoading = (isLoading) => {
    setState((prev) => ({
      ...prev,
      loading: isLoading,
    }));
  };

  // Load User
  const loadUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/api/users/me`);
      setLoading(false);
      setGlobalLoader(false);
      setState((prev) => ({
        ...prev,
        user: data.user,
      }));
      console.log("pushing to /");
      replace("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setGlobalLoader(false);
      showErrorMessage(err.response.data.message);
    }
  };

  useEffect(() => {
    setGlobalLoader(true);
    const token = getFromLocalStorage("token");
    if (token) {
      // set the token in header
      axios.defaults.headers["x-auth-token"] = token;
      loadUser();
    } else {
      setGlobalLoader(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Register User
  const register = async (formData, cb) => {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/api/users`, formData, config);
      console.log(res, "res");
      setLoading(false);
      showSuccessMessage("Account registered successfully!");
      push("/login");
      cb();
    } catch (err) {
      console.log(err, "err");
      setLoading(false);
      showErrorMessage(err.response.data.message);
    }
  };

  // Login User /api/auth
  const login = async (formData) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/auth`,
        formData,
        config
      );
      saveToLocalStorage("token", data.token);
      toast.success("Login success!", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // set the token in header
      axios.defaults.headers["x-auth-token"] = data.token;
      loadUser();
    } catch (err) {
      console.log(err.response.data.message);
      setLoading(false);
      toast.error(err.response.data.message, {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    replace("/login");
  };

  if (globalLoading) {
    return (
      <div className="global-loader">
        <CustomSpinner />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        loading: state.loading,
        user: state.user,
        register,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthState;
