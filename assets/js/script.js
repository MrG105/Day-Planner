// TODO:
// function to check current hour
// add past/present/future classes to hours based on current time
// local storage setting for each hour

var currentDay = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(currentDay);

$('#workhours').children().each(function(index, element) {
    var eachHour = parseInt($(this).data("hour"));
    timeColor(eachHour, $(this))
})

function timeColor(momentHour, timeBlock) {
    var currentHour = moment().hour();
    if (momentHour === currentHour) {
        timeBlock.addClass('present');
        timeBlock.removeClass('past future');
    } else if (momentHour < currentHour) {
        timeBlock.addClass('past');
        timeBlock.removeClass('present future')
    } else {
        timeBlock.addClass('future');
        timeBlock.removeClass('present past')
    }
}

$('.saveBtn').click(function () { 
    var text = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, text);
})

function init() {
    $('#workhours').children().each(function(index, element) {
        var localHour = $(this).attr('id');
        var storedAppt = localStorage.getItem(localHour);
        if (storedAppt !== null) {
            $(this).children('.description').val(storedAppt)
        } 
    })
}

init();