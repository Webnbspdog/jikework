<?php
	header("Content-type:application/json;charset=UTF-8");
	// $arr=array(
	// 		"newstype"=>"精选",
	// 		"newsimg"=>"images/1.jpg",
	// 		"newstitle"=>"习近平同瑞士联邦主席洛伊特哈德举行会谈",
	// 		"newstime"=>"2017-01-17",
	// 		"newssrc"=>"凤凰头条"
	// 	);
	// echo json_encode($arr);
	$link=mysqli_connect("localhost","","qd100msh","baidu","8081");
	if(!$link){
		echo json_encode(array("连接信息"=>"连接成功"));
	}
	else{
		echo json_encode(array("连接信息"=>"连接成功"));
	}
?>