///This one will print out the key names which are the ant names.




var survivalKits = {
  kindergarten: {poster: "images/kindergarten.jpg", title: "KinderGarten Survival Kit", price:"$40.00"},
    
  kindergatrenParents: {poster:"images/kinder-parent.jpg", title:"Kindergarten Parent Survival", price:"$40.00"},
  elementarySchool: {poster:"images/school-bus.jpg", title:"Elementary School Survival Kit", price:"$40.00"},
  middleSchool: {poster:"images/middle-school.jpg", title:"Middle School Survival Kit", price:"$40.00"},
  highSchool: {poster:"images/high-school.jpg", title:"Hight School Surivival kit", price:"$40.00"},
  college: {poster:"images/college.jpg", title:"College Survival Kit", price:"$40.00"},
  collegeParent: {poster:"images/college-parent.jpg", title:"College Parent Survival", price:"$40.00"},
}

var productSection = document.getElementById("productCards");
 
for (var key in survivalKits) {
//    console.log(key);
    var product = survivalKits[key];
//    console.log(product);
    var poster = product["poster"];
    var title = product["title"];
    var price = product["price"];
    console.log(poster, title, price);
    var card = "<div class='cardSize>" + "<div><img src='" + poster + "'>" +"</div>" + "<p>" + title + "</p>" + "<p>" + price + "</p>" + "</div>";
    productSection.innerHTML += card;
}





//document.write(key);
//// or you could:
////console.log(antSpecies[key]);
//
//// this will print out the value of the keys which are empty, will comeback as just objects
//
////"'Kleenex'", "Spa Time Gift Card", "Event Organizer", "Label Maker", "'Kindergarten for Dummies'"
//
////"'Kleenex'", "Moving Boxes", "'How to College for Dummies'", "Date Night Gift Card", "Exercise Room Start-up Kit"
