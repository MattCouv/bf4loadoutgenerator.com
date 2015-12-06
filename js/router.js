$(document).ready(function(){
	
	$("#soldierBtn").click(function(){
		$("#about").css('display','none');
		$("#loadlog").css('display','block');
		$("#donation").css('display','none');
	});
	$("#aboutBtn").click(function(){
		$("#loadlog").css('display','none');
		$("#about").css('display','block');
		$("#donation").css('display','none');
	});
	$("#donateBtn").click(function(){
		$("#loadlog").css('display','none');
		$("#about").css('display','none');
		$("#donation").css('display','block');
	});
});