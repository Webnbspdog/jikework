var num; //记录输入最后一位
var number; //记录数字
var symbol;
var dis=document.getElementById("inputBox");
var first;
var second;	
var flag=false;
function getNum(x)			//获取数字
{
	num=document.getElementById(x).innerHTML;
	if(flag==false)
	{
		dis.value+=num;
	}
	flag=false;
		
}
function getSymbol(x)		//获取符号
{
	symbol=document.getElementById(x).innerHTML;
	first =Number(dis.value);	//存储第一个数值
	dis.value="";
	return symbol;
	return first;
}
function getMathSymbol(x)
{
	flag=true;
	first =Number(dis.value);	//存储第一个数值
	dis.value="";
	var mathSymbol=document.getElementById(x).innerHTML;
	if(mathSymbol=="sin")
	{
		dis.value=Math.sin(first);
	}
	if(mathSymbol=="cos")
	{
		dis.value=Math.cos(first);
	}
	first=Number(dis.value);
	return first;
}
function result()				//计算结果
{
	flag=true;
	second=Number(dis.value);
	dis.value="";
	switch(symbol)
	{
		case "+":
		dis.value=removeZero(parseFloat(first+second).toFixed(8));
		break;
		case "-":
		dis.value=removeZero(parseFloat(first-second).toFixed(8));
		break;
		case "*":
		dis.value=removeZero(parseFloat(first*second).toFixed(8));
		break;
		case "/":
		if(second==0)			//如果被除数为零，返回结果NaN
		{
			dis.value="NaN";
		}
		else
		{
			dis.value=removeZero(parseFloat(first/second).toFixed(8));
		}
		break;	
		case "取余":
		dis.value=removeZero(parseFloat(first%second).toFixed(8));
		break;
	}

}

function removeZero(x)				//去掉结果多余的“0”
{
	var r1=x.toString().split(".")[1];		//小数部分
	var r2=x.toString().split(".")[0];		//整数部分
	if(x.toString().indexOf(".")>0)			//判断结果是否存在小数
	{	
		for(var i=r1.length;i>0;i--)
		{
			if(r1[i]=="0")
			{
				r1[i]=="";
			}
			else{
				break;
			}
		}
		x=Number(r2+"."+r1);
	}
	return x;
}
