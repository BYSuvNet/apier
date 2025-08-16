
# JSON:
JSON (JavaScript Object Notation) är ett lättviktigt datautbytesformat som är enkelt för människor att läsa och skriva, och enkelt för maskiner att tolka och generera. JSON används ofta för att överföra data mellan en server och en webbapplikation.

JSON är uppbyggt av nyckel-värde-par (Key-Value Pairs) som separeras med ett kolon. 
Nyckeln är en textsträng och måste vara omgivet av citationstecken.
Värdet kan vara en sträng, ett tal, ett booleskt värde, ett objekt, en array eller null. Här är ett exempel på en JSON-struktur:

```json
{
    "textegenskap": "text som kan vara hur långt som helst",
    "nummeregenskap": 12345.67,
    "booleskeegenskap": true,
    "objektegenskap": {
        "underobjekt1": "värde1",
        "underobjekt2": "värde2"
    },
    "listegenskap": [
        "värde1",
        "värde2",
        "värde3"
    ],
    "nullvärde": null
}
```

# Övningar

Använd denna online-editor när du skriver JSON: [JSON Editor](https://jsoneditoronline.org/#left=local.weguje)

1. Skriv ett enkelt JSON-objekt som representerar en person med följande egenskaper: namn, ålder.
2. Skapa ett JSON-array som innehåller tre olika böcker, varje bok ska ha titel, författare och publiceringsår.
3. Skriv ett JSON-objekt som representerar en produkt med egenskaper som namn, pris, kategori och tillgänglighet.
4. Till ditt JSON-objekt från övning 3, lägg till en egenskap som anger om produkten är i lager eller inte.
5. Till ditt JSON-objekt från övning 4, lägg till en lista med taggar som beskriver produkten (t.ex. "elektronik", "nyhet", "populär").
6. Hitta och rätta felet i följande JSON-struktur:
```json
{
  "title": "Book Title",
  "author": John Doe,
  "year": 2020
}
```
7. Skriv JSON för en boklista med två böcker, där varje bok har titel, författare, år och en array med genrer.
8. Ändra så att pris är ett tal och inStock är en boolean enligt JSON-standard.
```json
{
  "product": "Laptop",
  "price": "999.99",
  "inStock": "true"
}
```
9. Slå ihop dessa två till ett enda JSON-objekt.
```json
{ "id": 1, "name": "Lisa" }
{ "email": "lisa@example.com", "age": 29 }
```
10. Skapa ett JSON-objekt som representerar en film med egenskaper som titel, regissör, år och en array med skådespelare.
11. Skriv om följande XML till JSON:
```xml
<pet>
  <name>Max</name>
  <type>Dog</type>
  <race>Labrador Retriever</race>
  <age>5</age>
  <vaccinated>true</vaccinated>
</pet>
```
12. Skriv om följande XML till JSON:
```xml
<person id="123" role="admin">
    <name>Alice</name>
    <age>25</age>
</person>
```
12. Vilka skillnader finns det mellan JSON och XML? Nämn minst tre.
13. Skriv om följande CSV till JSON:
```csv
name,description,ingredients, price
"Pizza Margherita","Classic pizza","tomato sauce, mozzarella, basil",8.99
"Caesar Salad","Fresh salad with romaine lettuce and dressing","romaine lettuce, croutons, Caesar dressing",6.49
```
14. Vilka skillnader finns det mellan JSON och CSV?