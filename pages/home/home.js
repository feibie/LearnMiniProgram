// pages/home/home.js

// getApp()获取App()产生的示例对象
const app = getApp()
const name = app.globalData.name
const age = app.globalData.age
console.log(name)
Page({
  // 监听页面的生命周期函数
  onLoad() {
    console.log("onLoad")
    const _this = this
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3/recommend',
      // success: (res) => {
      //   console.log(res)
      //   const data = res.data.data.list
      //   this.setData({
      //     list:data
      //   })
      // }
      success: function(res) {
            console.log(res)
        const data = res.data.data.list
        _this.setData({
          list:data
        })
      }
    })
  },
  onReady() {
    console.log("onReady")
  },
  onShow() {
    console.log("onShow")
  },
  onHide() {
    console.log("onHide")
  },
  onUnload() {
    console.log("onUnload")
  },

  // 初始化数据
  data: {
    name: 'World',
    age: 18,
    students: [
      {id: 110, name: 'kobe', age: 30},
      {id: 111, name: 'kobe-1', age: 40},
      {id: 112, name: 'kobe-2', age: 50}
    ],
    counter: 0,
    list: []
  },
  // 监听wxml一些事件
  handleBtnClick(){
    // 1.界面不会刷新
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event)
  },

  //监听其他事件
  //页面滚动
  onPageScroll(obj){
    console.log(obj)
  }
})