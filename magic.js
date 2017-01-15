var survivalKits = {

  kindergarten: {poster: "images//school-bus.jpg", title: "KinderGarten Kit", price:"$40.00"}, 
  kindergartenParents: {poster:"images//school-bus.jpg", title:"Kinder-Parent Survival", price:"$40.00"},
  elementarySchool: {poster:"images//school-bus.jpg", title:"Elementary Survival Kit", price:"$40.00"},
  middleSchool: {poster:"images//middle-school.jpg", title:"Middle School Survival", price:"$40.00"},
  highSchool: {poster:"images//high-school.jpg", title:"High School Surivival kit", price:"$40.00"},
  college: {poster:"images//college.jpg", title:"College Survival Kit", price:"$40.00"},
  collegeParent: {poster:"images//college-parent.jpg", title:"College Parent Survival", price:"$40.00"},

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
	

    var card = "<article class='edukit'>" + "<h4>" + title + "</h4>" + "<div class='resize'><img class='resize' src='" + poster + "'></div>" + "<footer><p>" + price + "</p></footer></article>";

    productSection.innerHTML += card;

}





