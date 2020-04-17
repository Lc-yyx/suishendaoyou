// pages/home/home.js
//获取应用实例
var app = getApp()
Page({
  data: {
    recommendSigns: [
      {
        name: "西湖",
        image: "../../images/xihu.jpg",
        disable: false
      },
      {
        name: "总统府",
        image: "../../images/zongtongfu.jpg",
        disable: true
      },
      {
        name: "故宫",
        image: "../../images/gugong.jpg",
        disable: true
      }],
    hotCitys: [
      {
        name: "杭州",
        image: "../../images/hangzhou.jpg",
        disable: false
      },
      {
        name: "北京",
        image: "../../images/beijing.jpg",
        disable: true
      },
      {
        name: "上海",
        image: "../../images/shanghai.jpg",
        disable: true
      }],
    boutiqueSigns: [
      {
        name: "西溪国家湿地",
        miniSummary: "西溪国家湿地公园坐落于浙江省杭州市区西部，离杭州主城区武林门只有6公里，距西湖仅5公里。西溪国家湿地公园总面积约为11.5平方公里，分为东部湿地生态保护培育区、中部湿地生态旅游休闲区和西部湿地生态景观封育区。西溪国家湿地公园是一个集城市湿地、农耕湿地、文化湿地于一体的国家湿地公园。",
        images: {
          title_img: "../../images/xixi.jpg",
        },
        disable:true
      },
      {
        name: "千岛湖",
        miniSummary:"千岛湖，即新安江水库，位于浙江省杭州市淳安县境内，小部分连接杭州市建德市西北，是为建新安江水电站拦蓄新安江下游而成的人工湖，1955年始建，1960年建成。水库坝高105米，长462米；水库长约150千米，最宽处达10余千米；最深处达100余米，平均水深30.44米，在正常水位情况下，面积约580平方千米，蓄水量可达178亿立方米，在最高水位时拥有1078座大于0.25平方千米的陆桥岛屿，并以2平方千米以下的小岛为主，岛屿面积共409平方千米。",
        images: {
          title_img: "../../images/qiandaohu.jpg"

        },
        disable:true
      },
      {
        name: "灵隐寺",
        miniSummary:"灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年），占地面积约87000平方米。灵隐寺开山祖师为西印度僧人慧理和尚。南朝梁武帝赐田并扩建.五代 吴越王钱镠，命请永明延寿大师重兴开拓，并赐名灵隐新寺.宋宁宗嘉定年间，灵隐寺被誉为江南禅宗“五山”之一。清顺治年间，禅宗巨匠具德和尚住持灵隐，筹资重建，仅建殿堂时间就前后历十八年之久，其规模之宏伟跃居“东南之冠”。清康熙二十八年（1689年，康熙帝南巡时，赐名 “云林禅寺”。",
        images: {
          title_img: "../../images/lingyinsi.jpg",
    
        },
       disable:true
      }]
  },
  onLoad: function () {
  },
  toCity(e) {
    const isto = e.target.dataset.to
    if (isto) {
      wx.showModal({
        content: "敬请期待",
        confirmText: "确定",
        cancelText: "取消"
      })
    } else {
      wx.navigateTo({
        url: '../hangzhou/hangzhou'
      })
    }
  },
  bindToDetailTap(e) {
    const isto = e.target.dataset.to
    if (isto) {
      wx.showModal({
        content: "敬请期待",
        confirmText: "确定",
        cancelText: "取消"
      })
    } else {
      wx.navigateTo({
        url: ''
      })
    }
    
  }
 
})

