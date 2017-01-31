// Random hvem har du hooket med sist av ... kjønn
// Description:
//   Bruk SKAM karakterene under å velg en tilfeldig person hver gang botten
//   svarer brukeren
//
// Commands:
//   hubot hvem har jeg hooket med sist av guttene? - boten gir en random gutt tilbake
//   hubot hvem har jeg hooket med sist av jentene? - boten gir en random jente tilbake
//   hubot hvem har jeg hooket med sist av ....? - boten gir en random hvem som helst

const SKAM_KARAKTERER_GUTTER = ["gutt1", "gutt2"]
const SKAM_KARAKTERER_JENTER = ["jente1", "jente2"]

module.exports = function (robot) {
    robot.respond(/hvem har jeg hooket med sist av (\w+)?/, function(res){
      // res.match[1] -- henter ut første match

      // code here

    })
}
