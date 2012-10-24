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
var timers = new Array();

//start or stop a row
function toggleTimer(index)
{
	//timers[index].stopwatch('toggle');
}

//add a timer row
function addRow()
{
	//rows.push('stuff');
	//timers.push($('').stopwatch('start'));
	$('#workarea').append(
		'<div class="row"><p class="time">00:00<a href="#"><span class="stretchout"></span></a></p><a href="#" class="del"><img src="/images/del.png"></a></div>'
	);
	$('.row:last').hide().fadeIn(200);
	updateRows();
}

//delete a timer row
function removeRow(element)
{
	$(element).fadeOut(200, function(){
		$(this).remove();
	});
	updateRows();
}

//configure each row's button's
function updateRows()
{
	$('.del').on("click", function(){
		removeRow($(this).parent());
	});
	
	$('p.time').each( function(index, element) {
		$(this).on("click", function(){
			toggleTimer(index);
		});
		// $(this).on('tick.stopwatch', function(e, elapsed){
			// $(this).text(timers[index].getTime());
		// });
	});
	
}