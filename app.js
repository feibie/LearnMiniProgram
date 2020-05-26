App({
  onLaunch: function (options) {
    console.log('小程序初始化完成')
    console.log(options)
    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },
  onShow: function (options) {
    // console.log(options)
    console.log('界面显示出来')
  },
  onHide: function () {
    console.log('界面关闭来')
  },
  onError: function (msg) {
    
  },
  globalData: {
    name: 'bjf',
    age: 18
  }
})
