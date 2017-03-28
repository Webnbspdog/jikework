$(document).ready(function(){
	$("#changeSkin").click(function(){			//换肤
		$("#hideSkinbox").width(window.screen.width);
		$("#hideSkinbox").slideDown();
		$(".skinboxNav ul li").mouseenter(function(){
				$(this).addClass("changecolor");    
		});
		$(".skinboxNav ul li").mouseleave(function(){
				$(this).removeClass("changecolor");
		});

		$("#skinbox img").each(function(i){
			if(i==0||i==5){
				$(this).width(200);
				$(this).height(100);
			}
			else{
				$(this).width(100);
				$(this).height(50);
			}
			if(i!=0)
			{
				$(this).css({"position":"relative","top":"-48px"});
			}
			$(this).mouseenter(function(){					//鼠标移入，预览换肤
			var abc=$(this).attr("src");
			$(".previewWall").css("background-repeat","no-repeat");
			$(".previewWall").css("background-image", 'url("' + abc + '")');
			$(".previewWall").css("background-size","260px 150px");
			});
			$(this).mouseleave(function(){
			$(".previewWall").css({"background":"none"});
			});
			//换肤
			$(this).click(function(){					//点击换肤
				var abc=$(this).attr("src");
				$(".skincontainer").css("background-repeat","no-repeat");
				$(".skincontainer").css("background-image", 'url("' + abc + '")');
				$(".leftli").css("color","#fff");
				$(".l1 a").css("color","#fff");
				$("#l1 a").css("color","#fff");
				$(".img").attr("src","https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png");
				window.localStorage.setItem("background",abc);
				//window.localStorage.getItem("background");
			})
		});	
	});
	if(window.localStorage.getItem("background")){				//皮肤存储
		var s=window.localStorage.getItem("background");
		$(".skincontainer").css("background-repeat","no-repeat");
		$(".skincontainer").css("background-image",'url("' + s + '")' );
		$(".leftli").css("color","#fff");
		$(".l1 a").css("color","#fff");
		$("#l1 a").css("color","#fff");
		$(".img").attr("src","https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png");
	}
	
	$(".shouqi").click(function(){
		$("#hideSkinbox").slideUp();
	});
	$("#messageclick").click(function(){
		$(".hidemessageBox").toggle();
	});
	$("#l3").mouseenter(function(){				//更多产品下拉框
		$("#hide1").stop().fadeIn();
	});
	$("#hide1").mouseleave(function(){
		$("#hide1").stop().fadeOut();
	});
	$(".sp3").mouseenter(function(){
		$(this).attr({src:"images/ca1_02.jpg"});
	});
	$(".sp3").mouseleave(function(){
		$(this).attr({src:"images/ca1_01.jpg"});
	});
	$(".recommendContent .content0 .nav").click(function(){			
		
	var hide=$(this).next(".hidenav");
	hide.stop().slideToggle(function(){
		if($(this).is(":hidden")){
			hide.prev(".nav").children(".triangle").addClass("triangle2");
			hide.prev(".nav").children(".triangle").removeClass("triangle1");
		}
		else{
			hide.prev(".nav").children(".triangle").addClass("triangle1");
			hide.prev(".nav").children(".triangle").removeClass("triangle2");
		}
	});
	});
	$(".recommendNav ul li").click(function(){		//实现切换
		$(this).addClass("currentabc");
		$(this).nextAll().removeClass("currentabc");
		$(this).prevAll().removeClass("currentabc");
		$(".recommendNav ul li").each(function(i){
		if ($(this).hasClass("currentabc")) {
			$(".content0").eq(i).show();
			$(".content0").eq(i-1).hide();
			$(".content0").eq(i+1).hide();
			$(".content0").eq(i-2).hide();
			$(".content0").eq(i+2).hide();	
		}
	});
	});
	$(window).scroll(function(){		//鼠标移动监听
		if ($(window).scrollTop() > 300){
			$(".top-icon").fadeIn(1000);
			$(".top-icon").click(function(){
				$("body").animate({scrollTop: "0"},100);
			});
		}
		else{
			$(".top-icon").fadeOut(1000);
		}
	});
})
