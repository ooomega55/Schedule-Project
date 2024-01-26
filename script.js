//wait for document to get ready
$(document).ready(function () {
  //get json file with getJSON method
  $.getJSON("schedule.json", function (data) {
    //store schedule data in variable
    let scheduleData = data.schedule;

    //populate table with filtered schedule data
    populateTable(scheduleData);



    //listen for changes to the dropdown menu
    $("#day-selector").on("change", function() {
      //get selected day
      let selectedDay = $(this).val();

      //filter schedule data based on the selected Day
      let filteredData = scheduleData.filter( function(schedule) {
        return selectedDay === "all" || schedule.days.includes(selectedDay);
      });
      
      populateTable(filteredData);
    });



    $("#wing-selector").on("change", function() {
      //get selected day
      let selectedWing = $(this).val();

      //filter schedule data based on the selected Day
      let filteredData = scheduleData.filter( function(schedule) {
        return selectedWing === "allWings" || schedule.wing.includes(selectedWing);
      });
      
      populateTable(filteredData);
    });


  });
  //function to populate table with data
  function populateTable(scheduleData) {
    $("#schedule-table-body").empty();

    $.each(scheduleData, function (i, schedule) {
      //create new row in table
      let row = "<tr>";
      //add class name, teacher name, room number, and days to row
      row += "<td>" + schedule.class_name + "</td>";
      row += "<td>" + schedule.teacher_name + "</td>";
      row += "<td>" + schedule.wing + "</td>";
      row += "<td>" + schedule.days.join(", ") + "</td>";
      row += "</td>";
      //append the new row to the table body
      $("#schedule-table-body").append(row);
    });
  }
});
