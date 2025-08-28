# Simplest Community Connector

Här är exempelkod för en väldigt enkel Community Connector som alltid returnerar tre rader, "bob 1", "bob 2" och "bob 3". Dvs den använder inget API eller så.

Ingen autentisering.

Ingen konfiguration.

En dimension under getSchema (Name av typen STRING (text)).

Den data som returneras från getData är tre rader med "bob 1", "bob 2" och "bob 3".