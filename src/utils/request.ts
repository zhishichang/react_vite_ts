import { hideLoading, showLoading } from "@/components/Loading";
import { message } from "antd";
import axios, { type AxiosRequestConfig } from "axios";

// 创建axios实例
const instance = axios.create({
  // 根据构建环境的不同获取不同的值
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    showLoading();
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
instance.interceptors.response.use(
  (response) => {
    hideLoading();
    return response;
  },
  function (error) {
    hideLoading();
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

function request(config: AxiosRequestConfig) {
  // 统一的响应处理 API {code,msg,data}
  // 给我传一个配置项 可以控制我是否要进行统一的响应处理
  return instance.request(config).then((res) => res.data.data);
}
// 暴露封装的axios实例
export default {
  get<T>(url: string, params: object): Promise<T> {
    return request({
      url,
      params,
    });
  },
  // 泛型T 代表API返回的数据类型
  post<T>(url: string, params: object): Promise<T> {
    return request({
      url,
      method: "post",
      data: params,
    });
  },
};
