var l = {
    "zh-cn": {
        dollarSign: "￥",
        dollarSignCn: "元"
    },
    europe: {
        dollarSign: "€",
        dollarSignCn: "欧元"
    },
    en: {
        dollarSign: "$",
        dollarSignCn: "美元"
    },
    HKD: {
        dollarSign: "HKD",
        dollarSignCn: "港元"
    },
    RUB: {
        dollarSign: "₽",
        dollarSignCn: "卢布"
    },
    RM: {
        dollarSign: "RM",
        dollarSignCn: "马来西亚林吉特"
    },
    PHP: {
        dollarSign: "₱",
        dollarSignCn: "菲律宾比索"
    },
    THB: {
        dollarSign: "฿",
        dollarSignCn: "泰铢"
    }
}, n = wx.getExtConfigSync();

// n && n.siteInfo || (n = getApp().ext);

var o = n.siteInfo&&n.siteInfo.lang || "zh-cn", r = wx.getStorageSync("DollarType");

r && (o = r);

var a = l[o];

module.exports = a;