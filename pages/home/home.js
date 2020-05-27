// pages/home/home.js
Page({
  data: {
    titles: ['衣服', '裤子', '鞋子']
  },
  headleBtnClick() {
    console.log("点击")
  },
  handleTouchStart() {
    console.log("handleTouchStart")
  },
  handleTouchMove() {
    console.log("handleTouchMove")
  },
  handleTouchEnd() {
    console.log("handleTouchEnd")
  },
  handleTap() {
    console.log("handleTap")
  },
  handleLongpress() {
    console.log("handleLongpress")
  },
  handleEventClick(e) {
    console.log("-----", e)
  },
  handleEventEnd(e) {
    console.log('eventEnd', e)
  },
  handleInner(e) {
    console.log("Inner", e)
  },
  handleOuter(e) {
    console.log("Outer", e)
  },
  handleItemClick(e) {
    console.log("itemclick", e)
    const dataset = e.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index)
  }
})