// cookie操作
export function setCookie(name, value, days) {
    let d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    window.document.cookie = name + '=' + value + ';path=/;expires=' + d.toGMTString();
}

export function getCookie(name) {
    let v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

export function deleteCookie(name) {
    setCookie(name, '', -1);
}

export function checkCookie(key, value) {
    let bool = false;
    let c = getCookie(key);
    if (c !== null && c !== '' && c === value) {
        bool = true;
    } else {
        bool = false;
    }
    return bool;
}
