const db=wx.cloud.database();
var length=37;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    photo : "",
    now : 0 
  },
  next(){
    if (this.data.now === length-1) 
      this.setData({now:0});
      else this.setData({now:this.data.now+1});
  } ,
  last(){
    if (this.data.now === 0)
      this.setData({now:length-1});
      else this.setData({now:this.data.now-1});
  } ,
  preview(){
    var temp="" ;
    temp=this.data.photo[this.data.now].url;
    temp=temp.slice(5);
    temp="http"+temp;
    console.log(temp);
    wx.previewImage({
      urls: [temp]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  async onLoad() {
    let count = await db.collection("piclist").count()
    count = count.total
    let all = []
    for (let i = 0; i < count; i+=20 ) {
      let list = await db.collection("piclist").skip(i).get()
      all = all.concat(list.data);
    }
    console.log(all)
    this.setData({
      photo:all
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