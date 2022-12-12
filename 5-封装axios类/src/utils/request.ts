import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestConfig, RequestInterceptors } from '../request'

export class Request {
    instance: AxiosInstance
    // 实例拦截器对象
    interceptorsObj?: RequestInterceptors

    constructor(config: RequestConfig) {
        this.instance = axios.create(config)
        this.interceptorsObj = config.interceptors
        // 全局请求拦截器
        this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
            // 。。。
            return config
        }, (err: any) => err)
        // 实例请求拦截器
        this.instance.interceptors.request.use(this.interceptorsObj?.requestInterceptors, this.interceptorsObj?.requestInterceptorsCatch)
        // 实例响应拦截器
        this.instance.interceptors.response.use(this.interceptorsObj?.responseInterceptors, this.interceptorsObj?.responseInterceptorsCatch)
        // 全局响应拦截器
        this.instance.interceptors.response.use((res: AxiosResponse) => {
            // 。。。
            return res.data
        }, (err: any) => err)
    }

    request<T>(config: RequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            if (config.interceptors?.requestInterceptors) {
                config = config.interceptors.requestInterceptors(config)
            }

            this.instance.request<any, T>(config).then(res => {
                if (config.interceptors?.responseInterceptors) {
                    res = config.interceptors.responseInterceptors<T>(res)
                }

                resolve(res)
            })
                .catch((err: any) => {
                    reject(err)
                })
        })
    }
}