import { AxiosRequestConfig } from "axios";

const successInsertToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
    
    config.headers = {
        ...config.headers,
        authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
    }

    return config;
}

const errorInsertToken = (error: any): Promise<any> => {
    return Promise.reject(error);
}

const TokenInterceptor = {
    error: errorInsertToken,
    success: successInsertToken
}

export { TokenInterceptor };