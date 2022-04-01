// Current date to be displayed
var today = moment();
$('#currentDay').text(today.format('dddd, MMM Do, YYYY'));

// current time to be displayed
var currentTime = moment();
$("#currentTime").text(currentTime.format('hh:mm a'));

// retrieving the values from local storage to put onto the page
$('#9 .task').val(localStorage.getItem('9'));
$('#10 .task').val(localStorage.getItem('10'));
$('#11 .task').val(localStorage.getItem('11'));
$('#12 .task').val(localStorage.getItem('12'));
$('#13 .task').val(localStorage.getItem('13'));
$('#14 .task').val(localStorage.getItem('14'));
$('#15 .task').val(localStorage.getItem('15'));
$('#16 .task').val(localStorage.getItem('16'));
$('#17 .task').val(localStorage.getItem('17'));


// function to add task to local storage based on the time
var saveButtonEl = $('.save-button');

saveButtonEl.on('click', function(event) {
    event.preventDefault();
    var time = $(this).parent().attr('id');
    var task = $(this).siblings('.task').val();
    console.log(time);
    console.log(task);
    localStorage.setItem(time, task);
})

// function to color the timeblocks to show future, present, or past
function colorTimeBlocks (event) {
    event.preventDefault();

    // making the current time into 24 hr format so that it's easier to compare
    var currentTime24 = moment().format('HH');

    // grabbing all the IDs into an array 
    // is there an easier way to do this? I tried to do what I did for the function above...but I wouldn't do it TT_TT
    var timeBlock = document.getElementById('#9, #10, #11, #12, #13, #14, #15, #16, #17');
    console.log(timeblock);


    if (currentTime24 == timeBlock) {
        $(this).addClass('present');
    } else if (currentTime24 < timeBlock) {
        // $(this).removeClass('present');
        $(this).addClass('future');
    } else if (currentTime24 > timeBlock) {
        // $(this).removeClass('future');
        $(this).addClass('past');
    }
}
