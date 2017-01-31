// Description:
//   Første scriptet ditt for å komme igang
//
// Commands:
//   hubot hello - boten hilser tilbake
//   hvem er den neste hovedpersonen i skam?  - boten svarer


module.exports = function (robot) {
    robot.respond(/hello/, function(res){
      /* Denne funksjonen vil bli kalt hver gang du snakker direkte med botten
         dette gjør du med den @bottnavn */

         //code here
    })

    robot.hear(/hvem er neste hovedpersonen i skam?/, function(res){
      /* Denne funksjonen vil bli kalt hver gang noen sier hello i en chat hvor
         botten har tilgang */



         //code here
    })
}
