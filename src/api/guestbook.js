import request from '@/utils/request'

export function leaveMessage(name, email, text) {
    const data = {
        name,
        email,
        text
    };

    return request({
        url: '/guestbook',
        method: 'post',
        data
    })
}

export function getMessages() {
    return request({
        url: '/guestbook',
        method: 'get'
    })
}
