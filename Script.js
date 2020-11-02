// id="currentDay"

// Display current date
// Format current moment at a later time to just include date and day of the week
// $("#currentDay").text(moment().format('dddd, MMMM Do'));
// console.log(currentDayEL);

// Create rows for each hour of the day



$( function() {
    const today = moment().format('dddd, MMMM Do');
    $("#currentDay").text(today);
    let now = moment();

    for(let i=9; i <= 17;i++) {
        
        let classname = "";
        let ClassMiddleName = "";

        let timeField = "";
        if (i < 12) {
            timeField = "AM";
        } else {
            timeField = "PM";
        }

    
        if (i < now) {
            classname = "past";
        }

        else if (i == now) {
            classname = "present";
        }

        else {
            classname = "future";
        }
        
        let toDo = localStorage.getItem(i)
        console.log(toDo);
        let Element = '<div class="row"><div class="col-sm-2"> '+i+timeField+ '</div> <div class="col-sm-8 '+ classname +'"><input value = "'+toDo+'" time= '+i+timeField+ ' type="text"/></div>';
        Element += '<div class="col-sm-2"><button time= '+i+timeField+ '>Save</button></div></div><div class="col-sm-2"></div>';
        $(".container").append(Element);
        
    
    }

    let buttonEL = $("button");
    buttonEL.on("click",function() {
        timeEL = $(this).attr("time");
        console.log(timeEL);
        let textEvent = $("input[time='"+timeEL+"']").val();
        localStorage.setItem(timeEL, textEvent);


        //$(`input[time="${butenEl}"]`)
    });

    
});



// $(".container").append("<div> 9am </div>");
// $(".container").append("<div> 10am </div>");
// $(".container").append("<div> 11am </div>");
// $(".container").append("<div> 12pm </div>");
// $(".container").append("<div> 1pm </div>");
// $(".container").append("<div> 2pm </div>");
// $(".container").append("<div> 3pm </div>");
// $(".container").append("<div> 4pm </div>");

// $("div").addClass(".time-block");
// $("div").addClass(".row");

