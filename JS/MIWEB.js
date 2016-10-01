
$(document).ready(function() {
$(".CATA").click(function(){
if($('#BT01').css('visibility')== 'hidden'){
	$('#BT01').css('visibility','visible');
  $(".FOLLETO, .CONTEST, .EXTRAS, .ILU, .POST, .NEWSLETTERS, .CONTACTO").css('visibility','hidden');
	}
else{
$('#BT01').css('visibility','hidden');
$(".FOLLETO, .CONTEST, .EXTRAS, .ILU, .POST, .NEWSLETTERS, .CONTACTO").css('visibility','visible');
}
    if($(this).hasClass('active')){
        $(this).removeClass('active')
 } else {
        $(this).addClass('active'); 
    }
});


$(".FOLLETO").click(function(){
if($('#BT02').css('visibility')== 'hidden'){
	$('#BT02').css('visibility','visible');
  $(".CATA, .CONTEST, .EXTRAS, .ILU, .POST, .NEWSLETTERS, .CONTACTO").css('visibility','hidden');
	}
else{
$('#BT02').css('visibility','hidden');
$(".CATA, .CONTEST, .EXTRAS, .ILU, .POST, .NEWSLETTERS, .CONTACTO").css('visibility','visible');

}
    if($(this).hasClass('active')){
        $(this).removeClass('active')
 } else {
        $(this).addClass('active'); 
    }
});

$(".CONTEST").click(function(){
if($('#BT03').css('visibility')== 'hidden'){
	$('#BT03').css('visibility','visible');
  $(".CATA, .FOLLETO, .EXTRAS, .ILU, .POST, .NEWSLETTERS, .CONTACTO").css('visibility','hidden');
	}
else{
$('#BT03').css('visibility','hidden');
$(".CATA, .FOLLETO, .EXTRAS, .ILU, .POST, .NEWSLETTERS, .CONTACTO").css('visibility','visible');

}
    if($(this).hasClass('active')){
        $(this).removeClass('active')
 } else {
        $(this).addClass('active'); 
    }
});

$(".ILU").click(function(){
if($('#BT04').css('visibility')== 'hidden'){
	$('#BT04').css('visibility','visible');
  $(".CATA, .CONTEST, .EXTRAS, .FOLLETO, .POST, .NEWSLETTERS, .CONTACTO").css('visibility','hidden');
	}
else{
$('#BT04').css('visibility','hidden');
$(".CATA, .CONTEST, .EXTRAS, .FOLLETO, .POST, .NEWSLETTERS, .CONTACTO").css('visibility','visible');

}
    if($(this).hasClass('active')){
        $(this).removeClass('active')
 } else {
        $(this).addClass('active'); 
    }
});

$(".POST").click(function(){
if($('#BT05').css('visibility')== 'hidden'){
	$('#BT05').css('visibility','visible');
  $(".CATA, .CONTEST, .EXTRAS, .ILU, .FOLLETO, .NEWSLETTERS, .CONTACTO").css('visibility','hidden');
	}
else{
$('#BT05').css('visibility','hidden');
$(".CATA, .CONTEST, .EXTRAS, .ILU, .FOLLETO, .NEWSLETTERS, .CONTACTO").css('visibility','visible');

}
    if($(this).hasClass('active')){
        $(this).removeClass('active')
 } else {
        $(this).addClass('active'); 
    }
});

$(".NEWSLETTERS").click(function(){
if($('#BT06').css('visibility')== 'hidden'){
	$('#BT06').css('visibility','visible');
	}
else{
$('#BT06').css('visibility','hidden');

}

});

$(".EXTRAS").click(function(){
if($('#BT08').css('visibility')== 'hidden'){
	$('#BT08').css('visibility','visible');
	}
else{
$('#BT08').css('visibility','hidden');

}

});



$(".CONTACTO").click(function(){
if($('#BT09').css('visibility')== 'hidden'){
	$('#BT09').css('visibility','visible');
	}
else{
$('#BT09').css('visibility','hidden');

}

});

});



