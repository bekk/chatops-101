## Forberedelse

  1. Lag deg en bruker på Slack-teamet [ada-hos-bekk](https://ada-hos-bekk.slack.com/signup). NB: Her må du bruke din stud.ntnu.no-epostadresse.
  2. Åpne terminalen og skriv følgende:
  ```
  cd ~/chatops-for-dummies-master  # går inn i prosjektmappa
  npm install  # installerer avhengigheter
  ```
  3. Du er nå klar til å lage chatbot!

## Presentasjon
https://docs.google.com/presentation/d/1QKE36Du123kjfyHCHfDoHYIQ_A7wN0q_NRTWFGboDbI/edit?usp=sharing

## Kjøring av hubot

Pass på at du er inne i chatops-for-dummies-mappa

### Lokalt
Du kan starte boten lokalt ved å gå inn i et vindu i *terminalen* og kjøre følgende kommando

    sh ./bin/hubot

Hver gang du endrer koden må du restarte scriptet. Det avsluttes med <kbd>ctrl</kbd>+<kbd>C</kbd> og startes igjen som over.

Hvis botten kjører vil du få følgende output i terminalen:

    [Sat Feb 28 2015 12:38:27 GMT+0000 (GMT)] INFO Using default redis on localhost:6379
    hubot>

Du kan se hva slags ferdigheter botten her med å kjøre `hubot help` i terminalen.

    hubot> hubot help
    hubot animate me <query> - The same thing as `image me`, except adds [snip]
    hubot help - Displays all of the help commands that hubot knows about.
  
For å snakke med huboten i terminalen

    hubot> hubot hei

### På Slack

Legg til din gruppes token med følgende kommando for Mac/Linux:

`export HUBOT_SLACK_TOKEN=<token>`

Bruk følgende for Windows:

`[Environment]::SetEnvironmentVariable("HUBOT_SLACK_TOKEN", "<token>", "Machine")`

Bruk følgende kommando i terminalen

    bin/hubot -a slack

For å snakke med botten din i __general__-kanalen på slack, bruk `@botnavn`. Du kan også snakke med botten din direkte via direct messages.
    
## Om Hubot

Hubot er en chatbot bygd på Hubot-rammeverket.

Mer info om Hubot og oppsett på

- [hubot](http://hubot.github.com)
- [generator-hubot](https://github.com/github/generator-hubot)
- [heroku](http://www.heroku.com)
