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

1a timmen GET och POST. 2a timmen Public APIs + DaAPI.

### Tips i Hoppscotch
* Spara varje anrop i en Collection “Dag1”.
* Titta alltid på Status, Time, Size och Headers.
* Du kan använda History för att jämföra körningar.
* Om något inte funkar: kontrollera metod (GET/POST), stavning i URL och om du har mellanslag/otillåtna tecken (ersätt mellanslag med %20).
* Skapa en "environment variable" för att spara tex en bas-URL som du kan använda i flera anrop.

### GET Requests

Skriv GET requests för följande API:er

1. Hämta ett slumpmässigt råd.
    * URL: https://api.adviceslip.com/advice
    * Kör 3 gånger.
    * Fick du något bra råd?

2. Ett ett slumpmässigt skämt
    * URL: https://official-joke-api.appspot.com
    * Vilka två fält innehåller själva skämtet?

3. Hämta info om en slumpmässig bild på en hund från 
    * URL: https://dog.ceo/dog-api/documentation/
    * Vilken content-type returneras?
    * Hur gör du för att se bilden?
    * Hämta också alla hundraser från samma API.
    * Skapa en collection för dessa api-anrop.

4. Hämta något härifrån:
    * https://polisen.se/api/events
    * Vad levererar detta api för information?

5. Rick And Morty API.
    * URL: https://rickandmortyapi.com/documentation/#rest
    * Skapa en collection för detta api
    * Gör en request som hämtar alla karaktärer.
    * Gör en request som hämtar en specifik karaktär (t.ex. Rick Sanchez).
    * Gör en request som hämtar info om tre olika avsnitt.

### POST Requests

6. Gör en första POST request till HttpBin
    * URL: https://httpbin.org/post
    * Prova att lägga till en body med något innehåll. Vad krävs för att du ska kunan göra det?
    * Vad får du för resultat tillbaka?

7. Skicka Todo-data till jsonplaceholder
    * URL: https://jsonplaceholder.typicode.com
    * Skicka med ett JSON-objekt som innehåller namn, email och adress.
    * Vad får du tillbaka? Vad betyder det?

### Valfritt API

8. Kolla på denna site: https://github.com/public-apis/public-apis
    * Välj ett API (ta ett som säger Auth = No) som intresserar dig och gör följande:
    * Gör en GET request till API:et.
    * Hämta en specifik resurs (t.ex. en användare, ett inlägg, en produkt).
    * Har APIet någon POST-funktionalitet? Om ja, testa att skicka data.

### DaAPI
9. DataAnalysAPI på suvnet.se!
    * Detta API kan komma att justeras under kursens gång. Kom gärna med förslag på förbättringar!
     Gör en första GET request till https://suvnet.se/api/products
    * Vad brukar det finnas för data i ett produktobjekt? Vad borde vi lägga till?
    * Vad mer kan finnas i ett sånt här system som skulle kunna bli relevant senare?
    * Gör en POST request till https://suvnet.se/api/products
        * Hur ska du göra den så att det fungerar? Dvs, returnerar 201 Created?

### Query Parameters

I REST API:er finns olika sätt att påverka vilken data som hämtas. Vanligt är att skicka olika typer av "parametrar" i URL:en. De olika typerna är:
* Route parameters: Dessa är en del av URL:en och används för att specificera vilken resurs som ska hämtas. T.ex. `/users/123` där `123` är ID:t för en specifik användare. Dessa har du redan använt i tidigare övningar.
* Query parameters: Dessa läggs till i slutet av URL:en efter ett frågetecken `?` och används för att filtrera eller sortera data. T.ex. `/users?age=30&sort=name` där `age` och `sort` är query-parametrar. API:et måste vara designat för att hantera dessa parametrar, så det är inte alltid det fungerar.
* Header parameters: Dessa skickas med i HTTP-headern och används ofta för autentisering för att skicka med lösenord eller något som säger att man har rätt att accessa API:et. 

I följande övningar kommer du att använda query parameters för att hämta specifik data.

10. The Guthenberg Project
    * För att klara dessa uppgifter behöver du ta dokumentationen till hjälp: https://gutendex.com
    * Hämta böcker skrivna av Shakespeare
    * Hur många svenska böcker finns det och vilken är den mest nedladdade?
    * Vilken var den första boken som lades till i databasen?
    * Hur många engelska böcker med copyright finns det contra utan copyright?
    * Vilken var den första svenska boken på temat 'adventure' som lades till?

11. Gör en GET request till DaAPI för att hämta produkter i CSV-format! Kolla [förstasidan](https://suvnet.se) för att se hur du kan göra det.
    * Spara CSV-informationen till en fil och importera den till Google Sheets för att se att all data är korrekt.
    * Gör ett pajdiagram i Google Sheets som visar fördelningen av produkter per kategori. Hur kan du gå tillväga för att lösa detta problem? Det finns flera sätt att göra det på.

12. Gå till https://opendata.umea.se/api/explore/v2.1/console
    * Du kan med fördel använda Swagger här för att fokusera på queryparametrarnas värden.
    * Skicka en GET request till /catalog/datasets och välj ut ett dataset som intresserar dig.
    * Använd sedan /catalog/datasetse/{datasetId}/records för att hämta ut data från det datasetet.
    * Testa att använda olika queryparametrar för att filtrera datan. Limit är som standard satt till 10, öka den för att få ut mer data.
    * vad används select till? 
    * hur kan du använda where?
    * hur kan du använda orderby?

### Authorization

Det finns olika sätt att autentisera sig mot ett API. Vanliga metoder är:
* Basic Authentication: Användarnamn och lösenord skickas i HTTP-headern.
* Digest Authentication: En hash av användarnamn och lösenord skickas i HTTP-headern.
* Bearer Token: En token skickas i HTTP-headern för att autentisera användaren.
* Api Key: En unik nyckel som skickas i HTTP-headern eller som en query parameter för att autentisera användaren.
* JWT (JSON Web Token): En token som innehåller information om användaren och signeras
* OAuth2: En lite mer avancerad metod som används för att ge tredjepartsapplikationer tillgång till användardata utan att dela lösenordet. Det är vanligt i sociala medier och andra tjänster.

13. Gå till https://the-one-api.dev/account och signa upp för ett konto. Läs dokumentationen för att se hur du ska använda din API-nyckel.
    * Skapa en GET Request för att hämta ut alla karaktärer.
    * Gör en GET request som hämtar ut info om karaktären Gandalf.
    * Ändra din GET request till att bara hämta ut 10 karaktärer.
    * Hämta ut 50 karaktärer där Race är Human eller Hobbit
    * Hämta de 2 längsta filmerna som vunnit minst 3 Oscar.
    * Hämta ut sidan två med 10 citat från den film som vunnit flest Oscars.

https://docs.hoppscotch.io/documentation/features/authorization

### API -> Google Sheets

#### Köra App Script i Google Sheets
* Öppna ditt kalkylark (eller skapa ett nytt).
* Gå till Tillägg → Apps Script (eller Extensions → Apps Script).
* Klistra in eller skriv din funktion i editorn.
```javascript
function importCSVDataFromAPI() {
  //Hämta CSV från API
  const response = UrlFetchApp.fetch("https://www.exampleapi.com/csvdata");

  //Ta ut http response bodyn och spara i en textvariabel
  const csvText = response.getContentText("UTF-8");

  //Tolka den mottagna texten till rader (komma-separerad som standard)
  const rows = Utilities.parseCsv(csvText);

  //Skriv till google sheets
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName("ApiData") || ss.insertSheet("ApiData");
  sheet.clearContents();

  //Bestäm vilken ruta/område du vill skriva till med getRange(row, column, numRows, numCols)
  //Använd sen setValues för att skriva rader till det området
  sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
}
```
* Spara projektet (Ctrl/Cmd+S) och ge det ett namn.
* Klicka på Kör (▶). Första gången får du auktorisera. Klicka dig igenom dialogerna och välj ditt Google-konto.
* Gå tillbaka till kalkylarket och se resultatet av din funktion.
* För att konfigurera återkommande körning:
    * klicka Klock‑ikonen (Utlösare/Triggers).
    * Klicka på + Add trigger
    * Välj tex Tidsstyrd från "källa"
    * Sätt intervall (t.ex. varannan timme).
    * Spara och godkänn.

14. Gå till https://www.dataportal.se/datasets?q=&f=
    * Hitta API:et för Luftkvalitet i Göteborgs stad.
    * Sätt upp ett App Script som hämtar hem denna data och skriver den till ett Google Sheet.

15. Gör även ett App Script som hämtar hem produktdata från DaAPI i csv-format och skriver den till ett Google Sheet.
    * Sätt scriptet till att köra varannan timme.
    * Gör en formel i Sheets som visar den dyraste och en formel för billigaste produkten.

### JSON -> Google Sheets

```javascript
function importJSON() {

  // 1) Hämta JSON från API
  const response = UrlFetchApp.fetch("https://www.suvnet.se/api/products");

  const data = JSON.parse(response.getContentText()); // i data ligger nu en lista med produktobjekt

  //Hämta en referens till vårt specifika blad i det aktuella Sheetet
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName("json") || ss.insertSheet("json");
  sheet.clearContents(); //tom arket

  // 3) Skriv data till arket
  sheet.getRange(2, 1, data.length, 9).setValues(
    data.map(p => [p.id, p.name, p.description, p.price, p.brand, p.category, p.imageUrl, p.url, p.dateAdded])
  );
}
```
16. Dagens datum
    * I cell A1, skriv texten "Senast uppdaterad:"
    * I cell A2, se till att dagens datum skrivs in
    * Tips: Du behöver ta reda på hur dagens datum kan hämtas med hjälpa av Google Apps Script.

17. Ordertotal
    * Ladda hem alla ordrar från DaAPI (https://suvnet.se/api/orders)
    * Skriv in i ett Google Sheet orderdatum i första kolumnen och ordertotal i andra kolumnen.
    * Tips: Du behöver bara modifera koden ovan på några få ställen...

19. Produktinformation
    * Hämta hem alla produkter från DaAPI (https://suvnet.se/api/products)
    * Skriv produktkategori i första kolumnen
    * Skriv antal produkter i varje kategori i andra kolumnen
    * Skriv genomsnittspris för varje kategori i tredje kolumnen
    * Tips: Du behöver hitta info om hur man räknar förekomster av unika värden i en array i JavaScript.

20. Customers
    * Åldersberäkning: Räkna ut kundernas ålder från birthDate och skriv ut genomsnittlig ålder.
    * Kunder per stad: Gör en tabell som visar hur många kunder som bor i varje stad.
    * Nya kunder senaste 30 dagarna: Filtrera på createdAt och lista de kunderna.

### Google Sheets API

Steg-för-steg: Skapa API-nyckel
Referens: https://developers.google.com/workspace/sheets/api/reference/rest

1. Gå till Google Cloud Console https://console.cloud.google.com/
2. Skapa ett projekt (eller välj ett befintligt).
3. Aktivera Google Sheets API: 
   * I vänstermenyn: APIs & Services → Library.
   * Sök på "Google Sheets API" och klicka på "Enable".
4. Skapa API-nyckeln:
    * I vänstermenyn: APIs & Services → Credentials.
    * Klicka på knappen högst upp -> Create Credentials → API key.
    * Google visar en nyckel som ser ut som "AIzaSyAxb75..."
5. (Valfritt men starkt rekommenderat) Begränsa nyckeln
    * Klicka på din nyckel → Restrict key.
    * Under API restrictions: välj “Restrict key” och markera Google Sheets API.
    * Under Application restrictions: för Postman-tester kan du lämna “None” eller använda IP-begränsningar.
6. Hämta hem ett publikt Google Sheet som du vill använda för tester:
    * GET https://sheets.googleapis.com/v4/spreadsheets/{SPREADSHEET_ID}/values/Sheet1!A1:Z100?key=DIN_API_KEY