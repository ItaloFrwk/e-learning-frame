import { AxiosResponse } from "axios";

const unauthorizedRequest = (response: AxiosResponse): AxiosResponse => {
    
    if(response.status === 401) {

        window.location.href = `${window.location.hostname}/`;
    }

    return response;
}

const errorRequest = (error: any): Promise<any> => {
    return Promise.reject(error);
}

const UnauthorizedInterceptor = {
    error: errorRequest,
    success: unauthorizedRequest
}

export { UnauthorizedInterceptor };