import {LOGIN,LOGOUT} from "./events";

export const login = (payload, onSuccess, onError) => {
  return {
    type: LOGIN,
    payload,
    onSuccess,
    onError
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
