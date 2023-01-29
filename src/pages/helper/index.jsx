import axios from "axios";
import api from "../../api";

export const authCheck = () => {
  return axios
    .get(`${api}/auth/check`, { withCredentials: true })
    .then((response) => {
      return { data: response.data };
    })
    .catch((err) => {
      return { error: err };
    });
};
