// DISPLAY CURRENT DATE & TIME AT TOP OF PAGE
var currentDateTime = moment().format("MMMM Do YYYY, h:mm:ss a");
var currentHour = moment().hour();
var currentDay = moment().day();
    // console.log(currentDateTime);
        console.log(currentHour);
        console.log(currentDay);



$("#currentDay").append("Today: " + currentDateTime);



// CREATE CONTAINER ELEMENTS

var timeBlockDiv = $(".container").append("<div id='time-block' class='time-block'></div>");
var hourDiv = $("#time-block").append("<div id='hour' class='hour'></div>");
var descDiv = $("#time-block").append("<div id='description' class='description'></div>");
var saveBtnDiv = $("#time-block").append("<button type='submit' id='saveBtn' class='saveBtn'><i class='fas fa-save'></i></button>");
console.log(document);









// SNIPPETS YOU MAY NEED

// 1 - CLICK IN ELEMENT TO CHANGE TEXT
// $(".list-group").on("click", "p", function() {
//     var text = $(this)
//       .text()
//       .trim();
  //     console.log("<p> was clicked");
//     console.log(this);
//   });

  