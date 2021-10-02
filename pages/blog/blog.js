const db=wx.cloud.database()
const app=getApp()
// pages/blog/blog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: "",
    avatarUrl: "",
    nickName: ""
  },
  submit(){
      wx.navigateTo({
        url: '/pages/submit/submit',
      })
  },
  update(){
      wx.navigateTo({
        url: '/pages/update/update',
      })
  },
  find(){
      wx.navigateTo({
        url: '/pages/find/find',
      })
  },
  delete(){
      wx.navigateTo({
        url: '/pages/delete/delete',
      })
  },
  Toread: function(e) {
    var item = this.data.article[e.currentTarget.dataset.index]
    console.log(item.title)
    wx.reLaunch({
      url: '/pages/preview/preview?title='+item.title+'&author='+item.author+'&content='+item.content+'&_id='+item._id,
    })
  } ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // db.collection("blog").get({
    //   success:res=>{
    //     console.log(res)
    //     this.setData({
    //       article:res.data
    //     })
    //   }
    // })
  },
  async onLoad() {
    let count = await db.collection("blog").count()
    count = count.total
    console.log("count" , count)
    let all = []
    for (let i=0; i< count ; i+=20) {
      let list = await db.collection("blog").skip(i).get()
      all = all.concat(list.data)
    }
    this.setData({
      article:all 
    })
    console.log(this.data.article)
  } ,
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(app.globaldata.avatarUrl)
    this.setData(
      {
        nickName:app.globaldata.nickName,
        avatarUrl:app.globaldata.avatarUrl
      }
    )
    console.log(this.data.nickName)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})