import { HTTPTransport } from "../core/fetch";

const http = new HTTPTransport("https://ya-praktikum.tech/api/v2/auth");

const signupAPI = (data) => {
  http.post("/signup", { data });
};

export { signupAPI };
