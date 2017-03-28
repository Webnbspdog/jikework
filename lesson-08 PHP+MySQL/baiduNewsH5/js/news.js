$(document).ready(function(){
	refreashNews();
	
})
function refreashNews(){    //更新新闻内容
	var $lista=$("<a></a>").attr("href","#").addClass("newscow").appendTo("article");
	$lista.empty();
	$.ajax({
		url:"./server/getnews.php",
		type:"get",
		datatype:"json",
		success:function(data){
			// var $list=$("<ul></ul>").addClass("newscontainer").appendTo($lista);
			// var $newsImg=$("<li></li>").addClass("newsimg").prependTo($list);
			// var $newsmain=$("<li></li>").addClass("newsmain").appendTo($list);
			// var $img=$("<img>").attr("src",data.newsimg).appendTo($newsImg);
			// var	$newstitle=$("<div></div>").html(data.newstitle).addClass("newstitle").appendTo($newsmain);
			// var $newstime=$("<span></span>").html(data.newstime).addClass("newstime").appendTo($newsmain);
			// var $newssrc=$("<span></span>").html(data.newssrc).addClass("newssrc").appendTo($newsmain);
			console.log(data);
		}
	})
	
}