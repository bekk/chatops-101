// Description:
//   Velger en tilfeldig parterapi karakter i listen når du spør "hvem var utro med hvem"
//
// Commands:
//   hubot hvem var utro med hvem - botten svarer med en tilfeldig parterapi karakter

//  Hint:
//   argumentet som funksjonen tar inn "res" har en funksjon random(array) som kalles slik:
//
//   res.random(array)
//
//   Les mer om javascript arrays her https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//   Les mer om javascript stringkonkatenering her https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const PARTERAPI_KARAKTERER = ["Navn1", "Navn2"];

module.exports = function (robot) {
  robot.respond(/hvem var utro med hvem/, function (res) {
    //code here
  });
};
