// Description:
//   Nedtelling for bursdager - både din egen og andre sin
//
// Commands:
//   hubot jeg har bursdag dato - forteller botten når du har bursdag
//   hubot hvor lenge er det til bursdagen min - antall dager til du har bursdag
//   hubot navn har bursdag dato - forteller botten når en annen person har bursdag
//   hubot hvor lenge er det til navn sin bursdag? - antall dager til personens bursdag

// Hint 1: Lagre bursdagene som legges inn i en database slik at du kan hente det opp senere

// Hint 2: bruk moment-biblioteket her https://momentjs.com/ tilsvarende oppgave 6

module.exports = function (robot) {
    robot.respond(/jeg har bursdag (.+)/, function(res){
      // Du kan lagre informasjon til botten i en database ved å bruke 
      // robot.brain.set("navn", dato)

      //code here
    })

    robot.respond(/hvor lenge er det til bursdagen min?/, function(res){
      // Du kan hente informasjon lagret i botten sin database ved å bruke 
      // robot.brain.get("navn")

      //code here
    })

    robot.respond(/(\w+) har bursdag (.+)/, function(res){
      //code here
    })

    robot.respond(/hvor lenge er det til (\w+) sin bursdag?/, function(res){
      //code here
    })
}
