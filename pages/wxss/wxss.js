// pages/wxss/wxss.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    score: 55,
    movies:['喜剧之王','大话西游','赌王'],
    nums: [
      [1,2,1,5,1],
      [15,1,2,15,48],
      [675,768,893223,4767,7]
    ],
    letters:['a', 'b', 'c']
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  }
})