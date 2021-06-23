// DISPLAY CURRENT DATE & TIME AT TOP OF PAGE
var currentDateTime = moment().format("MMMM Do YYYY, h:mm:ss a");
// var currentHour = moment().hour();
var currentHour = 10;
var currentDay = moment().day();
    // console.log(currentDateTime);
        console.log(currentHour);
        console.log(currentDay);


$("#currentDay").append("Today: " + currentDateTime);



// CREATE CONTAINER ELEMENTS

var busStart = 9;
var busEnd = 18;

for (var m = busStart; m < busEnd; m++) {
    var timeBlock = $(".container").append("<div id='time-block' class='time-block row'></div>").html[m];
    var hourSpace = $("#time-block").append("<div id='hour' class='hour col-1'><p></p></div>");
    var descField = $("#time-block").append("<textarea id='description' class='description col-10'></textarea>");
    var saveButton = $("#time-block").append("<button type='button' id='saveBtn' class='saveBtn col-1'><i class='fas fa-save'></i></button>");    
    console.log(m);
}

// if (m === currentHour) {
//     $("textarea").addClass("present");
// } else if (currentHour >= m) {
//     $("textarea").addClass("past");
// } else {
//     $("textarea").addClass("future");
// } 

  


