// From data.js
var tableData = data;

// Assign table body variable
var tbody = d3.select("tbody");

// Go through data info
tableData.forEach(function(UFOinfo) {
    console.log(UFOinfo);

    // Add new rows to the table
    var row = tbody.append("tr");
    Object.entries(UFOinfo).forEach(function([key, value]) {
        console.log(key,value);

        // Add data to these rows
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Assign variables for a filter form
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent a page from refreshing
    d3.event.preventDefault();

    // Select entry elements
  var InputDatetime = d3.select("#datetime");
  var ValueDatetime = InputDatetime.property("value");

  var InputCity = d3.select("#city");
  var ValueCity = InputCity.property("value");

  var InputState = d3.select("#state");
  var ValueState = InputState.property("value");

  var InputCountry = d3.select("#country");
  var ValueCountry = InputCountry.property("value");

  var InputShape = d3.select("#shape");
  var ValueShape = InputShape.property("value");

  console.log(`ValueDatetime: ${ValueDatetime}
    ValueCity: ${ValueCity}
    ValueState: ${ValueState}
    ValueCountry: ${ValueCountry}
    ValueShape: ${ValueShape}
    `);
  
    // Match entry with a table value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);
    
    function clearTable() {
        d3.select("tbody").selectAll("td").remove();
    };
    
    clearTable();

    filteredData.forEach(function(UFOinfo) {
        console.log(UFOinfo);

        // Add rows to the table
        var row = tbody.append("tr");
        Object.entries(UFOinfo).forEach(function([key, value]) {
            console.log(key,value);

            // Add data into these rows
            var cell = row.append("td");
            cell.text(value);
        });
    });
});