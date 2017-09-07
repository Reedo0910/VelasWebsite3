import axios from 'axios';

const api = 'https://api.github.com/repos/';

function setSession(key, val) {
  return sessionStorage.setItem(key, JSON.stringify(val));
}

function getSession(key) {
  return JSON.parse(sessionStorage.getItem(key))
}

function clearSession() {
  return sessionStorage.clear();
}

export function getIssue() {
  const url = api + 'Reedo0910/VelasWebsite3/issues?creator=Reedo0910';
  if (!getSession('res')) {
    return axios.get(url)
      .then((res) => {
        setSession('res', res.data)
        return res.data
      })
      .catch((error) => {
        console.log(error);
        return 404;
      });
  } else {
    return new Promise(function (resolve, reject) {
      resolve(getSession('res'));
    });
  }
}

export function getIssueById(repo, id) {
  const url = api + 'Reedo0910/' + repo + '/issues/' + id;
  if (!getSession('i' + repo + id)) {
    return axios.get(url)
      .then((res) => {
        setSession('i' + repo + id, res.data)
        return res.data
      })
      .catch((error) => {
        console.log(error);
        return 404;
      });
  } else {
    return new Promise(function (resolve, reject) {
      resolve(getSession('i' + repo + id));
    });
  }
}

export function getComs(repo, id) {
  const url = api + 'Reedo0910/' + repo + '/issues/' + id + '/comments';
  if (!getSession('c' + repo + id)) {
    return axios.get(url)
      .then((res) => {
        setSession('c' + repo + id, res.data)
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return 404;
      });
  } else {
    return new Promise(function (resolve, reject) {
      resolve(getSession('c' + repo + id));
    });
  }
}

export function init() {
  clearSession();
}
