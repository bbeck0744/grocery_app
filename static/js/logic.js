var meals = meals;
var data = data;
var tbody = d3.select("#tbody");
var tbody2 = d3.select("#tbody2");
var button = d3.select("#createlist-btn");
button.on("click", function() {
    tbody.html("")
    tbody2.html("")
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

        distinct_items = [...new Set(combined_list.map(x => x.Item))];

        meal_list.forEach(function(weekly_meals) {
          var row = tbody.append("tr");
          console.log(weekly_meals);
          var cell = row.append("td");
          cell.text(weekly_meals);
        });

        distinct_items.forEach(function(filtered_grocery) {
          var row = tbody2.append("tr");
          console.log(filtered_grocery);
          var cell = row.append("td");
          cell.text(filtered_grocery);
          });
});