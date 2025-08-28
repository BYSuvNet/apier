# API

Kunskaper:
1. Redogöra för hur API:er och feeds används inom digital analys
# 2. Beskriva grundläggande tekniska begrepp kopplade till API och feeds
3. Känna till vanliga användningsområden för produktfeeds

Färdigheter:
# 4. Genomföra API-anrop för att hämta data från digitala plattformar
5. Strukturera och tolka data från feeds och API-svar (JSON, CSV, XML)
6. Skapa, justera och validera en produktfeed för användning

Kompetens:
# 7. Självständigt använda feed- och API-data som en del i digital analys och rapportering
8. Bedöma och optimera datakvalitet i feedflöden för att förbättra analysresultat och kampanjprestanda

---

* Grundläggande tekniska begrepp:
    * API (Application Programming Interface)
    * JSON (JavaScript Object Notation)
    * Autentisering (API-nycklar, JWT-tokens, OAuth2)
    * HTTP-metoder (GET, POST, PUT, DELETE)
    * Felhantering (HTTP-statuskoder, felmeddelanden)
    * Rate limiting (API-limiteringar)
    * Query-parametrar (filter, sortering, pagination)

* Strukturera och tolka data från feeds och API-svar (JSON, CSV, XML):


### Verktyg / Plattformar
* Postman / curl / vscode
* Google Merchant Center
* Google Sheets
* Looker Studio
* Google Analytics + Google Ad Manager (API integration)

### Autentisering
* api-keys
* jwt token
* cookies
* OAuth2

----
## Veckoplanering 

### V34

#### Tisdag 19 aug 9-16 (p)

* Introduktion till APIer
    * Vad är ett API?
        * API vs UI
            * UI: människa / verkligheten -> syn, hörsel, känsel, smak, lukt 
            * UI: människa / dörr -> handtag i olika former
            * UI: människa /bil -> ratt, gas, broms, växelspak
            * UI: människa / dator-> tangentbord, skärm, mus, touch, röst, kamera, sensorer, tanke (neuralink)
            * UI: människa / program -> knappar, menyer, fält, dialogrutor (ofta påmminner om verkligheten för att vara intuitiva)
            * API: datorer har inte de mänskiliga sinnena, de jobbar bara med data (ettor och nollor) och behöver därför ett gränssnitt som är anpassat för detta istället
    * Skillnad mellan API och feed
        * API:er är interaktiva, de kan ta emot kommandon och returnera data baserat på dessa kommandon.
        * Feeds är mer statiska, de levererar data i ett förutbestämt format utan interaktivitet.
    * Vanliga användningsområden för APIer
        * Appar och webbplatser
        * Smarta hem och IoT-enheter 
        * Sociala medier (X, Facebook, Instagram)
    * Hur fungerar HTTP?
        * HTTP-protokollet: https://developer.mozilla.org/en-US/docs/Web/HTTP
        * Request och Response: första rad, headers, body
        * HTTP-metoder (GET, POST): https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods
        * Statuskoder: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
    * Hur fungerar APIer? API-terminologi
        * Adress, Route, Endpoint
        * Parametrar (mer om detta dag #3)
* APIdokumentation
* Workshop 
    * Tänk igenom er dag från hemmet till skolan, vilka digitala plattformar stöter ni på och vilka APIer kan ni tänka er att de använder? (Vi gjorde tillsammans)
    * Leta efter apier på internet, fundera på var apier kan finnas och hur de används. Hitta exempel på API:er.
    * Vi kollar på hoppscotch.io och grundläggande användning
    * Uppgift: Skriva anrop till x antal definierade APIer
        * 
    * Välj ett API, läs dokumentationen och gör ett anrop: https://github.com/public-apis/public-apis
* Sammanfattning av dagen. Vad har vi lärt oss?

#### Onsdag 20 aug 9-16 (p)
(* JSON-struktur)
* Introduktion till JSON
* Workshop
    * W3 JSON 
    * Hämta JSON från ett API och tolka det
    * Skriva JSON som evalueras till korrekt JSON (Alla olika datatyper, se skillnaderna) 
    * Skriva JSON Looker Studio

#### Torsdag 21 aug 9-16 (p)
* Avancerad API-användning: Query-parametrar och filter, pagination, sortering
* Workshop: Praktisk datainsamling från öppna API:er, dvs 
    * Hämta data från öppna API:er (t.ex. väderdata, nyhetsdata)
    * Använda query-parametrar för att specificera data
* Uppgift #2: Genomföra API-anrop för att hämta och tolka data från valfri digital
plattform (mål 1, 2, 4, 5) – betyg IG/G

### VECKA 35

#### Tisdag 26 aug 9-16 (p)
* Autentisering & säkerhet i API-anrop. API-nycklar, JWT-tokens, HTTP Basic Auth, OAuth2
* Workshop: Autentisering med olika metoder
    * Använda API-nycklar för autentisering
    * Implementera JWT-tokens i API-anrop
    * Grundläggande OAuth2-flöde
* Felhantering
* Workshop: Korrigera felaktiga API-anrop utifrån felkoder

* API-utmaningar & analysflöden
* Datautbyte, API-limiteringar

#### Onsdag 27 aug 9-16 (p)
(* Google Sheets med API-koppling)
* Strukturering av feeddata från API:er
* Bearbetning och strukturering för analys, dvs 
    * Omvandla rådata till användbar information
        * Extrahera relevanta fält
        * Omvandla dataformat (t.ex. från JSON till CSV)
        * Rensa och normalisera data
            * Hantera saknade värden
            * Konvertera datatyper
    * Använda Google Sheets för att strukturera och analysera data
        * Importera data från API till Google Sheets
        * Använda Looker Studio för att visualisera data 
            * Skapa rapporter och dashboards
            * Analysera trender och mönster i datan
                * Identifiera viktiga insikter
                * Jämföra data över tid
                * Presentera resultat på ett tydligt sätt

#### Torsdag 28 aug 9-16 (p)
(* Samla in och tolka data via API:er från t.ex. Google Analytics 4 och Google Ads)
(* Automatisering och praktiska exempel inom digital analys)
* Extra/Repetition/Fördjupning/Catch-up
* Lärarledd handledning #2


---

#### Länkar

Looker Studio:
https://www.youtube.com/watch?v=mRO1JGNlRAk

APIer:
https://www.mockaroo.com/
https://fakeapi.platzi.com/
https://fakestoreapi.com/ 

REST-klienter:
https://www.usebruno.com/
https://hoppscotch.io/
https://www.postman.com/
---


Tisdag 19 aug 9-16 (p)
• API introduktion

Onsdag 20 aug 9-16 (p)
• JSON grundläggande

Torsdag 21 aug 9-16 (p)
• Avancerad användning: Parametrar, filter, pagination, limitering

VECKA 35

Tisdag 26 aug 9-16 (p)
• API-utmaningar &
analysflöden
• Datautbyte, API-limiteringar
• Strukturering av feeddata
från API:er

Onsdag 27 aug 9-16 (p)
• Avancerad API-användning
• Praktisk datainsamling från
öppna API:er
• Bearbetning och
strukturering för analys

Torsdag 28 aug 9-16 (p)
• Extra/Repetition/
Fördjupning/Catch-up
• Lärarledd handledning #2

-------

### APIER INTRO:

* https://api.adviceslip.com/
* https://dummyjson.com/docs/products
* https://docs.zenquotes.io/zenquotes-documentation/
* https://github.com/15Dkatz/official_joke_api -> https://official-joke-api.appspot.com/random_joke

* Polisen: https://polisen.se/api/events
https://polisen.se/om-polisen/om-webbplatsen/oppna-data/api-over-polisens-handelser/
https://polisen.se/om-polisen/om-webbplatsen/oppna-data/regler-for-oppna-data/

### API FILTRERING OCH PAGINATION:

* https://restcountries.com/

#### APIER AUTENTISERING:

* auth header eller OAth: https://www.discogs.com/developers/
* query param api-key: https://openweathermap.org/api
* bearer token: https://the-one-api.dev/documentation
    * se också: https://rike.dev/blog/rest-apis-for-absolute-beginners
* auth key: https://unsplash.com/developers
* Google Sheets API v4: GET https://sheets.googleapis.com/v4/spreadsheets/{SPREADSHEET_ID}

#### GOOGLE SHEETS API:
Steg-för-steg: Skapa API-nyckel
Referense: https://developers.google.com/workspace/sheets/api/reference/rest

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




## Google Sheets räkna grejjer och göra diagram

Räkna ut antalet unika värden i kolumn F i Google Sheets och lista dem
=UNIQUE(F2:F)

Räkna sakerna i kolumn F om de är lika med värdet i cell J2
=COUNTIF(F2:F, J2)

=FILTER(B2:D, D2:D=MAX(D2:D))
Detta returnerar hela raden (namn + pris + ev. fler kolumner) för den dyraste produkten. Om det finns flera med samma maxpris får du flera rader.

### Köra App Script i Google Sheets
1. Öppna ditt kalkylark (eller skapa ett nytt).
2. Gå till Tillägg → Apps Script (eller Extensions → Apps Script).
3. Klistra in eller skriv din funktion i editorn.
4. Spara projektet (Ctrl/Cmd+S) och ge det ett namn.
5. Klicka på Kör (▶). Första gången får du auktorisera. Klicka dig igenom dialogerna och välj ditt Google-konto.
6. Gå tillbaka till kalkylarket och se resultatet av din funktion.
7. För att konfigurera återkommande körning:
    * klicka Klock‑ikonen (Utlösare/Triggers).
    * Klicka på + Add trigger
    * Välj tex Tidsstyrd från "källa"
    * Sätt intervall (t.ex. var timme).
    * Spara och godkänn.

function importCSVDataFromAPI() {
  //Hämta CSV från API
  const response = UrlFetchApp.fetch("https://example.com/airdata.csv");

  //Ta ut http response bodyn och spara i en textvariabel
  const csvText = response.getContentText("UTF-8");

  //Tolka den mottagna texten till rader (komma-separerad som standard)
  const rows = Utilities.parseCsv(csvText);

  //Skriv till google sheets
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName("AirData") || ss.insertSheet("AirData");
  sheet.clearContents();

  //Bestäm vilken ruta/område du vill skriva till med getRange(row, column, numRows, numCols)
  //Använd sen setValues för att skriva rader till det området
  sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
}


### UPPGIFT #2

* Skapa en Collection i Hoppscotch.io som heter "Uppgift #2". 
* Skape ett nytt Environment i Hoppscotch.io, döp det till "Uppgift2"
* Skapa en variabel för BASE_URL och sätt värdet till https://suvnet.se/api. Använd sedan denna variabel i dina requests.
* Skapa en GET Request som hämtar hem alla Reviews för en produkt från DaAPI. (200 OK)
* Skapa en POST Request som skapar en ny Review för en produkt i DaAPI. (201 Created)
* Skapa en DELETE Request som tar bort en Review från DaAPI. Denna kräver att en API-nyckel används, enligt dokumentationen. (204 No Content)

* Lägg till en variabel som heter "apiKey" och sätt värdet till din API-nyckel från Google Cloud som är länkat till Google Sheets.
* Använd Google Sheet API för att hämta värdet i cellen A10 och lagra det i en variabel som heter "cellValue"
* Skapa en GET request som använder variabeln "cellValue" som URL

Kjell och Company via google search "wifi router"
utm_source=google
utm_medium=cpc
utm_campaign=SE | Pmax | Nätverk
gad_source=1
gad_campaignid=21039760489

Webhallen via google search "wifi router"
utm_source=google
utm_medium=cpc
utm_campaign=Pmax | Price_Under_3000
gad_source=1
gad_campaignid=21025599808

NetOnNet via youtube "wifi router"
utm_source=google
utm_medium=cpc
utm_campaign=p-se-netonnet-shopping-supplier-tplink
gad_source=2
gad_campaignid=22872278592
gbraid=0AAAAAD-k_JZrPZoCTKUVyYEdV1ctKh1R_
gclid=EAIaIQobChMIlaikz5KfjwMVzrGDBx2QJTeIEAQYASABEgKlyPD_BwE

Kjell och Company via Youtube "wifi router"
utm_source=google
utm_medium=cpc
utm_campaign=SE | Pmax | Nätverk
gad_source=2
gad_campaignid=21039760489
gbraid=0AAAAADhvoIZ-by3wevYG8nluxOYzVqYZI
gclid=EAIaIQobChMIlaikz5KfjwMVzrGDBx2QJTeIEAQYBiABEgLvC_D_BwE

https://www.lenovo.com/se/sv/workstations/
cid=se:programmatic:rwqtsy
gad_source=2
gad_campaignid=22742696780
gclid=EAIaIQobChMI9Mbm4pOfjwMVVM47Ah284ivUEAEYASAAEgI_efD_BwE

-----

[ ] fixa så ålder kommer in i data till looker
[ ] lägg in costprice i produktdatan så att vi kan räkna ut marginal
[ ] skapa mer ordermockdata så att vi kan jämföra månadsinkomster med varandra tex
[ ] eller kolla vilken åldersgrupp som köper mest och som ger mest marginal
[ ] få in enkel googleads mockdata för att räkna ut ROAS, POAS, CPA