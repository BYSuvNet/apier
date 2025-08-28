## Övningar

* Orders per kund
* Totalt ordervärde denna månad jämfört med förra månaden
* Skapa segmentering: Kundsegment baserat på ordervärde: Över 50 000 = "Guld", Över 10 000 = "Silver" annars "Brons"
* Hur många nya kunder har vi jämfört med återkommande?

// Skapa ordermockdata:

Utgå från denna orderstruktur samt listorna på produkter och kunder.
Orderlista som skall genereras ser ut så här:
[
  {
    "id": 1,
    "customerId": 50,
    "orderDateUtc": "2025-08-23T11:29:32.9141785Z",
    "items": [
      {
        "id": 1,
        "orderId": 1,
        "productId": 1,
        "quantity": 2,
        "price": 496.21
      }
    ],
    "totalAmount": 992.42,
    "currency": "SEK",
    "status": 0
  }
]
Här är alla kund-id:n med deras ålder och stad:
Här är alla produkt-id:n med deras pris och kategori.
40% av alla kunder skall ha bara 1 order, 20 % ska ha 2, 10 ska ha 3, resterande 30 % ska ha mellan 4 och 20 ordrar, i avtagande grad. Det ska finnas kunder utan ordrar.
De flesta ordrar ska ha 1 produkt, och gradvis färre ska ha upp till 10 produkter. Olika kunder ska vara intesserade av olika produktkategorier. De flesta har quantity 1, men vissa kan ha flera av samma produkt i en order, men aldrig fler än 3 av samma produkt i en order.
Ordrarna ska vara utspritt jämnt från januari 2024 till augusti 2025, fler ordrar skall läggas under april och maj, och strax innan jul. 
Status 0 = Pending, 1 = Paid, 2 = Shipped, 3 = Delivered, 4 = Cancelled. De flesta ordrar ska vara Paid eller Shipped, några få Pending och ännu färre Cancelled.
Generera totalt 2000 ordrar.