import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();
import {Token} from '../../utils/token.js';
const token = new Token();

Page({
  data: {
    is_edit:'',
    mainImg:[],
    },
    edit:function(e){
      var current = e.currentTarget.dataset.id;
      console.log(current)
      this.setData({
        is_edit:current
      })
    },
  changeTab:function(e){
    var current = e.currentTarget.dataset.id;
    this.setData({
      currentId:current
    })
  },
  //事件处理函数
  preventTouchMove:function(e) {

  },

  onLoad(options){
   
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },

  intoPathRedi(e){
    const self = this;
    wx.navigateBack({
      delta:1
    })
  },
 
})

  