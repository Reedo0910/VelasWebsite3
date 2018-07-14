import axios from 'axios';

// 创建axios实例
const instance = axios.create({
    baseURL: process.env.BASE_URL, // api的base_url
    timeout: 5000 // 请求超时时间
});

// respone拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // console.log(error);
        if (error.response) {
            switch (error.response.status) {
                case 404:
                    console.log(error);
                    break;
            }
        }
        return Promise.reject(error)
    })

export default instance;
