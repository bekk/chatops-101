// Description:
//   Botten svarer på enkle hilsner og lytter etter spesifikke spørsmål
//
// Commands:
//   hubot hello - boten hilser tilbake
//   hvem er den beste i parterapi  - boten svarer

// Hint:
//   som nevnt i introen så bruker du følgende
//
//   res.reply("svartekst her");
//
//   for å få roboten til å svare

module.exports = function (robot) {
  robot.respond(/hello/, function (res) {
    /* Denne respond-funksjonen vil bli kalt hver gang du snakker direkte med botten og bruker ordet hello.
     Du snakker direkte med botten ved å skrive: @bottnavn _______  */

    //code here
  });

  robot.hear(/hvem er den beste i parterapi/, function (res) {
    /* Denne hear-funksjonen vil bli kalt hver gang noen sier "hvem er den beste i parterapi" i en chat hvor
     botten har tilgang */


    //code here
  });
};
