const db = wx.cloud.database()
var valueid = ''
var valuetitle = ''
var valueauthor = ''
var valuecontent = ''
// pages/update/update.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  taskid(res){
    valueid=res.detail.value;
    console.log(valueid);
  },
  tasktitle(res){
    valuetitle=res.detail.value;
    console.log(valuetitle);
  },
  taskauthor(res){
    valueauthor=res.detail.value;
    console.log(valueauthor);
  },
  taskcontent(res){
    valuecontent=res.detail.value;
    console.log(valuecontent);
  },
  update(){
    db.collection("blog").doc(valueid).update({
      data:{
        author: valueauthor,
        title: valuetitle,
        content: valuecontent
      }
    }).then(res=>{
      console.log(res)
    })
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