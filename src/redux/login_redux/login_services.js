import axios from "axios";
export const loginApi = async payload => {
  console.log("create login api: ", payload);
  console.log(payload["username"], payload["password"]);
  return await axios.post("https://api.comride.com/api/admin/login",
    payload
  );
};
