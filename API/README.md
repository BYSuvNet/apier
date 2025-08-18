# API

WebAPIer är ett sätt program kan kommunicera med varandra över internet. API:er används ofta för att hämta data från en server, skicka data till en server eller utföra operationer på servern.

Ofta nämns RESTful API:er. Det är en stil för att designa API:er som använder HTTP-protokollet. REST står för Representational State Transfer. Det som kännetecknar ett REST API är:
* Det använder HTTP-metoder som GET, POST, PUT, DELETE för att utföra operationer.
* Det använder URL:er för att identifiera resurser.
* Det returnerar data i format som JSON eller XML.

Några ord som är bra att känna till:
* **Endpoint**: En URL som representerar en resurs i API:et.
* **Method**: HTTP-metoden som används för att göra en begäran, t.ex. GET för att hämta data och POST för att skicka data.
* **Request**: En begäran som skickas till API:et för att hämta eller skicka data.
* **Response**: Svar från API:et som innehåller data eller statusinformation.  
* **Status Code**: En kod som indikerar resultatet av en begäran, t.ex. 200 för OK, 404 för Not Found, 500 för Server Error.
* **Headers**: Metadata som skickas med begäran eller svar, t.ex. autentiseringstoken, innehållstyp.
* **Body**: Innehållet i en begäran eller svar, ofta i JSON-format.

## Övningar

### Tips i Hoppscotch
* Spara varje anrop i en Collection “Dag1”.
* Titta alltid på Status, Time, Size och Headers.
* Du kan använda History för att jämföra körningar.
* Om något inte funkar: kontrollera metod (GET/POST), stavning i URL och om du har mellanslag/otillåtna tecken (ersätt mellanslag med %20).
* Skapa en "environment variable" för att spara tex en bas-URL som du kan använda i flera anrop.

### GET Requests

Skriv GET reqiests för följande API:er

* Hämta ett slumpmässigt råd.
    * URL: https://api.adviceslip.com/advice
    * Kör 3 gånger.
    * Fick du något bra råd?

* Ett ett slumpmässigt skämt
    * URL: https://official-joke-api.appspot.com
    * Vilka två fält innehåller själva skämtet?

* Hämta info om en slumpmässig bild på en hund från 
    * URL: https://dog.ceo/dog-api/documentation/
    * Vilken content-type returneras?
    * Hur gör du för att se bilden?
    * Hämta också alla hundraser från samma API.
    * Skapa en collection för dessa api-anrop.

* Hämta något härifrån:
    * https://polisen.se/api/events
    * Vad levererar detta api för information?

* Rick And Morty API.
    * URL: https://rickandmortyapi.com/documentation/#rest
    * Skapa en collection för detta api
    * Gör en request som hämtar alla karaktärer.
    * Gör en request som hämtar en specifik karaktär (t.ex. Rick Sanchez).
    * Gör en request som hämtar info om tre olika avsnitt.

### POST Requests

* Gör en första POST request till HttpBin
    * URL: https://httpbin.org/post
    * Prova att lägga till en body med något innehåll. Vad krävs för att du ska kunan göra det?
    * Vad får du för resultat tillbaka?

* Skicka Todo-data till jsonplaceholder
    * URL: https://jsonplaceholder.typicode.com
    * Skicka med ett JSON-objekt som innehåller namn, email och adress.
    * Vad får du tillbaka? Vad betyder det?

### Valfritt API

Kolla på denna site: https://github.com/public-apis/public-apis
Välj ett API (ta ett som säger Auth = No) som intresserar dig och gör följande:
* Gör en GET request till API:et.
* Hämta en specifik resurs (t.ex. en användare, ett inlägg, en produkt).
* Har APIet någon POST-funktionalitet? Om ja, testa att skicka data.

### DaAPI
DataAnalysAPI på suvnet.se!
    * Detta API kan komma att justeras under kursens gång. Kom gärna med förslag på förbättringar!
    * Gör en första GET request till https://suvnet.se/api/products
    * Vad brukar det finnas för data i ett produktobjekt? Vad borde vi lägga till?
    * Vad mer kan finnas i ett sånt här system som skulle kunna bli relevant senare?
    * Gör en POST request till https://suvnet.se/api/products
        * Hur ska vi gör den så att det fungerar?

### Query Parameters

### Pagination

### Authorization

https://docs.hoppscotch.io/documentation/features/authorization