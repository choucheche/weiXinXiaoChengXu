// 默认加这个 Page({}); ，不然会报错
Page({
    onTap:function(){
    // 按钮绑定的的tap事件    
        wx.navigateTo({
            url:"../posts/post"
        })
        /*
            页面跳转到../posts/post页面
            页面左上角会有 返回按钮
        */

        wx.redirectTo({
          url: '../posts/post',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
});

