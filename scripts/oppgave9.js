// Description:
//   Script for å sjekke resultater fra Premier League 2018/2019
//
// Commands:
//   hubot hvem leder Premier League
//   hubot hvordan går det med <lag>

const request = require('request');
const url = "https://vglive.no/api/vg/tournaments/seasons/1776/standings?type=live-changes";

module.exports = function (robot) {
  robot.respond(/hvem leder premier league/i, function (msg) {
    request(url, function (error, response, body) {
      if (error) {
        msg.send("Noe gikk galt!", error.message);
        return;
      }
      const data = JSON.parse(body);
      const leaderTeamId = data.standings[0].teamStandings[0].teamId;
      const leaderTeam = Object.values(data.participants).find(team => team.id === leaderTeamId);
      msg.send(`${leaderTeam.name} leder Premier League! :soccer:`);
    });
  });

  robot.respond(/hvordan går det med (\w+)\??/i, function (msg) {
    const teamName = msg.match[1];
    request(url, function (error, response, body) {
      if (error) {
        msg.send("Noe gikk galt!", error.message);
        return;
      }
      const data = JSON.parse(body);
      const participant = Object.values(data.participants).find(team =>team.name.toLowerCase().match(teamName.toLowerCase()));
      if (!participant) {
        msg.send(`Fant ikke noen lag med det navnet, prøv igjen`);
        return;
      }
      const standing = data.standings[0].teamStandings.find(standing => standing.teamId === participant.id);
      msg.send(`${participant.name} er på ${standing.rank}. plass i Premier League med ${standing.points} poeng :soccer:`);
    })
  })
}
