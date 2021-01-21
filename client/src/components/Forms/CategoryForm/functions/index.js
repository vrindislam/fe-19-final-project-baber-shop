import axios from "axios";

export const createCategory = async (values, Authorization) => axios
  .post(`${process.env.REACT_APP_API}/catalog`, values, {
    headers: {
      Authorization
    }
  })