import type { Login, Result } from "../types";
import request from "../utils/request";

export function userLogin(params: Login.params) {
  return request.post<Result<Login.result>>("/api/users/login", params, {
    showLoading: false, //不展示全局的loading效果
    showError: false, //不展示全局的错误信息
  });
}
