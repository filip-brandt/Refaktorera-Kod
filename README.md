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
- [x] Dokumentation
- [x] Tillgänglighet (bilder)
- [x] Tillgänglighet (HTML-kod)
- [x] Refaktorera funktioner
- [x] Eliminera onödig kod
- [x] Rensa bort kod som inte ska sättas
- [x] Infoga skärmdumpar på commit-meddelanden i README-filen
- [x] Infoga skärmdumpar på branches i README-filen
  
VG
- [ ] Rätt sak på rätt plats
- [ ] Hantera loggning på ett effektivt sätt
- [ ] Gör en tillgänglighetsgranskning av sidan
- [x] Utnyttja features i Sass i CSS:en
- [ ] Rensa bort paket som inte används
- [ ] Hantera fel i API-anropet
- [ ] Gör en Lighthouse-analys
- [ ] Läs av utvecklingsmiljön
- [x] Enhetlig syntax i CSS:en
- [ ] Publicera sidan på GitHub pages

## SR Humorprogram - Podcast explorer

En modern webbapplikation som hämtar och presenterar humorprogram från Sveriges Radios öppna API. Användaren kan enkelt bläddra bland programmen, läsa beskrivningar och navigera direkt till lyssningssidan.  

<img width="1705" height="949" alt="webbsidans startsida med ett rutnät av programkort för SR:s humorprogram." src="https://github.com/user-attachments/assets/cdf8e5a0-9113-4d94-a756-642fd7a5a8dd" />

## Tekniker och Verktyg

[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#)
[![Sass](https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](#)
[![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff)](#)

### Kom igång

Följ dessa steg för att köra projektet lokalt på din dator:

* **Klona projektet:** Kör `git clone https://github.com/Medieinstitutet/fed25d-arbetsmetodik-inl-1-filip-brandt` för att klona repot till din text editor.
* **Installera program** Kör `npm install` för att installera programmen som krävs för att projektet ska fungera.
* **Starta projektet** Kör `npm run dev` för att starta projektet i utvecklingsmiljön.

### Kodstandard och Kvalitet (ESLint)

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

### HTML Validering

<img width="1699" height="869" alt="html-valideringsresultat som visar noll fel" src="https://github.com/user-attachments/assets/84127081-6830-4e2f-a2fb-355435d03327" />

### Commit Historik
<img width="1710" height="950" alt="commit historik lista del 1 av 4" src="https://github.com/user-attachments/assets/5bb86a0f-d243-4907-b184-94282429bd56" />
<img width="1710" height="952" alt="commit historik lista del 2 av 4" src="https://github.com/user-attachments/assets/e6823c94-c7ca-4779-8869-f0aef5bfaed5" />
<img width="1710" height="914" alt="commit historik lista del 3 av 4" src="https://github.com/user-attachments/assets/45175935-ea84-478a-bf38-8229b25852f6" />
<img width="1710" height="681" alt="commit historik lista del 4 av 4" src="https://github.com/user-attachments/assets/3841a317-83f6-4a4b-98d9-0bc663b70623" />

### Branches
<img width="1710" height="949" alt="lista av alla branches" src="https://github.com/user-attachments/assets/bc4aabde-bb86-45a8-a1b2-5d6e1ee4cbb0" />
