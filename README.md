## Dette må du ha installert på maskinen

- Git
- En tekst editor for eksempel Visual Studio Code eller Atom 
- Terminal(for mac) eller Powershell(for windows) 
- Node 

## Forberedelse

  1. Lag deg en bruker på Slack-teamet [bekk-hos-uib](https://bekk-hos-uib.slack.com/signup). NB: Her må du bruke din student.uib.no-epostadresse.
  2. Klon repoet 
  3. Åpne terminalen og skriv følgende:
  ```
  cd ~/chatops-for-dummies  # går inn i prosjektmappa
  
  ```
  Bare for windows: 
  ```
  npm install -g node-gyp
  npm install --global --production windows-build-tools
  ```
  For mac/windows:
  ```
  npm install  # installerer avhengigheter
  ```
  4. Du er nå klar til å lage chatbot!

## Presentasjon
https://docs.google.com/presentation/d/1QKE36Du123kjfyHCHfDoHYIQ_A7wN0q_NRTWFGboDbI/edit?usp=sharing

## Kjøring av hubot

Pass på at du er inne i chatops-for-dummies-mappa

### Lokalt
Du kan starte boten lokalt ved å gå inn i et vindu i *terminalen* og kjøre følgende kommando

For Mac: 

    npm start
    
For Windows: 

    .\bin\hubot
    
Hver gang du endrer koden må du restarte scriptet. Det avsluttes med <kbd>ctrl</kbd>+<kbd>C</kbd> og startes igjen som over.

Hvis botten kjører vil du få følgende output i terminalen:

    [Sat Feb 28 2015 12:38:27 GMT+0000 (GMT)] INFO Using default redis on localhost:6379
    hubot>

Du kan se hva slags ferdigheter botten har med å kjøre `hubot help` i terminalen.

    hubot> hubot help
    hubot animate me <query> - The same thing as `image me`, except adds [snip]
    hubot help - Displays all of the help commands that hubot knows about.
  
For å snakke med huboten i terminalen

    hubot> hubot hei

### På Slack

Legg til din gruppes token og kjør i terminalen med følgende kommando 

For Mac/Linux:	

 `export HUBOT_SLACK_TOKEN=<token>`	
 
 `npm run slack`

For Windows:	

 `[Environment]::SetEnvironmentVariable("HUBOT_SLACK_TOKEN", "<token>")`
 
 `bin/hubot -a slack`

For å snakke med botten din i __general__-kanalen på slack, bruk `@botnavn`. Du kan også snakke med botten din direkte via direct messages.
    
## Om Hubot

Hubot er en chatbot bygd på Hubot-rammeverket.

Mer info om Hubot og oppsett på

- [hubot](http://hubot.github.com)
- [generator-hubot](https://github.com/github/generator-hubot)
- [heroku](http://www.heroku.com)
