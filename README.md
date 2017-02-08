## Presentasjon 
https://docs.google.com/presentation/d/1vQdtBYriDtbgxDAbU45niT5NZ0rP_R4BBFDCq2vD_YU/edit?usp=sharing

## Kjøring av hubot

Pass på at du er inne i chatops-for-dummies-mappa

### Kjøre hubotten lokalt 
Du kan starte boten lokalt ved å gå inn i et vindu i *terminalen* og kjøre følgende kommando 

    sh ./bin/hubot
    
Hver gang du endrer koden må du restarte scriptet. Det avsluttes med <kbd>ctrl</kbd>+<kbd>C</kbd> og startes igjen som over.

Hvis botten kjører vil du få følgende output i terminalen:

    [Sat Feb 28 2015 12:38:27 GMT+0000 (GMT)] INFO Using default redis on localhost:6379
    hubot>

Du kan se hva slags ferdigheter botten her med å kjøre `hubot help` i terminalen.

    hubot> hubot help
   
For å snakke med huboten i terminalen
  
    hubot> hubot hei
    
### Kjøre hubotten i Slack
Bruk følgende kommando i terminalen 

    bin/hubot -a slack
    
Du kan da snakke med huboten i slack-kanalen vår  
    
## Om Hubot

Hubot er en chatbot bygd på Hubot-rammeverket.

Mer info om Hubot og oppsett på

- [hubot](http://hubot.github.com)
- [generator-hubot](https://github.com/github/generator-hubot)
- [heroku](http://www.heroku.com)




