import axios from 'axios';

const api = 'https://api.github.com/repos/';

const token = '6358f49bd3470b96773373bb5aeb30ab96241393';

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
  const url = api + 'Reedo0910/VelasWebsite3/issues?token=' + token;
  if (!getSession('res')) {
    return axios.get(url)
      .then((res) => {
        // console.dir('from axios')
        setSession('res', res.data)
        return res.data
      })
      .catch((error) => {
        console.log(error);
        return 404;
      });
  } else {
    return new Promise(function (resolve, reject) {
      //   console.dir('from ss')
      resolve(getSession('res'));
    });
  }
}

export function getComs(id) {
  const url = api + 'Reedo0910/VelasWebsite3/issues/' + id + '/comments?token=' + token;
  if (!getSession('c' + id)) {
    return axios.get(url)
      .then((res) => {
        // console.dir('from axios')
        setSession('c' + id, res.data)
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return 404;
      });
  } else {
    return new Promise(function (resolve, reject) {
      //   console.dir('from ss')
      resolve(getSession('c' + id));
    });
  }
}

export function init() {
  clearSession();
}
