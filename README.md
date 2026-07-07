# Tom Runar Larsen – diktnettsted

Et enkelt, statisk nettsted som samler diktene til Tom Runar Larsen
(f. 5. oktober 1960, Fredrikstad). Ingen server og ingen database – bare
HTML/CSS/JS og en datafil. Publiseres via **GitHub Pages**.

Tom kan legge til, endre og slette dikt selv via siden **Skriv**, som lagrer
rett til repoet med en personlig GitHub-nøkkel.

## Filer

```
index.html        Forside: presentasjon + liste over alle dikt (med søk)
dikt.html         Viser ett dikt (dikt.html?id=…) med egen delbar URL
skriv.html        Toms innloggingsside for å legge til/endre dikt
config.js         Eier/repo/gren – endre hvis repoet flyttes
css/stil.css      Utseende (rolig, litterær stil)
js/app.js         Delte funksjoner
data/dikt.json    ALLE dikt + presentasjonen (eneste «database»)
bilder/           Portrett av Tom
dikt/             Opprinnelige PDF-er (arkiv – ikke brukt av nettstedet)
```

Datamodellen i `data/dikt.json`:

```json
{
  "poet": { "navn": "...", "presentasjon": "...", "inspirasjon": "...", "bilde": "bilder/..." },
  "dikt": [ { "id": "til-mor", "tittel": "Til mor", "dato": "2009", "tema": "familie", "tekst": "…" } ]
}
```

Hvert dikt får sin egen delbare adresse, f.eks. `dikt.html?id=til-mor`.

## Publisere på GitHub Pages (én gang)

1. Lag et repo `tomrunarlarsen` på kontoen `thpest`.
2. Last opp innholdet i denne mappa til repoet.
3. **Settings → Pages → Build and deployment → Deploy from a branch**,
   velg `main` og mappe `/ (root)`.
4. Siden blir tilgjengelig på `https://thpest.github.io/tomrunarlarsen/`.

Hvis brukernavn eller reponavn er annerledes, endre `config.js`.

## Legge til dikt (Tom)

1. Gå til `…/skriv.html`.
2. Lim inn en GitHub-nøkkel (fine-grained personal access token) med
   **Contents: Read and write** kun på repoet `tomrunarlarsen`. Se hjelpen
   nederst på skrivesiden. Nøkkelen lagres bare i Toms egen nettleser.
3. Skriv diktet, trykk **Lagre dikt**. Det vises på forsiden etter kort tid
   (GitHub Pages bruker vanligvis noen sekunder til et par minutter).

## Merknad om de opprinnelige diktene

PDF-ene i `dikt/` er skannede bilder uten tekstlag. De endelige diktene
legges inn som tekst av Tom (via Skriv). PDF-ene beholdes kun som arkiv.
Portrettet `bilder/tom_runar_larsen.png` er ~3 MB og kan med fordel
komprimeres for raskere lasting.
