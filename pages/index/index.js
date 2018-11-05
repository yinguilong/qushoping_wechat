//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    //向模板传入数据
    // 轮播
    index_index_scroll_tmpl: {
      images: [
        'https://thumbnail0.baidupcs.com/thumbnail/0de7347c1d837e87512ecd8278ca2308?fid=1983347112-250528-3718264535&time=1540990800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KCcd8MYSOFV7v%2Bgo1KRX4IK9qD4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7048478428722837177&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
        'https://thumbnail0.baidupcs.com/thumbnail/0de7347c1d837e87512ecd8278ca2308?fid=1983347112-250528-3718264535&time=1540990800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KCcd8MYSOFV7v%2Bgo1KRX4IK9qD4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7048478428722837177&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
        'https://thumbnail0.baidupcs.com/thumbnail/0de7347c1d837e87512ecd8278ca2308?fid=1983347112-250528-3718264535&time=1540990800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KCcd8MYSOFV7v%2Bgo1KRX4IK9qD4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7048478428722837177&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
        'https://thumbnail0.baidupcs.com/thumbnail/0de7347c1d837e87512ecd8278ca2308?fid=1983347112-250528-3718264535&time=1540990800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KCcd8MYSOFV7v%2Bgo1KRX4IK9qD4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7048478428722837177&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
        'https://thumbnail0.baidupcs.com/thumbnail/0de7347c1d837e87512ecd8278ca2308?fid=1983347112-250528-3718264535&time=1540990800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KCcd8MYSOFV7v%2Bgo1KRX4IK9qD4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7048478428722837177&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
        'https://thumbnail0.baidupcs.com/thumbnail/0de7347c1d837e87512ecd8278ca2308?fid=1983347112-250528-3718264535&time=1540990800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KCcd8MYSOFV7v%2Bgo1KRX4IK9qD4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7048478428722837177&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
        'https://thumbnail0.baidupcs.com/thumbnail/0de7347c1d837e87512ecd8278ca2308?fid=1983347112-250528-3718264535&time=1540990800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KCcd8MYSOFV7v%2Bgo1KRX4IK9qD4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7048478428722837177&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video'
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
    },
    // nav
    index_index_navs_tmpl: {
      navs: [
        {
          image: 'https://pan.baidu.com/s/1ZauZ0Le2-4W7HxqV5750Fg',
          text: '孕妇'
        }, {
          image: 'https://pan.baidu.com/s/1ZauZ0Le2-4W7HxqV5750Fg',
          text: '月子'
        }, {
          image: 'https://pan.baidu.com/s/1ZauZ0Le2-4W7HxqV5750Fg',
          text: '幼儿'
        }, {
          image: 'https://pan.baidu.com/s/1ZauZ0Le2-4W7HxqV5750Fg',
          text: '老人'
        }
      ]
    },
    
    // item
    index_index_items_tmpl: {
      items: [
        {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'},
        {image: 'https://hamlet.b0.upaiyun.com/1609/22111/84439174cad04497beda3a076663beb4.jpg'},
        {image: 'https://hamlet.b0.upaiyun.com/1609/22111/1987d8eb8b1748368b7f2382332c9718.jpg'},
        {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'},
        {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'},
        {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'},
        {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'},
        {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'}
      ]
    }
    
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  swiperchange: function(e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },
  go: function(event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  }
})
