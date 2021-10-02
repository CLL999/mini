const db = wx.cloud.database() 
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    titleinput: "",
    contentinput: "",
    nickName: "",
    _id: ""
  },

  submit() {
    if (this.data._id)
    {
      var that = this;
      wx.cloud.callFunction({
        name:'update',
        data:{
          author:that.data.nickName,
          content:that.data.contentinput,
          title:that.data.titleinput,
          _id:that.data._id
        },success:function(res){
          console.log(res)
        },fail:function(res){
          console.log(res)
        }
      })
      this.setData({
        titleinput:"",
        contentinput:""
      })
      return
    }
    if (this.data.nickName === "user") {
      wx.showToast({
        title: '请登录后再来哦',
        icon: "error"
      })
      this.setData({
        titleinput: '',
        contentinput: ''
      })
      return
    }
    wx.cloud.callFunction({
      name:'add',
      data:{
        author:this.data.nickName,
        title:this.data.titleinput,
        content:this.data.contentinput
      },success:function(res){
        wx.showToast({
          title: '上传成功，重进小程序就可以看到啦',
          icon: "none"
        })
      },fail:function(res){
        console.log(res)
      }
    })
    this.setData({
      titleinput: '',
      contentinput: ''
    })
  },

  titleinputchange: function(e) {
    this.setData({
      titleinput: e.detail.value
    })
  } ,

  contentinputchange: function(e){
    this.setData({
      contentinput: e.detail.value
    })
  } ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nickName:app.globaldata.nickName,
      _id:options._id,
      contentinput:options.content,
      titleinput:options.title
    })
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