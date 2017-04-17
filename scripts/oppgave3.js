// Description:
//   Velger en tilfeldig SKAM-karakter fra en liste av gutte eller jentenavn
//   når du spør "hvem av ... har jeg hooket med sist"
//
// Commands:
//   hubot hvem av guttene har jeg hooket med sist? - botten svarer et tilfeldig guttenavn
//   hubot hvem av jentene har jeg hooket med sist? - botten svarer et tilfeldig jentenavn
//   hubot hvem av ...  har jeg hooket med sist?- botten svarer en tilfeldig person

// Hint 1: dersom du lurer på hva som er lagret i en variabel kan du skrive den ut med
// console.log("tekst", variabel)

const SKAM_KARAKTERER_GUTTER = ["William", "Kasper", "Eskild", "Jonas", "Isak"];
const SKAM_KARAKTERER_JENTER = ["Vilde", "Noora", "Eva", "Chris", "Sana"];
const SKAM_KARAKTERER = SKAM_KARAKTERER_GUTTER.concat(SKAM_KARAKTERER_JENTER);

module.exports = function (robot) {
  robot.respond(/hvem av (\w+) har jeg hooket med sist? /, function (res) {
    const gender = res.match[1];

    if (gender == "guttene"){
      res.reply(`Du hooket sist med ${res.random(SKAM_KARAKTERER_GUTTER)}`);
    }
    else if (gender == "jentene"){
      res.reply(`Du hooket sist med ${res.random(SKAM_KARAKTERER_JENTER)}`);
    }
    else {
      res.reply(`Du hooket sist med ${res.random(SKAM_KARAKTERER)}`);
    }

  });
};
