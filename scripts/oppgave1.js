// Description:
//   Et enkelt testscript for enkel respond-funksjonalitet
//
// Commands:
//   hubot hello - boten hilser tilbake


module.exports = function (robot) {
    robot.respond(/hello/, function(res){
        res.reply("Velkommen til workshop!");
    })
}
