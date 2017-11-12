var m_config_group =
  [
    {
      "id": "1000",
      "name": "面对面收款",
      "type": "1",
      "id_group": "1000;1001;1002;1003;1004;1005;1006",
      "title": "面对面收款",
      "icon": "../res/icon/ic_getMoney.png",
      "desc": "如何面对面使用微信收款",
      "is_ok": "1"
    },
    {
      "id": "1001",
      "name": "发红包",
      "type": "2",
      "id_group": "2000;2001;2002;2003;2004;2005;2006",
      "title": "发红包",
      "icon": "../res/icon/ic_redpakage.png",
      "desc": "如何发送微信红包",
      "is_ok": "1"
    },
    {
      "id": "1002",
      "name": "微信转账",
      "type": "3",
      "id_group": "3000;3001;3002;3003;3004;3005;3006",
      "title": "微信转账",
      "icon": "../res/icon/ic_transfer.png",
      "desc": "使用微信转账给别人",
      "is_ok": "1"
    },
    {
      "id": "1003",
      "name": "换头像",
      "type": "4",
      "id_group": "4000;4001;4002;4003;4004;4005;4006",
      "title": "换头像",
      "icon": "../res/icon/ic_setIcon.png",
      "desc": "修改自己的微信头像",
      "is_ok": "1"
    },
    {
      "id": "1004",
      "name": "地图导航",
      "type": "5",
      "id_group": "5000;5001;5002;5003;5004;5005",
      "title": "地图导航",
      "icon": "../res/icon/ic_map.png",
      "desc": "使用百度地图导航目的地",
      "is_ok": "1"
    }
  ]

var m_config_step =
  [
    {
      "id": 1000,
      "name": "面对面收款",
      "type": "1",
      "step_img": "../res/common/1000.jpg",
      "step_index": "0",
      "step_exp": "点击右上方的【加号】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 580,
      "circle_posY": 0,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 1001,
      "name": "面对面收款",
      "type": "1",
      "step_img": "../res/getMoney/1001.jpg",
      "step_index": "1",
      "step_exp": "点击【二维码收款】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 510,
      "circle_posY": 310,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 1002,
      "name": "面对面收款",
      "type": "1",
      "step_img": "../res/getMoney/1002.jpg",
      "step_index": "2",
      "step_exp": "点击【收付款】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 160,
      "circle_posY": 880,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 1003,
      "name": "面对面收款",
      "type": "1",
      "step_img": "../res/getMoney/1003.jpg",
      "step_index": "3",
      "step_exp": "点击设置金额按钮",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 195,
      "circle_posY": 660,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 1004,
      "name": "面对面收款",
      "type": "1",
      "step_img": "../res/getMoney/1004.jpg",
      "step_index": "4",
      "step_exp": "输入你要收多少钱",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 160,
      "circle_posY": 200,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 1005,
      "name": "面对面收款",
      "type": 1,
      "step_img": "../res/getMoney/1005.jpg",
      "step_index": "5",
      "step_exp": "点击【下一步】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 300,
      "circle_posY": 400,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 1006,
      "name": "面对面收款",
      "type": 1,
      "step_img": "../res/getMoney/1006.jpg",
      "step_index": "6",
      "step_exp": "该界面的二维码，让对方用微信扫码付款",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 2000,
      "name": "发红包",
      "type": 2,
      "step_img": "../res/common/1000.jpg",
      "step_index": 0,
      "step_exp": "打开微信，点击要发送红包的对象",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 60,
      "circle_posY": 250,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 2001,
      "name": "发红包",
      "type": 2,
      "step_img": "../res/common/1001.jpg",
      "step_index": 1,
      "step_exp": "点击下方的【加号】，弹出一个功能菜单",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 600,
      "circle_posY": 1000,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 2002,
      "name": "发红包",
      "type": 2,
      "step_img": "../res/common/1002.jpg",
      "step_index": 2,
      "step_exp": "点击【红包】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 100,
      "circle_posY": 900,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 2003,
      "name": "发红包",
      "type": 2,
      "step_img": "../res/redpakage/1003.jpg",
      "step_index": 3,
      "step_exp": "输入总金额要发多少钱，红包个数，例如红包总金额1块钱，红包个数2，每人领取5毛钱。",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 500,
      "circle_posY": 150,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 2004,
      "name": "发红包",
      "type": 2,
      "step_img": "../res/redpakage/1004.jpg",
      "step_index": 4,
      "step_exp": "点击【塞钱进红包】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 300,
      "circle_posY": 700,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 2005,
      "name": "发红包",
      "type": 2,
      "step_img": "../res/redpakage/1005.jpg",
      "step_index": 5,
      "step_exp": "输出要红包金额",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 300,
      "circle_posY": 480,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 2006,
      "name": "发红包",
      "type": 2,
      "step_img": "../res/redpakage/1006.jpg",
      "step_index": 6,
      "step_exp": "已发送成功，对方点开就收到了，如果不点会返还给你",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 3000,
      "name": "微信转账",
      "type": 3,
      "step_img": "../res/common/1000.jpg",
      "step_index": 0,
      "step_exp": "打开微信，点击要要转账的对象",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 60,
      "circle_posY": 250,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 3001,
      "name": "微信转账",
      "type": 3,
      "step_img": "../res/common/1001.jpg",
      "step_index": 1,
      "step_exp": "点击下方的加号，弹出一个功能菜单",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 600,
      "circle_posY": 1000,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 3002,
      "name": "微信转账",
      "type": 3,
      "step_img": "../res/transfer/1002.jpg",
      "step_index": 2,
      "step_exp": "点击【转账】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 240,
      "circle_posY": 900,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 3003,
      "name": "微信转账",
      "type": 3,
      "step_img": "../res/transfer/1003.jpg",
      "step_index": 3,
      "step_exp": "弹出转账界面，输入转账金额",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 150,
      "circle_posY": 300,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 3004,
      "name": "微信转账",
      "type": 3,
      "step_img": "../res/transfer/1004.jpg",
      "step_index": 4,
      "step_exp": "点击【转账】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 310,
      "circle_posY": 480,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 3005,
      "name": "微信转账",
      "type": 3,
      "step_img": "../res/transfer/1005.jpg",
      "step_index": 5,
      "step_exp": "输入密码",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 310,
      "circle_posY": 480,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 3006,
      "name": "微信转账",
      "type": 3,
      "step_img": "../res/transfer/1006.jpg",
      "step_index": 6,
      "step_exp": "转账成功",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 4000,
      "name": "换头像",
      "type": 4,
      "step_img": "../res/common/1000.jpg",
      "step_index": 0,
      "step_exp": "打开微信点击【我】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 550,
      "circle_posY": 1000,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 4001,
      "name": "换头像",
      "type": 4,
      "step_img": "../res/setIcon/1001.jpg",
      "step_index": 1,
      "step_exp": "点击头像区域",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 560,
      "circle_posY": 140,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 4002,
      "name": "换头像",
      "type": 4,
      "step_img": "../res/setIcon/1002.jpg",
      "step_index": 2,
      "step_exp": "再点一次头像区域",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 560,
      "circle_posY": 140,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 4003,
      "name": "换头像",
      "type": 4,
      "step_img": "../res/setIcon/1003.jpg",
      "step_index": 3,
      "step_exp": "点右上方的三个点",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 580,
      "circle_posY": 0,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 4004,
      "name": "换头像",
      "type": 4,
      "step_img": "../res/setIcon/1004.jpg",
      "step_index": 4,
      "step_exp": "点击【从手机相册选择】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 300,
      "circle_posY": 740,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 4005,
      "name": "换头像",
      "type": 4,
      "step_img": "../res/setIcon/1005.jpg",
      "step_index": 5,
      "step_exp": "选择一张图片",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 230,
      "circle_posY": 740,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 4006,
      "name": "换头像",
      "type": 4,
      "step_img": "../res/setIcon/1006.jpg",
      "step_index": 6,
      "step_exp": "调整图片尺寸，用两只手指可以放大和缩小，选择好后点完成",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 550,
      "circle_posY": 1000,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 5000,
      "name": "地图导航",
      "type": 5,
      "step_img": "../res/map/1000.jpg",
      "step_index": 0,
      "step_exp": "在左面找到百度地图软件，点击进入",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 100,
      "circle_posY": 40,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 5001,
      "name": "地图导航",
      "type": 5,
      "step_img": "../res/map/1001.jpg",
      "step_index": 1,
      "step_exp": "点击上方【搜地点】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 200,
      "circle_posY": 25,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 5002,
      "name": "地图导航",
      "type": 5,
      "step_img": "../res/map/1002.jpg",
      "step_index": 2,
      "step_exp": "输入要去的目的地名称",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 200,
      "circle_posY": 25,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 5003,
      "name": "地图导航",
      "type": 5,
      "step_img": "../res/map/1003.jpg",
      "step_index": 3,
      "step_exp": "点击【搜索】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 580,
      "circle_posY": 25,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 5004,
      "name": "地图导航",
      "type": 5,
      "step_img": "../res/map/1004.jpg",
      "step_index": 4,
      "step_exp": "点击【到这去】",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 520,
      "circle_posY": 680,
      "circle_width": 122,
      "circle_height": 122
    },
    {
      "id": 5005,
      "name": "地图导航",
      "type": 5,
      "step_img": "../res/map/1005.jpg",
      "step_index": 5,
      "step_exp": "选择交通工具，例如我选择步行",
      "finger_posX": null,
      "finger_posY": null,
      "finger_img": "../res/finger.png",
      "circle_img": "../res/icon/circle.png",
      "circle_posX": 470,
      "circle_posY": 150,
      "circle_width": 122,
      "circle_height": 122
    }
  ]

module.exports = {
  FindStepByID: FindStepByID,
  FindGroupByID: FindGroupByID,
  GetGroupList: GetGroupList,
  SetCurGroup: SetCurGroup,
  GetCurGroup: GetCurGroup,
}

var m_curGroup = null;

function GetCurGroup()
{
  return m_curGroup;
}

function SetCurGroup(v)
{
  m_curGroup = v;
}

function GetGroupList()
{
  return m_config_group;
}

function FindGroupByID(itemid) {
  for (let i = 0; i < m_config_group.length; i++) {
    var item = m_config_group[i];
    if (item.id == itemid) {
      return item;
    }
  }
  return null;
}


function FindStepByID(itemid) {
  for (let i = 0; i < m_config_step.length; i++) {
    var item = m_config_step[i];
    if (item.id == itemid) {
      return item;
    }
  }
  return null;
}