// CREATE AGENDA ITEMS OBJECT
var agendaItemsObj = [];

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

// DISPLAY AND COLOR CODE THE AGENDA
function agendaDisplay(now) {

    var agendaDiv = $("<div>").addClass("time-block row");
    $(agendaDiv).attr("data-id", now);
    $(agendaDiv).appendTo(".container");

    var hourSpace = $("<div>").addClass("hour col-1");
    $(hourSpace).appendTo(agendaDiv).text(now + "00");

    var descField = $("<textarea>").addClass("desc col-10");
    $(descField).attr("data-id", now);
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
    // Pull in existing agenda items
    // loadExistingAgenda();
}

// LOAD THE AGENDA - FOR SOME REASON THIS GIVES YOU UNDEFINED BLOCK
// agendaDisplay();

var desc;
var descId;
//LOCAL STORAGE CODE

// Get Agenda Desc Content
$("div").on("blur", "textarea", function() {
    // get current text
    desc = $(this)
      .val()
      .trim();
    //   console.log(desc);
  
    // get the parent div's data-id attribute
    descId = $(this)
    .closest("div")
    .attr("data-id");
    // console.log(descId);

});

// When the save button is clicked, we should collect what the text is in the same column as the save button. 

$("div").on("click", "button", function() {

    // Find the ID of the button clicked, as determined by it's parent div. 
    var btnId = $(this)
    .closest("div")
    .attr("data-id");

    // console.log(btnId);
    console.log(descId);
    console.log(desc);


    agendaItemsObj.push({
        time: btnId,
        agendaDesc: desc
    })

    saveAgendaItem();

});



var saveAgendaItem = function() {
    localStorage.setItem("agendaItem", JSON.stringify(agendaItemsObj));
  };
  

var loadAgendaDescs = function() {
    desc.text = JSON.parse(localStorage.getItem("agendaDesc"));

    // if (!agendaItemsObj) {
    //     agendaItemsObj = {
    //         time: "",
    //         agendaDesc: ""
    //     };
    // }

    // $.each(agendaItemsObj, function(descId, desc) {
    //     if (descId === time) {
            
    //     }


    //   });
    };



// LOCAL STORAGE TEST ZONE 
// var loadAgendaDescs = function() {
//     console.log(localStorage.getItem("description"));
// }
// $("button").click(function() {
//     localStorage.setItem("description", "Hi");
//     loadAgendaDescs();
// });