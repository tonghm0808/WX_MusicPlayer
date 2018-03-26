//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playbut: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAABJlBMVEUAAAAAAAD////l5eX///9iYmKDg4Pn5+f///9YWFj////09PT////4+Pjt7e3///////9oaGhBQUH////////////////CwsIaGhr///8xMTEkJCT////7+/vp6en///////////////+srKyoqKienp58fHz////y8vKTk5P///8EBAT////////////////V1dW3t7f////////////////////v7++jo6N9fX3///////+UlJT////s7Oz////Nzc3///////+RkZGPj495eXkTExP////////29vb////k5OTPz882Njb////////////c3Nz///////9ycnJsbGz///9dXV3////////Q0ND///9QUFD///////////////////9FeiN6AAAAYXRSTlNmAP3c+oWT3ueB9vA19ealRId5EQbuurpu83RxD/nh05dfAquooo+M7JtzaSolE+vMspJ3Wj7w6KSQj6ucKeXNxLWnmpmObVYd8t3axXZRSt7TvbKLideCeSzHnn4V3Nh6YarbPAAABlRJREFUeNrU14lWEmEYh/GXcdj3HQTZRCkS913UNE2zbLd9Oc/930Q2LmVpwPAC03MD/M5835n/IC6dkqHnzcVoZvdkLp2HfHruZDcTXWw+DyVdOilAt6uNjI8782Ua1W2XjTShtdDSmzRdlH6zFKq5bKQBTS5H57gqXJrP1tsb7kShkBPJFQoJ90a7np0vhblqLrrc8R7oQ4vVPZOLIp8mp8flzsanJ59FuMjcqxZdHVKFxvYDWK1lPQXpooInu4ZVYD/m6pAWNLn0DSvvekJ6KLHuxerb0qyrQwrQViV/oZzKSc/lpi6sgUrLdSN16MyWARBcOBWbnS4EAYytj67r1KGtqMUseaSvPCWLGr14u+pDZysmwFhc+i4+BmBWZgcATTXTFvO9qOS3qOlmShu68g7A6xa13F6A7yuq0ORnA9jZENU2dgDjc1IPGvMB4QNR7+AJ4IspQVObBjDmF+Wur6qxmdKAbpeBoEcGlCcIlLf7hx7lOzxOlYeaP+oTmmoYQFsGWhswGql+oMUMEInLgItHgEzRPvS43OHYVY+/fGwXGvIBkzKU6oAvZA8aywOPZEg9AvIxO9AXAZg4lKF1OAGBF71DX5jw5EyG2NkTMJ/3Co2ZcM8tQ819D8xYb9CVgA2nijSw0gs0tArBzk59aRBWQ91Dj30QjssIiofBd9wttFiGiTMZSWcTUC52B629Bg5lRB0Cr2tdQRvAfRlZ94FGN9AjA+oywupgHHWGzuRhTEbaGORnOkFTZYj4ZaT5I1BOdYBuAnEZcXFg89/QmAFtGXltMGL/ghZ9I7+g19fUV/wHtAJBvzggfxAqd0NXDPCII/KAsXIXNPXOIQd/efjvUndAmxB2xMH/zB+G5u3Qr2k4EMd0AOmvt0IrsCMOagcqt0FbJkyLg5oGs3ULNApecVReiP4NnTHALY7KDcbHv6BbDno1XTUGW39CWwa8F4flB6P1B3TRgQ/UeqSLN6GzAQd83f1dHAKzN6AfoCQOrARLN6Andr9GpiITT9/KwPLAye/QGATFTusAxsOCDKogxH6D7sOC2GkNq+B9GVALsP8LWgzAqdjJ4LJXCRlIpxAoXkOrtteT6yYmH8gg8kL1GroHU/1CoTSQBZ6CvSto0oRc/1DM7GNRLwdm8hK6DF5RgMI9j6jnheVLaBTWdaAwPy7KrUP0Alqbg4QWlPCU6JaAuZoFDcGaqEHh6RdRLQIhC/oBsppQzAXVN1UWlixoBjyqUIhozr8H3vyE1lYhpwnVnv8CpH9CZyAi2lAIPtK8pDPn0Cp8UoWqz/8zqJ5DGzCpCdWf/0lonEMzMK0J1Z//acicQ30wrgnVn/9x8LkkCWFRherPfxiSEgKvLlR//r0QkmWY14Xqz/88LEsTsqpQ/fm3RlQWoa4L1Z//OixKFNq6UP35vw9RycDGMKAYD3P9vEhlF9y6UP35d8OuvISELlR//hPwUqxh0oTqz781TbIKueFB4em4rb/Mq5IfMpRn0nOPIS+ADBUatvcz/w/0B/X2VgMACMNQ9AMnWOADKwT/QuahyZYcDcte7e146X9W+vFmWmEzOeOJGfjMCmWOEubMYw7no7wizHPHvMuMAMFIOo5IxsiOjJDLSOOM2cDYN44hxliMjGnL2OAOWMCgGgz84uBEDKDFIG8ORLhzLPO2Y5kK6PpMdJiBsR28nQkMOBEMJtTixISY4JUTZWPCgVXevesgCINhGG7dZPLEIg7GRRsMTsaoMTEOnmLUuBgn+e//JuTHGt0aKT3y3QIFpj6vO9ctnbnAmr9PIysefn0E0PfhkjW92HFtnQHULn5AAG9aISZGF3NaQYxVrInRrcVYBW4H5vkPEPIfuIV5UGXhClHT8Qv9oXQ/MckoTfb+wVTGqK8ZUl9+4mmUnpGj03pOmzlH5y/w5w6ZiAil+G9qA0KpkfWMTxKsJ6530wel3try9CwjSscg27BTDcw321gHjzyuEjj9IbwP1hPeDqHo2abP0pn5XMR/NhTB/fyo2gv3q0gh1JSkEHCrUuMSG1VxCdxDOtfR1ZDr4AGUwIUACi5JJZMyx1RHUgY3kIn0LBuFQk2EFlv7J3t0+id7JPi86wlJsfm9FUVbQrZR1LrPmQ0hKZfSXC7Fzr5LeD7uGoYBQBCGV56PS2g5ewGy+NkUNbjr9gAAAABJRU5ErkJggg==',

    title: '歌曲名称',
    singer: '演唱者',
    epname: '专辑名称',
    imgurl: 'http://s3.music.126.net/m/s/img/disc_default.png',
    mp3url: '',
    bgimg: 'background-image:url(//music.163.com/api/img/blur/18623527953281990);',
    next: '',

    bind: 'audioPause',
    hide: 'true',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager();
    var that = this;

    wx.request({
      url: 'https://tonghuanming.duapp.com/nextmusic',
      method: 'GET',
      success: function (res) {
        that.setData({ next: 'http://music.163.com' + res.data });
        console.log(that.data.next);

        wx.request({
          url: 'https://tonghuanming.duapp.com/music',
          method: 'POST',
          data: {
            music_url: that.data.next
          },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          dataType: 'json',
          success: function (res) {
            that.setData({ imgurl: res.data.imgurl, title: res.data.title, singer: res.data.singer, mp3url: res.data.mp3url, epname: res.data.epname, bgimg: res.data.bgimgurl, hide: 'true' });
            backgroundAudioManager.src = that.data.mp3url;
            backgroundAudioManager.title = that.data.title;
            backgroundAudioManager.epname = that.data.epname;
            backgroundAudioManager.singer = that.data.singer;
            backgroundAudioManager.coverImgUrl = that.data.imgurl;
          },
          complete: function () {
            wx.request({
              url: 'https://tonghuanming.duapp.com/nextmusic',
              method: 'GET',
              success: function (res) {
                that.setData({ next: 'http://music.163.com' + res.data });
                console.log(that.data.next);
              }
            })
          }
        });
      }
    });

    backgroundAudioManager.onEnded(
      function () {
        wx.request({
          url: 'https://tonghuanming.duapp.com/music',
          method: 'POST',
          data: {
            music_url: that.data.next
          },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          dataType: 'json',
          success: function (res) {
            that.setData({ imgurl: res.data.imgurl, title: res.data.title, singer: res.data.singer, mp3url: res.data.mp3url, epname: res.data.epname, bgimg: res.data.bgimgurl, hide: 'true' });
            backgroundAudioManager.src = res.data.mp3url;
            backgroundAudioManager.title = res.data.title;
            backgroundAudioManager.epname = res.data.epname;
            backgroundAudioManager.singer = res.data.singer;
            backgroundAudioManager.coverImgUrl = res.data.imgurl;
          },
          complete: function () {
            wx.request({
              url: 'https://tonghuanming.duapp.com/nextmusic',
              method: 'GET',
              success: function (res) {
                that.setData({ next: 'http://music.163.com' + res.data });
                console.log(that.data.next);
              }
            })
          }
        });
      }
    )
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
    const backgroundAudioManager = wx.getBackgroundAudioManager();
    var that = this;

    wx.request({
      url: 'https://tonghuanming.duapp.com/music',
      method: 'POST',
      data: {
        music_url: that.data.next
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ imgurl: res.data.imgurl, title: res.data.title, singer: res.data.singer, mp3url: res.data.mp3url, epname: res.data.epname, bgimg: res.data.bgimgurl, hide: 'true' });
        backgroundAudioManager.src = res.data.mp3url;
        backgroundAudioManager.title = res.data.title;
        backgroundAudioManager.epname = res.data.epname;
        backgroundAudioManager.singer = res.data.singer;
        backgroundAudioManager.coverImgUrl = res.data.imgurl;
      },
      complete: function () {
        wx.stopPullDownRefresh();
        wx.request({
          url: 'https://tonghuanming.duapp.com/nextmusic',
          method: 'GET',
          success: function (res) {
            that.setData({ next: 'http://music.163.com' + res.data });
            console.log(that.data.next);
          }
        })
      }
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  audioPlay: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.play();
    this.setData({ bind: 'audioPause', hide: 'true' })
  },

  audioPause: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.pause();
    this.setData({ bind: 'audioPlay', hide: '' })
  },
})
