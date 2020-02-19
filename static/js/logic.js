var meals = meals;
var data = data;
var tbody = d3.select("tbody");
var button = d3.select("#createlist-btn");
button.on("click", function() {
    tbody.html("")
    var arr = [];
        while(arr.length < 5){
            var r = Math.floor(Math.random() * 20) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        console.log(arr);
        
        result = meals.filter(obj => arr.includes(obj.id));
        console.log(result);
        
        meal_list = result.map(obj => obj.Meal)
        console.log(meal_list);

        combined_list = data.filter(obj => meal_list.includes(obj.Meal))
        console.log(combined_list);

        combined_list.forEach(function(filteredTableData) {
            console.log(filteredTableData);
            var row = tbody.append("tr");
            Object.entries(filteredTableData).forEach(function([key, value]) {
              console.log(key, value);
              // Append a cell to the row for each value
              var cell = row.append("td");
              cell.text(value);
            });
          }); 
        
        });
