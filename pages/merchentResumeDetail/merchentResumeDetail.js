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

  // bindRegionChange: function (e) {
  //   const self = this;
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   self.data.submitData.passage1 = e.detail.value[0]+e.detail.value[1]+e.detail.value[2];
  //   self.setData({
  //     web_region: e.detail.value
  //   })
  // },

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
  upLoadImg: function (){
    var self = this;

    if(self.data.submitData.mainImg.length>2){
      api.showToast('仅限3张','fail');
      return;
    };
    wx.showLoading({
      mask: true,
      title: '图片上传中',
    });
    var mainImg = self.data.mainImg
    wx.chooseImage({
      count:1,
      success: function(res) {
        console.log(res);
        var tempFilePaths = res.tempFilePaths
        
        wx.uploadFile({
          url: 'https://dmgnm.com/scoreshop/public/index.php/api/v1/Base/FtpImage/upload ',
          filePath:tempFilePaths[0],
          name: 'file',
          formData: {
            token:wx.getStorageSync('token')
          },
          success: function(res){
            res = JSON.parse(res.data);
            self.data.submitData.mainImg.push({url:res.info.url})
            self.setData({
              web_imgData:self.data.submitData.mainImg
            });
            wx.hideLoading()

          },
          fail: function(err){
            wx.hideLoading();
            api.showToast('上传失败','fail')
          }
        })
      },
      fail: function(err){
        wx.hideLoading();
      }
    })
  },


 
})

  