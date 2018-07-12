import axios from 'axios';

// 创建axios实例
const instance = axios.create({
    baseURL: '/api/', // api的base_url
    timeout: 5000 // 请求超时时间
});

export default instance;
