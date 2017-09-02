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

export function getIssueById(id) {
    const url = api + 'Reedo0910/VelasWebsite3/issues/' + id;
    if (!getSession('i' + id)) {
      return axios.get(url)
        .then((res) => {
          setSession('i' + id, res.data)
          return res.data
        })
        .catch((error) => {
          console.log(error);
          return 404;
        });
    } else {
      return new Promise(function (resolve, reject) {
        resolve(getSession('i' + id));
      });
    }
  }

export function getComs(id) {
  const url = api + 'Reedo0910/VelasWebsite3/issues/' + id + '/comments';
  if (!getSession('c' + id)) {
    return axios.get(url)
      .then((res) => {
        setSession('c' + id, res.data)
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return 404;
      });
  } else {
    return new Promise(function (resolve, reject) {
      resolve(getSession('c' + id));
    });
  }
}

export function init() {
  clearSession();
}
