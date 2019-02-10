// Description:
//   Velger en tilfeldig parterapi karakter fra en liste av gutte eller jentenavn
//   når du spør "hvem av ... er drømmepartneren min"
//
// Commands:
//   hubot hvem av jentene er drømmepartneren min? - botten svarer et tilfeldig jentenavn
//   hubot hvem av guttene er drømmepartneren min? - botten svarer et tilfeldig gutteenavn
//   hubot hvem av ...  har jeg hooket med sist?- botten svarer en tilfeldig person

// Hint 1: dersom du lurer på hva som er lagret i en variabel kan du skrive den ut med
// console.log("tekst", variabel)


module.exports = function (robot) {
  robot.respond(/hvem av (.*) er drømmepartneren min/, function (res) {
    // res.match[1] -- henter ut ordet på plassen til (\w+) i det du skrev til botten. (\w+) er en regexp

    // code here

  });
};
