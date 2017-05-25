Page({
  data:{
    data:"Jan 24 2017"
    // {{data}}这样放入wxml中
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log("1-onLoad");

    var post_content1={
      date:"Jan 24 2017",
      title:"一定会变好的",
      img:{
        author_img:"/images/me.jpg",
        post_img:"/images/post/list_img1.jpg"
      },
      content:"新年攒机不用愁 手把手教你组装电脑",
      view_num:"112",
      collect_num:"96",
      img_condition:false,
      a:1,
      b:2,
      c:3
    }
    this.setData(post_content1);
    // 将post_content1对象的值写到data里了
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.log("3-onReady");
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    console.log("2-onShow");
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    console.log("onHide");
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    console.log("onUnload");
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("onPullDownRefresh");
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    console.log("onReachBottom");
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  image_zidingyi:"/images/...",
  //自定义变量
  date_geshi:function(){
  //自定义函数  
  },
})