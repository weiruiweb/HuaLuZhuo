import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();


Page({
  data: {
     markers: [{
      iconPath: "/images/position.png",
      id: 0,
      latitude: 40.002607,
      longitude: 116.487847,
      width: 35,
      height: 45
    }],
     is_show:false,
     is_show1:false,
     currentId:0,
  },
  //事件处理函数
  preventTouchMove:function(e) {

  },
 signTo:function(e){
   this.setData({
    is_show:true,
   })
 },
 mask:function(e){
   this.setData({
    is_show:false,
    is_show1:false,
   })
 },
 qcored:function(e){
   this.setData({
    is_show1:true,
   })
 },
 appoint:function(e){
  this.setData({
    is_show:false,
   })
 },
  onLoad(options) {
    const self = this;
  
  },
  
  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },
  intoPathRedirect(e) {
    const self = this;
    api.pathTo(api.getDataSet(e, 'path'), 'redi');
  }
 

 
})

  