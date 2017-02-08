// Description:
//   Velger en tilfeldig SKAM-karakter i listen når du spør hvem har jeg hooket med sist
//
// Commands:
//   hubot hvem har jeg hooket med sist - botten svarer med en tilfeldig SKAM-karakter
//
//  Hint:
//   argumentet som funksjonen tar inn "res" har en funksjon random(array) som kalles slik:
//
//   res.random(array)
//
//   Les mer om javascript arrays her https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//   Les mer om javascript stringkonkatenering her https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const SKAM_KARAKTERER = [
  "Vilde",
  "William",
  "Noora",
  "Eva",
  "Chris",
  "Kasper",
  "Eskild",
  "Sana",
  "Jonas",
  "Isak"];

module.exports = function (robot) {
  robot.respond(/hvem har jeg hooket med sist/, function (res) {

    // Bruk en hjelpemetode på res
    const randomKarakter = res.random(SKAM_KARAKTERER);

    res.reply(`Hvor full var du da? Du hooket sist med ${randomKarakter}`);

  });
};
