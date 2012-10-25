$(function() 
{
	$('h1').hide().fadeIn(200);
	$('.adder').hide().fadeIn(200);
	$('.adder').click( function(){
		addRow();
	});
	addRow();
	updateRows();
});

//globals

function toggleTimer(index)
{
	stopAllTimers();
	startTimer(index);
}

function stopAllTimers()
{

}

function startTimer(index)
{

}

//add a timer row
function addRow()
{
	$('#workarea').append(
		'<div class="row"><p class="time">00:00<a href="#">' +
		'<span class="stretchout"></span></a></p>' +
		'<input type="text" class="label" placeholder="..." />' +
		'<a href="#" class="del"><img src="/images/del.png"></a></div>'
	);
	
	//set up the element's controls
	var element = $('.row:last').hide().fadeIn(200, function(){
		console.log('' + $('.row').length + ' rows');
		updateRows();
	});
	element.children('.del').on("click", function(){
		removeRow(element);
	});
	element.children('p.time').toggle(
		function(){
			console.log("timer on");
		},
		function(){
			console.log("timer off");
		}
	);
}

//delete a timer row
function removeRow(element)
{
	$(element).fadeOut(200, function(){
		$(this).remove();
		console.log('' + $('.row').length + ' rows');
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

