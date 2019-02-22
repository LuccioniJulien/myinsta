import mFetch from "../lib/mFetch";
import User from "../lib/user";
import { POST_ROUTE, lOGIN_ROUTE, REGISTER_ROUTE } from "./constanApi";

// const jwt = User.myInstance.getUserToken();

export const fetchPost = async () =>
  mFetch(POST_ROUTE, {
    jwt: User.myInstance.getUserToken()
  });
export const fetchLogin = async body =>
  mFetch(lOGIN_ROUTE, {
    method: "POST",
    body
  });
export const fetchRegister = async body =>
  mFetch(REGISTER_ROUTE, {
    method: "POST",
    body
  });
