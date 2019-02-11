// Description:
//   Velger en tilfeldig parterapi karakter fra en liste når du spør "hvem var utro sist"
//
// Commands:
//   hubot hvem var utro sist - botten svarer med en tilfeldig parterapi karakter
//
//  Hint:
//   argumentet som funksjonen tar inn "res" har en funksjon random(array) som kalles slik:
//
//   res.random(array)
//
//   Les mer om javascript arrays her https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//   Les mer om javascript stringkonkatenering her https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const PARTERAPI_KARAKTERER = [
  "Maiken",
  "Sara Eline",
  "Ellen",
  "Ulrik",
  "Kjell Simen",
  "Siv Anita",
  "Gaute",
  "Siri",
  "James",
  "Aslak"];

module.exports = function (robot) {
  robot.respond(/hvem var utro sist/, function (res) {

    // Bruk en hjelpemetode på res
    const randomKarakter = res.random(PARTERAPI_KARAKTERER);

    res.reply(`Har du vært utro?! Med ${randomKarakter}??`);

  });
};
