const blackList = [
    'http://o7a3i0m1t.bkt.clouddn.com/image/emo/',
    'http://o7a3i0m1t.bkt.clouddn.com/image/loading/',
    'https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png',
    'http://o7a3i0m1t.bkt.clouddn.com/image/blog/copyrightimages.png'
]

export function isBlackList(url) {
    let tag = false;
    for (let i = 0; i < blackList.length; i++) {
        if (url.match(blackList[i])) {
            tag = true;
            break;
        }
    }
    return tag;
}
