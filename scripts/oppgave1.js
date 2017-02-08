// Description:
//   Botten svarer på enkle hilsner og lytter etter spesifikke spørsmål
//
// Commands:
//   hubot hello - boten hilser tilbake
//   hvem er den neste hovedpersonen i skam  - boten svarer
//
// Hint:
//   som nevnt i introen så bruker du følgende
//
//   res.reply("svartekst her");
//
//   for å få roboten til å svare

module.exports = function (robot) {
  robot.respond(/hello/, function (res) {
    res.reply("Hallo tilbake");
  });

  robot.hear(/hvem er neste hovedpersonen i skam/, function (res) {
    res.send("Det er selvfølgelig Vilde!!!!");
  });
};
