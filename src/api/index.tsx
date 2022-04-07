// import axios from 'axios';

// const { create } = axios;

// export const AuthApi = create({
//   baseURL: `${process.env.REACT_APP_AUTH_API}`,
// });

// // export const BaseApi = create({ baseURL: `${process.env.REACT_APP_API_URL}` });

// export const MockApiRandomUser = create({
//   baseURL: `${process.env.REACT_APP_API_RANDOM_USER_API}`,
// });

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// // const tokenInterceptor = (config: any) => {
// //   const token = localStorage.getItem('token');
// //   if (token) {
// //     config.headers.Authorization = `Bearer ${token.replace(/['"]+/g, '')}`;
// //   }
// //   return config;
// // };

// // BaseApi.interceptors.response.use(
// //   (response) => response,
// //   (error) => {
// //     if (error.response.status === 401) {
// //       window.location.href = '/login';
// //       localStorage.clear();
// //     }
// //     return Promise.reject(error);
// //   }
// // );

// // BaseApi.interceptors.request.use(tokenInterceptor);
