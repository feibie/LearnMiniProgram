// pages/home/home.js

import request from '../../service/network.js'

Page({
  data: {

  },
  onLoad: function (options) {
    //1.原生的网络请求方式
    this.get_data_origin()

    //2.使用封装的request发送网络请求
    // Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://152.136.185.210:8000/api/n3/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin() {
  // 发送网络请求
  //   wx.request({
  //     url: 'http://152.136.185.210:8000/api/n3/recommend',
  //     success:function(res) {
  //       console.log(res)
  //     }
  //   })
  //post请求，并携带参数
    // wx.request({
    //   url: 'http://www.httpbin.org/post',
    //   method:"post",
    //   data:{
    //     name: 'bjf',
    //     age: 18
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  }
})