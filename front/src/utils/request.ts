import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios"
import { trackVForSlotScopes } from "@vue/compiler-core";

// 扩展axios类型
export interface IResponse {
    code: string |number;
    data: [];
    msg: string; 
}

export interface AxiosRequestConfigExt extends AxiosRequestConfig {
    showLoading: boolean;
    bIsNeedCachePresent?: boolean;     // 是否加上防缓存的cp随机数
    bIsNeedJsonStringify?: boolean;    // 是否需要JSON.stringify
    force401RoLogin?: boolean;         // 遇到401是否强制跳转到登录界面
}

axios.defaults.headers.head['Content-Type'] = 'application/json; charset=utf-8';

// 全局变量
let timerLoading: ITimeout;
const AxiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:9999',
    timeout: 1000,
});

const Ajax = {
    request<T= any>(methods: string, reqParams: AxiosRequestConfigExt): Promise<IResponse> {
        let {
            url,
            params,
            headers = [],
            timeout,
            showLoading = true,
            bIsNeedCachePresent,
            bIsNeedJsonStringify,
            force401RoLogin,
        } = reqParams;

        // 判断是否显示loading
        if(false !== showLoading) {
            clearTimeout(timerLoading)
            timerLoading = setTimeout(() => {  
                Tools.showLoadMask();
            }, 200);
        }


        return AxiosInstance.request(reqParams)
    }
}
export type IAjax = typeof Ajax
export default Ajax