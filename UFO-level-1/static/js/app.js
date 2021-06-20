// from data.js
var tableData = data;

// Get reference to table body
var tbody = d3.select("tbody");

// Append table to web page and add rows of data for each UFO sighting
tableData.forEach(ufoSightings => {

    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(([key,value]) => {

        //console.log(key,value);
        var cell = row.append("td").text(value)
        
    });
});

// Select date form/button
var form = d3.select("#form");
var button = d3.select("#filter-btn")

// Create event handlers
form.on("submit",runEnter);
button.on("click",runEnter);

// Complete event handler function
function runEnter() {

    tbody.html(" ");

    var inputElement = d3.select("#datetime").property("value");
    console.log(inputElement);

    var filteredData = tableData.filter(dates => dates.datetime === inputElement);
    console.log(filteredData);

    filteredData.forEach(sightings => {

        var row = tbody.append("tr");

        Object.entries(sightings).forEach(([key,value]) => {

            //console.log(key,value);
            var cell = row.append("td").text(value)
        
        });
    })

    
};