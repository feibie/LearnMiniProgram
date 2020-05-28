// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  handleIncrement(event) {
    console.log('increment',event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabControlClick(event) {
    console.log(event)
  },
  handleIncrementCpn() {
    //最终目的：修改my-sel中的counter

    //1.获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    // 2.用组件对象调用setData方法修改组件中的数据
    //不推荐使用
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })

    // 3.通过组件的方法进行修改
    my_sel.incrementCounter(10)
  }
})