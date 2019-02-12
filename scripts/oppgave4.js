// Description:
//   Script for å vise hvordan de ulike karakterne ser ut
//
// Commands:
//   hubot hvordan så egentlig <navn> ut - botten gir en link til et bilde

// Hint 1: for å hente ut navnet se forrige oppgave

// Hint 2: Her må du bruke et JavaScript object

// Hint 3: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


const PARTERAPI_KARAKTERER = [
  {navn: "Vilde", bilde: "http://skam.p3.no/wp-content/uploads/2016/09/Vilde_s3.jpg"},
  {navn: "William", bilde: "http://skam.p3.no/wp-content/uploads/2016/02/william.jpg"},
];

module.exports = function (robot) {
  robot.respond(/hvordan så egentlig (\w+) ut/, function (res) {

    const navn = res.match[1];

    const match = PARTERAPI_KARAKTERER.find(function (parterapiKarakter) {
      return parterapiKarakter.navn.toLowerCase() == navn.toLowerCase();
    });

    if (match != undefined){
      res.reply(match.bilde)
    }
    else {
      res.reply(`Fant ikke ${navn}`)
    }

  });
};
