import axios from "axios";

const url = "http://localhost:5000";

export const signupUser = async (input) => {
  try {
    let response = await axios.post(`${url}/api/login`, input);
    return await response.data
  } catch (error) {
    console.log("there is error is signup user frontend", error);
  }
};
export const signupAdmin = async (input) => {
  try {
    let response = await axios.post(`${url}/api/admin-login`, input);
    return await response.data
  } catch (error) {
    console.log("there is error is signup user frontend", error);
  }
};
