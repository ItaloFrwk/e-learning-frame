import axios from "axios";
import { TokenInterceptor } from "./interceptors/insertToken";
import { UnauthorizedInterceptor } from "./interceptors/unauthorized";

const Api = axios.create({});

Api.interceptors.request.use(TokenInterceptor.success, TokenInterceptor.error);
Api.interceptors.response.use(UnauthorizedInterceptor.success, UnauthorizedInterceptor.error);

export { Api }