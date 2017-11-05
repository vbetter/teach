var m_config_group =
  [
    {
      "id": 1000,
      "name": "面对面收款",
      "type": "1",
      "id_group": "1000;1001;1002;1003;1004"
    }
  ];


var m_config_step =
  [
    {
      "id": 1000,
      "name": "面对面收款",
      "type": "1",
      "step_img": "../res/1000.jpg",
      "step_index": "0",
      "step_exp": "看屏幕最下方一排按钮，点击最右边【我】按钮。进入我的设置界面。",
      "finger_posX": "480",
      "finger_posY": "880",
      "finger_img": "../res/finger.png"
    },
    {
      "id": 1001,
      "name": "面对面收款",
      "type": "1",
      "step_img": "../res/1001.jpg",
      "step_index": "1",
      "step_exp": "点击【钱包】按钮。",
      "finger_posX": "-25",
      "finger_posY": "240",
      "finger_img": "../res/finger.png"
    },
    {
      "id": 1002,
      "name": "面对面收款",
      "type": "1",
      "step_img": "../res/1002.jpg",
      "step_index": "2",
      "step_exp": "点击【收付款】按钮。",
      "finger_posX": "-50",
      "finger_posY": "10",
      "finger_img": "../res/finger.png"
    },
    {
      "id": 1003,
      "name": "面对面收款",
      "type": "1",
      "step_img": "../res/1003.jpg",
      "step_index": "3",
      "step_exp": "点击【二维码收款】按钮。这是付款界面，我们要进入收款界面。",
      "finger_posX": "0",
      "finger_posY": "760",
      "finger_img": "../res/finger.png"
    },
    {
      "id": 1004,
      "name": "面对面收款",
      "type": "1",
      "step_img": "../res/1004.jpg",
      "step_index": "4",
      "step_exp": "这是就是款界面了。别人可以通过扫描这个二维码完成支付，注意收款成功后会有提示信息。"
    }
  ]


module.exports = {
  FindStepByID: FindStepByID,
  FindGroupByID: FindGroupByID,
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