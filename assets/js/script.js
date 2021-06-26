// var agendaDesc = {};


// DISPLAY CURRENT DATE & TIME AT TOP OF PAGE
var currentDate = moment().format("MMMM Do YYYY");
var currentHour = moment().hour();

$("#currentDay").append("Today: " + currentDate);



// CREATE CONTAINER ELEMENTS

var busStart = 9;
var busEnd = 18;

for (var m = busStart; m < busEnd; m++) {
        agendaDisplay(m);
}


function agendaDisplay(now) {

    var agendaDiv = $("<div>").addClass("time-block row");
    // agendaDiv.attr("data-id", "`id${m}");
    $(agendaDiv).attr("data-id", now);
    $(agendaDiv).appendTo(".container");

    var hourSpace = $("<div>").addClass("hour col-1");
    $(hourSpace).appendTo(agendaDiv).text(now + "00");

    var descField = $("<textarea>").addClass("desc col-10");
    $(descField).appendTo(agendaDiv);

    var saveButton = $("<button>").addClass("saveBtn col-1");
    $(saveButton).appendTo(agendaDiv).html("<i class='fas fa-save'></i>");

    if (now === currentHour) {
        $(descField).addClass("present");
    } else if (currentHour >= now) {
        $(descField).addClass("past");
    } else {
        $(descField).addClass("future");
    } 
}
  
agendaDisplay();


//LOCAL STORAGE CODE

// LOAD LOCAL STORAGE

// var loadAgendaDescs = function() {
//     tasks = JSON.parse(localStorage.getItem("agendaDesc"));
// }

//STORE ON SAVE BUTTON CLICK
  




