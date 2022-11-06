// todayDate uses moment, a function that shows the current date and gives it a format
var todayDate = moment().format('dddd, MMM Do YYYY');
// this is supposed to display the todayDate var on the page
$("#currentDay").html(todayDate);

// If using jQuery, they must have a doc ready event to stop any code from running before it is finished loading
$(document).ready(function () {
    // This is an event listener that is to save the note when clicking the save button
    $(".saveBtn").on("click", function () {
        // Use nearby values for the description in Jquery, calling the description and id attributes
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Saves notes in local storage, using the above vars as the values
        localStorage.setItem(time, text);
    })
    // a funtion to loop through the time blocks to change to css according the to the current time
    function timeTracker() {
        // current number of hours
        var timeNow = moment().hour();

        // loop for time blocks, loops through each time block or hour
        $(".time-block").each(function () {
            // parseInt turns a string into an integer for the below if else statements
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            //  these are the loops for which of the css rules are to be applied
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            
            }
        })
    }

    // Pulls note from local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));

    timeTracker();

})