
// 点赞模块
// var allheight = document.body.scrollHeight+"px";//屏幕高度
function  dianzan(){
		var ozan =$(".pdivzan");	

	for(var i=0; i< ozan.length; i++){					
					ozan[i].onOff = false;			
	
					ozan[i].onclick = function(){	
									
					var oznum = $(this).find("em");
					var oem = parseInt(oznum.html());//当前赞数量					
						if (this.onOff) {//如果已经赞了,
							$(this).removeClass('pdivzaned');						
							oem=oem-1;													
							$("#div2").fadeTo("slow",1);
						   var timer1=setInterval($("#div2").fadeTo("slow",0),2000);	
						   this.onOff= false;
						}else{							
							$(this).addClass('pdivzaned');						
							oem=oem+1;						
							$("#div").fadeTo("slow",1);
						   var timer2=setInterval($("#div").fadeTo("slow",0),2000);		
						  this.onOff= true;				
						}
														
					clearInterval(timer1);
					clearInterval(timer2);
					oznum.html(oem);
				}
				}			
}
dianzan();

// 分享
var allheight = document.body.scrollHeight+"px";//获取屏幕高度

	$(".look-share").click(function(){
			$(".zhezhaoc").css("display","flex");
			$(".zhezhaoc").css("height",allheight);
			$(".zhezhao").css("display","flex");
		});
// 遮罩层消失
	$(".zhezhao").click(function(){
		$(".zhezhaoc").css("display","none");
		$(".zhezhao").css("display","none");
		});
// 输入密码看视频
function mimawatch(){
	var btn1 = $('.sure');
	var btn2 = $('.nosure');
	var ovide =$(".videotitle");
	for (var i = 0; i < ovide.length; i++) {
		ovide[i].onclick=function(){
			$(".zhezhaoc2").css("display","flex");
			$(".zhezhaoc2").css("height",allheight);
			$(".mimawatch").css("display","flex");
		};
	}
	
	
	for (var i = 0; i < btn1.length; i++) {
		btn1[i].onclick=function(){
		$(".zhezhaoc2").css("display","none");
		$(".mimawatch").css("display","none");
		}
	}
	for (var i = 0; i < btn2.length; i++) {
		btn2[i].onclick=function(){
		$(".zhezhaoc2").css("display","none");
		$(".mimawatch").css("display","none");
		}
	}

}
mimawatch();


// 砍价
function kanj(){
	var btn1 = $('.share-btn1');
	var ovide =$(".surebtnk");
	for (var i = 0; i < btn1.length; i++) {
		btn1[i].onclick=function(){
			$(".zhezhaoc3").css("display","flex");
			$(".zhezhaoc3").css("height",allheight);
			$(".kanj").css("display","flex");
		};
	}
	
	
	for (var i = 0; i < ovide.length; i++) {
		ovide[i].onclick=function(){
		$(".zhezhaoc3").css("display","none");
		$(".kanj").css("display","none");
		}
	}

}
kanj();


