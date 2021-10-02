// app.js
App({
  globaldata: {
    nickName: "user",
    avatarUrl:"/pic/logo.jpg"
  },
  onLaunch() 
  {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onLaunch: function(){
    if (!wx.cloud) {
      console.error('请使用2.2.3以上的基础库以使用云能力')
    } else {
        wx.cloud.init({
          env: "cloud1-0g2nchvl9b9c11b7",
           traceUser: true,
          })
        }
  }
})
