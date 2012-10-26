$(function() 
{
	$('h1').hide().fadeIn(200);
	$('.adder').hide().fadeIn(200, function(){
		addRow();
		updateRows();
	});
	$('.adder').click( function(){
		addRow();
	});
	//addRow();
	//updateRows();
});

var times = new Array();
var timers = new Array();

//add a timer row
function addRow()
{

	times.push(0);
	$('#workarea').append(
		'<div class="row">' + 
			'<p class="time">00:00<a href="#">' +
			'<span class="stretchout"></span></a></p>' +
			'<input type="text" class="label" placeholder="..." />' +
			'<a href="#" class="del"><img src="/images/del.png"></a>' + 
		'</div>'
	);
	
	//set up the element's controls
	var element = $('.row:last').hide().fadeIn(500, function(){
		updateRows();
	});
	var i = times.length-1;
	
	element.children('.del').on("click", function(){
		removeRow(element);
	});
	
	element.children('p.time').toggle(
		function(){	
			timers[i] = setInterval(function(){
				times[i] = times[i]+1;
				console.log("update: [" + times + "]");
				element.children('p.time').text(jintervals(times[i], "{MM}:{ss}"));
				element.children('p.time').append('<a href="#"><span class="stretchout"></span></a>');
			},1000);
		},
		function(){
			clearInterval(timers[i]);
		}
	);
}

//delete a timer row
function removeRow(element)
{
	var i = $('.row').index(element);
	
	clearInterval(timers[i]);
	timers[i] = null;
	times[i] = null;
	//times.splice(i, 1);
	//timers.splice(i,1);
	
	$(element).fadeOut(200, function(){
		$(this).remove();
		updateRows();
	});
}

//configure each row's button's
function updateRows()
{
	if ($('.row').length < 1)
	{
		$('.adder').animate({width:"75px",height:"75px", fontsize:"40px"},200).addClass('solo');;
	} else
	{
		$('.adder').animate({width:"100px",height:"20px"},200).removeClass('solo');
	}
}

