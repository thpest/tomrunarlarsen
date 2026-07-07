// ---------------------------------------------------------------------------
//  Felles funksjoner for diktnettstedet
// ---------------------------------------------------------------------------

/* Hent hele datafila (poet + dikt). Cache-buster så nye dikt vises raskt. */
async function hentData() {
  const url = window.KONFIG.datafil + "?t=" + Date.now();
  const svar = await fetch(url, { cache: "no-store" });
  if (!svar.ok) throw new Error("Klarte ikke å laste dikt (" + svar.status + ")");
  return svar.json();
}

/* Lag en URL-vennlig id fra en tittel: "Til mor" -> "til-mor" */
function lagId(tittel) {
  return (tittel || "")
    .toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "o").replace(/å/g, "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "dikt";
}

/* Escape tekst for trygg innsetting i HTML */
function trygg(t) {
  const d = document.createElement("div");
  d.textContent = t == null ? "" : String(t);
  return d.innerHTML;
}

/* Vis en kort metadatalinje for et dikt (år / tema), hopper over tomme felt */
function metaTekst(d) {
  const deler = [];
  if (d.dato) deler.push(d.dato);
  if (d.tema) deler.push(d.tema);
  return deler.join(" · ");
}

/* Base64 <-> UTF-8 (trygt for æ ø å) — brukes ved lagring til GitHub */
function utf8TilBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}
function base64TilUtf8(b64) {
  return decodeURIComponent(escape(atob(b64.replace(/\s/g, ""))));
}
