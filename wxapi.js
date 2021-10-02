function wxPromisify(functoinName, params) {
  return new Promise((resolve, reject) => {
      wx[functoinName]({
        ...params,
        success: res => resolve(res),
        fail: res => reject(res)
      });
  });

}

function login(params={}) {
    return wxPromisify('login', params);
}

function getUserInfo(params={}) {
  return wxPromisify('getUserInfo', params);
}

function getSetting(params={})  {
  return wxPromisify('getSetting', params);
}

module.exports = {
  login,
  getUserInfo,
  getSetting
}