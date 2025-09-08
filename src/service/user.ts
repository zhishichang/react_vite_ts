import type { Login } from "../types";
import request from "../utils/request";

export function userLogin(params: Login.params) {
  return request.post<Login.result>("/api/user/login", params);
}
