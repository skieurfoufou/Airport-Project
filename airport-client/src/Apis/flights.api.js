import axios from "axios";
import env from "../config/env";

export const getAllFlights = async () => {
  try {
    const url = `${env.SERVER_URL}/flights`;
    console.log(url);
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};
