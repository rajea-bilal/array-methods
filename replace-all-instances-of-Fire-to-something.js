// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!
  
//    assert.strictEqual(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
//     assert.strictEqual(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
//     assert.strictEqual(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain")

                       
function fireFight(s){
  
    // let check = s.replaceAll("Fire", "~~")
    // return check
    
     let check = s.split(" ").map(item => {
       if(item === 'Fire'){
         return "~~"
       } else {
         return item
       }
     })
      return check.join(' ')
  }
  
  console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"))