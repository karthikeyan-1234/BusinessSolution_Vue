import axios from "axios";
import router from '../router';


export default function axiosSetUp() {


  axios.interceptors.request.use(
    function(config) {
      const token = localStorage.getItem("jwtToken");//store.getters.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      router.push("/Login")
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (res)=>{console.log("Axios response"); console.log(res); return res},
    (err) => {
      console.log("Axios error response");
      return Promise.reject(err);
    }
    )
}

