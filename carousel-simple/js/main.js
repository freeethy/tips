$(function(){
	'use strict';
	var imgUl = $('.carousel-img');
	var numLis = $('.carousel-num li');
	var len = numLis.length;
	var index = 0;
	var aTime;

	numLis.mouseover(function(){
		index = numLis.index(this);
		showImg(index);
	});

	imgUl.hover(function(){
		clearInterval(aTime);
	},function(){
		aTime = setInterval(function(){
			showImg(index);
			index++;
			if(index == len){
				index = 0;
			}
		},3000);
	});

	function showImg(index){
		var cWidth = $('.carousel-img li').width();
		console.log(cWidth);
		imgUl.stop(true,false).animate({
			"left":-cWidth*index + "px"
		},1000);
		numLis.removeClass("on").eq(index).addClass("on");
	}
});