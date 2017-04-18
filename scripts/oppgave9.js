// Description:
//   Script for å sjekke resultater fra Eliteserien 2017
//
// Commands:
//   hubot hvem leder eliteserien
//   hubot hvordan går det med <lag>

const url = "https://api.vglive.no/v1/vg/tournaments/seasons/1439/standings/live";

module.exports = function (robot) {
  robot.respond(/hvem leder eliteserien/i, function (msg) {
    robot.http(url).get()(function (err, res, body) {
      if (err) {
        msg.send("Noe gikk galt!", err.message);
        return;
      }
      const response = JSON.parse(body);
      const leaderTeamId = response.standings[0].results[0].participantId;
      const leaderTeam = response.participants.find(team => team.id === leaderTeamId);
      msg.send(`${leaderTeam.name} leder eliteserien! :soccer:`);
    });
  });

  robot.respond(/hvordan går det med (\w+)\??/i, function (msg) {
    const teamName = msg.match[1];
    robot.http(url).get()(function (err, res, body) {
      if (err) {
        msg.send("Noe gikk galt!", err.message);
        return;
      }
      const response = JSON.parse(body);
      const participant = response.participants.find(team => team.name.toLowerCase().match(teamName.toLowerCase()));
      if (!participant) {
        msg.send(`Fant ikke noen lag med det navnet, prøv igjen`);
        return;
      }
      const standing = response.standings[0].results.find(standing => standing.participantId === participant.id);
      msg.send(`${participant.name} er på ${standing.rank}. plass i eliteserien med ${standing.points} poeng :soccer:`);
    })
  })
}
