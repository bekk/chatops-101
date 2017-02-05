// Description:
//   Velger en tilfeldig SKAM-karakter i listen av gutte elle jentenavn
//   når du spør hvem har jeg hooket med sist
//
// Commands:
//   hubot hvem har jeg hooket med sist av guttene? - botten svarer et tilfeldig guttenavn
//   hubot hvem har jeg hooket med sist av jentene? - botten svarer et tilfeldig jentenavn
//   hubot hvem har jeg hooket med sist av ....? - botten svarer en tilfeldig person

const SKAM_KARAKTERER_GUTTER = ["gutt1", "gutt2"]
const SKAM_KARAKTERER_JENTER = ["jente1", "jente2"]

module.exports = function (robot) {
    robot.respond(/hvem har jeg hooket med sist av (\w+)?/, function(res){
      // res.match[1] -- henter ut ordet på plassen til (\w+) i det du skrev til botten

      // code here

    })
}
