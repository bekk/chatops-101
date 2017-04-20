## Forberedelse

  1. Last ned nyeste versjon av node.js (enten ved å bruk brew eller fra https://nodejs.org/en/download/current/)
  2. Lag deg en bruker på Slack-kanalen __bekk-chatops__ https://bekk-chatops.slack.com/signup. NB: Her må du bruke din uib-epostadresse
  3. Finn frem en passende editor som kan brukes til javascript, vi anbefaler atom
  4. Klon dette repoet ved å skrive `git clone https://github.com/bekk/chatops-for-dummies.git` i terminalen
  5. Gå inn i __chatops-for-dummies__ og kjør `npm install` i terminalen

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

`EXPORT HUBOT_SLACK_TOKEN=<token>`

Bruk følgende for Windows:

`[Environment]::SetEnvironmentVariable("HUBOT_SLACK_TOKEN", "<token>", "Machine")`

Bruk følgende kommando i terminalen 

    bin/hubot -a slack
    
  
    
## Om Hubot

Hubot er en chatbot bygd på Hubot-rammeverket.

Mer info om Hubot og oppsett på

- [hubot](http://hubot.github.com)
- [generator-hubot](https://github.com/github/generator-hubot)
- [heroku](http://www.heroku.com)




