$(document).ready(function() {
  /*鼠标悬停显示侧边栏*/
  

  //鼠标悬停位置，需要大批量的所以采用工厂模式
 	var btnFactory={};
 	btnFactory.togglea=function(a,b){
 		var me=this;
 		me.btn=$(a);
 		me.btn.mouseenter(function(){
 			$(b).show();
 		});
 		me.btn.mouseleave(function(){
 			$(b).hide();
 		});
 	};
 	btnFactory.toggleb=function(a){
 		var me=this;
 		me.btn=$(a);
 		me.btn.mouseenter(function(){
 			$(this).siblings(".fanli_inner").show();
 		});
 		me.btn.mouseleave(function(){
 			$(this).siblings(".fanli_inner").hide();
 		});
 	};
 	// 标签切换
	btnFactory.clicka=function(a){
	 	$(a).click(function(){
	 		var tab = $(this).attr("data-id");
		   $(this).addClass("current").siblings().removeClass("current");
		   $(this).parent().parent().siblings().removeClass("current");
		   $(this).siblings().children().children().removeClass("current");
		   $("#" + tab).show().siblings().hide();
	 	});
	};
	
	
 	btnFactory.togglea("#more_list",".morethings");//鼠标移入显示，移出消失
 	btnFactory.togglea(".morethings",".morethings");
 	btnFactory.clicka(".menu_item");
 	btnFactory.toggleb(".nav_block");// 猜你喜欢导航标签鼠标划过显示隐藏
 	// 用户设置鼠标划过显示下拉菜单
 	btnFactory.togglea(".username","#username_menu");
 	btnFactory.togglea("#username_menu","#username_menu");
 	btnFactory.togglea(".username","#username_menu");
 	btnFactory.togglea(".usersetting","#usersetting_menu");
 	btnFactory.togglea("#usersetting_menu","#usersetting_menu");

  // 滚动加载更多内容
  $("#container").mousewheel(function(event, delta) {

    if (delta < 0) {

      var $dataid = $(".current").attr("data-id");
     
      $("#" + $dataid).removeClass("content_inner");
    }
  });
  
  // 返回顶部
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $("#top_feed").fadeIn(1500);
    } else {
      $("#top_feed").fadeOut(1500);
    }
    $("#top_feed").click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 100);
      return false;
    });
    // 结束动画
    if ($('body,html').is(':animated')) {
      $('body,html').stop(true, true);
    }
  });

  // 显示隐藏换肤菜单，不会统一了，选择单例模式
var index={
  	init:function(){
  		this.render();
  		this.bind();
  	},
  	render:function(){
  		var me=this;
  		me.btn=$(".head_skin");
  	},
  	bind:function(){
  		var me=this;
  		$(".skin").click(function(e){
  			me.btn.animate({
		      height: "288px"
		    }, 500);
		    e.stopPropagation();
		    //阻止事件冒泡 e.stopPropagation()
  		});
  		$(".bg_title").click(function(){
  			me.btn.animate({
		      height: "0px"
		    }, 500);
  		});
  	}
  }
  index.init();
  //点击页面空白处隐藏换肤下拉
  var $skin = $(".head_skin")
  $(document).click(function(e) {
    if (!(e.target == $skin[0] || $.contains($skin[0], e.target))) {
      $(".head_skin").animate({
        height: "0px"
      }, 500);
    }
    e.stopPropagation();

  });

  $("#username_menu div a").hover(function() {
    $(this).addClass('hover_change');
  }, function() {
    $(this).removeClass('hover_change');
  })

  $("#usersetting_menu div a").hover(function() {
    $(this).addClass('hover_change');
  }, function() {
    $(this).removeClass('hover_change');

  });
	 // 换肤
  var i = 1;
  $(".skin_bgcon img").hover(function() {
    i = $(this).attr("data-skin");
    $(".skin_content img").attr("src", 'Images/skin' + i + '.jpg');
  })
  $(".skin_bgcon img").click(function() {
    i = $(this).attr("data-skin");
    $(".skin_container img").attr("src", 'Images/skin' + i + 's.jpg');
    $.cookie("MyCssSkin", i, {
      path: '/',
      expires: 10
    }); //存储当前皮肤cookie
  });
  var cookie_skin = $.cookie("MyCssSkin"); //读取cookie
  //通过cookie加载上一次保存的皮肤
  if (cookie_skin) {
    $(".skin_container img").attr("src", 'Images/skin' + cookie_skin + 's.jpg');
  }
});