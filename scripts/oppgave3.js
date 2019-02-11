// Description:
//   Velger en tilfeldig parterapi karakter fra en liste av gutte eller jentenavn
//   når du spør "hvem av ... er drømmepartneren min"
//
// Commands:
//   hubot hvem av guttene er drømmepartneren min? - botten svarer et tilfeldig guttenavn
//   hubot hvem av jentene er drømmepartneren min? - botten svarer et tilfeldig jentenavn
//   hubot hvem av ... er drømmepartneren min?- botten svarer en tilfeldig person

// Hint 1: dersom du lurer på hva som er lagret i en variabel kan du skrive den ut med
// console.log("tekst", variabel)

const PARTERAPI_KARAKTERER_GUTTER = ["Ulrik", "Kjell Simen", "Gaute", "James"];
const PARTERAPI_KARAKTERER_JENTER = ["Maiken", "Sara Eline", "Siv Anita", "Ellen"];
const PARTERAPI_KARAKTERER = PARTERAPI_KARAKTERER_GUTTER.concat(PARTERAPI_KARAKTERER_JENTER);

module.exports = function (robot) {
  robot.respond(/hvem av (\w+) er drømmepartneren min?/, function (res) {
    const gender = res.match[1];

    if (gender == "guttene"){
      res.reply(`Din drømmepartner er ${res.random(PARTERAPI_KARAKTERER_GUTTER)}`);
    }
    else if (gender == "jentene"){
      res.reply(`Din drømmepartner er ${res.random(PARTERAPI_KARAKTERER_JENTER)}`);
    }
    else {
      res.reply(`Din drømmepartner er ${res.random(PARTERAPI_KARAKTERER)}`);
    }

  });
};
