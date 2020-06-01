// pages/detail/detail.js
Page({
  onLoad: function(options) {
    console.log(options)
  },
  // 页面退出调用
  onUnload: function(){
    //1.获取首页的页面对象
    // getCurrentPage 当前所以栈的页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2 ]

    //2.调用页面对象的setData
    home.setData({
      name: '呵呵呵'
    })
  },
  handleBackHome() {
    wx.navigateBack({
      delta: 1
    })
  }
})