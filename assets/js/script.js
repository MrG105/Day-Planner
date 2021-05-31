// TODO:
// function to check current hour
// add past/present/future classes to hours based on current time
// local storage setting for each hour

var currentDay = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(currentDay);