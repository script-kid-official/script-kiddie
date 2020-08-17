import axios from "axios";
import { getCookie } from "utils/common";

const url = "https://script-kiddie.co.za/api/wp-json/script-kid/v1/posts/";

export const fetchContentBySlug = async () => {
  try {
    const token = getCookie("SK_JWT");
    // const { data } = await axios.get(url.concat(`${parent}?slug=${child}`), { headers: { "Authorization": `Bearer ${token}` } })
    const { data } = await axios.get(url);
    return { success: true, data };
  } catch (error) {
    return { ...error.response.data };
  }
};

export const postLogin = async (username, password) => {
  if (!username || !password)
    return {
      status: "failed",
      message: "You need to provide a username and password",
    };
  try {
    const { data } = await axios.post(url.concat(`auth/local`), {
      identifier: username,
      password: password,
    });
    return data;
  } catch (error) {
    return { status: "failed", message: "Login Failed" };
  }
};
