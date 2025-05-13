import axios from "axios";
export const Url = process.env.NEXT_PUBLIC_API_URL || "";

//Users Signup Api
export const signupApi = async (finaldata: any) => {
  try {
    const response = await axios.post(`/api/auth/signup`, finaldata, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data, "Users api data");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

// User Login Api
export const LoginApi = async (finaldata: any) => {
  try {
    const response = await axios.post(`/api/auth/login`, finaldata, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data, "Login api data");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};
