import Axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { useAxios } from '@vueuse/integrations/useAxios';

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;
const TIMEOUT = 1000 * 30;

// 创建实例
const axiosInstance: AxiosInstance = Axios.create({
  // 前缀
  baseURL: BASE_PREFIX,
  // 超时
  timeout: TIMEOUT,
  // 请求头
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // TODO 在这里可以加上想要在请求发送前处理的逻辑
    // TODO 比如 loading 等
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    }
    // TODO 在这里添加提示信息
    // ElMessage.info(JSON.stringify(response.status));
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      // TODO 在这里添加提示信息
      // ElMessage.error(showCodeMessage(response.status));
      return Promise.reject(response.data);
    }
    // ElMessage.warning('网络连接异常,请稍后再试!');
    return Promise.reject(error);
  }
);

// 服务
const service = {
  get<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.get(url, { params: data });
  },

  post<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.post(url, data);
  },

  put<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.put(url, data);
  },

  delete<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.delete(url, data);
  },

  upload: (url: string, file: FormData | File) =>
    axiosInstance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
};

export default service;

// 响应式 Axios API
export function useAxiosApi(url: string, config: InternalAxiosRequestConfig) {
  return useAxios(url, config, axiosInstance);
}
