import axios from "axios";
import { AuthData } from "@/api/types";

const getAuthData = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const respose = await axios.get<AuthData[]>(`${baseUrl}/authData`);
  return respose.data;
};

export default getAuthData;
