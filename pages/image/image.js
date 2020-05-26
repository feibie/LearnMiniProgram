// pages/image/image.js
Page({
  data: {
    imagePath: ''
  },
  handleChooseAlbum() {
    //系统api,让用户在相册中选择图片（或拍照）
    wx.chooseImage({
      complete: (res) => {},
      success: (res) => {
        console.log(res)
        //1.取出路径
        const path = res.tempFiles[0].path

        //2.设置路径
        this.setData({
          imagePath: path
        })
      }
    })
  },
  handleImageLoad()  {
    console.log('图片加载 完成')
  }
})