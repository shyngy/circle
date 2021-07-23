import * as axios from "axios";


const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "6b39d79e-a55d-40f5-92f2-f977a51d6e2f"
  }
  
});

export const getUsers = (currentPage = 1, pageSize = 10) =>{
  return instance.get(`users?page=${currentPage}&count=${pageSize}`,
  ).then((response)=>{
    return response.data
  })
};

