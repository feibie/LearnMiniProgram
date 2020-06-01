// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中......',
      duration: 3000,
      icon:  'none',
      mask:true,
      success: function() {
        console.log("展示弹窗成功")
      },
      fail:function () {
        console.log("展示弹窗失败")
      },
      complete: function() {
        console.log("完成函数的调用")
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      // cancelColor: 'cancelColor',
    })
  },

  handleShowLoading() {
    wx.showLoading({
      title: '加载中',
      mask:true
    })

    setTimeout(() => {
      wx.hideLoading()
    },2000)
  },

  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success: function(res) {
         console.log(res)
      }
    })
  },

  onShareAppMessage: function(options) {
    return {
      title: '你好',
      path: '/pages/about/about',
      imageUrl: 'http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg'
    }
  }
})

