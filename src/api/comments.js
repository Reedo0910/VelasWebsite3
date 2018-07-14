import request from '@/utils/request'

export function leaveComment(name, email, text, captcha) {
    const data = {
        name,
        email,
        text,
        captcha
    };

    return request({
        url: '/comments',
        method: 'post',
        data
    })
}

export function getComments() {
    return request({
        url: '/comments',
        method: 'get'
    })
}
