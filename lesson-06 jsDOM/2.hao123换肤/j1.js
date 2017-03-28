function appear(x)					
{
	s=document.getElementById(x);
	ns=s.nextElementSibling;
	if(ns.style.display=="block")
	{
		ns.style.display="none";
	}
	else{
		ns.style.display="block";
	}
}
//select 选区城市
	 //声明省
	var pres = ["北京", "上海", "山东"]; //直接声明Array
		 //声明市
	var cities = [
		["东城", "昌平", "海淀"],
		["浦东", "高区"],
		["济南", "青岛"]
	];

	var areas = [
				[
					["东城1", "东城2", "东城3"],
					["昌平1", "昌平2", "昌平3"],
					["海淀1", "海淀2", "海淀3"]
				],
				[
					["浦东1", "浦东2", "浦东3"],
					["高区1", "高区2", "高区3"]
				],
				[
					["济南1", "济南2"],
					["青岛1", "青岛2"]
				]
			]
	//设置一个省的公共下标
	var pIndex = -1;
	var preELe=document.getElementById("province");
	var cityEle=document.getElementById("city");
	var areaEle=document.getElementById("area");
	//设置省的options
	for (var i = 0; i < pres.length; i++) {
			//声明option.<option value="pres[i]">Pres[i]</option>
			var op = new Option(pres[i], i);
			//添加
			preELe.options.add(op);
		}
	function chg(obj) {

			if (obj.value == -1) {

				cityEle.options.length = 0;
				areaEle.options.length = 0;
			}
			//获取值
			var val = obj.value;
			pIndex = obj.value;
			//获取ctiry
			var cs = cities[val];
			//获取默认区
			var as = areas[val][0];

			//先清空市
			cityEle.options.length = 0;
			areaEle.options.length = 0;


			for (var i = 0; i < cs.length; i++) {
				var op = new Option(cs[i], i);
				cityEle.options.add(op);
			}

			for (var i = 0; i < as.length; i++) {

				var op = new Option(as[i], i);

				areaEle.options.add(op);
			}
		}

		function chg2(obj) {

			var val = obj.selectedIndex;

			var as = areas[pIndex][val];


			areaEle.options.length = 0;
			for (var i = 0; i < as.length; i++) {

				var op = new Option(as[i], i);

				areaEle.options.add(op);
			}
		}
		function submitCity()
		{
			var areaEle=document.getElementById("area");
			var index=areaEle.selectedIndex;
			var text=areaEle.options[index].text;
			var span1=document.getElementById("spanCity");
			span1.innerHTML=text;
		}

		//旋转
		function rotate(x)
		{
			s=document.getElementById(x);
			s.style.transition="transform ease-in 0.05s 0.05s";
			if(s.style.transform=="rotate(180deg)")
			{
				s.style.transform="rotate(0deg)";
			}
			else{
				s.style.transform="rotate(180deg)";
			}
		}
//--------------换肤----------------
		 function setCookie(name, value) {
            var cookie=name+'='+escape(value);
            document.cookie=cookie;
            
        }
	    function getCookieValue(name){  
	        var str_cookies=document.cookie;
	        var arr_cookies=str_cookies.split(';');
	        console.log(arr_cookies[0].split("=")[1]);	   
	         }  
		var setHomePage=document.getElementById("setHomePage");
		var firstPage=document.getElementById("firstPage");
		var nav1=document.getElementById("nav1");
		var nav2=document.getElementById("nav2");
		var colorText1=document.getElementsByClassName("colorText");
		function changeOrange()
		{
			setCookie("color","1");
			localStorage.setItem("color","1");
			setHomePage.style.background="#ff5722";
			firstPage.style.background="#ff5722";
			nav1.style.borderTop="3px solid #ff5722";
			nav2.style.borderBottom="1px solid #ff5722";
			for(var i=0;i<colorText1.length;i++)
			{
				colorText1[i].style.color="#ff5722";
			}
				
		}
		function changeBlue()
		{
			setCookie("color","2");
			localStorage.setItem("color","2");
			setHomePage.style.background="#428bca";
			firstPage.style.background="#428bca";
			nav1.style.borderTop="3px solid #428bca";
			nav2.style.borderBottom="1px solid #428bca";
			for(var i=0;i<colorText1.length;i++)
			{
				colorText1[i].style.color="#428bca";
			}	
			
		}
		function changeRed()
		{
			setCookie("color","3");
			localStorage.setItem("color","3");
			setHomePage.style.background="#e91e63";
			firstPage.style.background="#e91e63";
			
			nav1.style.borderTop="3px solid #e91e63";
			nav2.style.borderBottom="1px solid #e91e63";
			for(var i=0;i<colorText1.length;i++)
			{
				colorText1[i].style.color="#e91e63";
			}	
			
		}
		function changeGreen()
		{
			setCookie("color","4");
			localStorage.setItem("color","4");
			setHomePage.style.background="#07ac72";
			firstPage.style.background="#07ac72";
			nav1.style.borderTop="3px solid #07ac72";
			nav2.style.borderBottom="1px solid #07ac72";
			for(var i=0;i<colorText1.length;i++)
			{
				colorText1[i].style.color="#07ac72";
			}	
			
		}
		if(getCookieValue("color")||localStorage.getItem("color"))
		{
			switch(getCookieValue("color")||localStorage.getItem("color"))
			{
				case '1':
				changeOrange();
				break;
				case '2':
				changeBlue();
				break;
				case '3':
				changeRed();
				break;
				case '4':
				changeGreen();
				break;
			}
		}
		
