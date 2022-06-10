import axios from "axios";
import constant from '../../utils/commonData'
import authHeader from "./auth-header";


const register = (values) => {
  return axios.post(constant.apiUrl + "/auth/signup", values);
};

const login = (values) => {
  return axios
    .post(constant.apiUrl + "/auth/signin", values)
    .then((response) => {
      console.log(response)
      if (response.data.accessToken) {
        localStorage.setItem("idToken", response.data.accessToken);
      }
      return response.data;
    });
};

const logout = () => {
    localStorage.clear();
};


const getAuthUser = () => {
  return axios.get(constant.apiUrl + "/auth", { headers: authHeader() });
};


export default {
  register,
  login,
  logout,
  getAuthUser,
};