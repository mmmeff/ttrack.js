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
	$('#footer').toggle(
		function(){
			$('.cat').removeClass('hidden')
			$('.cat').wiggle();
		},function(){
			$('.cat').addClass('hidden')
			$('.cat').wiggle('stop');
		}	
	);
});

var times = new Array();
var timers = new Array();
var locks = new Array();

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
			'<a href="#" class="lock"><img src="/images/lock.png"></a>' + 
		'</div>'
	);
	
	//set up the element's controls
	var element = $('.row:last').hide().fadeIn(500, function(){
		updateRows();
	});
	var i = times.length-1;
	
	element.children('a.del').on("click", function(){
		if (locks[i] == false || locks[i] == null)
		{
			removeRow(element);
		}
	});
	
	element.children('a.lock').toggle(
		function(){
			locks[i] = true;
			element.children('input').attr("disabled", "disabled");
			element.animate({ backgroundColor:"#000"},500);
		},
		function(){
			locks[i] = false;
			element.children('input').removeAttr("disabled");
			element.animate({ backgroundColor:"#FFF"},500);
		}
	);
	
	element.children('p.time').toggle(
		function(){	
			if (locks[i] == false || locks[i] == null)
			{
				timers[i] = setInterval(function(){
					times[i] = times[i]+1;
					element.children('p.time').text(jintervals(times[i], "{MM}:{ss}"));
					element.children('p.time').append('<a href="#"><span class="stretchout"></span></a>');
				},1000);
				
				element.children('p.time').animate({ backgroundColor:"Lime", color:"Black"},500);
			} else {
				element.children('a.lock').wiggle().delay(1000).stop();
			}
		},
		function(){
			if (locks[i] == false || locks[i] == null)
			{
				clearInterval(timers[i]);
				element.children('p.time').animate({ backgroundColor:"Black",color:"Lime"},500);
			} else {
				element.children('a.lock').wiggle();
			}
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
	locks[i] = null;
	
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
		$('.adder').animate({width:"75px",height:"75px", fontsize:"40px"},200).addClass('solo');
	} else
	{
		$('.adder').animate({width:"100px",height:"20px"},200).removeClass('solo');
	}
}

