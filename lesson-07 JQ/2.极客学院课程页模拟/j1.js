$(document).ready(function(){
	var width=$(".container").width();
	var widthlogo=$(".logohead").width();
	var hideboxWidth=width-widthlogo;
	console.log(hideboxWidth);
	$("#search-icon").click(function(){
		console.log(hideboxWidth);
		$("#hideSearchBox").width(hideboxWidth-30);
		//$("#hideSearchBox").animate({"opacity":"100%"},300);
		$("#hideSearchBox").addClass("scale");
		if(window.screen.width==1920)
		{
			$("#hideSearchBox").css({"margin-left":"50%","left":"-24%"});
		}
		else if(window.screen.width==1280)
		{
			$("#hideSearchBox").css({"margin-left":"50%","left":"-35%"});
		}
		else{
			$("#hideSearchBox").css({"margin-left":"50%","left":"-35%"});
		}

		$("#search-icon").hide();	
		$(".app-icon").hide();
		$(".login-icon").hide();
		$("#search-icon").hide();
	});
	$(".close-icon").click(function(){
		$("#hideSearchBox").removeClass("scale");
		$("#hideSearchBox").slideUp();
		$(".app-icon").show();
		$(".login-icon").show();
		$("#search-icon").show();
	});
	$(".aside-classPool li").each(function(i){ //侧栏标签切换
		$(this).mouseenter(function(){
			$(".hideAside").eq(i).addClass("content");
		});

		$(this).mouseleave(function(){
			$(".hideAside").eq(i).removeClass("content");
		});
	});
	$(".classNav li").each(function(i){
		$(this).mouseenter(function(){
			$(".hideClassNav").eq(i-1).show();
		});
		$(this).mouseleave(function(){
			$(".hideClassNav").eq(i-1).hide();
		});
	});
	var data=[
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201612/12/1b6a/584e070d8c2cb.jpeg",
		"topic":"腾讯云产品 - 游戏云",
		"introduce":"本课程主要介绍腾讯游戏云的知识",
		"duration":"5课时 177分钟",
		"number":"2612人学习",
		"grade":"中级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	{
		"background":"http://a1.jikexueyuan.com/home/201611/17/9d28/582d6e30c2d46.png",
		"topic":"前端开发环境搭建(三种工具任选其一)",
		"introduce":"本课程介绍常用前端开发工具 Sublime Text / Dreamweaver / WebStorm 的安装与使用技巧",
		"duration":"6课时 41分钟",
		"number":"2068人学习",
		"grade":"初级",
	},
	]	
	$.each(data,function(i,value){														//动态创建课程
		//console.log(value);
		var classBox=$("<div></div>").addClass("classBox1").appendTo($("#classPool"));
		var lesson=$("<div></div>").addClass("lesson1").appendTo(classBox);
		var lessonplay=$("<div></div>").addClass("lessonplay").appendTo(lesson);
		var playicon=$("<i></i>").addClass("playicon").appendTo(lessonplay);
		var img=$("<img>").addClass("img1").appendTo(lesson);
		var lessonInfo=$("<div></div>").addClass("lessonInfo1").appendTo(classBox);
		var topic=$("<a></a>").addClass("topic1").appendTo(lessonInfo);
		var introduce=$("<p></p>").addClass("classIntroduce1").appendTo(lessonInfo);
		var duration=$("<span></span>").addClass("classDuration1").appendTo(lessonInfo);
		var number=$("<span></span>").addClass("hideNumber1").appendTo(lessonInfo);
		var grade=$("<span></span>").addClass("hideGrade1").appendTo(lessonInfo);
		
		$(".img1").eq(i).attr("src",value.background);
		$(".topic1").eq(i).append(value.topic);
		$(".classIntroduce1").eq(i).append(value.introduce);
		//$(".classDuration1").eq(i).append(value.duration);
		$(".hideNumber1").eq(i).append(value.number);
		$(".hideGrade1").eq(i).append(value.grade);	
		classBox.mouseenter(function(){			//鼠标移入
			
				lessonplay.css({"opacity":"0.5"});
				lessonInfo.stop().animate({"height":"150px"});
				lessonInfo.css({"position":"absolute","z-index":"100"});
				introduce.stop().fadeIn();
				number.stop().fadeIn();
				grade.stop().fadeIn();	
		});
		classBox.mouseleave(function(){			//鼠标移出

			lessonplay.css({"opacity":"0"});
			lessonInfo.stop().animate({"height":"100px"});
			lessonInfo.css({"position":"relative","z-index":"0"});
			introduce.stop().fadeOut();
			number.stop().fadeOut();
			grade.stop().fadeOut();
		});
	});
	$(".list-icon").click(function(){
		$(".classBox1").remove();
		$(".topic1").remove();
		$(".classIntroduce1").remove();
		$(".classDuration1").remove();
		$(".hideNumber1").remove();
		$(".hideGrade1").remove();
		$(".classBox2").remove();
		$(".topic2").remove();
		$(".classIntroduce2").remove();
		$(".classDuration2").remove();
		$(".hideNumber2").remove();
		$(".hideGrade2").remove();

		$.each(data,function(i,value){														//动态创建课程
			//console.log(value);
			var classBox=$("<div></div>").addClass("classBox2").appendTo($("#classPool"));
			var lesson=$("<div></div>").addClass("lesson2").appendTo(classBox);
			var lessonplay=$("<div></div>").addClass("lessonplay").appendTo(lesson);
			var playicon=$("<i></i>").addClass("playicon").appendTo(lessonplay);
			var img=$("<img>").addClass("img1").appendTo(lesson);
			var lessonInfo=$("<div></div>").addClass("lessonInfo2").appendTo(classBox);
			var topic=$("<a></a>").addClass("topic2").appendTo(lessonInfo);
			var introduce=$("<p></p>").addClass("classIntroduce2").appendTo(lessonInfo);
			var duration=$("<span></span>").addClass("classDuration2").appendTo(lessonInfo);
			var number=$("<span></span>").addClass("hideNumber2").appendTo(lessonInfo);
			var grade=$("<span></span>").addClass("hideGrade2").appendTo(lessonInfo);
			
			$(".img1").eq(i).attr("src",value.background);
			$(".topic2").eq(i).append(value.topic);
			$(".classIntroduce2").eq(i).append(value.introduce);
			$(".classDuration2").eq(i).append(value.duration);
			$(".hideNumber2").eq(i).append(value.number);
			$(".hideGrade2").eq(i).append(value.grade);	
			classBox.mouseenter(function(){			//鼠标移入
				lessonplay.css({"opacity":"0.5"});	
			});
			classBox.mouseleave(function(){			//鼠标移出
				lessonplay.css({"opacity":"0"});
			});
		});
	});
	$(".kuai-icon").click(function(){
		$(".classBox1").remove();
		$(".topic1").remove();
		$(".classIntroduce1").remove();
		$(".classDuration1").remove();
		$(".hideNumber1").remove();
		$(".hideGrade1").remove();
		$(".classBox2").remove();
		$(".topic2").remove();
		$(".classIntroduce2").remove();
		$(".classDuration2").remove();
		$(".hideNumber2").remove();
		$(".hideGrade2").remove();
		$.each(data,function(i,value){														//动态创建课程
			//console.log(value);
			var classBox=$("<div></div>").addClass("classBox1").appendTo($("#classPool"));
			var lesson=$("<div></div>").addClass("lesson1").appendTo(classBox);
			var lessonplay=$("<div></div>").addClass("lessonplay").appendTo(lesson);
			var playicon=$("<i></i>").addClass("playicon").appendTo(lessonplay);
			var img=$("<img>").addClass("img1").appendTo(lesson);
			var lessonInfo=$("<div></div>").addClass("lessonInfo1").appendTo(classBox);
			var topic=$("<a></a>").addClass("topic1").appendTo(lessonInfo);
			var introduce=$("<p></p>").addClass("classIntroduce1").appendTo(lessonInfo);
			var duration=$("<span></span>").addClass("classDuration1").appendTo(lessonInfo);
			var number=$("<span></span>").addClass("hideNumber1").appendTo(lessonInfo);
			var grade=$("<span></span>").addClass("hideGrade1").appendTo(lessonInfo);
			
			$(".img1").eq(i).attr("src",value.background);
			$(".topic1").eq(i).append(value.topic);
			$(".classIntroduce1").eq(i).append(value.introduce);
			$(".classDuration1").eq(i).append(value.duration);
			$(".hideNumber1").eq(i).append(value.number);
			$(".hideGrade1").eq(i).append(value.grade);	
			classBox.mouseenter(function(){			//鼠标移入
				
					lessonplay.css({"opacity":"0.5"});
					lessonInfo.animate({"height":"150px"});
					lessonInfo.css({"position":"absolute","z-index":"100"});
					introduce.fadeIn();
					number.fadeIn();
					grade.fadeIn();	
			});
			classBox.mouseleave(function(){			//鼠标移出

				lessonplay.css({"opacity":"0"});
				lessonInfo.animate({"height":"100px"});
				lessonInfo.css({"position":"relative","z-index":"0"});
				introduce.fadeOut();
				number.fadeOut();
				grade.fadeOut();
			});
		});
	});

})
