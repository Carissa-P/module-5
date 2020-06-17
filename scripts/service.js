// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 

//Reference : https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module5-ValidatedService


function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateDebit(txtDebit) {
    var b = document.getElementById(txtDebit).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter2 =  /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})?[-. ]?([0-9]{4})$/;
    if (filter2.test(b)) {
        return true;
    }
    else {
        return false;
    }
}



// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = []

var amandaUnavail = ["06/17/2020","06/24/2020", "07/01/2020", "07/08/2020", 
"07/15/2020","07/22/2020","07/29/2020","08/05/2020","08/12/2020","08/19/2020",
"08/26/2020"]

var kylieUnavail = ["06/19/2020","06/26/2020", "07/03/2020", "07/10/2020", 
"07/17/2020","07/24/2020","07/31/2020","08/07/2020","08/14/2020","08/21/2020","08/28/2020"]

var janeUnavail = ["06/18/2020","06/25/2020", "07/02/2020", "07/09/2020", 
"07/16/2020","07/23/2020","07/30/2020","08/06/2020","08/13/2020","08/20/2020","08/27/2020"]


const setDateFormat = "mm/dd/yy";
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_radio_checked
function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0){
        return [false];
    }
     if (date.getDay() == 6){
       return [false];
    }
    
    if( document.getElementById("radio-1").checked){
      unavailableDates = amandaUnavail
    }

    if( document.getElementById("radio-2").checked){
      unavailableDates = kylieUnavail
    }

    if( document.getElementById("radio-3").checked){
      unavailableDates = janeUnavail
    }




    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("(xxx-xxx-xxxx)");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });


    $("#debit").on("change", function(){
        if (!validateDebit("debit")){
            alert("Wrong format for credit card");
            $("#debit").val("(xxxx-xxxx-xxxx-xxxx)");
            $("#debit").addClass("error");
        }
        else {
            $("#debit").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date(),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );

    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });

});

  $( function() {
    $( "input" ).checkboxradio();
  } );

    $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );
  //Reference; https://jqueryui.com/button/
  
    $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );

//Reference:https://www.w3schools.com/jquery/jquery_events.asp
$(document).ready(function(){
  $("#p1").click(function(){
    alert("You entered p1!");
  });
});

function myFunction() {
  alert("Thank you! We'll see you at your reservation");
}
