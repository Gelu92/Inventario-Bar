(function () {
  'use strict';

  var KEY = 'barInventory.v1';
  var FIELDS = ['ct', 'pz', 'bt'];
  var LANGS = { it: 'Italiano', en: 'English', es: 'Español', fr: 'Français', de: 'Deutsch' };

  var I18N = {
    it: {
      appName: 'Inventario Bar', tabInv: 'Inventario', tabCats: 'Categorie', tabSet: 'Impostazioni',
      refresh: 'Aggiorna', refreshIn: 'Aggiorna {s}s', listUpdated: 'Lista riordinata',
      pdf: 'Esporta PDF', installShort: 'Installa', search: 'Cerca prodotto…', lowOnly: 'Sotto scorta', addShort: 'Prodotto',
      newProduct: 'Nuovo prodotto', editProduct: 'Modifica prodotto', name: 'Nome', category: 'Categoria',
      ct: 'Cartoni', pz: 'Pezzi sciolti', bt: 'Bottiglie', ctS: 'CT', pzS: 'PZ', btS: 'BT',
      perCt: 'Pezzi per cartone', perCtHint: 'Serve per calcolare il totale. Lascia 0 se il prodotto non ha cartoni.',
      min: 'Scorta minima', minHint: 'Avviso quando il totale arriva a questo valore o scende sotto. 0 = nessun avviso.',
      totS: 'totale', minS: 'min {n}', lowBadge: 'Sotto scorta',
      save: 'Salva', cancel: 'Annulla', del: 'Elimina', delConfirm: 'Conferma eliminazione',
      nProducts: '{n} prodotti', nLow: '{n} sotto scorta',
      emptyCat: 'Nessun prodotto in questa categoria.', noCats: 'Non ci sono ancora categorie.', goCats: 'Crea una categoria',
      noResults: 'Nessun prodotto trovato.',
      catsHint: 'Usa le frecce per scegliere l’ordine delle categorie nell’inventario e nel PDF.',
      newCat: 'Nuova categoria', editCat: 'Modifica categoria', catDelWarn: 'Verranno eliminati anche {n} prodotti di questa categoria.',
      up: 'Sposta su', down: 'Sposta giù', edit: 'Modifica',
      lang: 'Lingua', listSec: 'Riordino della lista', delay: 'Dopo una modifica, riordina la lista',
      manual: 'Solo con il pulsante Aggiorna', secs: 'dopo {n} secondi',
      delayHint: 'Mentre modifichi, i prodotti restano fermi al loro posto. La lista si riordina anche quando esci dall’app.',
      sort: 'Ordine dei prodotti', sortQty: 'Quantità, dalla più alta', sortName: 'Nome, dalla A alla Z',
      installSec: 'Installazione', install: 'Installa sul telefono', installed: 'App installata su questo dispositivo.',
      installIOS: 'Su iPhone e iPad Apple non consente l’installazione con un pulsante: tocca Condividi e poi “Aggiungi alla schermata Home”.',
      installWait: 'Il pulsante si attiva quando apri l’app dal suo indirizzo GitHub Pages con Chrome, Edge o Samsung Internet.',
      backup: 'Backup', exportJson: 'Scarica backup', importJson: 'Ripristina backup', imported: 'Backup ripristinato', badFile: 'File di backup non valido',
      data: 'Dati', reset: 'Cancella tutti i dati', resetConfirm: 'Tocca ancora per cancellare tutto', resetDone: 'Dati cancellati',
      saved: 'Salvato', added: 'Prodotto aggiunto', needName: 'Inserisci un nome', needCat: 'Crea prima una categoria',
      pdfTitle: 'Inventario Bar', pdfDate: 'Situazione al {d}', pdfLow: 'Prodotti sotto scorta: {n}', pdfProduct: 'Prodotto',
      pdfTot: 'Totale', pdfMin: 'Min', pdfPage: 'Pagina {p} di {n}', pdfDone: 'PDF creato', pdfErr: 'PDF non disponibile: collegati a internet e riprova'
    },
    en: {
      appName: 'Bar Inventory', tabInv: 'Inventory', tabCats: 'Categories', tabSet: 'Settings',
      refresh: 'Refresh', refreshIn: 'Refresh {s}s', listUpdated: 'List re-sorted',
      pdf: 'Export PDF', installShort: 'Install', search: 'Search product…', lowOnly: 'Low stock', addShort: 'Product',
      newProduct: 'New product', editProduct: 'Edit product', name: 'Name', category: 'Category',
      ct: 'Cases', pz: 'Loose pieces', bt: 'Bottles', ctS: 'CS', pzS: 'PCS', btS: 'BTL',
      perCt: 'Pieces per case', perCtHint: 'Used to calculate the total. Leave 0 if the product has no cases.',
      min: 'Minimum stock', minHint: 'Alert when the total reaches this value or drops below. 0 = no alert.',
      totS: 'total', minS: 'min {n}', lowBadge: 'Low stock',
      save: 'Save', cancel: 'Cancel', del: 'Delete', delConfirm: 'Confirm delete',
      nProducts: '{n} products', nLow: '{n} low',
      emptyCat: 'No products in this category.', noCats: 'There are no categories yet.', goCats: 'Create a category',
      noResults: 'No products found.',
      catsHint: 'Use the arrows to set the order of categories in the inventory and the PDF.',
      newCat: 'New category', editCat: 'Edit category', catDelWarn: '{n} products in this category will be deleted too.',
      up: 'Move up', down: 'Move down', edit: 'Edit',
      lang: 'Language', listSec: 'List sorting', delay: 'After a change, re-sort the list',
      manual: 'Only with the Refresh button', secs: 'after {n} seconds',
      delayHint: 'While you edit, products stay in place. The list is also re-sorted when you leave the app.',
      sort: 'Product order', sortQty: 'Quantity, highest first', sortName: 'Name, A to Z',
      installSec: 'Installation', install: 'Install on phone', installed: 'App installed on this device.',
      installIOS: 'On iPhone and iPad Apple does not allow one-tap install: tap Share, then “Add to Home Screen”.',
      installWait: 'The button becomes active when you open the app from its GitHub Pages address in Chrome, Edge or Samsung Internet.',
      backup: 'Backup', exportJson: 'Download backup', importJson: 'Restore backup', imported: 'Backup restored', badFile: 'Invalid backup file',
      data: 'Data', reset: 'Delete all data', resetConfirm: 'Tap again to delete everything', resetDone: 'Data deleted',
      saved: 'Saved', added: 'Product added', needName: 'Enter a name', needCat: 'Create a category first',
      pdfTitle: 'Bar Inventory', pdfDate: 'Stock as of {d}', pdfLow: 'Products low on stock: {n}', pdfProduct: 'Product',
      pdfTot: 'Total', pdfMin: 'Min', pdfPage: 'Page {p} of {n}', pdfDone: 'PDF created', pdfErr: 'PDF unavailable: connect to the internet and try again'
    },
    es: {
      appName: 'Inventario Bar', tabInv: 'Inventario', tabCats: 'Categorías', tabSet: 'Ajustes',
      refresh: 'Actualizar', refreshIn: 'Actualizar {s}s', listUpdated: 'Lista reordenada',
      pdf: 'Exportar PDF', installShort: 'Instalar', search: 'Buscar producto…', lowOnly: 'Stock bajo', addShort: 'Producto',
      newProduct: 'Nuevo producto', editProduct: 'Editar producto', name: 'Nombre', category: 'Categoría',
      ct: 'Cajas', pz: 'Unidades sueltas', bt: 'Botellas', ctS: 'CJ', pzS: 'UD', btS: 'BOT',
      perCt: 'Unidades por caja', perCtHint: 'Sirve para calcular el total. Deja 0 si el producto no tiene cajas.',
      min: 'Stock mínimo', minHint: 'Aviso cuando el total llega a este valor o baja de él. 0 = sin aviso.',
      totS: 'total', minS: 'mín {n}', lowBadge: 'Stock bajo',
      save: 'Guardar', cancel: 'Cancelar', del: 'Eliminar', delConfirm: 'Confirmar eliminación',
      nProducts: '{n} productos', nLow: '{n} bajo mínimo',
      emptyCat: 'No hay productos en esta categoría.', noCats: 'Todavía no hay categorías.', goCats: 'Crear una categoría',
      noResults: 'No se encontraron productos.',
      catsHint: 'Usa las flechas para elegir el orden de las categorías en el inventario y en el PDF.',
      newCat: 'Nueva categoría', editCat: 'Editar categoría', catDelWarn: 'También se eliminarán {n} productos de esta categoría.',
      up: 'Subir', down: 'Bajar', edit: 'Editar',
      lang: 'Idioma', listSec: 'Orden de la lista', delay: 'Tras un cambio, reordenar la lista',
      manual: 'Solo con el botón Actualizar', secs: 'tras {n} segundos',
      delayHint: 'Mientras editas, los productos no se mueven. La lista también se reordena al salir de la app.',
      sort: 'Orden de los productos', sortQty: 'Cantidad, de mayor a menor', sortName: 'Nombre, de la A a la Z',
      installSec: 'Instalación', install: 'Instalar en el móvil', installed: 'App instalada en este dispositivo.',
      installIOS: 'En iPhone y iPad Apple no permite instalar con un botón: toca Compartir y luego “Añadir a pantalla de inicio”.',
      installWait: 'El botón se activa al abrir la app desde su dirección de GitHub Pages con Chrome, Edge o Samsung Internet.',
      backup: 'Copia de seguridad', exportJson: 'Descargar copia', importJson: 'Restaurar copia', imported: 'Copia restaurada', badFile: 'Archivo no válido',
      data: 'Datos', reset: 'Borrar todos los datos', resetConfirm: 'Toca otra vez para borrarlo todo', resetDone: 'Datos borrados',
      saved: 'Guardado', added: 'Producto añadido', needName: 'Escribe un nombre', needCat: 'Primero crea una categoría',
      pdfTitle: 'Inventario Bar', pdfDate: 'Existencias al {d}', pdfLow: 'Productos con stock bajo: {n}', pdfProduct: 'Producto',
      pdfTot: 'Total', pdfMin: 'Mín', pdfPage: 'Página {p} de {n}', pdfDone: 'PDF creado', pdfErr: 'PDF no disponible: conéctate a internet e inténtalo de nuevo'
    },
    fr: {
      appName: 'Inventaire Bar', tabInv: 'Inventaire', tabCats: 'Catégories', tabSet: 'Réglages',
      refresh: 'Actualiser', refreshIn: 'Actualiser {s}s', listUpdated: 'Liste triée',
      pdf: 'Exporter en PDF', installShort: 'Installer', search: 'Rechercher un produit…', lowOnly: 'Stock bas', addShort: 'Produit',
      newProduct: 'Nouveau produit', editProduct: 'Modifier le produit', name: 'Nom', category: 'Catégorie',
      ct: 'Cartons', pz: 'Pièces à l’unité', bt: 'Bouteilles', ctS: 'CT', pzS: 'PC', btS: 'BT',
      perCt: 'Pièces par carton', perCtHint: 'Sert à calculer le total. Laissez 0 si le produit n’a pas de cartons.',
      min: 'Stock minimum', minHint: 'Alerte quand le total atteint cette valeur ou passe en dessous. 0 = pas d’alerte.',
      totS: 'total', minS: 'min {n}', lowBadge: 'Stock bas',
      save: 'Enregistrer', cancel: 'Annuler', del: 'Supprimer', delConfirm: 'Confirmer la suppression',
      nProducts: '{n} produits', nLow: '{n} en stock bas',
      emptyCat: 'Aucun produit dans cette catégorie.', noCats: 'Aucune catégorie pour l’instant.', goCats: 'Créer une catégorie',
      noResults: 'Aucun produit trouvé.',
      catsHint: 'Utilisez les flèches pour choisir l’ordre des catégories dans l’inventaire et le PDF.',
      newCat: 'Nouvelle catégorie', editCat: 'Modifier la catégorie', catDelWarn: 'Les {n} produits de cette catégorie seront aussi supprimés.',
      up: 'Monter', down: 'Descendre', edit: 'Modifier',
      lang: 'Langue', listSec: 'Tri de la liste', delay: 'Après une modification, trier la liste',
      manual: 'Seulement avec le bouton Actualiser', secs: 'après {n} secondes',
      delayHint: 'Pendant la saisie, les produits restent en place. La liste est aussi triée quand vous quittez l’app.',
      sort: 'Ordre des produits', sortQty: 'Quantité, la plus haute d’abord', sortName: 'Nom, de A à Z',
      installSec: 'Installation', install: 'Installer sur le téléphone', installed: 'App installée sur cet appareil.',
      installIOS: 'Sur iPhone et iPad, Apple ne permet pas l’installation par bouton : touchez Partager puis « Sur l’écran d’accueil ».',
      installWait: 'Le bouton s’active quand vous ouvrez l’app depuis son adresse GitHub Pages avec Chrome, Edge ou Samsung Internet.',
      backup: 'Sauvegarde', exportJson: 'Télécharger la sauvegarde', importJson: 'Restaurer la sauvegarde', imported: 'Sauvegarde restaurée', badFile: 'Fichier de sauvegarde invalide',
      data: 'Données', reset: 'Effacer toutes les données', resetConfirm: 'Touchez encore pour tout effacer', resetDone: 'Données effacées',
      saved: 'Enregistré', added: 'Produit ajouté', needName: 'Saisissez un nom', needCat: 'Créez d’abord une catégorie',
      pdfTitle: 'Inventaire Bar', pdfDate: 'Stock au {d}', pdfLow: 'Produits en stock bas : {n}', pdfProduct: 'Produit',
      pdfTot: 'Total', pdfMin: 'Min', pdfPage: 'Page {p} sur {n}', pdfDone: 'PDF créé', pdfErr: 'PDF indisponible : connectez-vous à internet et réessayez'
    },
    de: {
      appName: 'Bar-Inventar', tabInv: 'Inventar', tabCats: 'Kategorien', tabSet: 'Einstellungen',
      refresh: 'Aktualisieren', refreshIn: 'Aktualisieren {s}s', listUpdated: 'Liste neu sortiert',
      pdf: 'Als PDF exportieren', installShort: 'Installieren', search: 'Produkt suchen…', lowOnly: 'Niedriger Bestand', addShort: 'Produkt',
      newProduct: 'Neues Produkt', editProduct: 'Produkt bearbeiten', name: 'Name', category: 'Kategorie',
      ct: 'Kartons', pz: 'Einzelstücke', bt: 'Flaschen', ctS: 'KT', pzS: 'ST', btS: 'FL',
      perCt: 'Stück pro Karton', perCtHint: 'Wird für die Summe verwendet. 0 lassen, wenn das Produkt keine Kartons hat.',
      min: 'Mindestbestand', minHint: 'Warnung, wenn die Summe diesen Wert erreicht oder unterschreitet. 0 = keine Warnung.',
      totS: 'gesamt', minS: 'min {n}', lowBadge: 'Niedrig',
      save: 'Speichern', cancel: 'Abbrechen', del: 'Löschen', delConfirm: 'Löschen bestätigen',
      nProducts: '{n} Produkte', nLow: '{n} niedrig',
      emptyCat: 'Keine Produkte in dieser Kategorie.', noCats: 'Noch keine Kategorien vorhanden.', goCats: 'Kategorie anlegen',
      noResults: 'Keine Produkte gefunden.',
      catsHint: 'Mit den Pfeilen legst du die Reihenfolge der Kategorien im Inventar und im PDF fest.',
      newCat: 'Neue Kategorie', editCat: 'Kategorie bearbeiten', catDelWarn: 'Die {n} Produkte dieser Kategorie werden ebenfalls gelöscht.',
      up: 'Nach oben', down: 'Nach unten', edit: 'Bearbeiten',
      lang: 'Sprache', listSec: 'Sortierung der Liste', delay: 'Nach einer Änderung Liste neu sortieren',
      manual: 'Nur mit der Taste Aktualisieren', secs: 'nach {n} Sekunden',
      delayHint: 'Beim Bearbeiten bleiben die Produkte an ihrem Platz. Beim Verlassen der App wird die Liste ebenfalls sortiert.',
      sort: 'Reihenfolge der Produkte', sortQty: 'Menge, höchste zuerst', sortName: 'Name, A bis Z',
      installSec: 'Installation', install: 'Auf dem Handy installieren', installed: 'App auf diesem Gerät installiert.',
      installIOS: 'Auf iPhone und iPad erlaubt Apple keine Installation per Taste: Teilen antippen, dann „Zum Home-Bildschirm“.',
      installWait: 'Die Taste wird aktiv, wenn du die App über ihre GitHub-Pages-Adresse in Chrome, Edge oder Samsung Internet öffnest.',
      backup: 'Sicherung', exportJson: 'Sicherung herunterladen', importJson: 'Sicherung wiederherstellen', imported: 'Sicherung wiederhergestellt', badFile: 'Ungültige Sicherungsdatei',
      data: 'Daten', reset: 'Alle Daten löschen', resetConfirm: 'Nochmals tippen, um alles zu löschen', resetDone: 'Daten gelöscht',
      saved: 'Gespeichert', added: 'Produkt hinzugefügt', needName: 'Bitte einen Namen eingeben', needCat: 'Lege zuerst eine Kategorie an',
      pdfTitle: 'Bar-Inventar', pdfDate: 'Bestand am {d}', pdfLow: 'Produkte mit niedrigem Bestand: {n}', pdfProduct: 'Produkt',
      pdfTot: 'Gesamt', pdfMin: 'Min', pdfPage: 'Seite {p} von {n}', pdfDone: 'PDF erstellt', pdfErr: 'PDF nicht verfügbar: mit dem Internet verbinden und erneut versuchen'
    }
  };

  // ---------- strings added in v2 ----------
  var I18N2 = {
    it: {
      tabOrder: 'Ordine', orderHint: 'Prodotti sotto scorta, con la quantità per tornare alla scorta ideale. Puoi correggere le quantità e togliere la spunta a quello che non vuoi ordinare.',
      orderEmpty: 'Niente da ordinare: tutti i prodotti sono sopra la scorta minima.', recalc: 'Ricalcola quantità', recalcDone: 'Quantità ricalcolate',
      supplier: 'Fornitore', supplierPh: 'Es. Distribuzione Rossi', noSupplier: 'Senza fornitore', phone: 'Telefono WhatsApp',
      phoneHint: 'Con il prefisso internazionale, es. 39 333 1234567. Se lo lasci vuoto, WhatsApp ti fa scegliere il contatto.',
      editSupplier: 'Modifica fornitore', whatsapp: 'WhatsApp', copyText: 'Copia testo', copied: 'Testo copiato', copyFail: 'Tieni premuto sul testo per copiarlo',
      haveIdeal: 'hai {h} · ideale {i}', target: 'Scorta ideale', targetHint: 'Quantità da raggiungere quando riordini. Se è 0 l’app usa il doppio della scorta minima.',
      frac: 'Bottiglia aperta a frazioni (¼, ½, ¾)', fracHint: 'Nel riquadro BT compare un cerchio: toccalo per segnare quanto resta della bottiglia aperta.',
      openBt: 'Bottiglia aperta: {f}', undo: 'Annulla', undone: 'Modifica annullata', nothingUndo: 'Niente da annullare',
      exportTitle: 'Esporta', pdfInv: 'Inventario in PDF', pdfOrder: 'Ordine in PDF', xlsx: 'Excel (inventario + ordine)', fileDone: 'File pronto',
      barName: 'Nome del locale', barNameHint: 'Compare nei PDF, nel file Excel e nei messaggi ai fornitori.',
      pdfOrderTitle: 'Ordine fornitori', colCat: 'Categoria', colSupplier: 'Fornitore', colQty: 'Quantità', colUnit: 'Unità', colStock: 'Giacenza', colIdeal: 'Ideale', colStatus: 'Stato',
      sheetInv: 'Inventario', sheetOrder: 'Ordine', deleted: 'Eliminato', include: 'Includi nell’ordine',
      msgHello: 'Buongiorno, vorrei ordinare:', msgThanks: 'Grazie!', exportBtn: 'Esporta', pdfAlert: 'Avviso'
    },
    en: {
      tabOrder: 'Order', orderHint: 'Products low on stock, with the quantity needed to get back to the target stock. You can adjust quantities and untick what you don’t want to order.',
      orderEmpty: 'Nothing to order: every product is above its minimum stock.', recalc: 'Recalculate quantities', recalcDone: 'Quantities recalculated',
      supplier: 'Supplier', supplierPh: 'e.g. Smith Drinks Ltd', noSupplier: 'No supplier', phone: 'WhatsApp number',
      phoneHint: 'With the country code, e.g. 44 7700 900123. Leave it empty and WhatsApp lets you pick the contact.',
      editSupplier: 'Edit supplier', whatsapp: 'WhatsApp', copyText: 'Copy text', copied: 'Text copied', copyFail: 'Press and hold the text to copy it',
      haveIdeal: 'have {h} · target {i}', target: 'Target stock', targetHint: 'Quantity to reach when you reorder. If 0, the app uses twice the minimum stock.',
      frac: 'Open bottle in fractions (¼, ½, ¾)', fracHint: 'A circle appears in the BTL box: tap it to record how much of the open bottle is left.',
      openBt: 'Open bottle: {f}', undo: 'Undo', undone: 'Change undone', nothingUndo: 'Nothing to undo',
      exportTitle: 'Export', pdfInv: 'Inventory as PDF', pdfOrder: 'Order as PDF', xlsx: 'Excel (inventory + order)', fileDone: 'File ready',
      barName: 'Venue name', barNameHint: 'Shown on PDFs, the Excel file and messages to suppliers.',
      pdfOrderTitle: 'Supplier order', colCat: 'Category', colSupplier: 'Supplier', colQty: 'Quantity', colUnit: 'Unit', colStock: 'In stock', colIdeal: 'Target', colStatus: 'Status',
      sheetInv: 'Inventory', sheetOrder: 'Order', deleted: 'Deleted', include: 'Include in order',
      msgHello: 'Hello, I would like to order:', msgThanks: 'Thank you!', exportBtn: 'Export', pdfAlert: 'Alert'
    },
    es: {
      tabOrder: 'Pedido', orderHint: 'Productos con stock bajo y la cantidad para volver al stock ideal. Puedes corregir las cantidades y desmarcar lo que no quieras pedir.',
      orderEmpty: 'Nada que pedir: todos los productos están por encima del mínimo.', recalc: 'Recalcular cantidades', recalcDone: 'Cantidades recalculadas',
      supplier: 'Proveedor', supplierPh: 'Ej. Distribuciones García', noSupplier: 'Sin proveedor', phone: 'Teléfono WhatsApp',
      phoneHint: 'Con el prefijo internacional, ej. 34 612 345 678. Si lo dejas vacío, WhatsApp te deja elegir el contacto.',
      editSupplier: 'Editar proveedor', whatsapp: 'WhatsApp', copyText: 'Copiar texto', copied: 'Texto copiado', copyFail: 'Mantén pulsado el texto para copiarlo',
      haveIdeal: 'tienes {h} · ideal {i}', target: 'Stock ideal', targetHint: 'Cantidad a alcanzar al reponer. Si es 0, la app usa el doble del stock mínimo.',
      frac: 'Botella abierta en fracciones (¼, ½, ¾)', fracHint: 'En la casilla BOT aparece un círculo: tócalo para marcar cuánto queda de la botella abierta.',
      openBt: 'Botella abierta: {f}', undo: 'Deshacer', undone: 'Cambio deshecho', nothingUndo: 'Nada que deshacer',
      exportTitle: 'Exportar', pdfInv: 'Inventario en PDF', pdfOrder: 'Pedido en PDF', xlsx: 'Excel (inventario + pedido)', fileDone: 'Archivo listo',
      barName: 'Nombre del local', barNameHint: 'Aparece en los PDF, en el Excel y en los mensajes a proveedores.',
      pdfOrderTitle: 'Pedido a proveedores', colCat: 'Categoría', colSupplier: 'Proveedor', colQty: 'Cantidad', colUnit: 'Unidad', colStock: 'Existencias', colIdeal: 'Ideal', colStatus: 'Estado',
      sheetInv: 'Inventario', sheetOrder: 'Pedido', deleted: 'Eliminado', include: 'Incluir en el pedido',
      msgHello: 'Hola, quisiera pedir:', msgThanks: '¡Gracias!', exportBtn: 'Exportar', pdfAlert: 'Aviso'
    },
    fr: {
      tabOrder: 'Commande', orderHint: 'Produits en stock bas, avec la quantité pour revenir au stock idéal. Vous pouvez corriger les quantités et décocher ce que vous ne voulez pas commander.',
      orderEmpty: 'Rien à commander : tous les produits sont au-dessus du minimum.', recalc: 'Recalculer les quantités', recalcDone: 'Quantités recalculées',
      supplier: 'Fournisseur', supplierPh: 'Ex. Boissons Martin', noSupplier: 'Sans fournisseur', phone: 'Numéro WhatsApp',
      phoneHint: 'Avec l’indicatif du pays, ex. 33 6 12 34 56 78. Laissez vide et WhatsApp vous laisse choisir le contact.',
      editSupplier: 'Modifier le fournisseur', whatsapp: 'WhatsApp', copyText: 'Copier le texte', copied: 'Texte copié', copyFail: 'Appuyez longuement sur le texte pour le copier',
      haveIdeal: 'en stock {h} · idéal {i}', target: 'Stock idéal', targetHint: 'Quantité à atteindre lors du réassort. Si 0, l’app utilise le double du stock minimum.',
      frac: 'Bouteille entamée en fractions (¼, ½, ¾)', fracHint: 'Un cercle apparaît dans la case BT : touchez-le pour indiquer ce qui reste de la bouteille entamée.',
      openBt: 'Bouteille entamée : {f}', undo: 'Annuler', undone: 'Modification annulée', nothingUndo: 'Rien à annuler',
      exportTitle: 'Exporter', pdfInv: 'Inventaire en PDF', pdfOrder: 'Commande en PDF', xlsx: 'Excel (inventaire + commande)', fileDone: 'Fichier prêt',
      barName: 'Nom de l’établissement', barNameHint: 'Apparaît sur les PDF, le fichier Excel et les messages aux fournisseurs.',
      pdfOrderTitle: 'Commande fournisseurs', colCat: 'Catégorie', colSupplier: 'Fournisseur', colQty: 'Quantité', colUnit: 'Unité', colStock: 'En stock', colIdeal: 'Idéal', colStatus: 'État',
      sheetInv: 'Inventaire', sheetOrder: 'Commande', deleted: 'Supprimé', include: 'Inclure dans la commande',
      msgHello: 'Bonjour, je souhaite commander :', msgThanks: 'Merci !', exportBtn: 'Exporter', pdfAlert: 'Alerte'
    },
    de: {
      tabOrder: 'Bestellung', orderHint: 'Produkte mit niedrigem Bestand und die Menge bis zum Sollbestand. Du kannst Mengen ändern und abhaken, was du nicht bestellen willst.',
      orderEmpty: 'Nichts zu bestellen: alle Produkte liegen über dem Mindestbestand.', recalc: 'Mengen neu berechnen', recalcDone: 'Mengen neu berechnet',
      supplier: 'Lieferant', supplierPh: 'z. B. Getränke Müller', noSupplier: 'Ohne Lieferant', phone: 'WhatsApp-Nummer',
      phoneHint: 'Mit Ländervorwahl, z. B. 49 151 23456789. Leer lassen, dann wählst du den Kontakt in WhatsApp.',
      editSupplier: 'Lieferant bearbeiten', whatsapp: 'WhatsApp', copyText: 'Text kopieren', copied: 'Text kopiert', copyFail: 'Text gedrückt halten, um ihn zu kopieren',
      haveIdeal: 'da {h} · Soll {i}', target: 'Sollbestand', targetHint: 'Menge, die beim Nachbestellen erreicht werden soll. Bei 0 nimmt die App den doppelten Mindestbestand.',
      frac: 'Offene Flasche in Bruchteilen (¼, ½, ¾)', fracHint: 'Im FL-Feld erscheint ein Kreis: antippen, um den Rest der offenen Flasche einzutragen.',
      openBt: 'Offene Flasche: {f}', undo: 'Rückgängig', undone: 'Änderung rückgängig gemacht', nothingUndo: 'Nichts rückgängig zu machen',
      exportTitle: 'Exportieren', pdfInv: 'Inventar als PDF', pdfOrder: 'Bestellung als PDF', xlsx: 'Excel (Inventar + Bestellung)', fileDone: 'Datei bereit',
      barName: 'Name des Lokals', barNameHint: 'Erscheint in PDFs, in der Excel-Datei und in Nachrichten an Lieferanten.',
      pdfOrderTitle: 'Lieferantenbestellung', colCat: 'Kategorie', colSupplier: 'Lieferant', colQty: 'Menge', colUnit: 'Einheit', colStock: 'Bestand', colIdeal: 'Soll', colStatus: 'Status',
      sheetInv: 'Inventar', sheetOrder: 'Bestellung', deleted: 'Gelöscht', include: 'In Bestellung aufnehmen',
      msgHello: 'Guten Tag, ich möchte bestellen:', msgThanks: 'Danke!', exportBtn: 'Exportieren', pdfAlert: 'Hinweis'
    }
  };
  Object.keys(I18N2).forEach(function (l) { Object.assign(I18N[l], I18N2[l]); });
  var I18N3 = {
    it: { tabList: 'Lista', listAddPh: 'Aggiungi una voce…', listQtyPh: 'Q.tà', listItem: 'Voce', listEditItem: 'Modifica voce', listRename: 'Rinomina', listEmpty: 'La lista è vuota. Scrivi una voce qui sopra e tocca +.', listDoneN: '{d} di {n} fatte', listClearDone: 'Togli le voci fatte', listAdd: 'Aggiungi', colDone: 'Fatto', listAllDone: 'Non ci sono voci da fare: sono tutte completate.', pdfListX: '{n} in PDF', xlsxListX: '{n} in Excel' },
    en: { tabList: 'List', listAddPh: 'Add an item…', listQtyPh: 'Qty', listItem: 'Item', listEditItem: 'Edit item', listRename: 'Rename', listEmpty: 'The list is empty. Type an item above and tap +.', listDoneN: '{d} of {n} done', listClearDone: 'Remove done items', listAdd: 'Add', colDone: 'Done', listAllDone: 'Nothing left to do: every item is done.', pdfListX: '{n} as PDF', xlsxListX: '{n} as Excel' },
    es: { tabList: 'Lista', listAddPh: 'Añade un elemento…', listQtyPh: 'Cant.', listItem: 'Elemento', listEditItem: 'Editar elemento', listRename: 'Renombrar', listEmpty: 'La lista está vacía. Escribe un elemento arriba y toca +.', listDoneN: '{d} de {n} hechos', listClearDone: 'Quitar los hechos', listAdd: 'Añadir', colDone: 'Hecho', listAllDone: 'No queda nada por hacer: todos los elementos están hechos.', pdfListX: '{n} en PDF', xlsxListX: '{n} en Excel' },
    fr: { tabList: 'Liste', listAddPh: 'Ajouter un élément…', listQtyPh: 'Qté', listItem: 'Élément', listEditItem: 'Modifier l\u2019élément', listRename: 'Renommer', listEmpty: 'La liste est vide. Écrivez un élément ci-dessus et touchez +.', listDoneN: '{d} sur {n} faits', listClearDone: 'Retirer les éléments faits', listAdd: 'Ajouter', colDone: 'Fait', listAllDone: 'Plus rien à faire : tous les éléments sont faits.', pdfListX: '{n} en PDF', xlsxListX: '{n} en Excel' },
    de: { tabList: 'Liste', listAddPh: 'Eintrag hinzufügen…', listQtyPh: 'Menge', listItem: 'Eintrag', listEditItem: 'Eintrag bearbeiten', listRename: 'Umbenennen', listEmpty: 'Die Liste ist leer. Oben einen Eintrag schreiben und + tippen.', listDoneN: '{d} von {n} erledigt', listClearDone: 'Erledigte entfernen', listAdd: 'Hinzufügen', colDone: 'Erledigt', listAllDone: 'Nichts mehr zu tun: alle Einträge sind erledigt.', pdfListX: '{n} als PDF', xlsxListX: '{n} als Excel' }
  };
  Object.keys(I18N3).forEach(function (l) { Object.assign(I18N[l], I18N3[l]); });
  var I18N4 = {
    it: { welcomeTitle: 'Benvenuto', welcomeText: 'Come vuoi iniziare? Potrai sempre cambiare tutto dopo.', startSample: 'Inizia con l\u2019esempio', startSampleHint: 'Prodotti, fornitori e storico di prova, da modificare o cancellare.', startEmpty: 'Inizia vuoto', startEmptyHint: 'Crei tu categorie e prodotti da zero.', bkDue: 'Non fai un backup da {n} giorni', bkNever: 'Non hai ancora fatto un backup dei dati', bkDo: 'Fai il backup', bkLater: 'Più tardi', bkLast: 'Ultimo backup: {d}', bkNone: 'Ultimo backup: mai', bkEvery: 'Ricordami il backup', bkOff: 'Mai', bkDays: 'ogni {n} giorni', persistOk: 'Dati protetti: il telefono non li cancellerà per liberare spazio.', persistNo: 'Il telefono potrebbe cancellare i dati se manca spazio: fai backup regolari.', bkHint: 'Il backup è un file: salvalo su Drive, mandalo a te stesso via email o WhatsApp. Con “Ripristina backup” lo ricarichi su qualsiasi telefono.', histBtn: 'Storico e consumi', histTitle: 'Storico e consumi', back: 'Indietro', closeInv: 'Chiudi inventario', closeConfirm: 'Tocca ancora per chiudere', closeHint: 'Salva la situazione di adesso. I consumi si calcolano da una chiusura all\u2019altra: chiudi per esempio ogni settimana, sempre lo stesso giorno.', closed: 'Inventario chiuso e salvato', histEmpty: 'Non hai ancora chiuso un inventario. Tocca “Chiudi inventario” per salvare la situazione di oggi: dalla prossima volta vedrai quanto hai consumato.', period: 'Periodo', periodNow: 'Dal {d} a oggi', periodRange: 'Dal {a} al {b}', days: '{n} giorni', day1: '1 giorno', liveNote: 'in corso', colStart: 'Inizio', colArr: 'Arrivi', colEnd: 'Fine', colNow: 'Ora', colCons: 'Consumo', colPerDay: 'Al giorno', perDay: '{n} al giorno', consUp: 'Aumentato senza “Merce arrivata”: probabile correzione della conta', noCons: 'Nessun prodotto da confrontare in questo periodo.', closings: 'Chiusure salvate', otherCat: 'Altro', consTitle: 'Consumi', arrived: 'Merce arrivata', arrivedConfirm: 'Tocca ancora: carico in inventario', arrivedDone: 'Merce caricata in inventario' },
    en: { welcomeTitle: 'Welcome', welcomeText: 'How do you want to start? You can change everything later.', startSample: 'Start with the example', startSampleHint: 'Sample products, suppliers and history to edit or delete.', startEmpty: 'Start empty', startEmptyHint: 'Create your own categories and products from scratch.', bkDue: 'No backup for {n} days', bkNever: 'You have not backed up your data yet', bkDo: 'Back up now', bkLater: 'Later', bkLast: 'Last backup: {d}', bkNone: 'Last backup: never', bkEvery: 'Remind me to back up', bkOff: 'Never', bkDays: 'every {n} days', persistOk: 'Data protected: the phone will not delete it to free up space.', persistNo: 'The phone may delete the data when space runs low: back up regularly.', bkHint: 'The backup is a file: save it to Drive or send it to yourself by email or WhatsApp. Use “Restore backup” to load it on any phone.', histBtn: 'History and usage', histTitle: 'History and usage', back: 'Back', closeInv: 'Close inventory', closeConfirm: 'Tap again to close', closeHint: 'Saves the current stock. Usage is calculated from one closing to the next: close for example every week, on the same day.', closed: 'Inventory closed and saved', histEmpty: 'You have not closed an inventory yet. Tap “Close inventory” to save today\u2019s stock: from next time you will see how much you used.', period: 'Period', periodNow: 'From {d} to today', periodRange: 'From {a} to {b}', days: '{n} days', day1: '1 day', liveNote: 'in progress', colStart: 'Start', colArr: 'Received', colEnd: 'End', colNow: 'Now', colCons: 'Used', colPerDay: 'Per day', perDay: '{n} per day', consUp: 'Increased without “Goods received”: probably a count correction', noCons: 'No products to compare in this period.', closings: 'Saved closings', otherCat: 'Other', consTitle: 'Usage', arrived: 'Goods received', arrivedConfirm: 'Tap again: add to inventory', arrivedDone: 'Goods added to inventory' },
    es: { welcomeTitle: 'Bienvenido', welcomeText: '¿Cómo quieres empezar? Podrás cambiarlo todo después.', startSample: 'Empezar con el ejemplo', startSampleHint: 'Productos, proveedores e historial de prueba para editar o borrar.', startEmpty: 'Empezar vacío', startEmptyHint: 'Creas tú las categorías y los productos desde cero.', bkDue: 'Sin copia de seguridad desde hace {n} días', bkNever: 'Todavía no has hecho una copia de seguridad', bkDo: 'Hacer copia', bkLater: 'Más tarde', bkLast: 'Última copia: {d}', bkNone: 'Última copia: nunca', bkEvery: 'Recordarme la copia', bkOff: 'Nunca', bkDays: 'cada {n} días', persistOk: 'Datos protegidos: el móvil no los borrará para liberar espacio.', persistNo: 'El móvil podría borrar los datos si falta espacio: haz copias a menudo.', bkHint: 'La copia es un archivo: guárdalo en Drive o envíatelo por email o WhatsApp. Con “Restaurar copia” lo cargas en cualquier móvil.', histBtn: 'Historial y consumos', histTitle: 'Historial y consumos', back: 'Atrás', closeInv: 'Cerrar inventario', closeConfirm: 'Toca otra vez para cerrar', closeHint: 'Guarda la situación actual. El consumo se calcula de un cierre a otro: cierra por ejemplo cada semana, el mismo día.', closed: 'Inventario cerrado y guardado', histEmpty: 'Todavía no has cerrado un inventario. Toca “Cerrar inventario” para guardar la situación de hoy: la próxima vez verás cuánto has consumido.', period: 'Periodo', periodNow: 'Del {d} a hoy', periodRange: 'Del {a} al {b}', days: '{n} días', day1: '1 día', liveNote: 'en curso', colStart: 'Inicio', colArr: 'Entradas', colEnd: 'Fin', colNow: 'Ahora', colCons: 'Consumo', colPerDay: 'Por día', perDay: '{n} por día', consUp: 'Aumentó sin “Mercancía recibida”: probable corrección del recuento', noCons: 'No hay productos para comparar en este periodo.', closings: 'Cierres guardados', otherCat: 'Otros', consTitle: 'Consumos', arrived: 'Mercancía recibida', arrivedConfirm: 'Toca otra vez: cargar en inventario', arrivedDone: 'Mercancía cargada en el inventario' },
    fr: { welcomeTitle: 'Bienvenue', welcomeText: 'Comment voulez-vous commencer ? Vous pourrez tout changer ensuite.', startSample: 'Commencer avec l\u2019exemple', startSampleHint: 'Produits, fournisseurs et historique d\u2019essai à modifier ou supprimer.', startEmpty: 'Commencer à vide', startEmptyHint: 'Vous créez vos catégories et produits de zéro.', bkDue: 'Pas de sauvegarde depuis {n} jours', bkNever: 'Vous n\u2019avez pas encore sauvegardé vos données', bkDo: 'Sauvegarder', bkLater: 'Plus tard', bkLast: 'Dernière sauvegarde : {d}', bkNone: 'Dernière sauvegarde : jamais', bkEvery: 'Me rappeler la sauvegarde', bkOff: 'Jamais', bkDays: 'tous les {n} jours', persistOk: 'Données protégées : le téléphone ne les effacera pas pour libérer de l\u2019espace.', persistNo: 'Le téléphone peut effacer les données en cas de manque d\u2019espace : sauvegardez régulièrement.', bkHint: 'La sauvegarde est un fichier : enregistrez-le sur Drive ou envoyez-le-vous par e-mail ou WhatsApp. « Restaurer la sauvegarde » le recharge sur n\u2019importe quel téléphone.', histBtn: 'Historique et consommation', histTitle: 'Historique et consommation', back: 'Retour', closeInv: 'Clôturer l\u2019inventaire', closeConfirm: 'Touchez encore pour clôturer', closeHint: 'Enregistre le stock actuel. La consommation se calcule d\u2019une clôture à l\u2019autre : clôturez par exemple chaque semaine, le même jour.', closed: 'Inventaire clôturé et enregistré', histEmpty: 'Aucun inventaire clôturé pour l\u2019instant. Touchez « Clôturer l\u2019inventaire » pour enregistrer le stock du jour : la prochaine fois vous verrez votre consommation.', period: 'Période', periodNow: 'Du {d} à aujourd\u2019hui', periodRange: 'Du {a} au {b}', days: '{n} jours', day1: '1 jour', liveNote: 'en cours', colStart: 'Début', colArr: 'Reçu', colEnd: 'Fin', colNow: 'Maintenant', colCons: 'Consommé', colPerDay: 'Par jour', perDay: '{n} par jour', consUp: 'Augmenté sans « Marchandise reçue » : sans doute une correction du comptage', noCons: 'Aucun produit à comparer sur cette période.', closings: 'Clôtures enregistrées', otherCat: 'Autre', consTitle: 'Consommation', arrived: 'Marchandise reçue', arrivedConfirm: 'Touchez encore : ajouter au stock', arrivedDone: 'Marchandise ajoutée au stock' },
    de: { welcomeTitle: 'Willkommen', welcomeText: 'Wie möchtest du starten? Du kannst später alles ändern.', startSample: 'Mit Beispiel starten', startSampleHint: 'Beispielprodukte, Lieferanten und Verlauf zum Bearbeiten oder Löschen.', startEmpty: 'Leer starten', startEmptyHint: 'Du legst Kategorien und Produkte selbst an.', bkDue: 'Seit {n} Tagen keine Sicherung', bkNever: 'Du hast deine Daten noch nicht gesichert', bkDo: 'Jetzt sichern', bkLater: 'Später', bkLast: 'Letzte Sicherung: {d}', bkNone: 'Letzte Sicherung: nie', bkEvery: 'An Sicherung erinnern', bkOff: 'Nie', bkDays: 'alle {n} Tage', persistOk: 'Daten geschützt: das Handy löscht sie nicht, um Speicher freizugeben.', persistNo: 'Das Handy könnte die Daten bei Speichermangel löschen: sichere regelmäßig.', bkHint: 'Die Sicherung ist eine Datei: speichere sie in Drive oder schick sie dir per E-Mail oder WhatsApp. Mit „Sicherung wiederherstellen“ lädst du sie auf jedes Handy.', histBtn: 'Verlauf und Verbrauch', histTitle: 'Verlauf und Verbrauch', back: 'Zurück', closeInv: 'Inventur abschließen', closeConfirm: 'Nochmals tippen zum Abschließen', closeHint: 'Speichert den aktuellen Bestand. Der Verbrauch wird von Abschluss zu Abschluss berechnet: z. B. jede Woche am selben Tag abschließen.', closed: 'Inventur abgeschlossen und gespeichert', histEmpty: 'Du hast noch keine Inventur abgeschlossen. Tippe auf „Inventur abschließen“, um den heutigen Bestand zu speichern: beim nächsten Mal siehst du deinen Verbrauch.', period: 'Zeitraum', periodNow: 'Vom {d} bis heute', periodRange: 'Vom {a} bis {b}', days: '{n} Tage', day1: '1 Tag', liveNote: 'laufend', colStart: 'Anfang', colArr: 'Eingang', colEnd: 'Ende', colNow: 'Jetzt', colCons: 'Verbrauch', colPerDay: 'Pro Tag', perDay: '{n} pro Tag', consUp: 'Ohne „Ware eingetroffen“ gestiegen: wahrscheinlich Zählkorrektur', noCons: 'Keine Produkte zum Vergleichen in diesem Zeitraum.', closings: 'Gespeicherte Abschlüsse', otherCat: 'Sonstiges', consTitle: 'Verbrauch', arrived: 'Ware eingetroffen', arrivedConfirm: 'Nochmals tippen: in Inventar buchen', arrivedDone: 'Ware ins Inventar gebucht' }
  };
  Object.keys(I18N4).forEach(function (l) { Object.assign(I18N[l], I18N4[l]); });
  var I18N5 = {
    it: { look: 'Aspetto', theme: 'Tema', themeAuto: 'Automatico', themeLight: 'Chiaro', themeDark: 'Scuro', color: 'Colore', lookHint: 'Il colore cambia pulsanti e titoli. Il rosso resta riservato agli avvisi di scorta.', c_amber: 'Ambra', c_blue: 'Blu', c_green: 'Verde', c_purple: 'Viola', c_teal: 'Turchese', c_slate: 'Grafite' },
    en: { look: 'Appearance', theme: 'Theme', themeAuto: 'Automatic', themeLight: 'Light', themeDark: 'Dark', color: 'Colour', lookHint: 'The colour changes buttons and headings. Red stays reserved for stock alerts.', c_amber: 'Amber', c_blue: 'Blue', c_green: 'Green', c_purple: 'Purple', c_teal: 'Teal', c_slate: 'Graphite' },
    es: { look: 'Apariencia', theme: 'Tema', themeAuto: 'Automático', themeLight: 'Claro', themeDark: 'Oscuro', color: 'Color', lookHint: 'El color cambia botones y títulos. El rojo queda reservado para los avisos de stock.', c_amber: 'Ámbar', c_blue: 'Azul', c_green: 'Verde', c_purple: 'Violeta', c_teal: 'Turquesa', c_slate: 'Grafito' },
    fr: { look: 'Apparence', theme: 'Thème', themeAuto: 'Automatique', themeLight: 'Clair', themeDark: 'Sombre', color: 'Couleur', lookHint: 'La couleur change les boutons et les titres. Le rouge reste réservé aux alertes de stock.', c_amber: 'Ambre', c_blue: 'Bleu', c_green: 'Vert', c_purple: 'Violet', c_teal: 'Turquoise', c_slate: 'Graphite' },
    de: { look: 'Darstellung', theme: 'Design', themeAuto: 'Automatisch', themeLight: 'Hell', themeDark: 'Dunkel', color: 'Farbe', lookHint: 'Die Farbe ändert Tasten und Überschriften. Rot bleibt für Bestandswarnungen reserviert.', c_amber: 'Bernstein', c_blue: 'Blau', c_green: 'Grün', c_purple: 'Violett', c_teal: 'Türkis', c_slate: 'Graphit' }
  };
  Object.keys(I18N5).forEach(function (l) { Object.assign(I18N[l], I18N5[l]); });

  // ---------- helpers ----------
  function $(id) { return document.getElementById(id); }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function num(v) { v = parseInt(String(v).replace(',', '.'), 10); return isFinite(v) && v > 0 ? v : 0; }
  function quarter(v) { v = parseFloat(v); if (!isFinite(v) || v <= 0) return 0; v = Math.round(v * 4) / 4; return v >= 1 ? 0.75 : v; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var FR = { 0.25: '¼', 0.5: '½', 0.75: '¾' };
  function fmt(n) {
    var i = Math.floor(n + 1e-9), f = Math.round((n - i) * 4) / 4;
    if (f >= 1) { i++; f = 0; }
    if (!f) return String(i);
    return (i ? i : '') + FR[f];
  }
  function detectLang() { var l = (navigator.language || 'it').slice(0, 2).toLowerCase(); return LANGS[l] ? l : 'it'; }
  function t(k, v) {
    var d = I18N[S.settings.lang] || I18N.it;
    var s = d[k] != null ? d[k] : (I18N.it[k] != null ? I18N.it[k] : k);
    if (v) for (var x in v) s = s.split('{' + x + '}').join(v[x]);
    return s;
  }
  function total(p) { return p.ct * (p.perCt || 1) + p.pz + p.bt + (p.frac ? p.open : 0); }
  function isLow(p) { return p.min > 0 && total(p) <= p.min; }
  function idealOf(p) { return p.target > 0 ? p.target : p.min * 2; }
  function orderUnit(p) { if (p.frac || (p.bt > 0 && !p.ct)) return 'bt'; return p.perCt > 1 ? 'ct' : (p.bt > 0 ? 'bt' : 'pz'); }
  function suggested(p) {
    var need = idealOf(p) - total(p);
    var q = orderUnit(p) === 'ct' ? Math.ceil(need / p.perCt) : Math.ceil(need);
    return Math.max(1, q);
  }
  function catById(id) { for (var i = 0; i < S.cats.length; i++) if (S.cats[i].id === id) return S.cats[i]; return null; }
  function prodById(id) { for (var i = 0; i < S.prods.length; i++) if (S.prods[i].id === id) return S.prods[i]; return null; }
  function collator() { try { return new Intl.Collator(S.settings.lang, { sensitivity: 'base', numeric: true }); } catch (e) { return { compare: function (a, b) { return a < b ? -1 : a > b ? 1 : 0; } }; } }
  function today() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function dateLong() {
    var now = new Date();
    try { return now.toLocaleString(S.settings.lang, { dateStyle: 'long', timeStyle: 'short' }); } catch (e) { return now.toLocaleString(); }
  }
  function dateShort() { try { return new Date().toLocaleDateString(S.settings.lang); } catch (e) { return today(); } }
  function heading(key) { return (S.settings.barName ? S.settings.barName + ' — ' : '') + t(key); }

  // ---------- data ----------
  function sample() {
    var c = [
      { id: 'c-birre', name: 'Birre' }, { id: 'c-aper', name: 'Aperitivi' }, { id: 'c-super', name: 'Superalcolici' },
      { id: 'c-bibite', name: 'Bibite' }, { id: 'c-vini', name: 'Vini e bollicine' }
    ];
    var R = 'Distribuzione Rossi', B = 'Enoteca Bianchi';
    function p(cat, name, ct, pz, bt, perCt, min, target, sup, frac, open) {
      return { id: uid(), catId: cat, name: name, ct: ct, pz: pz, bt: bt, perCt: perCt, min: min, target: target, supplier: sup, frac: !!frac, open: open || 0 };
    }
    var data = {
      cats: c,
      prods: [
        p('c-birre', 'Peroni 33 cl', 2, 7, 0, 24, 30, 96, R), p('c-birre', 'Ichnusa Non Filtrata 33 cl', 1, 3, 0, 24, 30, 72, R),
        p('c-birre', 'Corona Extra 35,5 cl', 2, 0, 0, 24, 24, 72, R),
        p('c-aper', 'Aperol', 0, 0, 5, 6, 3, 8, B, 1, 0.5), p('c-aper', 'Campari Bitter', 0, 0, 2, 6, 3, 6, B, 1, 0.25), p('c-aper', 'Martini Rosso', 0, 0, 3, 6, 2, 4, B, 1),
        p('c-super', 'Gin Bombay Sapphire', 0, 0, 4, 6, 2, 6, B, 1, 0.75), p('c-super', 'Vodka Absolut', 0, 0, 1, 6, 2, 4, B, 1, 0.5),
        p('c-super', 'Rum Havana Club 3', 0, 0, 3, 6, 2, 4, B, 1), p('c-super', 'Jägermeister', 0, 0, 2, 6, 1, 3, B, 1, 0.25),
        p('c-bibite', 'Coca-Cola 33 cl', 3, 10, 0, 24, 24, 96, R), p('c-bibite', 'Acqua tonica 20 cl', 1, 4, 0, 24, 24, 48, R),
        p('c-bibite', 'Succo ACE 20 cl', 0, 6, 0, 24, 12, 24, R),
        p('c-vini', 'Prosecco DOC', 1, 0, 9, 6, 6, 18, B), p('c-vini', 'Vermentino', 0, 0, 4, 6, 3, 6, B)
      ],
      suppliers: {}, order: {}, listName: '',
      list: [
        { id: uid(), text: 'Ghiaccio', qty: '3 sacchi', done: false }, { id: uid(), text: 'Limoni', qty: '2 kg', done: false },
        { id: uid(), text: 'Cannucce', qty: '', done: false }, { id: uid(), text: 'Tovaglioli', qty: '1 pacco', done: true }
      ],
      settings: { lang: detectLang(), delay: 10, sort: 'qty', barName: '', bkEvery: 7 }
    };
    // a closing from 7 days ago, so the history screen has something to show
    var used = [20, 15, 30, 2, 1.5, 1, 1.25, 1, 1, 0.75, 40, 12, 10, 4, 2];
    var got = { 10: 48, 13: 6 };
    data.arrivals = {};
    Object.keys(got).forEach(function (i) { data.arrivals[data.prods[i].id] = got[i]; });
    data.history = [{
      id: uid(), at: new Date(Date.now() - 7 * 86400000).toISOString(), arr: {},
      rows: data.prods.map(function (p, i) { return { id: p.id, name: p.name, cat: p.catId, t: total(p) + used[i] - (got[i] || 0) }; })
    }];
    return data;
  }
  function normalize(d) {
    var out = { cats: [], prods: [], suppliers: {}, order: {}, list: [], listName: '', settings: {} };
    out.listName = String(d.listName || '');
    if (Array.isArray(d.list)) out.list = d.list.filter(function (i) { return i && i.text; }).map(function (i) { return { id: String(i.id || uid()), text: String(i.text), qty: String(i.qty || ''), done: !!i.done }; });
    out.settings = Object.assign({ lang: detectLang(), delay: 10, sort: 'qty', barName: '', bkEvery: 7, lastBackup: 0, bkSnooze: 0, created: 0 }, d.settings || {});
    if (!out.settings.created) out.settings.created = Date.now();
    out.history = Array.isArray(d.history) ? d.history.filter(function (h) { return h && h.at && Array.isArray(h.rows); }) : [];
    out.arrivals = (d.arrivals && typeof d.arrivals === 'object') ? d.arrivals : {};
    if (!LANGS[out.settings.lang]) out.settings.lang = 'it';
    out.settings.barName = String(out.settings.barName || '');
    out.cats = d.cats.filter(function (c) { return c && c.id; }).map(function (c) { return { id: String(c.id), name: String(c.name || '') }; });
    var ids = {}; out.cats.forEach(function (c) { ids[c.id] = 1; });
    out.prods = d.prods.filter(function (p) { return p && ids[p.catId]; }).map(function (p) {
      return {
        id: String(p.id || uid()), catId: String(p.catId), name: String(p.name || ''),
        ct: num(p.ct), pz: num(p.pz), bt: num(p.bt), perCt: num(p.perCt), min: num(p.min),
        target: num(p.target), supplier: String(p.supplier || '').trim(), frac: !!p.frac, open: quarter(p.open)
      };
    });
    if (d.suppliers && typeof d.suppliers === 'object') {
      Object.keys(d.suppliers).forEach(function (k) { var v = d.suppliers[k] || {}; out.suppliers[k] = { phone: String(v.phone || '') }; });
    }
    if (d.order && typeof d.order === 'object') {
      Object.keys(d.order).forEach(function (k) { var v = d.order[k] || {}; out.order[k] = { q: Math.max(0, num(v.q)), off: !!v.off }; });
    }
    return out;
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var d = JSON.parse(raw); if (d && Array.isArray(d.cats) && Array.isArray(d.prods)) return normalize(d); }
    } catch (e) { /* storage unavailable */ }
    firstRun = true;
    var smp = sample(); smp.settings.created = Date.now(); return smp;
  }
  var firstRun = false;
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }

  var S = load();

  // ---------- undo ----------
  var undoStack = [];
  function snap() {
    undoStack.push(JSON.stringify({ cats: S.cats, prods: S.prods, suppliers: S.suppliers, order: S.order, list: S.list, listName: S.listName, history: S.history, arrivals: S.arrivals }));
    if (undoStack.length > 100) undoStack.shift();
    updateUndo();
  }
  function undo() {
    if (!undoStack.length) { toast(t('nothingUndo')); return; }
    var d = JSON.parse(undoStack.pop());
    S.cats = d.cats; S.prods = d.prods; S.suppliers = d.suppliers; S.order = d.order; S.list = d.list || []; S.listName = d.listName || ''; S.history = d.history || []; S.arrivals = d.arrivals || {}; updateListTab();
    save(); markPending(); renderAll(); updateUndo();
    toast(t('undone'));
  }
  function updateUndo() { $('undoBtn').disabled = !undoStack.length; }
  $('undoBtn').addEventListener('click', undo);

  // ---------- frozen ordering ----------
  // Products keep their position while you edit; they are re-sorted only by the Refresh
  // button, after the chosen delay, or when you leave the app.
  var rank = {};
  var pending = false, deadline = 0, lowOnly = false, tab = 'inv';

  function sortList(list) {
    var col = collator();
    return list.slice().sort(S.settings.sort === 'name'
      ? function (a, b) { return col.compare(a.name, b.name); }
      : function (a, b) { return total(b) - total(a) || col.compare(a.name, b.name); });
  }
  function computeRanks() {
    rank = {};
    S.cats.forEach(function (c) {
      sortList(S.prods.filter(function (p) { return p.catId === c.id; })).forEach(function (p, i) { rank[p.id] = i; });
    });
  }
  function prodsInCat(catId) {
    return S.prods.filter(function (p) { return p.catId === catId; }).sort(function (a, b) {
      var ra = rank[a.id] != null ? rank[a.id] : 1e9, rb = rank[b.id] != null ? rank[b.id] : 1e9;
      return ra - rb;
    });
  }
  function markPending() {
    pending = true;
    deadline = S.settings.delay > 0 ? Date.now() + S.settings.delay * 1000 : 0;
    updateRefreshUI();
  }
  function applyResort(silent) {
    computeRanks();
    pending = false; deadline = 0;
    renderInv();
    updateRefreshUI();
    if (!silent) toast(t('listUpdated'));
  }
  function updateRefreshUI() {
    var b = $('refreshBtn'), c = $('refreshCnt');
    b.classList.toggle('pending', pending);
    $('refreshLabel').textContent = t('refresh');
    if (pending && deadline) { c.textContent = Math.max(0, Math.ceil((deadline - Date.now()) / 1000)) + 's'; c.hidden = false; }
    else if (pending) { c.textContent = '•'; c.hidden = false; }
    else c.hidden = true;
    b.setAttribute('aria-label', t('refresh')); b.title = t('refresh');
  }
  setInterval(function () {
    if (!pending || !deadline) return;
    var a = document.activeElement;
    var editing = a && a.tagName === 'INPUT' && $('view-inv').contains(a);
    if (editing || !$('sheet').hidden) { deadline = Math.max(deadline, Date.now() + 3000); }
    if (Date.now() >= deadline) applyResort(true); else updateRefreshUI();
  }, 500);
  document.addEventListener('visibilitychange', function () { if (document.hidden && pending) applyResort(true); if (!document.hidden && tab === 'inv') renderInv(); });
  window.addEventListener('pagehide', function () { if (pending) { computeRanks(); pending = false; } });

  // ---------- inventory view ----------
  function pieHTML(p) {
    var f = p.open || 0;
    return '<button type="button" class="frac" data-act="frac" aria-label="' + esc(t('openBt', { f: f ? FR[f] : '0' })) + '">' +
      '<span class="pie" style="--f:' + (f * 100) + '%"></span><span class="fv">' + (f ? FR[f] : '0') + '</span></button>';
  }
  function stepHTML(p, f) {
    var label = '<span class="step-l">' + t(f + 'S') + (f === 'bt' && p.frac ? pieHTML(p) : '') + '</span>';
    return '<div class="step">' + label + '<div class="step-c">' +
      '<button type="button" data-act="dec" data-f="' + f + '" aria-label="− ' + esc(t(f)) + '">−</button>' +
      '<input type="number" inputmode="numeric" min="0" data-f="' + f + '" value="' + p[f] + '" aria-label="' + esc(t(f)) + '">' +
      '<button type="button" data-act="inc" data-f="' + f + '" aria-label="+ ' + esc(t(f)) + '">+</button></div></div>';
  }
  function subLine(p) {
    var sub = [];
    if (p.perCt) sub.push(p.perCt + '/' + t('ctS').toLowerCase());
    if (p.min) sub.push(t('minS', { n: p.min }));
    if (p.supplier) sub.push(esc(p.supplier));
    return sub.join(' · ');
  }
  function rowHTML(p) {
    var low = isLow(p);
    return '<li class="prod' + (low ? ' low' : '') + '" data-id="' + p.id + '">' +
      '<div class="p-top"><button type="button" class="p-name" data-act="edit">' + esc(p.name) +
      '<small class="num">' + subLine(p) + '</small></button>' +
      '<span class="badge"' + (low ? '' : ' hidden') + '>' + esc(t('lowBadge')) + '</span>' +
      '<span class="p-tot"><span class="n">' + fmt(total(p)) + '</span><small>' + esc(t('totS')) + '</small></span></div>' +
      '<div class="p-qty">' + FIELDS.map(function (f) { return stepHTML(p, f); }).join('') + '</div></li>';
  }
  function catMeta(cat) {
    var all = S.prods.filter(function (p) { return p.catId === cat.id; });
    var lowN = all.filter(isLow).length;
    return t('nProducts', { n: all.length }) + (lowN ? ' · <b>' + t('nLow', { n: lowN }) + '</b>' : '');
  }
  function renderInv() {
    var v = $('view-inv');
    var q = $('search').value.trim().toLowerCase();
    if (!S.cats.length) {
      v.innerHTML = backupBanner() + '<div class="empty"><p>' + esc(t('noCats')) + '</p><button type="button" class="btn primary" data-act="gocats">' + esc(t('goCats')) + '</button></div>';
      updateLowCount(); return;
    }
    var html = '', shown = 0;
    S.cats.forEach(function (c) {
      var list = prodsInCat(c.id).filter(function (p) {
        return (!q || p.name.toLowerCase().indexOf(q) >= 0 || p.supplier.toLowerCase().indexOf(q) >= 0) && (!lowOnly || isLow(p));
      });
      if ((q || lowOnly) && !list.length) return;
      shown += list.length;
      html += '<section class="cat" data-cat="' + c.id + '"><div class="cat-h"><h2>' + esc(c.name) + '</h2><span class="meta num" data-meta="' + c.id + '">' + catMeta(c) + '</span></div>' +
        (list.length ? '<ul class="plist">' + list.map(rowHTML).join('') + '</ul>' : '<p class="empty-cat">' + esc(t('emptyCat')) + '</p>') + '</section>';
    });
    if ((q || lowOnly) && !shown) html = '<div class="empty"><p>' + esc(t('noResults')) + '</p></div>';
    v.innerHTML = backupBanner() + html;
    updateLowCount();
  }
  function updateLowCount() {
    var n = S.prods.filter(isLow).length;
    $('lowCount').textContent = n;
    var b = $('orderBadge'); b.textContent = n; b.hidden = !n;
  }
  function updateRow(p) {
    var li = $('view-inv').querySelector('li[data-id="' + p.id + '"]');
    if (li) {
      var low = isLow(p);
      li.classList.toggle('low', low);
      li.querySelector('.badge').hidden = !low;
      li.querySelector('.p-tot .n').textContent = fmt(total(p));
      FIELDS.forEach(function (f) {
        var inp = li.querySelector('input[data-f="' + f + '"]');
        if (inp && document.activeElement !== inp) inp.value = p[f];
      });
      var pie = li.querySelector('.frac');
      if (pie) { pie.outerHTML = pieHTML(p); }
      var meta = $('view-inv').querySelector('[data-meta="' + p.catId + '"]');
      if (meta) meta.innerHTML = catMeta(catById(p.catId));
    }
    updateLowCount();
  }
  function setQty(p, f, val) {
    val = num(val);
    if (p[f] === val) return;
    snap();
    p[f] = val; save(); updateRow(p); markPending();
  }

  $('view-inv').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var act = b.getAttribute('data-act');
    if (act === 'gocats') { showTab('cats'); return; }
    if (act === 'bkdo') { doBackup(); return; }
    if (act === 'bklater') { S.settings.bkSnooze = Date.now() + 86400000; save(); renderInv(); return; }
    var li = b.closest('li[data-id]'); if (!li) return;
    var p = prodById(li.getAttribute('data-id')); if (!p) return;
    if (act === 'edit') openProduct(p.id);
    else if (act === 'inc') setQty(p, b.getAttribute('data-f'), p[b.getAttribute('data-f')] + 1);
    else if (act === 'dec') setQty(p, b.getAttribute('data-f'), p[b.getAttribute('data-f')] - 1);
    else if (act === 'frac') {
      snap();
      p.open = p.open >= 0.75 ? 0 : p.open + 0.25;
      save(); updateRow(p); markPending();
      var nb = li.querySelector('.frac'); if (nb) nb.focus();
    }
  });
  $('view-inv').addEventListener('change', function (e) {
    var inp = e.target; if (!inp.matches('input[data-f]')) return;
    var p = prodById(inp.closest('li').getAttribute('data-id'));
    if (p) { setQty(p, inp.getAttribute('data-f'), inp.value); inp.value = p[inp.getAttribute('data-f')]; }
  });
  $('view-inv').addEventListener('focusin', function (e) { if (e.target.matches('input[data-f]')) setTimeout(function () { try { e.target.select(); } catch (x) { } }, 0); });
  $('view-inv').addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target.matches('input[data-f]')) e.target.blur(); });

  $('search').addEventListener('input', renderInv);
  $('lowFilter').addEventListener('click', function () {
    lowOnly = !lowOnly; this.setAttribute('aria-pressed', String(lowOnly)); renderInv();
  });
  $('refreshBtn').addEventListener('click', function () { applyResort(false); });
  $('histBtn').addEventListener('click', function () { showTab('hist'); });
  $('fab').addEventListener('click', function () { openProduct(null); });

  // ---------- sheet (modal) ----------
  var lastFocus = null;
  function openSheet(html, onReady) {
    lastFocus = document.activeElement;
    $('sheetPanel').innerHTML = html;
    $('sheet').hidden = false;
    if (onReady) onReady($('sheetPanel'));
    var f = $('sheetPanel').querySelector('input,select,button:not([data-close])'); if (f && !('ontouchstart' in window)) f.focus();
  }
  function closeSheet() { $('sheet').hidden = true; $('sheetPanel').innerHTML = ''; if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) { } }
  $('sheet').addEventListener('click', function (e) { if (e.target.closest('[data-close]') && !$('sheet').hasAttribute('data-lock')) closeSheet(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !$('sheet').hidden && !$('sheet').hasAttribute('data-lock')) closeSheet(); });
  function armDelete(btn, onConfirm) {
    btn.addEventListener('click', function () {
      if (btn.classList.contains('armed')) { onConfirm(); return; }
      btn.classList.add('armed'); btn.textContent = t('delConfirm');
      setTimeout(function () { if (btn.isConnected) { btn.classList.remove('armed'); btn.textContent = t('del'); } }, 4000);
    });
  }
  function numField(id, label, val) {
    return '<label class="field"><span>' + esc(label) + '</span><input id="' + id + '" type="number" inputmode="numeric" min="0" value="' + val + '"></label>';
  }
  function supplierNames() {
    var set = {};
    S.prods.forEach(function (p) { if (p.supplier) set[p.supplier] = 1; });
    Object.keys(S.suppliers).forEach(function (k) { if (k) set[k] = 1; });
    return Object.keys(set).sort(collator().compare);
  }

  function openProduct(id) {
    if (!S.cats.length) { toast(t('needCat')); showTab('cats'); return; }
    var p = id ? prodById(id) : null;
    var d = p || { name: '', catId: S.cats[0].id, ct: 0, pz: 0, bt: 0, perCt: 0, min: 0, target: 0, supplier: '', frac: false, open: 0 };
    var opts = S.cats.map(function (c) { return '<option value="' + c.id + '"' + (c.id === d.catId ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join('');
    var sups = supplierNames().map(function (s) { return '<option value="' + esc(s) + '"></option>'; }).join('');
    openSheet(
      '<h3>' + esc(t(p ? 'editProduct' : 'newProduct')) + '</h3>' +
      '<form id="pform" novalidate class="form">' +
      '<label class="field"><span>' + esc(t('name')) + '</span><input id="f-name" type="text" autocomplete="off" value="' + esc(d.name) + '"></label>' +
      '<div class="grid2"><label class="field"><span>' + esc(t('category')) + '</span><select id="f-cat">' + opts + '</select></label>' +
      '<label class="field"><span>' + esc(t('supplier')) + '</span><input id="f-sup" type="text" list="supList" autocomplete="off" placeholder="' + esc(t('supplierPh')) + '" value="' + esc(d.supplier) + '"><datalist id="supList">' + sups + '</datalist></label></div>' +
      '<div class="grid3">' + numField('f-ct', t('ct'), d.ct) + numField('f-pz', t('pz'), d.pz) + numField('f-bt', t('bt'), d.bt) + '</div>' +
      '<div class="grid3">' + numField('f-perCt', t('perCt'), d.perCt) + numField('f-min', t('min'), d.min) + numField('f-target', t('target'), d.target) + '</div>' +
      '<small class="hint tight">' + esc(t('perCtHint')) + ' ' + esc(t('minHint')) + ' ' + esc(t('targetHint')) + '</small>' +
      '<label class="check"><input id="f-frac" type="checkbox"' + (d.frac ? ' checked' : '') + '><span>' + esc(t('frac')) + '<small>' + esc(t('fracHint')) + '</small></span></label>' +
      '<div class="sheet-actions">' + (p ? '<button type="button" class="btn danger" id="f-del">' + esc(t('del')) + '</button>' : '') +
      '<span class="spacer"></span><button type="button" class="btn" data-close>' + esc(t('cancel')) + '</button>' +
      '<button type="submit" class="btn primary">' + esc(t('save')) + '</button></div></form>',
      function (panel) {
        panel.querySelectorAll('input[type=number]').forEach(function (i) { i.addEventListener('focus', function () { setTimeout(function () { try { i.select(); } catch (x) { } }, 0); }); });
        $('pform').addEventListener('submit', function (e) {
          e.preventDefault();
          var name = $('f-name').value.trim();
          if (!name) { toast(t('needName')); $('f-name').focus(); return; }
          snap();
          var target = p || { id: uid(), open: 0 };
          target.name = name; target.catId = $('f-cat').value;
          target.supplier = $('f-sup').value.trim();
          ['ct', 'pz', 'bt', 'perCt', 'min', 'target'].forEach(function (k) { target[k] = num($('f-' + k).value); });
          target.frac = $('f-frac').checked;
          if (!target.frac) target.open = 0;
          if (!p) S.prods.push(target);
          delete S.order[target.id];
          save(); closeSheet(); markPending(); renderAll();
          var li = $('view-inv').querySelector('li[data-id="' + target.id + '"]');
          if (li) { li.classList.add('flash'); li.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
          toast(t(p ? 'saved' : 'added'), true);
        });
        if (p) armDelete($('f-del'), function () {
          snap();
          S.prods = S.prods.filter(function (x) { return x.id !== p.id; });
          delete S.order[p.id];
          save(); closeSheet(); renderAll(); toast(t('deleted'), true);
        });
      });
  }

  // ---------- order view ----------
  function orderGroups() {
    var catPos = {}; S.cats.forEach(function (c, i) { catPos[c.id] = i; });
    var col = collator();
    var items = S.prods.filter(isLow).map(function (p) {
      var o = S.order[p.id];
      return { p: p, q: o ? o.q : suggested(p), off: o ? o.off : false, unit: orderUnit(p) };
    });
    items.sort(function (a, b) { return (catPos[a.p.catId] - catPos[b.p.catId]) || col.compare(a.p.name, b.p.name); });
    var map = {};
    items.forEach(function (it) { (map[it.p.supplier] = map[it.p.supplier] || []).push(it); });
    var keys = Object.keys(map).sort(function (a, b) { if (!a) return 1; if (!b) return -1; return col.compare(a, b); });
    return keys.map(function (k) { return { sup: k, items: map[k] }; });
  }
  function orderText(g) {
    var lines = [t('msgHello'), ''];
    g.items.forEach(function (it) { if (!it.off && it.q > 0) lines.push('• ' + it.p.name + ': ' + it.q + ' ' + t(it.unit + 'S')); });
    lines.push('', t('msgThanks'));
    if (S.settings.barName) lines.push(S.settings.barName);
    return lines.join('\n');
  }
  function phoneDigits(raw) {
    var d = String(raw || '').replace(/[^\d+]/g, '');
    if (d.indexOf('+') === 0) d = d.slice(1); else if (d.indexOf('00') === 0) d = d.slice(2);
    else if (/^3\d{8,9}$/.test(d)) d = '39' + d;
    return d.replace(/\D/g, '');
  }
  function waLink(g) {
    var ph = g.sup && S.suppliers[g.sup] ? phoneDigits(S.suppliers[g.sup].phone) : '';
    return 'https://wa.me/' + ph + '?text=' + encodeURIComponent(orderText(g));
  }
  var ICON = {
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 15 6-6 6 6"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1z"/><path d="M9 9.5c.3 2.3 2.2 4.5 4.8 5.2l1.2-1.3 2 .9c-.2 1-1.1 1.7-2.2 1.7C11 16 8 13 8 9.2c0-1.1.7-2 1.7-2.2l.9 2z"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>',
    pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 14h6M9 17h4"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/></svg>',
    xls: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>'
  };
  function renderOrder() {
    var v = $('view-order');
    var groups = orderGroups();
    var html = '<h2 class="view-h">' + esc(t('tabOrder')) + '</h2>';
    if (!groups.length) { v.innerHTML = html + '<div class="empty"><p>' + esc(t('orderEmpty')) + '</p></div>'; return; }
    html += '<p class="hint">' + esc(t('orderHint')) + '</p><div class="row2 mb">' +
      '<button type="button" class="btn" data-act="recalc">' + esc(t('recalc')) + '</button>' +
      '<button type="button" class="btn" data-act="opdf">' + ICON.pdf + esc(t('pdfOrder')) + '</button></div>';
    groups.forEach(function (g, gi) {
      html += '<section class="cat sup" data-g="' + gi + '"><div class="cat-h"><h2>' + esc(g.sup || t('noSupplier')) + '</h2>' +
        (g.sup ? '<button type="button" class="btn icon sm" data-act="supedit" aria-label="' + esc(t('editSupplier')) + '">' + ICON.edit + '</button>' : '') + '</div>' +
        '<ul class="olist">' + g.items.map(function (it) {
          return '<li class="orow' + (it.off ? ' off' : '') + '" data-id="' + it.p.id + '">' +
            '<label class="o-chk"><input type="checkbox" data-act="toggle"' + (it.off ? '' : ' checked') + ' aria-label="' + esc(t('include')) + '"></label>' +
            '<div class="o-name">' + esc(it.p.name) + '<small class="num">' + esc(t('haveIdeal', { h: fmt(total(it.p)), i: idealOf(it.p) })) + '</small></div>' +
            '<div class="o-qty"><button type="button" data-act="odec" aria-label="−">−</button>' +
            '<input type="number" inputmode="numeric" min="0" data-act="oq" value="' + it.q + '" aria-label="' + esc(t('colQty')) + '">' +
            '<button type="button" data-act="oinc" aria-label="+">+</button></div>' +
            '<span class="o-unit">' + esc(t(it.unit + 'S')) + '</span></li>';
        }).join('') + '</ul>' +
        '<div class="o-actions"><a class="btn wa" data-act="wa" href="#" target="_blank" rel="noopener">' + ICON.wa + esc(t('whatsapp')) + '</a>' +
        '<button type="button" class="btn" data-act="copy">' + ICON.copy + esc(t('copyText')) + '</button></div>' +
        '<button type="button" class="btn block mt" data-act="recv">' + ICON.box + esc(t('arrived')) + '</button></section>';
    });
    v.innerHTML = html;
    v.querySelectorAll('a[data-act="wa"]').forEach(function (a) { a.href = waLink(groups[+a.closest('[data-g]').getAttribute('data-g')]); });
  }
  function setOrder(p, patch) {
    var cur = S.order[p.id] || { q: suggested(p), off: false };
    snap();
    S.order[p.id] = Object.assign({}, cur, patch);
    save();
  }
  $('view-order').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var act = b.getAttribute('data-act');
    var groups = orderGroups();
    var sec = b.closest('[data-g]'); var g = sec ? groups[+sec.getAttribute('data-g')] : null;
    if (act === 'recalc') { snap(); S.order = {}; save(); renderOrder(); toast(t('recalcDone'), true); return; }
    if (act === 'opdf') { exportOrderPDF(); return; }
    if (act === 'wa') { if (g) b.href = waLink(g); return; }
    if (act === 'copy') { if (g) copyText(orderText(g)); return; }
    if (act === 'supedit') { if (g) openSupplier(g.sup); return; }
    if (act === 'recv') { if (g) armAction(b, t('arrivedConfirm'), function () { receiveGroup(g); }); return; }
    var li = b.closest('li[data-id]'); if (!li) return;
    var p = prodById(li.getAttribute('data-id')); if (!p) return;
    var cur = S.order[p.id] ? S.order[p.id].q : suggested(p);
    if (act === 'oinc' || act === 'odec') {
      var nq = Math.max(0, cur + (act === 'oinc' ? 1 : -1));
      setOrder(p, { q: nq });
      li.querySelector('input[data-act="oq"]').value = nq;
    }
  });
  $('view-order').addEventListener('change', function (e) {
    var el = e.target; var li = el.closest('li[data-id]'); if (!li) return;
    var p = prodById(li.getAttribute('data-id')); if (!p) return;
    if (el.matches('[data-act="toggle"]')) { setOrder(p, { off: !el.checked }); li.classList.toggle('off', !el.checked); }
    if (el.matches('[data-act="oq"]')) { setOrder(p, { q: num(el.value) }); el.value = S.order[p.id].q; }
  });
  $('view-order').addEventListener('focusin', function (e) { if (e.target.matches('input[data-act="oq"]')) setTimeout(function () { try { e.target.select(); } catch (x) { } }, 0); });

  function copyText(text) {
    function fallback() {
      openSheet('<h3>' + esc(t('copyText')) + '</h3><textarea id="copyArea" class="copyarea" readonly>' + esc(text) + '</textarea><p class="status">' + esc(t('copyFail')) + '</p>' +
        '<div class="sheet-actions"><span class="spacer"></span><button type="button" class="btn primary" data-close>OK</button></div>',
        function () { var a = $('copyArea'); a.focus(); a.select(); });
    }
    try {
      navigator.clipboard.writeText(text).then(function () { toast(t('copied')); }, fallback);
    } catch (e) { fallback(); }
  }
  function openSupplier(name) {
    var cur = S.suppliers[name] || { phone: '' };
    openSheet('<h3>' + esc(t('editSupplier')) + '</h3><form id="sform" novalidate class="form">' +
      '<label class="field"><span>' + esc(t('name')) + '</span><input id="s-name" type="text" autocomplete="off" value="' + esc(name) + '"></label>' +
      '<label class="field"><span>' + esc(t('phone')) + '</span><input id="s-phone" type="tel" inputmode="tel" autocomplete="off" value="' + esc(cur.phone) + '"><small>' + esc(t('phoneHint')) + '</small></label>' +
      '<div class="sheet-actions"><span class="spacer"></span><button type="button" class="btn" data-close>' + esc(t('cancel')) + '</button>' +
      '<button type="submit" class="btn primary">' + esc(t('save')) + '</button></div></form>',
      function () {
        $('sform').addEventListener('submit', function (e) {
          e.preventDefault();
          var nn = $('s-name').value.trim();
          if (!nn) { toast(t('needName')); return; }
          snap();
          if (nn !== name) {
            S.prods.forEach(function (p) { if (p.supplier === name) p.supplier = nn; });
            delete S.suppliers[name];
          }
          S.suppliers[nn] = { phone: $('s-phone').value.trim() };
          save(); closeSheet(); renderAll(); toast(t('saved'), true);
        });
      });
  }

  // ---------- list (free notes with checkboxes) ----------
  function listTitle() { return S.listName || t('tabList'); }
  function updateListTab() { var el = $('listTabLabel'); if (el) el.textContent = listTitle(); }
  function listText() {
    var lines = [(S.settings.barName ? S.settings.barName + ' — ' : '') + listTitle(), ''];
    var todo = S.list.filter(function (it) { return !it.done; });
    if (!todo.length) lines.push(t('listAllDone'));
    todo.forEach(function (it) { lines.push('• ' + it.text + (it.qty ? ' — ' + it.qty : '')); });
    return lines.join('\n');
  }
  function renderList() {
    var v = $('view-list');
    var n = S.list.length, d = S.list.filter(function (i) { return i.done; }).length;
    var html = '<div class="list-h"><h2 class="view-h">' + esc(listTitle()) + '</h2>' +
      '<button type="button" class="btn icon sm" data-act="rename" aria-label="' + esc(t('listRename')) + '">' + ICON.edit + '</button></div>' +
      '<form id="listAdd" class="list-add" novalidate>' +
      '<input id="la-text" class="input" type="text" autocomplete="off" placeholder="' + esc(t('listAddPh')) + '" aria-label="' + esc(t('listItem')) + '">' +
      '<input id="la-qty" class="input qty" type="text" autocomplete="off" placeholder="' + esc(t('listQtyPh')) + '" aria-label="' + esc(t('colQty')) + '">' +
      '<button type="submit" class="btn primary icon" aria-label="' + esc(t('listAdd')) + '">' + ICON.plus + '</button></form>';
    if (!n) {
      html += '<div class="empty"><p>' + esc(t('listEmpty')) + '</p></div>';
    } else {
      html += '<p class="meta num list-count">' + esc(t('listDoneN', { d: d, n: n })) + '</p><ul class="olist llist">' + S.list.map(function (it) {
        return '<li class="lrow' + (it.done ? ' done' : '') + '" data-id="' + it.id + '">' +
          '<label class="o-chk"><input type="checkbox" data-act="ldone"' + (it.done ? ' checked' : '') + ' aria-label="' + esc(it.text) + '"></label>' +
          '<button type="button" class="l-text" data-act="ledit">' + esc(it.text) + '</button>' +
          (it.qty ? '<span class="l-qty">' + esc(it.qty) + '</span>' : '') + '</li>';
      }).join('') + '</ul>' +
        '<div class="o-actions"><a class="btn wa" data-act="lwa" href="#" target="_blank" rel="noopener">' + ICON.wa + esc(t('whatsapp')) + '</a>' +
        '<button type="button" class="btn" data-act="lcopy">' + ICON.copy + esc(t('copyText')) + '</button></div>' +
        '<div class="o-actions mt"><button type="button" class="btn" data-act="lpdf">' + ICON.pdf + 'PDF</button>' +
        '<button type="button" class="btn" data-act="lxls">' + ICON.xls + 'Excel</button></div>' +
        (d ? '<button type="button" class="btn block mt" data-act="lclear">' + esc(t('listClearDone')) + '</button>' : '');
    }
    v.innerHTML = html;
    var wa = v.querySelector('[data-act="lwa"]'); if (wa) wa.href = 'https://wa.me/?text=' + encodeURIComponent(listText());
    $('listAdd').addEventListener('submit', function (e) {
      e.preventDefault();
      var tx = $('la-text').value.trim();
      if (!tx) { $('la-text').focus(); return; }
      snap();
      S.list.push({ id: uid(), text: tx, qty: $('la-qty').value.trim(), done: false });
      save(); renderList(); $('la-text').focus();
    });
  }
  $('view-list').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var act = b.getAttribute('data-act');
    if (act === 'rename') { openListRename(); return; }
    if (act === 'lwa') { b.href = 'https://wa.me/?text=' + encodeURIComponent(listText()); return; }
    if (act === 'lcopy') { copyText(listText()); return; }
    if (act === 'lpdf') { exportListPDF(); return; }
    if (act === 'lxls') { exportListXLSX(); return; }
    if (act === 'lclear') { snap(); S.list = S.list.filter(function (i) { return !i.done; }); save(); renderList(); toast(t('deleted'), true); return; }
    if (act === 'ledit') { openListItem(b.closest('li').getAttribute('data-id')); }
  });
  $('view-list').addEventListener('change', function (e) {
    if (!e.target.matches('[data-act="ldone"]')) return;
    var id = e.target.closest('li').getAttribute('data-id');
    var it = S.list.filter(function (i) { return i.id === id; })[0]; if (!it) return;
    snap(); it.done = e.target.checked; save(); renderList();
  });
  function openListItem(id) {
    var it = S.list.filter(function (i) { return i.id === id; })[0]; if (!it) return;
    openSheet('<h3>' + esc(t('listEditItem')) + '</h3><form id="liform" novalidate class="form">' +
      '<label class="field"><span>' + esc(t('listItem')) + '</span><input id="li-text" type="text" autocomplete="off" value="' + esc(it.text) + '"></label>' +
      '<label class="field"><span>' + esc(t('colQty')) + '</span><input id="li-qty" type="text" autocomplete="off" value="' + esc(it.qty) + '" placeholder="' + esc(t('listQtyPh')) + '"></label>' +
      '<div class="sheet-actions"><button type="button" class="btn danger" id="li-del">' + esc(t('del')) + '</button><span class="spacer"></span>' +
      '<button type="button" class="btn" data-close>' + esc(t('cancel')) + '</button><button type="submit" class="btn primary">' + esc(t('save')) + '</button></div></form>',
      function () {
        $('liform').addEventListener('submit', function (e) {
          e.preventDefault();
          var tx = $('li-text').value.trim(); if (!tx) { toast(t('needName')); return; }
          snap(); it.text = tx; it.qty = $('li-qty').value.trim(); save(); closeSheet(); renderList();
        });
        armDelete($('li-del'), function () {
          snap(); S.list = S.list.filter(function (i) { return i.id !== id; }); save(); closeSheet(); renderList(); toast(t('deleted'), true);
        });
      });
  }
  function openListRename() {
    openSheet('<h3>' + esc(t('listRename')) + '</h3><form id="lnform" novalidate class="form">' +
      '<label class="field"><span>' + esc(t('name')) + '</span><input id="ln-name" type="text" autocomplete="off" value="' + esc(listTitle()) + '"></label>' +
      '<div class="sheet-actions"><span class="spacer"></span><button type="button" class="btn" data-close>' + esc(t('cancel')) + '</button>' +
      '<button type="submit" class="btn primary">' + esc(t('save')) + '</button></div></form>',
      function () {
        $('lnform').addEventListener('submit', function (e) {
          e.preventDefault();
          var nn = $('ln-name').value.trim();
          snap(); S.listName = nn === t('tabList') ? '' : nn; save(); closeSheet(); updateListTab(); renderList(); toast(t('saved'), true);
        });
      });
  }
  function listSheet() {
    var rows = [
      { style: 3, cells: [(S.settings.barName ? S.settings.barName + ' — ' : '') + listTitle()] },
      { style: 4, cells: [t('pdfDate', { d: dateLong() })] },
      { cells: [] },
      { style: 1, cells: [t('listItem'), t('colQty')] }
    ];
    S.list.forEach(function (it) { if (!it.done) rows.push({ cells: [it.text, it.qty] }); });
    if (rows.length === 4) rows.push({ cells: [t('listAllDone')] });
    return { name: listTitle(), rows: rows, freeze: 4, widths: [40, 16] };
  }
  function safeName(s) { return String(s).toLowerCase().replace(/[^a-z0-9àèéìòù]+/gi, '-').replace(/^-|-$/g, '') || 'lista'; }
  function exportListXLSX() { saveFile(safeName(listTitle()) + '-' + today() + '.xlsx', buildXLSX([listSheet()]), t('fileDone')); }
  function exportListPDF() {
    var J = window.jspdf && window.jspdf.jsPDF;
    if (!J) { toast(t('pdfErr')); return; }
    var doc = new J({ unit: 'mm', format: 'a4' });
    if (typeof doc.autoTable !== 'function') { toast(t('pdfErr')); return; }
    doc.setFont('helvetica', 'bold'); doc.setFontSize(18); doc.setTextColor(22, 33, 38);
    doc.text((S.settings.barName ? S.settings.barName + ' — ' : '') + listTitle(), 14, 18);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(86, 102, 109);
    doc.text(t('pdfDate', { d: dateLong() }), 14, 25);
    var todo = S.list.filter(function (it) { return !it.done; });
    if (!todo.length) { doc.setTextColor(22, 33, 38); doc.text(t('listAllDone'), 14, 33); }
    else doc.autoTable(Object.assign({}, TABLE, {
      startY: 31,
      head: [['', t('listItem'), t('colQty')]],
      body: todo.map(function (it) { return ['', it.text, it.qty]; }),
      columnStyles: { 0: { cellWidth: 10 }, 2: { cellWidth: 40, halign: 'right' } },
      didParseCell: function (data) { if (data.section === 'head' && data.column.index === 2) data.cell.styles.halign = 'right'; },
      didDrawCell: function (data) {
        if (data.section !== 'body' || data.column.index !== 0) return;
        doc.setDrawColor(22, 33, 38); doc.setLineWidth(0.3);
        doc.rect(data.cell.x + 3, data.cell.y + data.cell.height / 2 - 2, 4, 4);
      }
    }));
    finishPDF(doc, safeName(listTitle()) + '-' + today() + '.pdf');
  }

  // ---------- backup reminder & storage protection ----------
  var persisted = null;
  function hasData() { return S.prods.length > 0 || S.list.length > 0; }
  function daysSince(ts) { return Math.floor((Date.now() - ts) / 86400000); }
  function backupDue() {
    var every = S.settings.bkEvery;
    if (!every || !hasData()) return false;
    if (Date.now() < (S.settings.bkSnooze || 0)) return false;
    var base = S.settings.lastBackup || S.settings.created || Date.now();
    return daysSince(base) >= every;
  }
  function backupBanner() {
    if (!backupDue()) return '';
    var msg = S.settings.lastBackup ? t('bkDue', { n: daysSince(S.settings.lastBackup) }) : t('bkNever');
    return '<div class="banner" role="status"><span>' + esc(msg) + '</span><div class="banner-a">' +
      '<button type="button" class="btn sm2" data-act="bklater">' + esc(t('bkLater')) + '</button>' +
      '<button type="button" class="btn primary sm2" data-act="bkdo">' + esc(t('bkDo')) + '</button></div></div>';
  }
  function doBackup() {
    saveFile('inventario-bar-backup-' + today() + '.json', new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' })).then(function (ok) {
      if (!ok) return;
      S.settings.lastBackup = Date.now(); S.settings.bkSnooze = 0; save();
      toast(t('fileDone')); renderInv(); if (tab === 'set') renderSet();
    });
  }
  function lastBackupText() {
    if (!S.settings.lastBackup) return t('bkNone');
    var d; try { d = new Date(S.settings.lastBackup).toLocaleDateString(S.settings.lang, { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { d = new Date(S.settings.lastBackup).toLocaleDateString(); }
    return t('bkLast', { d: d });
  }
  try {
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persisted().then(function (p) { return p || navigator.storage.persist(); })
        .then(function (v) { persisted = !!v; if (tab === 'set') renderSet(); }).catch(function () { });
    }
  } catch (e) { }

  // ---------- welcome (first start) ----------
  function emptyData() {
    S.cats = []; S.prods = []; S.suppliers = {}; S.order = {}; S.list = []; S.listName = '';
    S.history = []; S.arrivals = {};
  }
  function openWelcome(locked) {
    openSheet('<h3>' + esc(t('welcomeTitle')) + '</h3><p class="hint tight">' + esc(t('welcomeText')) + '</p><div class="xmenu">' +
      '<button type="button" class="btn block choice" data-w="sample"><b>' + esc(t('startSample')) + '</b><small>' + esc(t('startSampleHint')) + '</small></button>' +
      '<button type="button" class="btn block choice" data-w="empty"><b>' + esc(t('startEmpty')) + '</b><small>' + esc(t('startEmptyHint')) + '</small></button></div>',
      function (panel) {
        panel.querySelector('.xmenu').addEventListener('click', function (e) {
          var b = e.target.closest('[data-w]'); if (!b) return;
          var keep = S.settings;
          if (b.getAttribute('data-w') === 'sample') { var smp = sample(); smp.settings = keep; S = smp; }
          else emptyData();
          S.settings.created = Date.now();
          $('sheet').removeAttribute('data-lock');
          save(); closeSheet(); updateListTab(); applyResort(true); renderAll();
        });
      });
    if (locked) $('sheet').setAttribute('data-lock', '1');
  }

  // ---------- arrivals (goods received from an order) ----------
  function receiveGroup(g) {
    var any = false;
    snap();
    g.items.forEach(function (it) {
      if (it.off || !it.q) return;
      var p = it.p, units;
      if (it.unit === 'ct') { p.ct += it.q; units = it.q * (p.perCt || 1); }
      else if (it.unit === 'bt') { p.bt += it.q; units = it.q; }
      else { p.pz += it.q; units = it.q; }
      S.arrivals[p.id] = (S.arrivals[p.id] || 0) + units;
      delete S.order[p.id];
      any = true;
    });
    if (!any) { undoStack.pop(); updateUndo(); return; }
    save(); markPending(); renderInv(); renderOrder(); toast(t('arrivedDone'), true);
  }
  function armAction(btn, confirmLabel, fn) {
    var orig = btn.innerHTML;
    if (btn.classList.contains('armed')) { fn(); return; }
    btn.classList.add('armed'); btn.textContent = confirmLabel;
    setTimeout(function () { if (btn.isConnected) { btn.classList.remove('armed'); btn.innerHTML = orig; } }, 4000);
  }

  // ---------- history & consumption ----------
  var histPeriod = -1; // -1 = from the last closing to now; k = between closing k-1 and k
  function currentRows() { return S.prods.map(function (p) { return { id: p.id, name: p.name, cat: p.catId, t: total(p) }; }); }
  function closeInventory() {
    snap();
    S.history.push({ id: uid(), at: new Date().toISOString(), rows: currentRows(), arr: S.arrivals });
    S.arrivals = {};
    if (S.history.length > 60) S.history.shift();
    histPeriod = -1;
    save(); renderHist(); toast(t('closed'), true);
  }
  function fmtDate(iso, withTime) {
    var d = new Date(iso);
    try { return d.toLocaleString(S.settings.lang, withTime ? { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' } : { day: 'numeric', month: 'short' }); }
    catch (e) { return d.toLocaleDateString(); }
  }
  function daysTxt(n) { return n === 1 ? t('day1') : t('days', { n: n }); }
  function fmtDec(n) { try { return n.toLocaleString(S.settings.lang, { maximumFractionDigits: 1 }); } catch (e) { return String(Math.round(n * 10) / 10); } }
  function periodData(k) {
    var H = S.history;
    if (!H.length) return null;
    var start, end, arr, endRows, live = false;
    if (k < 0) { start = H[H.length - 1]; end = new Date().toISOString(); arr = S.arrivals; endRows = currentRows(); live = true; }
    else { start = H[k - 1]; end = H[k].at; arr = H[k].arr || {}; endRows = H[k].rows; }
    var sMap = {}; start.rows.forEach(function (r) { sMap[r.id] = r; });
    var days = Math.max(1, Math.round((new Date(end) - new Date(start.at)) / 86400000));
    var rows = endRows.filter(function (r) { return sMap[r.id]; }).map(function (r) {
      var a = arr[r.id] || 0, s = sMap[r.id].t;
      return { id: r.id, name: r.name, cat: r.cat, s: s, a: a, e: r.t, c: Math.round((s + a - r.t) * 100) / 100 };
    });
    return { start: start.at, end: end, days: days, rows: rows, live: live };
  }
  function groupByCat(rows) {
    var col = collator(), out = [], byCat = {};
    rows.forEach(function (r) { (byCat[r.cat] = byCat[r.cat] || []).push(r); });
    S.cats.forEach(function (c) { if (byCat[c.id]) { out.push({ name: c.name, rows: byCat[c.id] }); delete byCat[c.id]; } });
    var rest = []; Object.keys(byCat).forEach(function (k) { rest = rest.concat(byCat[k]); });
    if (rest.length) out.push({ name: t('otherCat'), rows: rest });
    out.forEach(function (g) { g.rows.sort(function (a, b) { return (b.c - a.c) || col.compare(a.name, b.name); }); });
    return out;
  }
  function periodLabel(k) {
    var H = S.history;
    if (k < 0) return t('periodNow', { d: fmtDate(H[H.length - 1].at) });
    return t('periodRange', { a: fmtDate(H[k - 1].at), b: fmtDate(H[k].at) });
  }
  function renderHist() {
    var v = $('view-hist'), H = S.history;
    var html = '<div class="list-h"><button type="button" class="btn icon sm" data-act="hback" aria-label="' + esc(t('back')) + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg></button>' +
      '<h2 class="view-h grow">' + esc(t('histTitle')) + '</h2></div>' +
      '<button type="button" class="btn primary block" data-act="hclose">' + esc(t('closeInv')) + '</button>' +
      '<p class="hint mt">' + esc(t('closeHint')) + '</p>';
    if (!H.length) { v.innerHTML = html + '<div class="empty"><p>' + esc(t('histEmpty')) + '</p></div>'; return; }
    if (histPeriod >= H.length || histPeriod === 0) histPeriod = -1;
    var opts = '<option value="-1"' + (histPeriod < 0 ? ' selected' : '') + '>' + esc(periodLabel(-1)) + '</option>';
    for (var k = H.length - 1; k >= 1; k--) opts += '<option value="' + k + '"' + (histPeriod === k ? ' selected' : '') + '>' + esc(periodLabel(k)) + '</option>';
    var pd = periodData(histPeriod);
    html += '<label class="field"><span>' + esc(t('period')) + '</span><select id="h-period">' + opts + '</select></label>' +
      '<p class="meta num list-count mt">' + esc(daysTxt(pd.days)) + (pd.live ? ' · ' + esc(t('liveNote')) : '') + '</p>';
    if (!pd.rows.length) html += '<div class="empty"><p>' + esc(t('noCons')) + '</p></div>';
    else {
      html += '<div class="o-actions mb"><button type="button" class="btn" data-act="hpdf">' + ICON.pdf + 'PDF</button><button type="button" class="btn" data-act="hxls">' + ICON.xls + 'Excel</button></div>';
      groupByCat(pd.rows).forEach(function (g) {
        html += '<section class="cat"><div class="cat-h"><h2>' + esc(g.name) + '</h2></div><ul class="olist">' + g.rows.map(function (r) {
          var up = r.c < 0;
          return '<li class="hrow' + (up ? ' up' : '') + '"><div class="o-name">' + esc(r.name) +
            '<small class="num">' + esc(t('colStart')) + ' ' + fmt(r.s) + (r.a ? ' · ' + esc(t('colArr')) + ' +' + fmt(r.a) : '') + ' · ' + esc(pd.live ? t('colNow') : t('colEnd')) + ' ' + fmt(r.e) +
            (up ? '<br>' + esc(t('consUp')) : '') + '</small></div>' +
            '<div class="h-c"><span class="n">' + (up ? '+' + fmt(-r.c) : fmt(r.c)) + '</span><small>' + (up ? '' : esc(t('perDay', { n: fmtDec(r.c / pd.days) }))) + '</small></div></li>';
        }).join('') + '</ul></section>';
      });
    }
    html += '<section class="cat"><div class="cat-h"><h2>' + esc(t('closings')) + '</h2></div><ul class="olist">' +
      H.slice().reverse().map(function (h) {
        return '<li class="orow" data-hid="' + h.id + '"><div class="o-name">' + esc(fmtDate(h.at, true)) + '<small>' + esc(t('nProducts', { n: h.rows.length })) + '</small></div>' +
          '<button type="button" class="btn danger sm2" data-act="hdel">' + esc(t('del')) + '</button></li>';
      }).join('') + '</ul></section>';
    v.innerHTML = html;
    $('h-period').addEventListener('change', function () { histPeriod = parseInt(this.value, 10); renderHist(); });
  }
  $('view-hist').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var act = b.getAttribute('data-act');
    if (act === 'hback') { showTab('inv'); return; }
    if (act === 'hclose') { armAction(b, t('closeConfirm'), closeInventory); return; }
    if (act === 'hpdf') { exportHistPDF(); return; }
    if (act === 'hxls') { exportHistXLSX(); return; }
    if (act === 'hdel') {
      var id = b.closest('li').getAttribute('data-hid');
      armAction(b, t('delConfirm'), function () {
        var H = S.history, i = H.findIndex(function (h) { return h.id === id; });
        if (i < 0) return;
        snap();
        // keep the goods received during the removed period so later consumption stays right
        var arr = H[i].arr || {}, target = i < H.length - 1 ? (H[i + 1].arr = H[i + 1].arr || {}) : S.arrivals;
        if (i > 0) Object.keys(arr).forEach(function (k) { target[k] = (target[k] || 0) + arr[k]; });
        H.splice(i, 1); histPeriod = -1;
        save(); renderHist(); toast(t('deleted'), true);
      });
    }
  });
  function exportHistPDF() {
    var pd = periodData(histPeriod); if (!pd) return;
    var doc = newPDF('consTitle'); if (!doc) return;
    doc.setTextColor(86, 102, 109);
    doc.text(periodLabel(histPeriod) + ' · ' + daysTxt(pd.days), 14, 30.5);
    var y = 36;
    groupByCat(pd.rows).forEach(function (g) {
      doc.autoTable(Object.assign({}, TABLE, {
        startY: y,
        head: [[g.name.toUpperCase(), t('colStart'), t('colArr'), pd.live ? t('colNow') : t('colEnd'), t('colCons'), t('colPerDay')]],
        body: g.rows.map(function (r) { return [r.name, fmt(r.s), r.a ? '+' + fmt(r.a) : '', fmt(r.e), r.c < 0 ? '+' + fmt(-r.c) + ' *' : fmt(r.c), r.c < 0 ? '' : fmtDec(r.c / pd.days)]; }),
        columnStyles: { 1: { halign: 'right', cellWidth: 18 }, 2: { halign: 'right', cellWidth: 18 }, 3: { halign: 'right', cellWidth: 18 }, 4: { halign: 'right', cellWidth: 22, fontStyle: 'bold' }, 5: { halign: 'right', cellWidth: 20 } },
        didParseCell: function (data) { if (data.section === 'head' && data.column.index > 0) data.cell.styles.halign = 'right'; }
      }));
      y = doc.lastAutoTable.finalY + 7;
    });
    if (pd.rows.some(function (r) { return r.c < 0; })) { doc.setFontSize(8.5); doc.setTextColor(86, 102, 109); doc.text('* ' + t('consUp'), 14, Math.min(y, 280)); }
    finishPDF(doc, 'consumi-bar-' + today() + '.pdf');
  }
  function exportHistXLSX() {
    var pd = periodData(histPeriod); if (!pd) return;
    var rows = [
      { style: 3, cells: [heading('consTitle')] },
      { style: 4, cells: [periodLabel(histPeriod) + ' · ' + daysTxt(pd.days)] },
      { cells: [] },
      { style: 1, cells: [t('colCat'), t('pdfProduct'), t('colStart'), t('colArr'), pd.live ? t('colNow') : t('colEnd'), t('colCons'), t('colPerDay')] }
    ];
    groupByCat(pd.rows).forEach(function (g) {
      g.rows.forEach(function (r) {
        rows.push({ cells: [g.name, r.name, r.s, r.a, r.e, { f: 'C{r}+D{r}-E{r}', v: r.c }, { f: 'ROUND(F{r}/' + pd.days + ',1)', v: Math.round(r.c / pd.days * 10) / 10 }] });
      });
    });
    saveFile('consumi-bar-' + today() + '.xlsx', buildXLSX([{ name: t('consTitle'), rows: rows, freeze: 4, widths: [18, 30, 10, 10, 10, 12, 11] }]), t('fileDone'));
  }

  // ---------- appearance (theme + accent colour) ----------
  // each colour: [light accent, light soft, dark accent, dark soft, dark text-on-accent, toast link light, toast link dark]
  var ACCENTS = {
    amber: ['#9c540b', '#f5e6d2', '#efa142', '#3a2a14', '#1a1206', '#f3b25c', '#9c540b'],
    blue: ['#1f5fbf', '#dde8f8', '#6ea8ff', '#16263f', '#08142a', '#8fbaff', '#1f5fbf'],
    green: ['#1e7a46', '#dcefe3', '#5fcf8e', '#14301f', '#06180d', '#7fdca6', '#1e7a46'],
    purple: ['#6b3fb5', '#ebe2f8', '#b794ff', '#261a3d', '#140a26', '#c9b0ff', '#6b3fb5'],
    teal: ['#0f7480', '#d7eef0', '#4fd1dc', '#0f2f33', '#04191b', '#7fe0e8', '#0f7480'],
    slate: ['#3b4a54', '#e2e7ea', '#c9d4da', '#2a3439', '#11181c', '#c9d4da', '#3b4a54']
  };
  function applyLook() {
    var a = ACCENTS[S.settings.accent] || ACCENTS.amber;
    var light = '--accent:' + a[0] + ';--accent-soft:' + a[1] + ';--accent-ink:#ffffff;--accent-2:' + a[5] + ';';
    var dark = '--accent:' + a[2] + ';--accent-soft:' + a[3] + ';--accent-ink:' + a[4] + ';--accent-2:' + a[6] + ';';
    var css = ':root{' + light + '}' +
      '@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){' + dark + '}}' +
      ':root[data-theme="dark"]{' + dark + '}';
    var el = $('lookStyle');
    if (!el) { el = document.createElement('style'); el.id = 'lookStyle'; document.head.appendChild(el); }
    el.textContent = css;
    var th = S.settings.theme;
    if (th === 'light' || th === 'dark') document.documentElement.setAttribute('data-theme', th);
    else if (lookTouched) document.documentElement.removeAttribute('data-theme');
  }
  var lookTouched = false;
  function lookGroup() {
    var s = S.settings;
    var th = ['auto', 'light', 'dark'].map(function (k) {
      var lbl = { auto: 'themeAuto', light: 'themeLight', dark: 'themeDark' }[k];
      return '<button type="button" class="seg" data-theme-opt="' + k + '" aria-pressed="' + ((s.theme || 'auto') === k) + '">' + esc(t(lbl)) + '</button>';
    }).join('');
    var sw = Object.keys(ACCENTS).map(function (k) {
      var on = (s.accent || 'amber') === k;
      return '<button type="button" class="swatch" data-accent="' + k + '" aria-pressed="' + on + '" aria-label="' + esc(t('c_' + k)) + '">' +
        '<span class="dot" style="background:' + ACCENTS[k][0] + '"></span><span class="sw-l">' + esc(t('c_' + k)) + '</span></button>';
    }).join('');
    return '<div class="set-group" id="lookGroup"><h3>' + esc(t('look')) + '</h3>' +
      '<div class="field"><span>' + esc(t('theme')) + '</span><div class="segs">' + th + '</div></div>' +
      '<div class="field"><span>' + esc(t('color')) + '</span><div class="swatches">' + sw + '</div></div>' +
      '<p class="status">' + esc(t('lookHint')) + '</p></div>';
  }
  $('view-set').addEventListener('click', function (e) {
    var b = e.target.closest('[data-theme-opt],[data-accent]'); if (!b) return;
    lookTouched = true;
    if (b.hasAttribute('data-theme-opt')) S.settings.theme = b.getAttribute('data-theme-opt');
    else S.settings.accent = b.getAttribute('data-accent');
    save(); applyLook();
    var g = $('lookGroup'); if (g) g.outerHTML = lookGroup();
  });

  // ---------- categories view ----------
  function renderCats(movedId) {
    var v = $('view-cats');
    var n = S.cats.length;
    v.innerHTML = '<h2 class="view-h">' + esc(t('tabCats')) + '</h2><p class="hint">' + esc(t('catsHint')) + '</p>' +
      (n ? '<ol class="clist">' + S.cats.map(function (c, i) {
        var cnt = S.prods.filter(function (p) { return p.catId === c.id; }).length;
        return '<li data-id="' + c.id + '"' + (c.id === movedId ? ' class="moved"' : '') + '><span class="c-pos">' + (i + 1) + '</span>' +
          '<span class="c-name">' + esc(c.name) + '<small>' + esc(t('nProducts', { n: cnt })) + '</small></span>' +
          '<button type="button" class="btn icon" data-act="up" aria-label="' + esc(t('up')) + '"' + (i === 0 ? ' disabled' : '') + '>' + ICON.up + '</button>' +
          '<button type="button" class="btn icon" data-act="down" aria-label="' + esc(t('down')) + '"' + (i === n - 1 ? ' disabled' : '') + '>' + ICON.down + '</button>' +
          '<button type="button" class="btn icon" data-act="edit" aria-label="' + esc(t('edit')) + '">' + ICON.edit + '</button></li>';
      }).join('') + '</ol>' : '') +
      '<button type="button" class="btn primary block" data-act="add">' + ICON.plus + esc(t('newCat')) + '</button>';
  }
  $('view-cats').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b || b.disabled) return;
    var act = b.getAttribute('data-act');
    if (act === 'add') { openCat(null); return; }
    var id = b.closest('li').getAttribute('data-id');
    var i = S.cats.findIndex(function (c) { return c.id === id; });
    if (act === 'up' || act === 'down') {
      var j = act === 'up' ? i - 1 : i + 1;
      snap();
      var tmp = S.cats[i]; S.cats[i] = S.cats[j]; S.cats[j] = tmp;
      save(); renderCats(id); renderInv();
      var nb = $('view-cats').querySelector('li[data-id="' + id + '"] [data-act="' + act + '"]');
      if (nb && !nb.disabled) nb.focus();
    } else if (act === 'edit') openCat(id);
  });
  function openCat(id) {
    var c = id ? catById(id) : null;
    var cnt = c ? S.prods.filter(function (p) { return p.catId === c.id; }).length : 0;
    openSheet(
      '<h3>' + esc(t(c ? 'editCat' : 'newCat')) + '</h3><form id="cform" novalidate class="form">' +
      '<label class="field"><span>' + esc(t('name')) + '</span><input id="c-name" type="text" autocomplete="off" value="' + esc(c ? c.name : '') + '"></label>' +
      (c && cnt ? '<p class="warn" id="c-warn" hidden>' + esc(t('catDelWarn', { n: cnt })) + '</p>' : '') +
      '<div class="sheet-actions">' + (c ? '<button type="button" class="btn danger" id="c-del">' + esc(t('del')) + '</button>' : '') +
      '<span class="spacer"></span><button type="button" class="btn" data-close>' + esc(t('cancel')) + '</button>' +
      '<button type="submit" class="btn primary">' + esc(t('save')) + '</button></div></form>',
      function () {
        $('cform').addEventListener('submit', function (e) {
          e.preventDefault();
          var name = $('c-name').value.trim();
          if (!name) { toast(t('needName')); $('c-name').focus(); return; }
          snap();
          if (c) c.name = name; else S.cats.push({ id: uid(), name: name });
          save(); closeSheet(); renderAll(); toast(t('saved'), true);
        });
        if (c) {
          var del = $('c-del');
          del.addEventListener('click', function () { var w = $('c-warn'); if (w) w.hidden = false; });
          armDelete(del, function () {
            snap();
            S.cats = S.cats.filter(function (x) { return x.id !== c.id; });
            S.prods = S.prods.filter(function (p) { return p.catId !== c.id; });
            save(); closeSheet(); renderAll(); toast(t('deleted'), true);
          });
        }
      });
  }

  // ---------- settings view ----------
  var deferredPrompt = null;
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  function isStandalone() {
    try { return window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true; } catch (e) { return false; }
  }
  function installStatus() {
    if (isStandalone()) return { text: t('installed'), ok: true, btn: false };
    if (deferredPrompt) return { text: '', ok: true, btn: true };
    if (isIOS) return { text: t('installIOS'), ok: false, btn: false };
    return { text: t('installWait'), ok: false, btn: true, disabled: true };
  }
  function renderSet() {
    var s = S.settings, st = installStatus();
    var langOpts = Object.keys(LANGS).map(function (k) { return '<option value="' + k + '"' + (k === s.lang ? ' selected' : '') + '>' + LANGS[k] + '</option>'; }).join('');
    var delays = [0, 5, 10, 30, 60].map(function (n) { return '<option value="' + n + '"' + (n === s.delay ? ' selected' : '') + '>' + esc(n ? t('secs', { n: n }) : t('manual')) + '</option>'; }).join('');
    $('view-set').innerHTML =
      '<h2 class="view-h">' + esc(t('tabSet')) + '</h2>' +
      '<div class="set-group"><h3>' + esc(t('installSec')) + '</h3>' +
      (st.btn ? '<button type="button" class="btn primary block" id="s-install"' + (st.disabled ? ' disabled' : '') + '>' + esc(t('install')) + '</button>' : '') +
      (st.text ? '<p class="status' + (st.ok ? ' ok' : '') + '">' + esc(st.text) + '</p>' : '') + '</div>' +
      '<div class="set-group"><h3>' + esc(t('barName')) + '</h3><input class="input" id="s-bar" type="text" autocomplete="off" value="' + esc(s.barName) + '" aria-label="' + esc(t('barName')) + '"><p class="status">' + esc(t('barNameHint')) + '</p></div>' +
      lookGroup() +
      '<div class="set-group"><h3>' + esc(t('lang')) + '</h3><select class="input" id="s-lang" aria-label="' + esc(t('lang')) + '">' + langOpts + '</select></div>' +
      '<div class="set-group"><h3>' + esc(t('listSec')) + '</h3>' +
      '<label class="field"><span>' + esc(t('delay')) + '</span><select id="s-delay">' + delays + '</select></label>' +
      '<label class="field"><span>' + esc(t('sort')) + '</span><select id="s-sort"><option value="qty"' + (s.sort === 'qty' ? ' selected' : '') + '>' + esc(t('sortQty')) + '</option><option value="name"' + (s.sort === 'name' ? ' selected' : '') + '>' + esc(t('sortName')) + '</option></select></label>' +
      '<p class="status">' + esc(t('delayHint')) + '</p></div>' +
      '<div class="set-group"><h3>' + esc(t('backup')) + '</h3><p class="status ok">' + esc(lastBackupText()) + '</p><div class="row2">' +
      '<button type="button" class="btn primary" id="s-export">' + esc(t('exportJson')) + '</button>' +
      '<button type="button" class="btn" id="s-import">' + esc(t('importJson')) + '</button></div>' +
      '<label class="field"><span>' + esc(t('bkEvery')) + '</span><select id="s-bkevery">' + [0, 3, 7, 14, 30].map(function (n) { return '<option value="' + n + '"' + (n === (s.bkEvery || 0) ? ' selected' : '') + '>' + esc(n ? t('bkDays', { n: n }) : t('bkOff')) + '</option>'; }).join('') + '</select></label>' +
      (persisted === null ? '' : '<p class="status' + (persisted ? ' ok' : '') + '">' + esc(t(persisted ? 'persistOk' : 'persistNo')) + '</p>') +
      '<p class="status">' + esc(t('bkHint')) + '</p></div>' +
      '<div class="set-group"><h3>' + esc(t('data')) + '</h3><button type="button" class="btn danger block" id="s-reset">' + esc(t('reset')) + '</button></div>';

    var ib = $('s-install'); if (ib && !st.disabled) ib.addEventListener('click', doInstall);
    $('s-bar').addEventListener('change', function () { S.settings.barName = this.value.trim(); save(); toast(t('saved')); });
    $('s-lang').addEventListener('change', function () { S.settings.lang = this.value; save(); applyI18n(); renderAll(); });
    $('s-delay').addEventListener('change', function () { S.settings.delay = num(this.value); save(); if (pending) markPending(); });
    $('s-sort').addEventListener('change', function () { S.settings.sort = this.value; save(); applyResort(true); });
    $('s-export').addEventListener('click', doBackup);
    $('s-bkevery').addEventListener('change', function () { S.settings.bkEvery = num(this.value); save(); renderInv(); });
    $('s-import').addEventListener('click', function () { $('importFile').value = ''; $('importFile').click(); });
    var rb = $('s-reset');
    rb.addEventListener('click', function () {
      if (rb.classList.contains('armed')) {
        snap();
        emptyData(); updateListTab();
        save(); applyResort(true); renderAll(); toast(t('resetDone'), true); openWelcome(false); return;
      }
      rb.classList.add('armed'); rb.textContent = t('resetConfirm');
      setTimeout(function () { if (rb.isConnected) { rb.classList.remove('armed'); rb.textContent = t('reset'); } }, 4000);
    });
  }
  $('importFile').addEventListener('change', function () {
    var f = this.files && this.files[0]; if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      try {
        var d = JSON.parse(r.result);
        if (!d || !Array.isArray(d.cats) || !Array.isArray(d.prods)) throw 0;
        snap();
        d.settings = Object.assign({}, S.settings, d.settings || {});
        S = normalize(d); save(); applyI18n(); applyResort(true); renderAll(); toast(t('imported'), true);
      } catch (e) { toast(t('badFile')); }
    };
    r.readAsText(f);
  });

  // ---------- saving files ----------
  // Inside the Claude preview files go through the viewer's download prompt; in the
  // installed app they download normally (or open the share sheet on iPhone).
  var dlCap = (window.claude && typeof window.claude.use === 'function') ? window.claude.use('downloads').catch(function () { return null; }) : Promise.resolve(null);
  function saveFile(name, blob, doneMsg) {
    return dlCap.then(function (dl) {
      if (dl) {
        return dl.save({ filename: name, data: blob }).then(function () { if (doneMsg) toast(doneMsg); return true; }, function () { return false; });
      }
      if (isIOS && isStandalone()) {
        var file; try { file = new File([blob], name, { type: blob.type }); } catch (e) { }
        if (file && navigator.canShare && navigator.canShare({ files: [file] })) { return navigator.share({ files: [file] }).then(function () { return true; }, function () { return false; }); }
      }
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 10000);
      if (doneMsg) toast(doneMsg);
      return true;
    });
  }

  // ---------- install ----------
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferredPrompt = e; updateInstallUI(); });
  window.addEventListener('appinstalled', function () { deferredPrompt = null; updateInstallUI(); toast(t('installed')); });
  function updateInstallUI() {
    $('installBtn').hidden = !(deferredPrompt && !isStandalone());
    if (tab === 'set') renderSet();
  }
  function doInstall() {
    if (!deferredPrompt) { if (isIOS) toast(t('installIOS')); return; }
    var ev = deferredPrompt;
    ev.prompt();
    ev.userChoice.then(function () { deferredPrompt = null; updateInstallUI(); }).catch(function () { });
  }
  $('installBtn').addEventListener('click', doInstall);

  // ---------- export menu ----------
  $('exportBtn').addEventListener('click', function () {
    openSheet('<h3>' + esc(t('exportTitle')) + '</h3><div class="xmenu">' +
      '<button type="button" class="btn block" data-x="pdfInv">' + ICON.pdf + esc(t('pdfInv')) + '</button>' +
      '<button type="button" class="btn block" data-x="pdfOrder">' + ICON.pdf + esc(t('pdfOrder')) + '</button>' +
      '<button type="button" class="btn block" data-x="xlsx">' + ICON.xls + esc(t('xlsx')) + '</button>' +
      '<button type="button" class="btn block" data-x="lpdf">' + ICON.pdf + esc(t('pdfListX', { n: listTitle() })) + '</button>' +
      '<button type="button" class="btn block" data-x="lxls">' + ICON.xls + esc(t('xlsxListX', { n: listTitle() })) + '</button></div>' +
      '<div class="sheet-actions"><span class="spacer"></span><button type="button" class="btn" data-close>' + esc(t('cancel')) + '</button></div>',
      function (panel) {
        panel.querySelector('.xmenu').addEventListener('click', function (e) {
          var b = e.target.closest('[data-x]'); if (!b) return;
          var x = b.getAttribute('data-x'); closeSheet();
          if (x === 'pdfInv') exportPDF(); else if (x === 'pdfOrder') exportOrderPDF(); else if (x === 'lpdf') exportListPDF(); else if (x === 'lxls') exportListXLSX(); else exportXLSX();
        });
      });
  });

  // ---------- PDF ----------
  function newPDF(titleKey) {
    var J = window.jspdf && window.jspdf.jsPDF;
    if (!J) { toast(t('pdfErr')); return null; }
    var doc = new J({ unit: 'mm', format: 'a4' });
    if (typeof doc.autoTable !== 'function') { toast(t('pdfErr')); return null; }
    doc.setFont('helvetica', 'bold'); doc.setFontSize(18); doc.setTextColor(22, 33, 38);
    doc.text(heading(titleKey), 14, 18);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(86, 102, 109);
    doc.text(t('pdfDate', { d: dateLong() }), 14, 25);
    return doc;
  }
  function finishPDF(doc, name) {
    var pages = doc.internal.getNumberOfPages();
    for (var i = 1; i <= pages; i++) {
      doc.setPage(i); doc.setFontSize(8.5); doc.setTextColor(120, 130, 135);
      doc.text(t('pdfPage', { p: i, n: pages }), 196, 290, { align: 'right' });
    }
    saveFile(name, doc.output('blob'), t('pdfDone'));
  }
  var TABLE = {
    theme: 'grid', margin: { left: 14, right: 14 },
    styles: { fontSize: 9.5, cellPadding: 2, lineColor: [208, 216, 219], lineWidth: 0.2, textColor: [22, 33, 38] },
    headStyles: { fillColor: [22, 33, 38], textColor: 255, fontStyle: 'bold' }
  };
  function exportPDF() {
    var doc = newPDF('pdfTitle'); if (!doc) return;
    var lowAll = S.prods.filter(isLow).length;
    if (lowAll) { doc.setTextColor(179, 38, 30); doc.text(t('pdfLow', { n: lowAll }), 14, 30.5); }
    var y = lowAll ? 36 : 31;
    S.cats.forEach(function (c) {
      var list = sortList(S.prods.filter(function (p) { return p.catId === c.id; }));
      if (!list.length) return;
      doc.autoTable(Object.assign({}, TABLE, {
        startY: y,
        head: [[c.name.toUpperCase(), t('ctS'), t('pzS'), t('btS'), t('pdfTot'), t('pdfAlert')]],
        body: list.map(function (p) { return [p.name, p.ct, p.pz, fmt(p.bt + (p.frac ? p.open : 0)), fmt(total(p)), isLow(p) ? t('lowBadge').toUpperCase() : '']; }),
        columnStyles: { 1: { halign: 'right', cellWidth: 16 }, 2: { halign: 'right', cellWidth: 16 }, 3: { halign: 'right', cellWidth: 16 }, 4: { halign: 'right', cellWidth: 20, fontStyle: 'bold' }, 5: { halign: 'center', cellWidth: 32, fontStyle: 'bold', fontSize: 8.5 } },
        didParseCell: function (data) {
          if (data.section === 'head' && data.column.index > 0) data.cell.styles.halign = data.column.index === 5 ? 'center' : 'right';
          if (data.section === 'body' && isLow(list[data.row.index])) { data.cell.styles.fillColor = [251, 230, 227]; data.cell.styles.textColor = [179, 38, 30]; }
        }
      }));
      y = doc.lastAutoTable.finalY + 7;
    });
    finishPDF(doc, 'inventario-bar-' + today() + '.pdf');
  }
  function exportOrderPDF() {
    var groups = orderGroups();
    var doc = newPDF('pdfOrderTitle'); if (!doc) return;
    var y = 32;
    if (!groups.length) { doc.setTextColor(22, 33, 38); doc.text(t('orderEmpty'), 14, y); }
    groups.forEach(function (g) {
      var rows = g.items.filter(function (it) { return !it.off && it.q > 0; });
      if (!rows.length) return;
      var ph = g.sup && S.suppliers[g.sup] && S.suppliers[g.sup].phone ? '  ·  ' + S.suppliers[g.sup].phone : '';
      doc.autoTable(Object.assign({}, TABLE, {
        startY: y,
        head: [[(g.sup || t('noSupplier')).toUpperCase() + ph, t('colQty'), t('colUnit'), t('colStock'), t('colIdeal')]],
        body: rows.map(function (it) { return [it.p.name, it.q, t(it.unit + 'S'), fmt(total(it.p)), idealOf(it.p)]; }),
        columnStyles: { 1: { halign: 'right', cellWidth: 22, fontStyle: 'bold' }, 2: { cellWidth: 16 }, 3: { halign: 'right', cellWidth: 22 }, 4: { halign: 'right', cellWidth: 18 } },
        didParseCell: function (data) { if (data.section === 'head' && (data.column.index === 1 || data.column.index > 2)) data.cell.styles.halign = 'right'; }
      }));
      y = doc.lastAutoTable.finalY + 7;
    });
    finishPDF(doc, 'ordine-bar-' + today() + '.pdf');
  }

  // ---------- Excel (.xlsx written directly, no library) ----------
  var CRC = (function () { var tb = []; for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; tb[n] = c >>> 0; } return tb; })();
  function crc32(u8) { var c = 0xFFFFFFFF; for (var i = 0; i < u8.length; i++) c = CRC[(c ^ u8[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function zip(files) {
    var enc = new TextEncoder(), parts = [], central = [], offset = 0;
    var d = new Date(), dt = ((d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1)) & 0xFFFF,
      dd = (((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate()) & 0xFFFF;
    files.forEach(function (f) {
      var name = enc.encode(f.name), data = enc.encode(f.data), crc = crc32(data);
      var h = new DataView(new ArrayBuffer(30));
      h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true);
      h.setUint16(10, dt, true); h.setUint16(12, dd, true); h.setUint32(14, crc, true);
      h.setUint32(18, data.length, true); h.setUint32(22, data.length, true); h.setUint16(26, name.length, true); h.setUint16(28, 0, true);
      parts.push(new Uint8Array(h.buffer), name, data);
      var c = new DataView(new ArrayBuffer(46));
      c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(10, 0, true);
      c.setUint16(12, dt, true); c.setUint16(14, dd, true); c.setUint32(16, crc, true); c.setUint32(20, data.length, true); c.setUint32(24, data.length, true);
      c.setUint16(28, name.length, true); c.setUint32(42, offset, true);
      central.push(new Uint8Array(c.buffer), name);
      offset += 30 + name.length + data.length;
    });
    var cdSize = central.reduce(function (s, a) { return s + a.length; }, 0);
    var e = new DataView(new ArrayBuffer(22));
    e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true);
    e.setUint32(12, cdSize, true); e.setUint32(16, offset, true);
    return new Blob(parts.concat(central, [new Uint8Array(e.buffer)]), { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  }
  function xesc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, ''); }
  function colName(i) { var s = ''; i++; while (i) { var m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; }
  // styles: 0 normal, 1 header, 2 low (red bold), 3 title, 4 subtitle grey
  function sheetXML(sh) {
    var rows = sh.rows.map(function (r, ri) {
      return '<row r="' + (ri + 1) + '">' + r.cells.map(function (v, ci) {
        if (v === null || v === '' || v === undefined) return '';
        var ref = colName(ci) + (ri + 1), s = r.style ? ' s="' + r.style + '"' : '';
        if (v && typeof v === 'object' && v.f) return '<c r="' + ref + '"' + s + '><f>' + xesc(v.f.replace(/\{r\}/g, ri + 1)) + '</f><v>' + v.v + '</v></c>';
        if (typeof v === 'number') return '<c r="' + ref + '"' + s + '><v>' + v + '</v></c>';
        return '<c r="' + ref + '"' + s + ' t="inlineStr"><is><t xml:space="preserve">' + xesc(v) + '</t></is></c>';
      }).join('') + '</row>';
    }).join('');
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
      '<sheetViews><sheetView workbookViewId="0"><pane ySplit="' + sh.freeze + '" topLeftCell="A' + (sh.freeze + 1) + '" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>' +
      '<cols>' + sh.widths.map(function (w, i) { return '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + w + '" customWidth="1"/>'; }).join('') + '</cols>' +
      '<sheetData>' + rows + '</sheetData>' +
      (sh.filter ? '<autoFilter ref="' + sh.filter + '"/>' : '') + '</worksheet>';
  }
  function buildXLSX(sheets) {
    var NS = 'http://schemas.openxmlformats.org/';
    var files = [
      { name: '[Content_Types].xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="' + NS + 'package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>' +
        sheets.map(function (s, i) { return '<Override PartName="/xl/worksheets/sheet' + (i + 1) + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'; }).join('') + '</Types>' },
      { name: '_rels/.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="' + NS + 'package/2006/relationships"><Relationship Id="rId1" Type="' + NS + 'officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>' },
      { name: 'xl/workbook.xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="' + NS + 'spreadsheetml/2006/main" xmlns:r="' + NS + 'officeDocument/2006/relationships"><sheets>' +
        sheets.map(function (s, i) { return '<sheet name="' + xesc(s.name.replace(/[\[\]:*?\/\\]/g, ' ').slice(0, 31)) + '" sheetId="' + (i + 1) + '" r:id="rId' + (i + 1) + '"/>'; }).join('') + '</sheets>' +
        '<definedNames>' + sheets.map(function (s, i) { return s.filter ? '<definedName name="_xlnm._FilterDatabase" localSheetId="' + i + '" hidden="1">\'' + xesc(s.name.slice(0, 31)) + '\'!$' + s.filter.replace(':', ':$').replace(/([A-Z]+)(\d+)/g, '$1$$$2') + '</definedName>' : ''; }).join('') + '</definedNames></workbook>' },
      { name: 'xl/_rels/workbook.xml.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="' + NS + 'package/2006/relationships">' +
        sheets.map(function (s, i) { return '<Relationship Id="rId' + (i + 1) + '" Type="' + NS + 'officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (i + 1) + '.xml"/>'; }).join('') +
        '<Relationship Id="rId' + (sheets.length + 1) + '" Type="' + NS + 'officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>' },
      { name: 'xl/styles.xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<styleSheet xmlns="' + NS + 'spreadsheetml/2006/main">' +
        '<fonts count="5"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font><font><b/><sz val="11"/><color rgb="FFB3261E"/><name val="Calibri"/></font><font><b/><sz val="15"/><name val="Calibri"/></font><font><sz val="10"/><color rgb="FF56666D"/><name val="Calibri"/></font></fonts>' +
        '<fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF162126"/><bgColor indexed="64"/></patternFill></fill></fills>' +
        '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>' +
        '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>' +
        '<cellXfs count="5"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/></cellXfs>' +
        '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>' }
    ];
    sheets.forEach(function (s, i) { files.push({ name: 'xl/worksheets/sheet' + (i + 1) + '.xml', data: sheetXML(s) }); });
    return zip(files);
  }
  function exportXLSX() {
    // Sheet 1: inventory, categories in your order, products by quantity
    var inv = [
      { style: 3, cells: [heading('pdfTitle')] },
      { style: 4, cells: [t('pdfDate', { d: dateLong() })] },
      { cells: [] },
      { style: 1, cells: [t('colCat'), t('pdfProduct'), t('colSupplier'), t('ctS'), t('pzS'), t('btS'), t('perCt'), t('pdfTot'), t('pdfMin'), t('colIdeal'), t('colStatus')] }
    ];
    S.cats.forEach(function (c) {
      sortList(S.prods.filter(function (p) { return p.catId === c.id; })).forEach(function (p) {
        var low = isLow(p), bt = p.bt + (p.frac ? p.open : 0);
        inv.push({
          style: low ? 2 : 0,
          cells: [c.name, p.name, p.supplier, p.ct, p.pz, bt, p.perCt, { f: 'D{r}*MAX(G{r},1)+E{r}+F{r}', v: total(p) }, p.min, idealOf(p), low ? t('lowBadge') : '']
        });
      });
    });
    var last = inv.length;
    // Sheet 2: order grouped by supplier
    var ord = [
      { style: 3, cells: [heading('pdfOrderTitle')] },
      { style: 4, cells: [t('pdfDate', { d: dateLong() })] },
      { cells: [] },
      { style: 1, cells: [t('colSupplier'), t('pdfProduct'), t('colQty'), t('colUnit'), t('colStock'), t('colIdeal'), t('phone')] }
    ];
    orderGroups().forEach(function (g) {
      g.items.forEach(function (it) {
        if (it.off || !it.q) return;
        ord.push({ cells: [g.sup || t('noSupplier'), it.p.name, it.q, t(it.unit + 'S'), total(it.p), idealOf(it.p), g.sup && S.suppliers[g.sup] ? S.suppliers[g.sup].phone : ''] });
      });
    });
    var blob = buildXLSX([
      { name: t('sheetInv'), rows: inv, freeze: 4, widths: [18, 30, 22, 7, 7, 7, 13, 9, 8, 9, 14], filter: 'A4:K' + Math.max(last, 4) },
      { name: t('sheetOrder'), rows: ord, freeze: 4, widths: [24, 30, 10, 8, 10, 9, 18] }
    ].concat(S.list.length ? [listSheet()] : []));
    saveFile('inventario-bar-' + today() + '.xlsx', blob, t('fileDone'));
  }

  // ---------- shell ----------
  var toastTimer = null;
  function toast(msg, withUndo) {
    var el = $('toast');
    el.innerHTML = '<span>' + esc(msg) + '</span>' + (withUndo ? '<button type="button" class="toast-undo">' + esc(t('undo')) + '</button>' : '');
    el.hidden = false;
    var ub = el.querySelector('.toast-undo');
    if (ub) ub.addEventListener('click', function () { el.hidden = true; undo(); });
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.hidden = true; }, withUndo ? 5000 : (msg.length > 60 ? 5000 : 2200));
  }
  function showTab(name) {
    tab = name;
    ['inv', 'order', 'list', 'cats', 'set', 'hist'].forEach(function (n) { $('view-' + n).hidden = n !== name; });
    document.querySelectorAll('.tabs button').forEach(function (b) {
      if (b.getAttribute('data-tab') === (name === 'hist' ? 'inv' : name)) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    $('invTools').hidden = name !== 'inv';
    $('fab').hidden = name !== 'inv';
    if (name === 'order') renderOrder();
    if (name === 'list') renderList();
    if (name === 'hist') renderHist();
    if (name === 'cats') renderCats();
    if (name === 'set') renderSet();
    if (name === 'inv' && pending) applyResort(true);
    window.scrollTo(0, 0);
  }
  document.querySelector('.tabs').addEventListener('click', function (e) {
    var b = e.target.closest('[data-tab]'); if (b) showTab(b.getAttribute('data-tab'));
  });
  function applyI18n() {
    document.documentElement.lang = S.settings.lang;
    var name = t('appName');
    var parts = name.split(' ');
    $('appTitle').innerHTML = parts.length > 1 ? esc(parts.slice(0, -1).join(' ')) + ' <span>' + esc(parts[parts.length - 1]) + '</span>' : esc(name);
    document.title = name;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { var v = t(el.getAttribute('data-i18n-aria')); el.setAttribute('aria-label', v); el.title = v; });
    updateRefreshUI();
    updateListTab();
  }
  function renderAll() {
    renderInv();
    if (tab === 'order') renderOrder();
    if (tab === 'list') renderList();
    if (tab === 'hist') renderHist();
    if (tab === 'cats') renderCats();
    if (tab === 'set') renderSet();
  }

  applyLook();
  computeRanks();
  applyI18n();
  renderInv();
  updateInstallUI();
  updateUndo();
  save();
  if (firstRun) openWelcome(true);

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol) && !window.claude) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { }); });
  }
})();
