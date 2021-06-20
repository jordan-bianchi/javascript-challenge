// from data.js
var tableData = data;

// from data.js
var tableData = data;

// Get reference to table body
var tbody = d3.select("tbody");

// Append table to web page and add rows of data for each UFO sighting
tableData.forEach(ufoSightings => {

    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(([key,value]) => {

        console.log(key,value);
        var cell = row.append("td").text(value)
        
    });
});
