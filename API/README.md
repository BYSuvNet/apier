# API

WebAPIer är ett sätt program kan kommunicera med varandra över internet. API:er används ofta för att hämta data från en server, skicka data till en server eller utföra operationer på servern.

Ofta nämns RESTful API:er. Det är en stil för att designa API:er som använder HTTP-protokollet. Det som kännetecknar ett REST API är:
* Det använder HTTP-metoder som GET, POST, PUT, DELETE för att utföra operationer.
* Det använder URL:er för att identifiera resurser.
* Det returnerar data i format som JSON, XML, CSV eller egentligen vad som helst som tjänsten är till för att leverera (Kartmaterial är tex vanligt).

Några ord som är bra att känna till:
* **URL**: Den kompletta adressen till en resurs på internet. T.ex. `https://api.example.com/users` är en URL som pekar på en lista med användare.
* **Endpoint**: Den delen av URL:en som pekar på en specifik resurs eller funktion i API:et. T.ex. `/users` kan vara en endpoint som returnerar en lista med användare.
* **Route**: Den del av URL:en som definierar vägen till en resurs. T.ex. `/users/123` där `123` är ID:t för en specifik användare.
* **Metod**: HTTP-metoden som används för att göra en begäran, t.ex. GET för att hämta data och POST för att skicka data.
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

6. Hitta något api i denna lista https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/ och:
    * Undersök om api:et har någon dokumentation. Om ja, titta på den.
    * Gör en valfri GET request till det api:et. Vad får du tillbaka för data? I vilket format är den?
    * Hämta en specifik resurs om möjligt, hitta annars ett annat api som stöder det (t.ex. en användare, ett inlägg, en produkt).
    * Har api:et någon POST-funktionalitet? Om ja, testa att skicka data.

7. Hittar du något api som skickar tillbaka data som skulle gå att visualisera/analysera eller göra någon form av statistik på? Hur skulle du då tex kunna göra för att göra en graf i Google Sheets med den datan?

### POST Requests

8. Gör en första POST request till PTSV3
    * Gå till https://ptsv3.com/ och skapa en ny "bin" (det är en temporär endpoint som du kan skicka data till).
    * Gör en POST request och skicka lite jsondata till din nyligen skapade endpoint.
    * Titta på sidan för din endpoint och se om datan kom fram. Vad får du tillbaka för svar från servern? Vad betyder det?

9. Skicka Todo-data till jsonplaceholder
    * Gå till https://jsonplaceholder.typicode.com
    * Kolla dokumentationen hur du skickar en todo
    * Skicka med ett JSON-objekt som innehåller namn, email och adress.
    * Vad får du tillbaka? Vad betyder det?

10. DataAnalysAPI på suvnet.se! Detta API kan komma att justeras under kursens gång. Kom gärna med förslag på förbättringar! Gå till http://suvnet.se för att se dokumentationen för detta api.
* Gör en första GET request till https://suvnet.se/api/products och titta på datan som returneras. Vad innehåller den? Hur ser den ut?
* Vad brukar det finnas för data i ett produktobjekt? Borde vi lägga till något?
* Vad mer kan finnas i ett sånt här system som skulle kunna bli relevant senare?
* Gör en POST request till https://suvnet.se/api/products för att lägga till en ny produkt till databasen. Hur ska du göra den så att det fungerar? Dvs, returnerar 201 Created?
* Vad händer om du försöker skapa en produkt med felaktig data?

11. Lägg till en ny kund i databasen.
    * Undersök hur befintlig data ser ut med en GET request till https://suvnet.se/api/customers
    * Skapa en POST request som lägger till en ny kund.
    * Validera att det gick bra genom att se att statuskoden är 201 Created och att du kan hämta ut kunden med en GET request (Det räcker att hämta ut den specifika kunden med kundens id, inte alla kunder).

12. Undersök recensioner för en produkt. Kanske finns det inga. Prova i så fall att lägga till en till produkten med id 1.
* Vad får du för resultat om du försöker hitta recensioner för en produkt som inte har några? Vad betyder det?
* Vad händer om du försöker ge för hög eller låg rating? Tex -5 eller 100.

13. Du kan hämta hem alla ordrar med en GET request till https://suvnet.se/api/orders. Titta på datan som returneras. Går det att lägga en ny order till systemet via APIet?

14. Testa hur servern reagerar på felaktiga anrop. 
* skicka POST requests utan body
* med felaktig content-type satt
* felaktigt formaterad json data.
Vilka felkoder får du? 

### Query Parameters

I REST API:er finns olika sätt att påverka vilken data som hämtas. Vanligt är att skicka olika typer av "parametrar" i URL:en. De olika typerna är:
* Route parameters: Dessa är en del av URL:en och används för att specificera vilken resurs som ska hämtas. T.ex. `/users/123` där `123` är ID:t för en specifik användare. Dessa har du redan använt i tidigare övningar.
* Query parameters: Dessa läggs till i slutet av URL:en efter ett frågetecken `?` och används för att filtrera eller sortera data. T.ex. `/users?age=30&sort=name` där `age` och `sort` är query-parametrar. API:et måste vara designat för att hantera dessa parametrar, så det är inte alltid det fungerar.
* Header parameters: Dessa skickas med i HTTP-headern och används ofta för autentisering för att skicka med lösenord eller något som säger att man har rätt att accessa API:et. 

https://api.example.com/users?agemin=20&agemax=30&sort=name  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──┘ └─────────────────────┘  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resurs      queryparametrar

I följande övningar kommer du att använda query parameters för att hämta specifik data.

1. Gå till https://api.nasa.gov/ och klicka in dig på "Asteroids - NeoWs".
* Använd APIet för att hämta hem alla asteroider som passerade jorden under det kommande dygnet. Finns det någon som är större än 1 km i diameter? Finns det någon som är farlig för vår överlevnad?

Var extra uppmärksam på att du behöver skicka med en API-nyckel i din GET request, samt att du behöver ange ett datumintervall för att få data. Läs dokumentationen noga.

2. The Guthenberg Project
    * För att klara dessa uppgifter behöver du ta dokumentationen till hjälp: https://gutendex.com
    * Hämta böcker skrivna av Shakespeare
    * Hur många svenska böcker finns det och vilken är den mest nedladdade?
    * Vilken var den första boken som lades till i databasen?
    * Hur många engelska böcker med copyright finns det contra utan copyright?
    * Vilken var den första svenska boken på temat 'adventure' som lades till?

3. Gör en GET request till DaAPI för att hämta produkter i CSV-format! Kolla [förstasidan](https://suvnet.se) för att se hur du kan göra det.
    * Spara CSV-informationen till en fil och importera den till Google Sheets för att se att all data är korrekt.
    * Gör ett pajdiagram i Google Sheets som visar fördelningen av produkter per kategori. Hur kan du gå tillväga för att lösa detta problem? Det finns flera sätt att göra det på.

4. Gå till https://opendata.umea.se/api/explore/v2.1/console
    * Du kan med fördel använda Swagger här för att fokusera på queryparametrarnas värden. (SWAGGER?!)
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

1. Gå till https://the-one-api.dev/account och signa upp för ett konto. Läs dokumentationen för att se hur du ska använda din API-nyckel.
    * Skapa en GET Request för att hämta ut alla karaktärer.
    * Gör en GET request som hämtar ut info om karaktären Gandalf.
    * Ändra din GET request till att bara hämta ut 10 karaktärer.
    * Hämta ut 50 karaktärer där Race är Human eller Hobbit
    * Hämta de 2 längsta filmerna som vunnit minst 3 Oscar.
    * Hämta ut sidan två med 10 citat från den film som vunnit flest Oscars.

https://docs.hoppscotch.io/documentation/features/authorization

### CSV API -> Google Sheets

#### Köra App Script i Google Sheets
* Öppna ditt kalkylark (eller skapa ett nytt).
* Gå till Tillägg → Apps Script (eller Extensions → Apps Script).
* Klistra in eller skriv din funktion i editorn.
```javascript
function importCSVDataFromAPI() {
  //Hämta CSV från ett API såhär (du kommer behöva ändra URL:en)
  Detta kommando skapar ett HTTP GET request, skickar den och tar emot svaret, och lagrar den i variabeln response.
  const response = UrlFetchApp.fetch("https://www.exampleapi.com/csvdata");

  //Ta ut bodyn från svaret och spara i en textvariabel
  const csvText = response.getContentText("UTF-8");

  //Tolka den mottagna texten som låg i bodyn till rader (komma-separerad som standard)
  const rows = Utilities.parseCsv(csvText);

  //Skriv raderna till google sheets
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

1. Gå till https://www.dataportal.se/datasets?q=&f=
    * Hitta API:et för Luftkvalitet i Göteborgs stad.
    * Sätt upp ett App Script som hämtar hem denna data och skriver den till ett Google Sheet.

2. Gör även ett App Script som hämtar hem produktdata från DaAPI i csv-format och skriver den till ett Google Sheet.
    * Sätt scriptet till att köra varannan timme.
    * Gör en formel i Sheets som visar den dyraste och en formel för billigaste produkten.

### JSON API -> Google Sheets

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
 **sheet.getRange(2, 1, data.length, 9)** betyder: börja skriva i rad 2, kolumn 1, skriv så många rader som det finns i data (data.length), skriv 9 kolumner i bredd

 **setValues(...)** tar en lista med listor och skriver in dem i det angivna området i arket.

 **const cell = sheet.getRange('A2')** är ett alternativt sätt att ange en cell eller ett område.
 ** cell.setValue("text")** skriver in "text" i cellen.


1. Dagens datum
    * I cell A1, skriv texten "Senast uppdaterad:"
    * I cell A2, se till att dagens datum skrivs in
    * Tips: Du behöver ta reda på hur dagens datum kan hämtas med hjälpa av Google Apps Script.

2. Ordertotal
    * Ladda hem alla ordrar från DaAPI (https://suvnet.se/api/orders)
    * Skriv in i ett Google Sheet orderdatum i första kolumnen och ordertotal i andra kolumnen.
    * Tips: Du behöver bara modifera koden ovan på några få ställen...

3. Produkter under 100 kr
    * Ladda hem alla produkter från DaAPI (https://suvnet.se/api/products)
    * Lista bara produkter under 100 kr i ett Google Sheet
    * Tips: Du behöver använda JavaScript-metoden filter() för att lösa detta.

4. Produktinformation
    * Hämta hem alla produkter från DaAPI (https://suvnet.se/api/products)
    * Skriv produktkategori i första kolumnen
    * Skriv antal produkter i varje kategori i andra kolumnen
    * Skriv genomsnittspris för varje kategori i tredje kolumnen
    * Tips: Du behöver hitta info om hur man räknar förekomster av unika värden i en array i JavaScript.

5. Customers
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