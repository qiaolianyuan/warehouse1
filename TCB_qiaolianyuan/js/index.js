//默认地址北京
//执行ajax
$.ajax({
	url:"/shop",
	dataType:"json",
	type:"get",
	data:{
		city_id:"bei_jing",
		pn: 0,
		pagesize:5
	},
	success:function(data){
		for(var n=0;n<data.shop_data.length;n++){
			var one = data.shop_data[n].map_latitude;
			var two = data.shop_data[n].map_longitude;
			var name = data.shop_data[n].shop_name;
			var marker = new AMap.Marker({
				map:map,
				position:[two,one],
				icon:"https://p.ssl.qhimg.com/t01647448c59c844934.png",
				title:name
			});
		}
		//请求文件
		$.ajax({
			url:"templet/infoEighth.html",
			dataType:"text",
			success:function(tmp){
				//console.log(data);
				//console.log(tmp);
				//加工数据和模板
				$(".shopmain").html(baidu.template(tmp,data));
			}
		});
	}
});
//jsonp执行ajax 获取北京区县列表
$.ajax({
	url: "http://bang.360.cn/aj/get_area/?citycode=bei_jing",
	dataType: "jsonp", //告诉后台数据类型
	type: "get", //指定请求方式 get post 
	//请求成功，执行该函数
	success: function(data){
		//请求文件
		$.ajax({
			url:"templet/infoNinth.html",
			dataType:"text",
			success:function(tmp){
		
				//console.log(tmp);
				//加工数据和模板
				$(".sel-quxian").html(baidu.template(tmp,data));
			}
		});
	}
})


//轮播图
var count = 0;
var time = setInterval(function(){
	$(".slide-ctrl span").eq(count).trigger("click");
	count++;
	if(count == 4){
		count = 0;
	}
},3000);

//图片按钮委托事件绑定
$(".slide-ctrl").off("click", "span").on("click","span",function(){
	var img = $("#lunbo").find("img");
	var sn = parseInt($(this).attr("data-sn"));
	switch(sn){
		case 0:
			$(this).addClass("ctrl-curr").siblings().removeClass("ctrl-curr");
			img.attr("src","http://p8.qhmsg.com/t01f33137f9dde655ce.png");
			break;
		case 1:
			$(this).addClass("ctrl-curr").siblings().removeClass("ctrl-curr");
			img.attr("src","http://p.ssl.qhmsg.com/t01f2fbcfa29801c4b2.jpg");
			break;
		case 2:
			$(this).addClass("ctrl-curr").siblings().removeClass("ctrl-curr");
			img.attr("src","http://p4.qhmsg.com/t010277e84ce18b98b6.png");
			img.css({"height":"340px","width":"1200px"});
			break;
		case 3:
			$(this).addClass("ctrl-curr").siblings().removeClass("ctrl-curr");
			img.attr("src","http://p6.qhmsg.com/t019f09cd1c5850e1a7.png");
			img.css({"height":"340px","width":"1200px"});
			break;
		default:
			break;
	}
});


//登录
$(".head_login").on("click",function(){
	//显示弹窗
	$(".login").css("display","block");
	//显示遮罩
	$(".lightBox").css("display","block");
});
//关闭按钮
$(".lo_close").on("click",function(){
	//关闭弹窗
	$(".login").css("display","none");
	//关闭遮罩
	$(".lightBox").css("display","none");
});

//注册
$(".head_zhuce").on("click",function(){
	//显示注册
	$(".zhuce").css("display","block");
	//默认显示手机注册
	$(".zc_form1").css("display","none");
	//显示遮罩
	$(".lightBox").css("display","block");
	//点击手机注册
	$("#phones").on("click",function(){
		//修改div高度
		$(".zhuce").css("height",421+"px");
		//显示手机注册表单
		$(".zc_form").css("display","block");
		//隐藏邮箱注册表单
		$(".zc_form1").css("display","none");
	});
	//点击邮箱注册
	$("#emails").on("click",function(){
		//修改div高度
		$(".zhuce").css("height",299+"px");
		//隐藏手机注册表单
		$(".zc_form").css("display","none");
		//显示邮箱注册表单
		$(".zc_form1").css("display","block");
	});
});
//注册验证码
$(".zc_img,.zc_a").on("click",function(){
	var srcing = "";
	for(var n=0;n<4;n++){
		var srcString = parseInt(Math.random()*9);
		srcing += srcString;
	}
	// console.log(srcing);
	$(".zc_img").attr("src","http://passport.360.cn/captcha.php?m=create&amp;app=i360&amp;scene=strictreg&amp;userip=&amp;level=default&amp;sign=5a63a7&amp;r=1517904172&amp;_=15179041766852"+srcing);
});
//关闭按钮
$(".zc_close").on("click",function(){
	//修改div高度
	$(".zhuce").css("height",421+"px");
	//显示手机注册表单
	$(".zc_form").css("display","block");
	//隐藏邮箱注册表单
	$(".zc_form1").css("display","none");
	$(".zhuce").css("display","none");
	$(".lightBox").css("display","none");
});
//地图
$(".extra").on("click",function(){
	//显示注册
	$(".map").css("display","block");
	//显示遮罩
	$(".lightBox").css("display","block");
});
//关闭地图
$(".close_map").on("click",function(){
	//隐藏注册
	$(".map").css("display","none");
	//隐藏遮罩
	$(".lightBox").css("display","none");
});



//反向代理1执行ajax
$.ajax({
	url: "/doGetHotHsList",
	dataType: "json", //告诉后台数据类型
	type: "get", //指定请求方式 get post 
	//请求成功，执行该函数
	success: function(data){
		//请求文件
		$.ajax({
			url:"templet/infoFirst.html",
			dataType:"text",
			success:function(tmp){
				// console.log(data);
				// console.log(tmp);
				//加工数据和模板
				$("#ulOne").html(baidu.template(tmp,data));
				//懒加载
				$(".p_img img").lazyload();
			}
		});
	}
})

//反向代理2执行ajax
$.ajax({
	url: "/dogethotlist",
	dataType: "json", //告诉后台数据类型
	type: "get", //指定请求方式 get post 
	//请求成功，执行该函数
	success: function(data){
		//请求文件
		$.ajax({
			url:"templet/infoSecond.html",
			dataType:"text",
			success:function(tmp){
				// console.log(data);
				// console.log(tmp);
				//加工数据和模板
				$("#ulTwo").html(baidu.template(tmp,data));
				//懒加载
				$(".p_img img").lazyload();
			}
		});
	}
})

//反向代理3执行ajax
$.ajax({
	url: "/aj_get_fault_group",
	dataType: "json", //告诉后台数据类型
	type: "get", //指定请求方式 get post 
	//请求成功，执行该函数
	success: function(data){
		//请求文件
		$.ajax({
			url:"templet/infoThird.html",
			dataType:"text",
			success:function(tmp){
				// console.log(data);
				// console.log(tmp);
				//加工数据和模板
				$(".l1div").html(baidu.template(tmp,data));
			}
		});
	}
})
//反向代理4执行ajax
$.ajax({
	url: "/doGetPcFaultList",
	dataType: "json", //告诉后台数据类型
	type: "get", //指定请求方式 get post 
	//请求成功，执行该函数
	success: function(data){
		//请求文件
		$.ajax({
			url:"templet/infoFourth.html",
			dataType:"text",
			success:function(tmp){
				//console.log(data);
				//console.log(tmp);
				//加工数据和模板
				$(".l2div").html(baidu.template(tmp,data));
			}
		});
	}
})
//反向代理5执行ajax
$.ajax({
	url: "/huishou/dogetpinpailist",
	dataType: "json", //告诉后台数据类型
	type: "get", //指定请求方式 get post 
	//请求成功，执行该函数
	success: function(data){
		//请求文件
		$.ajax({
			url:"templet/infoFifth.html",
			dataType:"text",
			success:function(tmp){
				//console.log(data);
				//console.log(tmp);
				//加工数据和模板
				$(".l3div").html(baidu.template(tmp,data));
			}
		});
	}
})
//反向代理6执行ajax
$.ajax({
	url: "/youpin/dogetpinpailist",
	dataType: "json", //告诉后台数据类型
	type: "get", //指定请求方式 get post 
	//请求成功，执行该函数
	success: function(data){
		//请求文件
		$.ajax({
			url:"templet/infoSixth.html",
			dataType:"text",
			success:function(tmp){
				//console.log(data);
				//console.log(tmp);
				//加工数据和模板
				$(".l4div").html(baidu.template(tmp,data));
			}
		});
	}
})
//反向代理7执行ajax
$.ajax({
	url: "/getcitycode",
	dataType: "json", //告诉后台数据类型
	type: "get", //指定请求方式 get post 
	//请求成功，执行该函数
	success: function(data){
		//请求文件
		$.ajax({
			url:"templet/infoSeventh.html",
			dataType:"text",
			success:function(tmp){
				//console.log(data);
				//console.log(tmp);
				//加工数据和模板
				$(".pop_city").html(baidu.template(tmp,data));
			}
		});
	}
})

//城市切换
var pop_city = $(".pop_city");
$(".citychange").on("click",function(){
	//恢复默认排序
	$(".sort").find("li:first-child").addClass("li_first").siblings().removeClass("li_first");
	pop_city.css({
		display:"block",
		position:"absolute",
		top:"26px",
		left:"232.047px"
	})
	//关闭区县列表
	$(".sel-quxian").css("display","none");
	$(".close").on("click",function(){
		pop_city.css("display","none");
	});
	//事件委托
	$(".filter_bar").on("click","a",function(e){
		e.preventDefault();
		var text = $(this).text();
		switch(text){
			case "A":
				$(this).addClass("current").siblings().removeClass("current");
				$(".A").removeClass("look").siblings().addClass("look");
				break;
			case "B":
				$(this).addClass("current").siblings().removeClass("current");
				$(".B").removeClass("look").siblings().addClass("look");
				break;
			case "C":
				$(this).addClass("current").siblings().removeClass("current");
				$(".C").removeClass("look").siblings().addClass("look");
				break;
			case "D":
				$(this).addClass("current").siblings().removeClass("current");
				$(".D").removeClass("look").siblings().addClass("look");
				break;
			case "E":
				$(this).addClass("current").siblings().removeClass("current");
				$(".E").removeClass("look").siblings().addClass("look");
				break;
			case "F":
				$(this).addClass("current").siblings().removeClass("current");
				$(".F").removeClass("look").siblings().addClass("look");
				break;
			case "G":
				$(this).addClass("current").siblings().removeClass("current");
				$(".G").removeClass("look").siblings().addClass("look");
				break;
			case "H":
				$(this).addClass("current").siblings().removeClass("current");
				$(".H").removeClass("look").siblings().addClass("look");
				break;
			case "J":
				$(this).addClass("current").siblings().removeClass("current");
				$(".J").removeClass("look").siblings().addClass("look");
				break;
			case "K":
				$(this).addClass("current").siblings().removeClass("current");
				$(".K").removeClass("look").siblings().addClass("look");
				break;
			case "L":
				$(this).addClass("current").siblings().removeClass("current");
				$(".L").removeClass("look").siblings().addClass("look");
				break;
			case "M":
				$(this).addClass("current").siblings().removeClass("current");
				$(".M").removeClass("look").siblings().addClass("look");
				break;
			case "N":
				$(this).addClass("current").siblings().removeClass("current");
				$(".N").removeClass("look").siblings().addClass("look");
				break;
			case "P":
				$(this).addClass("current").siblings().removeClass("current");
				$(".P").removeClass("look").siblings().addClass("look");
				break;
			case "Q":
				$(this).addClass("current").siblings().removeClass("current");
				$(".Q").removeClass("look").siblings().addClass("look");
				break;
			case "R":
				$(this).addClass("current").siblings().removeClass("current");
				$(".R").removeClass("look").siblings().addClass("look");
				break;
			case "S":
				$(this).addClass("current").siblings().removeClass("current");
				$(".S").removeClass("look").siblings().addClass("look");
				break;
			case "T":
				$(this).addClass("current").siblings().removeClass("current");
				$(".T").removeClass("look").siblings().addClass("look");
				break;
			case "W":
				$(this).addClass("current").siblings().removeClass("current");
				$(".W").removeClass("look").siblings().addClass("look");
				break;
			case "X":
				$(this).addClass("current").siblings().removeClass("current");
				$(".X").removeClass("look").siblings().addClass("look");
				break;
			case "Y":
				$(this).addClass("current").siblings().removeClass("current");
				$(".Y").removeClass("look").siblings().addClass("look");
				break;
			case "Z":
				$(this).addClass("current").siblings().removeClass("current");
				$(".Z").removeClass("look").siblings().addClass("look");
				break;
			default:
				break;
		}
	});

	//切换刷新店铺热门
	$(".city_list li").eq(0).off("click","a").on("click","a",function(e){
		//阻止默认事件
		e.preventDefault();
		//关闭列表
		pop_city.css("display","none");
		//更新区域
		var chengshi = String($(this).text());
		$(".city").text(chengshi);
		$(".sel_txt").eq(0).text(chengshi);
		$(".city").attr("data-code",$(this).attr("value"));
		$(".sel_txt").eq(0).attr("data-code",$(this).attr("value"));
		$(".sel_txt").eq(1).text("选择区县");
		//清空序号
		var arrNum = $(".sel_txt").eq(1).attr("quxianCode","");
		//this赋值
		var _this = $(this);
		//执行ajax
		$.ajax({
			url:"/shop",
			dataType:"json",
			type:"get",
			data:{
				city_id:_this.attr("value")||"bei_jing",
				pn: 0,
				pagesize:5
			},
			success:function(data){
				//请求文件
				$.ajax({
					url:"templet/infoEighth.html",
					dataType:"text",
					success:function(tmp){
						//console.log(data);
						//console.log(tmp);
						//加工数据和模板
						//初始化分页
						pageUtil("page", 1, Math.ceil(data.page_count/5));
						$(".shopmain").html(baidu.template(tmp,data));
					}
				});
				//jsonp执行ajax
				var cod = _this.attr("value");
				$.ajax({
					url: "http://bang.360.cn/aj/get_area/?citycode=" + cod,
					dataType: "jsonp", //告诉后台数据类型
					type: "get", //指定请求方式 get post 
					//请求成功，执行该函数
					success: function(data){
						//请求文件
						$.ajax({
							url:"templet/infoNinth.html",
							dataType:"text",
							success:function(tmp){
								// console.log(data);
								//console.log(tmp);
								//加工数据和模板
								$(".sel-quxian").html(baidu.template(tmp,data));
							}
						});
					}
				})
			}
		});
	})

	//切换刷新店铺拼音
	$(".city_wrap").off("click","a").on("click","a",function(e){
		//阻止默认事件
		e.preventDefault();
		//关闭列表
		pop_city.css("display","none");
		//更新区域
		var chengshi = String($(this).text());
		$(".city").text(chengshi);
		$(".sel_txt").eq(0).text(chengshi);
		$(".city").attr("data-code",$(this).attr("value"));
		$(".sel_txt").eq(0).attr("data-code",$(this).attr("value"));
		$(".sel_txt").eq(1).text("选择区县");
		//清空序号
		var arrNum = $(".sel_txt").eq(1).attr("quxianCode","");
		//this赋值
		var _this = $(this);
		//执行ajax
		$.ajax({
			url:"/shop",
			dataType:"json",
			type:"get",
			data:{
				city_id:_this.attr("value")||"bei_jing",
				pn: 0,
				pagesize:5
			},
			success:function(data){
				//请求文件
				$.ajax({
					url:"templet/infoEighth.html",
					dataType:"text",
					success:function(tmp){
						//console.log(data);
						//console.log(tmp);
						//加工数据和模板
						//初始化分页
						pageUtil("page", 1, Math.ceil(data.page_count/5));
						$(".shopmain").html(baidu.template(tmp,data));
					}
				});
				//jsonp执行ajax
				var cod = _this.attr("value");
				$.ajax({
					url: "http://bang.360.cn/aj/get_area/?citycode=" + cod,
					dataType: "jsonp", //告诉后台数据类型
					type: "get", //指定请求方式 get post 
					//请求成功，执行该函数
					success: function(data){
						//请求文件
						$.ajax({
							url:"templet/infoNinth.html",
							dataType:"text",
							success:function(tmp){
						
								//console.log(tmp);
								//加工数据和模板
								$(".sel-quxian").html(baidu.template(tmp,data));
							}
						});
					}
				})
			}
		});
	})

});
$(".selcity").on("click",function(){
	//恢复默认排序
	$(".sort").find("li:first-child").addClass("li_first").siblings().removeClass("li_first");
	pop_city.css({
		display:"block",
		position:"absolute",
		top:"1488px",
		left:"191px"
	})
	//关闭区县列表
	$(".sel-quxian").css("display","none");
	$(".close").on("click",function(){
		pop_city.css("display","none");
	});
	//事件委托
	$(".filter_bar").on("click","a",function(e){
		e.preventDefault();
		var text = $(this).text();
		switch(text){
			case "A":
				$(this).addClass("current").siblings().removeClass("current");
				$(".A").removeClass("look").siblings().addClass("look");
				break;
			case "B":
				$(this).addClass("current").siblings().removeClass("current");
				$(".B").removeClass("look").siblings().addClass("look");
				break;
			case "C":
				$(this).addClass("current").siblings().removeClass("current");
				$(".C").removeClass("look").siblings().addClass("look");
				break;
			case "D":
				$(this).addClass("current").siblings().removeClass("current");
				$(".D").removeClass("look").siblings().addClass("look");
				break;
			case "E":
				$(this).addClass("current").siblings().removeClass("current");
				$(".E").removeClass("look").siblings().addClass("look");
				break;
			case "F":
				$(this).addClass("current").siblings().removeClass("current");
				$(".F").removeClass("look").siblings().addClass("look");
				break;
			case "G":
				$(this).addClass("current").siblings().removeClass("current");
				$(".G").removeClass("look").siblings().addClass("look");
				break;
			case "H":
				$(this).addClass("current").siblings().removeClass("current");
				$(".H").removeClass("look").siblings().addClass("look");
				break;
			case "J":
				$(this).addClass("current").siblings().removeClass("current");
				$(".J").removeClass("look").siblings().addClass("look");
				break;
			case "K":
				$(this).addClass("current").siblings().removeClass("current");
				$(".K").removeClass("look").siblings().addClass("look");
				break;
			case "L":
				$(this).addClass("current").siblings().removeClass("current");
				$(".L").removeClass("look").siblings().addClass("look");
				break;
			case "M":
				$(this).addClass("current").siblings().removeClass("current");
				$(".M").removeClass("look").siblings().addClass("look");
				break;
			case "N":
				$(this).addClass("current").siblings().removeClass("current");
				$(".N").removeClass("look").siblings().addClass("look");
				break;
			case "P":
				$(this).addClass("current").siblings().removeClass("current");
				$(".P").removeClass("look").siblings().addClass("look");
				break;
			case "Q":
				$(this).addClass("current").siblings().removeClass("current");
				$(".Q").removeClass("look").siblings().addClass("look");
				break;
			case "R":
				$(this).addClass("current").siblings().removeClass("current");
				$(".R").removeClass("look").siblings().addClass("look");
				break;
			case "S":
				$(this).addClass("current").siblings().removeClass("current");
				$(".S").removeClass("look").siblings().addClass("look");
				break;
			case "T":
				$(this).addClass("current").siblings().removeClass("current");
				$(".T").removeClass("look").siblings().addClass("look");
				break;
			case "W":
				$(this).addClass("current").siblings().removeClass("current");
				$(".W").removeClass("look").siblings().addClass("look");
				break;
			case "X":
				$(this).addClass("current").siblings().removeClass("current");
				$(".X").removeClass("look").siblings().addClass("look");
				break;
			case "Y":
				$(this).addClass("current").siblings().removeClass("current");
				$(".Y").removeClass("look").siblings().addClass("look");
				break;
			case "Z":
				$(this).addClass("current").siblings().removeClass("current");
				$(".Z").removeClass("look").siblings().addClass("look");
				break;
			default:
				break;
		}
	});

	//切换刷新店铺热门
	$(".city_list li").eq(0).off("click","a").on("click","a",function(e){
		//阻止默认事件
		e.preventDefault();
		//关闭列表
		pop_city.css("display","none");
		//更新区域
		var chengshi = String($(this).text());
		$(".city").text(chengshi);
		$(".sel_txt").eq(0).text(chengshi);
		$(".sel_txt").eq(0).attr("data-code",$(this).attr("value"));
		$(".sel_txt").eq(1).text("选择区县");
		//清空序号
		var arrNum = $(".sel_txt").eq(1).attr("quxianCode","");
		//this赋值
		var _this = $(this);
		//执行ajax
		$.ajax({
			url:"/shop",
			dataType:"json",
			type:"get",
			data:{
				city_id:_this.attr("value")||"bei_jing",
				pn: 0,
				pagesize:5
			},
			success:function(data){
				//请求文件
				$.ajax({
					url:"templet/infoEighth.html",
					dataType:"text",
					success:function(tmp){
						//console.log(data);
						//console.log(tmp);
						//加工数据和模板
						//初始化分页
						pageUtil("page", 1, Math.ceil(data.page_count/5));
						$(".shopmain").html(baidu.template(tmp,data));
					}
				});
				//jsonp执行ajax
				var cod = _this.attr("value");
				$.ajax({
					url: "http://bang.360.cn/aj/get_area/?citycode=" + cod,
					dataType: "jsonp", //告诉后台数据类型
					type: "get", //指定请求方式 get post 
					//请求成功，执行该函数
					success: function(data){
						//请求文件
						$.ajax({
							url:"templet/infoNinth.html",
							dataType:"text",
							success:function(tmp){
						
								//console.log(tmp);
								//加工数据和模板
								$(".sel-quxian").html(baidu.template(tmp,data));
							}
						});
					}
				})
			}
		});
	})

	//切换刷新店铺拼音
	$(".city_wrap").off("click","a").on("click","a",function(e){
		//阻止默认事件
		e.preventDefault();
		//关闭列表
		pop_city.css("display","none");
		//更新区域
		var chengshi = String($(this).text());
		$(".city").text(chengshi);
		$(".sel_txt").eq(0).text(chengshi);
		$(".sel_txt").eq(0).attr("data-code",$(this).attr("value"));
		$(".sel_txt").eq(1).text("选择区县");
		//清空序号
		var arrNum = $(".sel_txt").eq(1).attr("quxianCode","");
		//this赋值
		var _this = $(this);
		//执行ajax
		$.ajax({
			url:"/shop",
			dataType:"json",
			type:"get",
			data:{
				city_id:_this.attr("value")||"bei_jing",
				pn: 0,
				pagesize:5
			},
			success:function(data){
				//请求文件
				$.ajax({
					url:"templet/infoEighth.html",
					dataType:"text",
					success:function(tmp){
						//console.log(data);
						//console.log(tmp);
						//加工数据和模板
						//初始化分页
						pageUtil("page", 1, Math.ceil(data.page_count/5));
						$(".shopmain").html(baidu.template(tmp,data));
					}
				});
				//jsonp执行ajax
				var cod = _this.attr("value");
				$.ajax({
					url: "http://bang.360.cn/aj/get_area/?citycode=" + cod,
					dataType: "jsonp", //告诉后台数据类型
					type: "get", //指定请求方式 get post 
					//请求成功，执行该函数
					success: function(data){
						//请求文件
						$.ajax({
							url:"templet/infoNinth.html",
							dataType:"text",
							success:function(tmp){
								// console.log(data);
								//console.log(tmp);
								//加工数据和模板
								$(".sel-quxian").html(baidu.template(tmp,data));
							}
						});
					}
				})
			}
		});
	})
});


//区县选择
var quxian = $(".sel-quxian");
$(".selquxian").on("click",function(){
	//恢复默认排序
	$(".sort").find("li:first-child").addClass("li_first").siblings().removeClass("li_first");
	quxian.css({
		display:"block",
		position:"absolute",
		top:"1488px",
		left:"341px"
	})
	//关闭城市列表
	$(".pop_city").css("display","none");
	$(".close1").on("click",function(){
		quxian.css("display","none");
	});
	//事件委托
	$(".select-list").off("click","a").on("click","a",function(e){
		//阻止默认
		e.preventDefault();
		//关闭列表
		quxian.css("display","none");
		//区县号
		var arrNum = $(this).attr("code");
		//城市号
		var dataCod = $(".sel_txt").attr("data-code");
		//更新区县框内容
		var chengshi = String($(this).text());
		$(".sel_txt").eq(1).text(chengshi);
		$(".sel_txt").eq(1).attr("quxianCode",arrNum);
		//反向代理8执行ajax
		$.ajax({
			url:"/shop",
			dataType:"json",
			type:"get",
			data:{
				area_id:arrNum,
				city_id:dataCod,
				pn: 0,
				pagesize:5
			},
			success:function(data){
				//请求文件
				$.ajax({
					url:"templet/infoEighth.html",
					dataType:"text",
					success:function(tmp){
						//console.log(data);
						//console.log(tmp);
						//加工数据和模板
						//初始化分页
						pageUtil("page", 1, Math.ceil(data.page_count/5));
						$(".shopmain").html(baidu.template(tmp,data));
					}
				});
			}
		});
	})
});

//默认排名销量排名人气排名
$(".sort").on("click","li",function(e){
	//阻止默认事件
	e.preventDefault();
	//将拿到的data-type值赋给变量content
	var content = $(this).find("a").attr("data-type");
	switch(content){
		case "":
			//当前添加样式，其余移出样式
			$(this).addClass("li_first").siblings().removeClass("li_first");
			//城市号
			var dataCod = $(".sel_txt").eq(0).attr("data-code");
			//区县号
			var arrNum = $(".sel_txt").eq(1).attr("quxianCode");
			$.ajax({
				url:"/shop",
				dataType:"json",
				data:{
					area_id:arrNum,
					city_id:dataCod,
					pn: 0,
					pagesize:5
				},
				success:function(data){
					//请求文件
					$.ajax({
						url:"templet/infoEighth.html",
						dataType:"text",
						success:function(tmp){
							//初始化分页
							pageUtil("page", 1, Math.ceil(data.page_count/5));
							//加工数据和模板
							$(".shopmain").html(baidu.template(tmp,data));
						}
					});
				}
			});
			break;
		case "1":
			//当前添加样式，其余移出样式
			$(this).addClass("li_first").siblings().removeClass("li_first");
			//城市号
			var dataCod = $(".sel_txt").eq(0).attr("data-code");
			//区县号
			var arrNum = $(".sel_txt").eq(1).attr("quxianCode");
			$.ajax({
				url:"/shop",
				dataType:"json",
				data:{
					type_id:1,
					area_id:arrNum,
					city_id:dataCod,
					pn: 0,
					pagesize:5
				},
				success:function(data){
					//请求文件
					$.ajax({
						url:"templet/infoTenth.html",
						dataType:"text",
						success:function(tmp){
							//初始化分页
							pageUtil("page", 1, Math.ceil(data.page_count/5));
							//加工数据和模板
							$(".shopmain").html(baidu.template(tmp,data));
						}
					});
				}
			});
			break;
		case "3":
			//当前添加样式，其余移出样式
			$(this).addClass("li_first").siblings().removeClass("li_first");
			//城市号
			var dataCod = $(".sel_txt").eq(0).attr("data-code");
			//区县号
			var arrNum = $(".sel_txt").eq(1).attr("quxianCode");
			$.ajax({
				url:"/shop",
				dataType:"json",
				data:{
					type_id:3,
					area_id:arrNum,
					city_id:dataCod,
					pn: 0,
					pagesize:5
				},
				success:function(data){
					//请求文件
					$.ajax({
						url:"templet/infoEighth.html",
						dataType:"text",
						success:function(tmp){
							//初始化分页
							pageUtil("page", 1, Math.ceil(data.page_count/5));
							//加工数据和模板
							$(".shopmain").html(baidu.template(tmp,data));
						}
					});
				}
			});
			break;
		default:
			break;
	}
});
//分页
// @param pageId 分页栏ID
// @param currPage 当前页
// @param totalPage 总页数
// @param callback 
function pageUtil(pageId, currPage, totalPage ,callback){

	//初始化分页栏基本结构
	var str = '<a href="javascript:void(0)">首页</a>'
			+'<a href="javascript:void(0)">上一页</a>'
			+'<a href="javascript:void(0)">下一页</a>'
			+'<a href="javascript:void(0)">尾页</a>';
	//显示功能按钮
	var pageBox = $("#"+pageId);

	pageBox.html(str);

	//地图分页
	var footer = $("#footer_num");
	footer.html(str);

	//构建页码结构 
	var firstNum = currPage > 5? currPage-4: 1;

	//按书序生成页码
	var numStr = "";
	for(var n = 0; n< 10 && firstNum<=totalPage; n++){
		if(firstNum == currPage){
			numStr += '<a href="javascript:void(0)" class="red" >'+ firstNum +'</a>';
		}else{
			numStr += '<a href="javascript:void(0)">'+ firstNum +'</a>';
		}
		firstNum++;
	}

	//显示页码
	pageBox.find("a:eq(1)").after(numStr);
	pageBox.find("a:eq(0)").css("display","none");
	pageBox.find("a:eq(1)").css("display","none");
	//显示地图分页
	footer.find("a:eq(1)").after(numStr);

	//处理事件
	pageBox.off("click", "a").on("click", "a",  function(){
		var btnValue = $(this).text();
		//根据不同按钮处理事件
		switch(btnValue){
			case  "首页":
				pageUtil(pageId, 1, totalPage,showList);
				//隐藏首页和上一页
				$("#page a").eq(0).css("display","none");
				$("#page a").eq(1).css("display","none");
				break;
			case  "上一页":
				pageUtil(pageId, currPage - 1, totalPage,showList);
				//当上一页切换到1时隐藏首页和上一页
				if((currPage-1)==1){
					$("#page a").eq(0).css("display","none");
					$("#page a").eq(1).css("display","none");
				}else{
					//显示首页和上一页
					pageBox.find("a:eq(0)").css("display","inline-block");
					pageBox.find("a:eq(1)").css("display","inline-block");
				}
				break;
			case  "下一页":
				pageUtil(pageId, currPage + 1, totalPage,showList);
				//当下一页切换到最后一页时隐藏下一页和尾页
				if((currPage+1)==$("#page a:last-child").prev().prev().text()){
					$("#page a:last-child").css("display","none");
					$("#page a:last-child").prev().css("display","none");
				}
				//显示首页和上一页
				pageBox.find("a:eq(0)").css("display","inline-block");
				pageBox.find("a:eq(1)").css("display","inline-block");
				break;
			case  "尾页":
				pageUtil(pageId, totalPage, totalPage,showList);
				$("#page a:last-child").css("display","none");
				$("#page a:last-child").prev().css("display","none");
				//隐藏下一页和尾页
				pageBox.find("a:eq(0)").css("display","inline-block");
				pageBox.find("a:eq(1)").css("display","inline-block");
				break;
			default:
				pageUtil(pageId, parseInt(btnValue), totalPage,showList);
				//当点击第一页时隐藏首页和上一页
				if(btnValue == 1){
					$("#page a").eq(0).css("display","none");
					$("#page a").eq(1).css("display","none");
				}else if(btnValue == $("#page a:last-child").prev().prev().text()){
					//当点击最后一页时隐藏尾页和下一页并显示首页和上一页
					$("#page a:last-child").css("display","none");
					$("#page a:last-child").prev().css("display","none");
					pageBox.find("a:eq(0)").css("display","inline-block");
					pageBox.find("a:eq(1)").css("display","inline-block");
				}else{
					//显示首页和上一页
					pageBox.find("a:eq(0)").css("display","inline-block");
					pageBox.find("a:eq(1)").css("display","inline-block");
				}
				break;
		}
	});

	//执行回调
	callback && callback(currPage);
}



//请求数据初始化列表
$.ajax({
	url:"/shop",
	dataType:"json",
	data:{
		city_id:"bei_jing",
		pn: 0,
		pagesize:5
	},
	success:function(data){
		//请求文件
		$.ajax({
			url:"templet/infoEighth.html",
			dataType:"text",
			success:function(tmp){
				//初始化分页
				pageUtil("page", 1, Math.ceil(data.page_count/5));
				//加工数据和模板
				$(".shopmain").html(baidu.template(tmp,data));
			}
		});
	}
});


function showList(currPage){
	//将拿到的data-type值赋给变量content
	var content = $(".li_first").find("a").attr("data-type");
	switch(content){
		case "":
			//样式操作
			$(this).addClass("li_first").siblings().removeClass("li_first");
			//城市号
			var dataCod = $(".sel_txt").eq(0).attr("data-code");
			//区县号
			var arrNum = $(".sel_txt").eq(1).attr("quxianCode");
			$.ajax({
				url:"/shop",
				dataType:"json",
				data:{
					area_id:arrNum,
					city_id:dataCod,
					pn: currPage-1,
					pagesize:5
				},
				success:function(data){
					//请求文件
					$.ajax({
						url:"templet/infoEighth.html",
						dataType:"text",
						success:function(tmp){
							//加工数据和模板
							$(".shopmain").html(baidu.template(tmp,data));
						}
					});
				}
			});
			break;
		case "1":
			//样式操作
			$(this).addClass("li_first").siblings().removeClass("li_first");
			//城市号
			var dataCod = $(".sel_txt").eq(0).attr("data-code");
			//区县号
			var arrNum = $(".sel_txt").eq(1).attr("quxianCode");
			$.ajax({
				url:"/shop",
				dataType:"json",
				data:{
					type_id:1,
					area_id:arrNum,
					city_id:dataCod,
					pn: currPage-1,
					pagesize:5
				},
				success:function(data){
					//请求文件
					$.ajax({
						url:"templet/infoTenth.html",
						dataType:"text",
						success:function(tmp){
							//加工数据和模板
							$(".shopmain").html(baidu.template(tmp,data));
						}
					});
				}
			});
			break;
		case "3":
			//样式操作
			$(this).addClass("li_first").siblings().removeClass("li_first");
			//城市号
			var dataCod = $(".sel_txt").eq(0).attr("data-code");
			//区县号
			var arrNum = $(".sel_txt").eq(1).attr("quxianCode");
			$.ajax({
				url:"/shop",
				dataType:"json",
				data:{
					type_id:3,
					area_id:arrNum,
					city_id:dataCod,
					pn: currPage-1,
					pagesize:5
				},
				success:function(data){
					//请求文件
					$.ajax({
						url:"templet/infoEighth.html",
						dataType:"text",
						success:function(tmp){
							//加工数据和模板
							$(".shopmain").html(baidu.template(tmp,data));
						}
					});
				}
			});
			break;
		default:
			break;
	}
}

//懒加载
$(".i img").lazyload();


//创建地图实例
var map = new AMap.Map("maps",{
	//zoom 缩放级别
	zoom:11,
	center:[116.397428,39.90923]
});
//地图语言设置中文:cn或者zh_cn  英文:en 中英文:zh_en 
map.setLang("zh_cn");

//创建组件
var toolBar = new AMap.ToolBar(),
	scale = new AMap.Scale(),
	overView = new AMap.OverView();
//地图关联组件
map.addControl(toolBar);
map.addControl(scale);
map.addControl(overView);

map.on("click",function(e){
	this.setCenter([e.lnglat.lng,e.lnglat.lat]);
})

//创建自动提示框
// var auto = new AMap.Autocomplete({
// 	input:"auto"
// });
// //选中事件
// AMap.event.addListener(auto,"select",function(e){
// 	map.setZoomAndCenter(15,e.poi.location);
// });