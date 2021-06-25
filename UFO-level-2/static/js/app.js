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

// Create filters
var liTag = d3.select("li");

// City filter
liTag.append("label").text("Enter a City");
liTag.append("input").attr("id","city").attr("class","form-control").attr("placeholder","fairfield");

// State filter
liTag.append("label").text("Enter a State");
liTag.append("input").attr("id","state").attr("class","form-control").attr("placeholder","ca");

// Country filter
liTag.append("label").text("Enter a Country");
liTag.append("input").attr("id","country").attr("class","form-control").attr("placeholder","us");

// Shape filter
liTag.append("label").text("Enter a Shape");
liTag.append("input").attr("id","shape").attr("class","form-control").attr("placeholder","oval");

// Select date form/button
var button = d3.select("#filter-btn")

// Create event handlers
button.on("click",runEnter);

// Complete event handler function
function runEnter() {

    tbody.html(" ");

    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    var filteredData = tableData.filter(filter => filter.datetime === inputDate ||
        filter.city === inputCity ||
        filter.state === inputState ||
        filter.country === inputCountry ||
        filter.shape === inputShape
        );
    //console.log(filteredData);

    filteredData.forEach(sightings => {

        var row = tbody.append("tr");

        Object.entries(sightings).forEach(([key,value]) => {

            //console.log(key,value);
            var cell = row.append("td").text(value)
        
        });
    })

    
};
