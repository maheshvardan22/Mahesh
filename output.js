
    var secondItem = document.getElementById("items").children[1];
    secondItem.style.backgroundColor = "green";
    
    
    var thirdItem = document.getElementById("items").children[2];
    thirdItem.style.display = "none";
   
        var secondItem = document.querySelectorAll("#items .list-group-item")[1];
        secondItem.style.color = "green";
    
        var oddItems = document.querySelectorAll("#items .list-group-item:nth-child(odd)");
        oddItems.forEach(function(item) {
          item.style.backgroundColor = "green";
        });
    
    
