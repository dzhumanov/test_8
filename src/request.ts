
import axiosApi from "./axiosApi";

const request = async () => {
  try {
    const response = await axiosApi.get("quotes.json");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default request;