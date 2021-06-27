var agendaDesc = {};


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
    $(hourSpace).attr("data-id", now);
    $(hourSpace).appendTo(agendaDiv).text(now + "00");

    var descField = $("<textarea>").addClass("desc col-10");
    $(descField).attr("data-id", now);
    $(descField).appendTo(agendaDiv);

    var saveButton = $("<button>").addClass("saveBtn col-1");
    $(saveButton).attr("data-id", now);
    $(saveButton).appendTo(agendaDiv).html("<i class='fas fa-save'></i>");

    if (now === currentHour) {
        $(descField).addClass("present");
    } else if (currentHour >= now) {
        $(descField).addClass("past");
    } else {
        $(descField).addClass("future");
    } 

    loadExistingAgenda();


}
  
agendaDisplay();


//LOCAL STORAGE CODE



// $("button").click(e => console.log($(e.currentTarget).attr("data-id")));
// var agendaDescHandler = function(id) {
//     var agendaDescInput = $("textarea").val();
//     agendaDesc = {
//         agendaId: id,
//         desc: agendaDescInput
//     }
//     saveAgendaItem(agendaDesc);
// }

$("button").click(function () {
    // console.log($(this).attr("data-id"));
    var id = $(this).attr("data-id");
    var agendaDescInput = $("textarea").val();

    // var desc = $("textarea").attr("data-id", id).val();
    // console.log(id);
    // console.log(desc);
    // var desc = $(this).attr("data-id") NEED TEXTAREA??

        if (id === $("textarea").attr("data-id")) {
            agendaDesc = {
                agendaId: id,
                desc: agendaDescInput
            }        
        } else {
            agendaDesc = {
                agendaId: id,
                desc: ""
            }
        
        }
    saveAgendaItem(agendaDesc);
});

function saveAgendaItem(agendaDesc) {
    localStorage.setItem("agendaItems", JSON.stringify(agendaDesc));
  }

function loadExistingAgenda() {
    agendaDescInput = JSON.parse(localStorage.getItem("agendaItems"));

    if (!agendaDesc) {
        return false;   
    }    
  }




// LOCAL STORAGE TEST ZONE - GET ONE TO WORK
// var loadAgendaDescs = function() {
//     console.log(localStorage.getItem("description"));
// }
// $("button").click(function() {
//     localStorage.setItem("description", "Hi");
//     loadAgendaDescs();
// });