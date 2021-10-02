// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      input: "",
      todos: [{
          name: "高数",
          completed: true
      },
      {
        name:"大计",
        completed: false
      },
      {
        name: "C语言",
        completed: false
      }
    ],
    leftcount: 2,
    allcompleted: false
  },
  input: function (e) {
      this.setData({
        input: e.detail.value
      })
  },
  add: function() {
    if (!this.data.input) return
    var todos = this.data.todos
    todos.push({
      name: this.data.input ,
      completed: false
    })
    this.setData({
      todos: todos,
      input: '',
      leftcount: this.data.leftcount + 1
    })
  },
  toggle: function(e) {
    var item = this.data.todos[e.currentTarget.dataset.index]
    item.completed = !item.completed
    var leftcount = this.data.leftcount + (item.completed ? -1 : 1)
    this.setData({
      todos: this.data.todos,
      leftcount: leftcount
    })
  },
  remove: function(e) {
    var todos = this.data.todos
    var item = todos.splice(e.currentTarget.dataset.index, 1)[0]
    var leftcount = this.dataleftcount + (item.completed ? 0 : -1)
    this.setData({
      todos: todos,
      leftcount: leftcount
    })
  },
  toggleall: function() {
    this.data.allcompleted = !this.data.allcompleted
    var todos = this.data.todos
    var that = this

    todos.forEach(function (item) {
      item.completed = that.data.allcompleted
    } )
    var leftcount = this.data.allcompleted ? 0 : this.data.todos.length
    this.setData({
      todos: todos,
      leftcount: leftcount
    })
  },
  clear: function() {
    var todos = this.data.todos.filter(function (item) {
      return !item.completed
    })
    this.setData({
      todos: todos
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