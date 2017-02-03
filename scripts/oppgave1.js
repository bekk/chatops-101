// Description:
//   Første scriptet ditt for å komme igang
//
// Commands:
//   hubot hello - boten hilser tilbake
//   hvem er den neste hovedpersonen i skam?  - boten svarer


module.exports = function (robot) {
    robot.respond(/hello/, function(res){
      /* Denne respond-funksjonen vil bli kalt hver gang du snakker direkte med botten og bruker ordet hello.
         Du snakker direkte med botten ved å skrive: @bottnavn _______  */

         //code here
    })

    robot.hear(/hvem er neste hovedpersonen i skam?/, function(res){
      /* Denne hear-funksjonen vil bli kalt hver gang noen sier "hvem er neste hovedpersonen i skam" i en chat hvor
         botten har tilgang */



         //code here
    })
}
