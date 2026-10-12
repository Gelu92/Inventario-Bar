# Inventario Bar

App per l'inventario del bar che funziona nel browser e si installa sul telefono (PWA). I dati restano salvati sul dispositivo.

## Funzioni

- Categorie e prodotti da aggiungere, modificare ed eliminare
- Per ogni prodotto: cartoni (CT), pezzi sciolti (PZ), bottiglie (BT), pezzi per cartone e scorta minima
- Avviso "Sotto scorta" quando il totale arriva alla scorta minima o scende sotto, con filtro rapido
- Prodotti ordinati per categoria e poi per quantità decrescente (oppure per nome)
- Ordine delle categorie a scelta, con le frecce nella scheda Categorie
- Mentre modifichi le quantità i prodotti restano fermi: la lista si riordina con il pulsante **Aggiorna**, dopo il tempo scelto nelle Impostazioni, oppure quando esci dall'app
- Scheda **Ordine**: prodotti sotto scorta divisi per fornitore, con quantità da ordinare e invio su WhatsApp
- Scheda **Lista** (rinominabile) per appunti con voci da spuntare, esportabile in PDF, Excel o WhatsApp
- Tasto **Annulla** per l'ultima modifica
- Bottiglie aperte a frazioni (¼, ½, ¾)
- Esportazione in PDF ed Excel
- Lingue: italiano, inglese, spagnolo, francese, tedesco
- Aspetto a scelta: tema automatico, chiaro o scuro e sei colori (ambra, blu, verde, viola, turchese, grafite)
- Pulsante **Installa** per mettere l'app sul telefono
- Backup e ripristino dei dati in un file JSON, con promemoria automatico
- **Storico e consumi**: chiudi l'inventario (per esempio ogni settimana) e vedi quanto hai consumato di ogni prodotto; "Merce arrivata" nella scheda Ordine carica la merce e la conta negli arrivi
- Al primo avvio scegli se partire con l'esempio o con l'inventario vuoto
- Funziona anche offline dopo la prima apertura

## Pubblicare su GitHub Pages

1. Crea un nuovo repository su GitHub (per esempio `inventario-bar`).
2. Carica **tutti i file** di questa cartella nella radice del repository (**Add file → Upload files**), comprese le quattro immagini `icon-192.png`, `icon-512.png`, `maskable-512.png` e `apple-touch-icon.png`. Non ci sono sottocartelle.
3. Vai in **Settings → Pages**, alla voce *Source* scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`, e salva.
4. Dopo un minuto l'app è online su `https://TUO-NOME.github.io/inventario-bar/`.

## Installare sul telefono

- **Android** (Chrome, Edge, Samsung Internet): apri l'indirizzo e tocca **Installa** in alto o in Impostazioni.
- **iPhone/iPad**: Apple non permette l'installazione con un pulsante. Apri l'indirizzo in Safari, tocca Condividi e poi *Aggiungi alla schermata Home*.

## Aggiornare l'app

Dopo aver modificato i file, cambia il numero in `sw.js` (`inventario-bar-v6` → `v7`) così i telefoni scaricano la nuova versione.
