///This one will print out the key names which are the ant names.




var survivalKits = {
  kindergarten: ["Personalized Labels", "Backpack", "'Bumkins' Lunch Box", "Nature Snacks", "Hand Wipes"],
  kindergatrenParents: ["'Kleenex'", "Spa Time Gift Card", "Event Organizer", "Label Maker", "'Kindergarten for Dummies'"],
  elementarySchool: {},
  middleSchool: {},
  highSchool: {},
  college: {},
  collegeParent: ["'Kleenex'", "Moving Boxes", "'How to College for Dummies'", "Date Night Gift Card", "Exercise Room Start-up Kit"],
}
 for (var key in survivalKits);
{
   console.log(key); 
}
// or you could:
//console.log(antSpecies[key]);

// this will print out the value of the keys which are empty, will comeback as just objects

