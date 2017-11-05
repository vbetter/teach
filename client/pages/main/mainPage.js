// pages/main/mainPage.js
var ConfigMgr = require('../Utils/ConfigMgr.js')

var m_index =0;
var m_config_group;
var m_config_step;
var m_config_group_ids;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    m_finggerTop:0,
    m_fingerLeft:0,
    //m_finger_hidden:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  wx.setNavigationBarTitle({
    title: '面对面收款',
  })
  m_index = 0;
  m_config_group = ConfigMgr.FindGroupByID(1000);
  m_config_group_ids = m_config_group.id_group.split(";");
  m_config_step = ConfigMgr.FindStepByID(m_config_group_ids[m_index]);
  console.log(m_config_group);
  console.log(m_config_group_ids);
  console.log(m_config_step)
  this.UpdateUI();
  },
  UpdateUI:function()
  {
    m_config_step = ConfigMgr.FindStepByID(m_config_group_ids[m_index]);

    var isHidden = m_config_step.finger_img == null || m_config_step.finger_img == undefined ? true : false;

    console.log(isHidden)

    this.setData({
      bg_img: m_config_step.step_img,
      m_fingerLeft: m_config_step.finger_posX,
      m_finggerTop: m_config_step.finger_posY,
      m_finger_hidden: isHidden,
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: m_config_step.name,
      path: '/main/mainPage',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  btn_last:function(e)
  {
    m_index--;
    if (m_index<0)
    {
      m_index =0;

      wx.showModal({
        title: '提示',
        content: "这是第一步，无法再上一步",
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }

    this.UpdateUI();
  },
  btn_next:function(e)
  {
    m_index++;

    if (m_index >= m_config_group_ids.length)
    {
      m_index = m_config_group_ids.length - 1;

      wx.showModal({
        title: '提示',
        content: "这是最后一步,无法再下一步",
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    

    this.UpdateUI();
  },
  btn_exp:function(e)
  {
    wx.showModal({
      title: '提示',
      content: m_config_step.step_exp,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})