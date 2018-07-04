import axios from 'axios';

const api = 'https://api.github.com/repos';
const github = 'https://api.github.com'
const blogApi = 'https://reedo0910.github.io/api';

function setSession(key, val) {
    return sessionStorage.setItem(key, JSON.stringify(val));
}

function getSession(key) {
    return JSON.parse(sessionStorage.getItem(key))
}

function clearSession() {
    return sessionStorage.clear();
}

export function init() {
    clearSession();
}

export function getIssue() {
    const url = `${api}/Reedo0910/VelasWebsite3/issues?creator=Reedo0910`;
    const key = 'issue-list';
    if (!getSession(key)) {
        return axios.get(url)
            .then(res => {
                setSession(key, res.data)
                return res.data
            })
            .catch(error => {
                console.log(error);
                return 404;
            });
    } else {
        return new Promise(function(resolve, reject) {
            resolve(getSession(key));
        });
    }
}

export function getIssueById(repo, id) {
    const url = `${api}/Reedo0910/${repo}/issues/${id}`;
    const key = `i${repo}${id}`;
    if (!getSession(key)) {
        return axios.get(url)
            .then(res => {
                setSession(key, res.data)
                return res.data
            })
            .catch(error => {
                console.log(error);
                return 404;
            });
    } else {
        return new Promise(function(resolve, reject) {
            resolve(getSession(key));
        });
    }
}

export function getComs(repo, id) {
    const url = `${api}/Reedo0910/${repo}/issues/${id}/comments`;
    const key = `c${repo}${id}`;
    if (!getSession(key)) {
        return axios.get(url)
            .then(res => {
                setSession(key, res.data)
                return res.data;
            })
            .catch(error => {
                console.log(error);
                return 404;
            });
    } else {
        return new Promise(function(resolve, reject) {
            resolve(getSession(key));
        });
    }
}

export function getUser() {
    const url = `${github}/users/Reedo0910`;
    const key = 'user';
    if (!getSession(key)) {
        return axios.get(url)
            .then(res => {
                setSession(key, res.data)
                return res.data;
            })
            .catch(error => {
                console.log(error);
                return 404;
            });
    } else {
        return new Promise(function(resolve, reject) {
            resolve(getSession(key));
        });
    }
}

export function getBlogList() {
    const url = `${blogApi}/posts.json`;
    const key = 'blog-list'
    if (!getSession(key)) {
        return axios.get(url)
            .then(res => {
                setSession(key, res.data)
                return res.data
            })
            .catch(error => {
                console.log(error);
                return 404;
            });
    } else {
        return new Promise(function(resolve, reject) {
            resolve(getSession(key));
        });
    }
}

export function getBlogPostBySlug(slug) {
    const url = `${blogApi}/articles/${slug}.json`;
    const key = `bp-${slug}`
    if (!getSession(key)) {
        return axios.get(url)
            .then(res => {
                setSession(key, res.data)
                return res.data
            })
            .catch(error => {
                console.log(error);
                return 404;
            });
    } else {
        return new Promise(function(resolve, reject) {
            resolve(getSession(key));
        });
    }
}
