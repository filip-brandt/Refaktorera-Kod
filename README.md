# Uppgifter
G
- [x] Få projektet att funka
- [x] CSS till Sass
- [x] Enhetlig namngivning i CSS:en
- [x] Konvertera till TypeScript
- [x] Enhetlig kodkvalitet
- [x] Mobilvyn
- [x] Språk
- [x] Rensa loggning
- [ ] Dokumentation
- [ ] Tillgänglighet (bilder)
- [ ] Tillgänglighet (HTML-kod)
- [ ] Refaktorera funktioner
- [ ] Eliminera onödig kod
- [ ] Rensa bort kod som inte ska sättas
- [ ] Infoga skärmdumpar på commit-meddelanden i README-filen
- [ ] Infoga skärmdumpar på branches i README-filen
  
VG
- [ ] Rätt sak på rätt plats
- [ ] Hantera loggning på ett effektivt sätt
- [ ] Gör en tillgänglighetsgranskning av sidan
- [ ] Utnyttja features i Sass i CSS:en
- [ ] Rensa bort paket som inte används
- [ ] Hantera fel i API-anropet
- [ ] Gör en Lighthouse-analys
- [ ] Läs av utvecklingsmiljön
- [ ] Enhetlig syntax i CSS:en
- [ ] Publicera sidan på GitHub pages

## Kodstandard och Kvalitet (ESLint)

För att säkerställa en enhetlig kodstandard använder projektet **ESLint** tillsammans med **typescript-eslint**.

### Varför har vi introducerat detta?
*   **Enhetlighet:** Vi minskar skillnader i kodstil mellan olika utvecklare.
*   **Kvalitetssäkring:** Verktyget fångar vanliga fel och riskmönster i JavaScript/TypeScript.
*   **Effektivitet:** Konfigurationen ignorerar byggfiler (`dist`) och externa bibliotek (`node_modules`).

### Hur du använder verktyget:

*   **Kontrollera koden:** Kör `npm run lint` för att se varningar och fel i projektet.
*   **Automatiska rättningar:** Kör `npm run lint:fix` för att automatiskt rätta det som är autofixbart enligt aktiva regler.
*   **TypeScript-kontroll:** Kör `npx tsc --noEmit` för att kontrollera typer separat från ESLint.

### Konfiguration
Projektet använder flat config i `eslint.config.js` med:

*   `@eslint/js` rekommenderade regler.
*   `typescript-eslint` rekommenderade regler.
*   Browser-globals via `globals`.
*   Egna regler:
	*   `@typescript-eslint/no-unused-vars`: `warn`
	*   `@typescript-eslint/no-explicit-any`: `warn`

Det innebär att vissa kodkvalitetsproblem visas som varningar i stället för att stoppa arbetsflödet.

