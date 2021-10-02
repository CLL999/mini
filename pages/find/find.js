const db=wx.cloud.database();
// pages/find/find.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    findlist: "",
    value: "",
  },
  task: function (e) {
      this.setData({
        value:e.detail.value
      })
  },
  Toread: function(e) {
    var item = this.data.findlist[e.currentTarget.dataset.index]
    console.log(item.title)
    wx.reLaunch({
      url: '/pages/preview/preview?title='+item.title+'&author='+item.author+'&content='+item.content+'&_id='+item._id,
    })
  } ,
  getData(){
    db.collection("blog").get().then(res=>{
      console.log(res)
    })
  },

  find(){
    if (this.data.value)
    {
      var that = this;
      wx.cloud.callFunction({
        name: 'find' ,
        data: {
        _id: that.data.value,
        author: that.data.value,
        content: that.data.value
      },
      success:res => {
          that.setData({
            findlist:res.result.data
          })
      }
     })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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