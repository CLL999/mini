Page({

  /**
   * 页面的初始数据
   */
  data:{
    hiddenModal: false
  } ,

  //页面加载的时候，将load页面传过来的值获取过来
  onLoad: function (options) {
    console.log("这里的options",options);
    this.setData({
      nickName:options.nickName,
      avatarUrl:options.avatarUrl
    })
  },
  confirm: function() {
    this.setData({
      hiddenModal: true
    })
  },
    player(audio){
        var that = this
        audio.title = "Innocent Age"
        audio.src = "http://music.163.com/song/media/outer/url?id=1861576557.mp3"
        audio.onEnded(() => {
          that.player(wx.getBackgroundAudioManager())
        })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      this.player(wx.getBackgroundAudioManager())
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
      wx.getBackgroundAudioManager().stop();
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