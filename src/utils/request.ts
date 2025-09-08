import { message } from "antd";
import axios from "axios";
import type { Result } from "../types";

// 创建axios实例
const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前判断本地是否存在token，有则添加到请求头中
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    const result: Result = response.data; // 这里就不会报错
    return result.data;
  },
  function (error) {
    switch (error.response.status) {
      // token过期 token无效 重新登录
      case 401:
        window.location.href = "/login";
        break;
      // 服务器错误
      case 500:
        message.error("服务器错误，请稍后重试~");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

// 暴露封装的axios实例
export default request;
