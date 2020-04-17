// pages/search/search.js
var app = getApp()
Page({
  data: {
    motto:{
      content:  " 我们的生活就像旅行，思想是导游者，没有导游者，一切都会停止。目标会丧失，力量也会化为乌有。\n\n",
      author:"—— 歌德"
    }
  },
  formSubmit:function(e){
    wx.navigateTo({
      url: '../resultlist/resultlist?searchKey='+e.detail.value.input,
    })
  }
})