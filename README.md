# Moment 1 - Server-baserad Webbutveckling

## Uppgift:
  - Data ska lagras i valifri relationsdatabas, som exempelvis SQLite eller MySQL/MariaDb.
  - Det ska finnas ett formulär för att lagra nya kurser och en sida som visar alla kurser som lagrats i databasen.

### Webbsidor:
  - Startsida / Visa kurser
        En sida som visar alla kurser som lagrats i databasen. 
        För varje kurs ska kurskod, kursnamn, kursplan samt kursprogression visas. 
        Det ska även finnas en länk för att radera kursen. 
        (Att kunna uppdatera en kurs är valfritt att implemtera)
  - Lägg till kurs
        En sida med ett formulär för att lägga till en ny kurs. 
        Formuläret ska innehålla fälten "Kurskod", "Kursnamn", "Kursplan" och "Kursprogression". 
        När användaren skickar formuläret ska informationen lagras i databasen.
        Saknas information skall ett tydligt felmeddelande ges till användaren.
  - Om sidan
        En sida som beskriver webbplatsen och dess syfte, samt information om vilken databas-server som använts.
        Skriv även om slutsatser du dragit av uppgiften.

## Databas:
  - Inlägg ska lagras i en relationsdatabas. Minst en tabell ska skapas för att lagra data.
  - I förslaget är det då tänkt att vardera fält ska innehålla:
    - id - ett löpnummer som primärnyckel för respektive post
    - coursecode - kurskod, exempelvis "DT207G"
    - coursename - namnet på kursen, exempelvis "Backend-baserad webbutveckling"
    - syllabus - länk till kursplanen för kursen, exempelvis "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT207G/"
    - progression - vilken progressions kursen har (vanligtvis A eller B), exempelvis "B"
   

## Server & Webbplats:
- Skapa en server med Node.js och Express. Skapa sedan en webbplats med hjälp av Express och en "view engine" (t.ex. EJS eller Pug).

- Skapa webbplatsen med valfri design.
  - Tydligt och lättanvänt gränssnitt
  - Fungerar väl på stor & liten skärm
  - Bra responsiv design
  - Väl fungerande navigations-system.

## Funktionella krav:
  1. En fungerande webbplats har skapats där besökare kan se lagrade kurser samt lägga till nya.
  2. Att en databas med lämpliga tabeller har skapats, tillsammans med ett ER-digram som beksriver dess uppbyggnad.
  3. Att data för kurser lagras i databas med hjälp av SQL.
  4. Att input från formulär valideras innan lagring i databas, samt att användaren får tydliga felmeddelanden om något är fel eller saknas.
  5. Detta måste valideras på serversidan
  6. Att webbplatsen skapats med korrekt HTML- och CSS-kod.

Källkoden ska vara väl kommenterad, och publicerad till ett Github repository tillsammans med ER-diagram och export av databas/installations-skript.
