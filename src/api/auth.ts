import { HTTPTransport } from "../core/fetch";

const http = new HTTPTransport("https://ya-praktikum.tech/api/v2/auth");

export const signupAPI = (data) => {
  http.post("/signup", { data });
};

export const loginAPI = (data) => {
  http.post("/signin", { data });
}

export const logoutAPI = () => {
  http.post("/logout", {});
}

export const getUserAPI = async () => {
  try {
    const data = await http.get("/user", {})
    return JSON.parse(data.response);
  } catch(error) {
      console.log(error);
  }
}

