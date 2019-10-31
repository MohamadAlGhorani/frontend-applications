# Concept
Dit concept is een leerzaam spel die ik aan de kinderen en volwassenen aanbied. Ik ga het data van Indonesië, India en Afrika gebruiken. ik wil de kleding van deze drie gebieden gebruiken om de spel te bouwen. deze spel bestaat uit drie keuzes waarvan de kind een keuze kan maken. Het is een raad spel er wordt op de scherm een foto van de object getoond en de kind mag raden waar het vandaan komt. Het speltje bevat een aantal hints die de kind kan gebruiken om het speltje leuker, makkelijker en leerzaam te maken deze hint is de beschrijving van het object. Als de kind goed heeft geraden krijgt hij/zij een score en de beschrijving van de object. Zodat de kind iets leert. En Wanneer de kind een foute keuze heeft gemaakt krijgt hij/zij de beschrijving van het object en krijgt hij een nieuwe object om te raden.

## screenshot

# Features
In mijn app zijn er de volgende features:
* Random object van de drie benoemde gebieden
* 3 keuze knopen 
* Hint knop voor een bepaalde aantal hints
* Score functie
* Local storage om de score op te slaan
* Reset knop "Opnieuw"
* Een antwoord op de vraag na elke keuze
* Dynamisch thema van de dataset 
* Hergebruikbaar spel voor andere thema's 

# Used framework
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

# Installation
If you dont have already installed node and npm on your machine. make sure you do this before you install this project. Click on the links below for more information about installing [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com)
When you are done with installing node and npm it is time to get started. Follow the following steps:

install angular on your machine by running npm install -g @angular/cli
navigate in you terminal or your command line app to "frontend-applications" folder and run npm install

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# API reference
I used SPARQL in this app to retrieve data from the museum's database. For more information about SPARQL [click here](https://nl.wikipedia.org/wiki/SPARQL)
Here below you can see the queries that i have wrote to filter in the data to get objects with title, link to image, theme and origin from the museum's dataset.

i used three queries to get objects from three different origin. and i merged them in my script to get one result.
`
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?obj ?objLabel ?link ?title ?placeName  WHERE {
  ?obj edm:isShownBy ?link .
  ?obj dc:title ?title .
  ?obj edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2706> .
  <https://hdl.handle.net/20.500.11840/termmaster2706> skos:prefLabel ?objLabel .
  <https://hdl.handle.net/20.500.11840/termmaster7745> skos:broader* ?place .
  ?place skos:prefLabel ?placeName .
  ?obj dct:spatial ?place .
  
  FILTER langMatches(lang(?title), "ned")
}
`
`
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?obj ?objLabel ?link ?title ?placeName  WHERE {
  ?obj edm:isShownBy ?link .
  ?obj dc:title ?title .
  ?obj edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2706> .
  <https://hdl.handle.net/20.500.11840/termmaster2706> skos:prefLabel ?objLabel .
  <https://hdl.handle.net/20.500.11840/termmaster8161> skos:broader* ?place .
  ?place skos:prefLabel ?placeName .
  ?obj dct:spatial ?place .
  
  FILTER langMatches(lang(?title), "ned")
} 
`
`
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?obj ?objLabel ?link ?title ?placeName  WHERE {
  ?obj edm:isShownBy ?link .
  ?obj dc:title ?title .
  ?obj edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2706> .
  <https://hdl.handle.net/20.500.11840/termmaster2706> skos:prefLabel ?objLabel .
  <https://hdl.handle.net/20.500.11840/termmaster3> skos:broader* ?place .
  ?place skos:prefLabel ?placeName .
  ?obj dct:spatial ?place .
  
  FILTER langMatches(lang(?title), "ned")
} 
`
  
## credits
Thanks to the museum of volkenkunde for sharing their data and hosting us at the museum. And thanks to my teachers and colleagues for their help and sharing their knowledge.

# License
code is [MIT](https://github.com/MohamadAlGhorani/frontend-applications/blob/master/LICENSE).

# Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
