//wait for document to get ready
$(document).ready( function () {
    //get json file with getJSON method
    $.getJSON("schedule.json", function (data) {
        //store schedule data in variable
        let scheduleData = data.schedule;

        //populate table with schedule data
        populateTable(scheduleData);
    })
    //function to populate table with data
    function populateTable(scheduleData) {
        $('#schedule-table-body').empty();

        $.each(scheduleData, function (i, schedule) {
            //create new row in table
            let row = "<tr>";
            
            row += "<td>" + schedule.class_name + "</td>"
            row += "<td>" + schedule.teacher_name + "</td>";
            row += "<td>" + schedule.room_number + "</td>";
            row += "<td>" + schedule.days.join(', ') + "</td>";
            row += "</td>"

            //append the new row to the table body
            $('#schedule-table-body').append(row)
        })



        
        
        

        
    }

})