
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

1. Skriv ett enkelt JSON-objekt som representerar en person med följande egenskaper: namn, ålder.
2. Skapa ett JSON-array som innehåller tre olika böcker, varje bok ska ha titel, författare och publiceringsår.
3. Skriv ett JSON-objekt som representerar en produkt med egenskaper som namn, pris, kategori och tillgänglighet.
4. Till ditt JSON-objekt från övning 3, lägg till en egenskap som anger om produkten är i lager eller inte.
5. Till ditt JSON-objekt från övning 4, lägg till en lista med taggar som beskriver produkten (t.ex. "elektronik", "nyhet", "populär").
