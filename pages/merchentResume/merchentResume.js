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
  
 
  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },
  intoPathRedirect(e) {
    const self = this;
    api.pathTo(api.getDataSet(e, 'path'), 'redi');
  }
 

 
})

  