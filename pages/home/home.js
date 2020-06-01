// pages/home/home.js
Page({
  data: {
    name: '哈哈哈'
  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?name=你好啊',
    })
  }
})