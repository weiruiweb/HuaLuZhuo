import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();


Page({
  data: {
    currentId:0,
  },
  //事件处理函数
 
  onLoad(options) {
  
  },
  
 changeTab:function(e){
    var current = e.currentTarget.dataset.id;
    this.setData({
      currentId:current
    })
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

  