### Grunder

* Operatorer: +, -, *, /
* Jämförelser: =, !=, <, >, <=, >=
* Logik: AND, OR, NOT

### Textfunktioner
| Funktion         | Exempel                   | Resultat      |
| ---------------- | ------------------------- | ------------- |
| `CONCAT(a,b)`    | `CONCAT("Hello ", "Bob")` | `"Hello Bob"` |
| `LEFT(text, n)`  | `LEFT("Banana", 3)`       | `"Ban"`       |
| `RIGHT(text, n)` | `RIGHT("Banana", 2)`      | `"na"`        |
| `UPPER(text)`    | `UPPER("Bob")`            | `"BOB"`       |
| `LOWER(text)`    | `LOWER("Bob")`            | `"bob"`       |
| `LENGTH(text)`   | `LENGTH("Banana")`        | `6`           |

### Villkor (CASE)
```sql
CASE
  WHEN status = 0 THEN "Pending"
  WHEN status = 1 THEN "Paid"
  WHEN status = 2 THEN "Shipped"
  ELSE "Other"
END
```

### Datumfunktioner
| Funktion                     | Exempel                                         | Resultat                              |
| ---------------------------- | ----------------------------------------------- | ------------------------------------- |
| `YEAR(date)`                 | `YEAR(OrderDate)`                               | `2025`                                |
| `MONTH(date)`                | `MONTH(OrderDate)`                              | `8`                                   |
| `WEEK(date)`                 | `WEEK(OrderDate)`                               | `34`                                  |
| `DAY(date)`                  | `DAY(OrderDate)`                                | `23`                                  |
| `DATETIME_DIFF(d1, d2, DAY)` | `DATETIME_DIFF(CURRENT_DATE(), OrderDate, DAY)` | Antal dagar mellan idag och OrderDate |
| `TODATE(text, "YYYY-MM-DD")` | `TODATE("2025-08-23", "YYYY-MM-DD")`            | Konverterar text till datum           |


### Aggergeringsfunktioner
| Funktion            | Exempel                      | Resultat    |
| ------------------- | ---------------------------- | ----------- |
| `SUM(x)`            | `SUM(TotalAmount)`           | Totalsumma  |
| `AVG(x)`            | `AVG(Price)`                 | Medelvärde  |
| `COUNT(x)`          | `COUNT(CustomerId)`          | Antal       |
| `COUNT_DISTINCT(x)` | `COUNT_DISTINCT(CustomerId)` | Antal unika |

