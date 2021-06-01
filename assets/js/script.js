// Sets Current Day
var currentDay = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(currentDay);

// Assigns each row a data-index and runs the timeColor function
$('#workhours').children().each(function(index, element) {
    var eachHour = parseInt($(this).data("hour"));
    timeColor(eachHour, $(this))
})

// timeColor function checks if the hour is past/present/future and adds the corresponding class
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

// Eventhandler for the save buttons to save to local storage
$('.saveBtn').click(function () { 
    var text = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, text);
})

// init function to check local storage and populate text boxes with saved items
function init() {
    $('#workhours').children().each(function(index, element) {
        var localHour = $(this).attr('id');
        var storedAppt = localStorage.getItem(localHour);
        if (storedAppt !== null) {
            $(this).children('.description').val(storedAppt)
        } 
    })
}

// reset button to clear local storage and blank out description fields
$('#resetbtn').click(function () {
    localStorage.clear();
    $('.description').val("");
})

// runs init function on page load
init();