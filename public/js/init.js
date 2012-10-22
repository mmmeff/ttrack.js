$(function() 
{
	$('h1').hide().fadeIn(1500);
	updateRows();
});

//globals
var rows = new Array();

//start or stop a row
function toggle(index)
{
	alert("clicked" + index);
}

//add a timer row
function addRow()
{
	rows.push(0);
}

//delete a timer row
function removeRow(index)
{
	$('.row').each( function(index) {
		$(this).fadeOut(1000).remove();
	});
}


//Set each row's button's
function updateRows()
{
	$('.row').each( function(index, element){
		$('a.del').click( function() 
		{
			alert('trying');
			removeRow(index);
		});
		
		$('a.del'.hover( function()
		{
			$(this).remove();
		}
		
		$('p.time').click( function()
		{
			toggle(index);
		});
	});