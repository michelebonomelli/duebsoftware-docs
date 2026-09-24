# DbStampi: ChangeLog
 
### dev

| Informazioni |  | 
| --- | --- | 
| Data di rilascio | 22/09/2026 | 
| Versioni *Localizzazioni Stampi* associate | 2.1.15 (Beta) |

#### Interventi evolutivi
- Introdotte le informazioni *Richiesto entro data* e *Note sul rientro* nella movimentazione officina
	- In *DbManager* è possibile visualizzare/modificare le nuove informazioni nella gestione *Movimento*
	- In *Localizzazione stampi* le nuove informazioni vengono richieste (facoltative) durante la fase di movimentazione verso officina, insieme al tipo di manutenzione e alle note
	- Vengono proposte nelle e-mail:
		- Movimentazione verso officina
		- Elenco stampi in officina
	- Vengono proposte nei report:
		- REP00003 - Distinta di movimentazione in Officina
		- REP00016 - Report stampi in officina

#### Database
| Tabella | Campi | Intervento |
| --- | --- | --- |
| OffMovimenti | Richiesto entro data</br>Note sul rientro | Nuovi campi |

--- 
### 2.8

| Informazioni |  | 
| --- | --- | 
| Data di rilascio | 28/05/2025 | 

#### Interventi tecnici
- Cambiato il modello di Change Management da TFS a GIT

---

### 2.7.25147.1

| Informazioni |  | 
| --- | --- | 
| Data di rilascio | 27/05/2025 | 
| Versioni *Localizzazioni Stampi* associate | 2.1.13</br>2.1.12 (Beta) | 

#### Interventi evolutivi
- Modifica ai campi "Note" per aumentarne le dimensioni

#### Database
| Tabella | Campi | Intervento |
| --- | --- | --- |
| Movimenti | Note</br>Note autorizzazione| Portata a 400 (da 350) la lunghezza dei campi |
| Avvisi di campionatura | Note | Portata a 400 (da 350) la lunghezza dei campi |

### 2.7.23206.3

| Informazioni |  | 
| --- | --- | 
| Data di rilascio | 25/07/2023 | 

#### Interventi correttivi
- Risolto un errore in fase di autorizzazione movimento dall'applicazione *Localizzazione Stampi*

---

### 2.7.23202.2

| Informazioni |  | 
| --- | --- | 
| Data di rilascio | 21/07/2023 | 

#### Interventi evolutivi
- Miglioramenti in DbManager:
	- Aggiunta la colonna *Info aggiuntive* nell'esportazione Excel dei log
	- Aggiunta la funzione *Strumenti/Database/Registrazioni app*, che consente di tenere traccia delle versioni delle app che si connettono

#### Interventi correttivi
- Risolto un errore che non consentiva il caricamento del dettaglio movimento se l'articolo legato al movimento era stato rimosso dal Db
- Risolto un errore sul filtro *Articolo* nella pagina *Elenco movimenti* che non si puliva con il comando *Reset*

---

### 2.7.23202.1

| Informazioni |  | 
| --- | --- | 
| Data di rilascio | 21/07/2023 | 
| Versioni *Localizzazioni Stampi* associate | 2.1.8<br>2.1.6 (Beta) | 

#### Integrazione con Agilis
- L'ID dell'articolo passa da intero a stringa
- Nuova vista "vOperatori" che estrae i dati degli operatori censiti in Agilis
- Nuova procedura automatica di creazione di un dipendente in DbStampi quando viene censito in Agilis
- Nuova API *Agilis* per interfacciamento con MES
	- Crea le movimentazioni per attrezzaggi/disattrezzaggi eseguiti tramite MES
	- Registra sul log
		- Le esecuzioni che terminano in errore (sempre)
		- Le esecuzioni che terminano in modo positivo (solo se attiva la modalità debug)
- Modifica alla gestione delle abilitazioni movimenti
	- L'abilitazione agli spostamenti fra aree si distingue fra API e App
- Modifiche a *DbManager*
	- Nuovo menu *Agilis* che va in sostituzione di *Galassia*
		- Consente anche la visualizzazione degli operatori *Agilis*
	- La visualizzazione *Note migrazione* viene definitivamente nascosta
	- Se collegato ad Agilis l'ID articolo viene nascosto dalle visualizzazioni (corrisponde sempre al codice articolo)
	- Modifica all'integrazione con *Presse* e *Clienti* 
		- Le visualizzazioni sono state modificate per essere ordinate per ID e non per codice
		- Il codice viene nascosto
		- Dove serve utilizzare il codice (per esempio nelle tendine dei filtri) viene utilizzato un codice recuperato dalla descrizione

#### Interventi evolutivi
- Dismessa l'applicazione *Localizzazione Stampi (Silverlight)*
- Introdotta la registrazione della connessione dell'app *Localizzazione Stampi*, per tenere traccia delle versioni in uso
- Introdotto un parametro di configurazione che indirizza la possibilità di far connettere *Localizzazione Stampi* in versione Beta, e può assumere i valori:
	- Non consentita: Si può collegare all'ambiente solo l'app RC
	- Consentita: Si possono collegare all'ambiente sia l'app RC che l'app Beta
	- Richiesta: Si può collegare all'ambiente solo l'app Beta
- Introdotta la possibilità di movimentare articoli multipli.
	- Attualmente possibile solo tramite API *Agilis*
	- Adeguate le visualizzazioni in DbManager:
		- Lista movimenti
		- Dettaglio movimento
		- Dettaglio articolo
	- Adeguato l'Excel di esportazione della lista movimenti
	- Adeguati i messaggi e-mail:
		- Richiesta movimentazione stampo in officina
		- Richiesta autorizzazione al movimento
		- Autorizzazione al movimento negata
		- Avviso di campionatura
	- Poichè da app è disponibile solo la movimentazione di un singolo articolo non sono stati adeguati:
		- Il report *Stampi in officina*, visto che la movimentazione verso officina è disponibile solo da app
		- Le distinte generate al termine della movimentazione
- Rivista la gestione dei record nascosti
	- Nelle distinte non viene solo oscurato il campo ma anche omesso il testo (In caso di PDF il testo era selezionabile)
	- Aggiunta l'omissione degli stampi anche nel report *Stampi in officina*
- Introdotte le stampe statiche in fase di conferma movimento (Vedi manuale [Qui](um/stampe_statiche.md/))
	- Creata la stampa statica *Checklist Operativa Manutenzione Stampi (rev. 00)*
- Miglioramenti in *DbManager*:
	- Introdotta la gestione del campo *AlCompleto* nella tabella *Depositi*
	- Aggiunta l'indicazione [Test] o [Legacy] nel titolo delle schede
	- Modifica della visibilità di alcuni elementi, che ora dipende dalla visibilità del menu *Lavorazioni Manuali*
		- Statistiche
		- Configurazioni relative alle lavorazioni manuali
	- Rivisto la pagina *Impostazioni*
		- Al salvataggio delle impostazioni si rimane sulla pagina invece di tornare alla *Home*
		- Nuova gestione delle API *Log*, *Agilis* e *Creazione operatore* nel menu 
			- Consente di attivare/disattivare le API
			- Consente di attivare/disattivare la registrazione dei log da parte delle API
			- Consente di specificare i vari default che le API utilizzano
	- Rivisto il sistema di log con l'aggiunta delle informazioni opzionali ai messaggi
		- Nella visualizzazione del log queste informazioni resteranno nascoste, è possibile visualizzarle su richiesta premendo sul messaggio (cliccando sul messaggio se il cursore è a forma di mano, che indica che per quella registrazione sono presenti informazioni aggiuntive)
	- Nella gestione *Stored procedures* è stato aggiunta l'indicazione sulla tipologia del parametro (Input o Output)
	- Riviste alcune descrizioni nel menu *Strumenti/Configurazioni*
	- Nascosti alcuni menu in ambiente *Legacy*
- Miglioramenti in *Localizzazione stampi*
	- Nuova modalità *Completa campionaturaé
		- Consente di chiudere un avviso di campionatura precedentemente inserito, senza la necessità di evaderlo tramite movimentazione dello stampo 
		- Disponibile solo per gli operatori che hanno l’abilitazione *“*Gestione campionature*
		- Gli avvisi completati con questa procedura non avranno lo stato E=Evaso ma C=Completato 
	- Aggiunto controllo per impossibilità di collegarsi a un ambiente di consultazione ("Legacy") 
	- Aggiunta la possibilità di eseguire stampe multi-pagina 
	- Aggiunta la possibilità di completare i dati sull’ingombro dello stampo anche in uscita da officina e non solo quando ritorna a deposito 
	- Aggiunta la gestione dei colori slegati dal tema di Windows. Il colore si gestisce dalle impostazioni (ma la modifica avviene dal riavvio successivo e non in real-time)
		- Sono disponibili i colori: 
			- Blu
			- Blu scuro
			- Rosso
			- Verde 
			- Prugna chiaro 
			- Grigio 
		- L'app Beta avrà esclusivamente il colore grigio + eventuali colori nuovi, mentre il tema di windows sarà disponibile solo per l’app RC
		- Alcuni elementi sono stati modificati per integrarsi meglio nei vari colori 
		- Icona del server connesso non sarà più verde ma bianca per fare in modo che sia visibile con tutti i colori 

#### Database
Tabella | Campi | Intervento
--------- | | ----------- 
SysConnessioniApp | | Nuova tabella per monitorare le connessioni dall'app
vOperatori | | Nuova vista che mostra l'elenco degli operatori censiti in Agilis
vArticoli | Id articolo | Diventa da numerico a stringa
Depositi | Al completo | Nuovo campo che indica se il deposito ha raggiunto la capienza massima

---

### 2.6.23089.8

| Informazioni |  | 
| --- | --- | 
| Data di rilascio | 30/03/2023 | 

#### Interventi evolutivi
- Miglioramenti in *DbManager*
	- Separato il menu *Admin* dal menu *Strumenti*
		- Il menu *Admin* richiede l'appartenenza al gruppo *DbStampi_Admins*
		- E' ora possibile nascondere il menu *Strumenti* tramite parametro di configurazione

---

### 2.6.23062.1

| Informazioni |  | 
| --- | --- | 
| Data di rilascio | 03/03/2023 | 

#### Bug-fixing
- Rivista la modalità di invio delle mail per consentirle tramite provider Intred
- Rivista la distinta di campionatura per aumentare il piè di pagina

---

### 2.6.22318.2

| Informazioni |  | 
| --- | --- | 
| Data di rilascio | 14/11/2022 | 

#### Bug-fixing
- Risolto errore su creazione e invio e-mail *Stampi in officina*

---

### 2.6.22308.4

| Informazioni |  | 
| --- | --- | 
| Data di rilascio | 04/11/2022 | 

#### Interventi evolutivi
- Inserita la gestione dei record nascosti nelle tabelle *Stampi*, *Depositi* e *Aree*
	- Si possono vedere i record nascosti attivando l’impostazione *Visualizza record nascosti* 
	- In *DbManager* solo gli utenti del gruppo *DbStampi_Admins* possono vedere i record nascosti negli elenchi 
	- Si possono modificare/eliminare 
	- Si possono nascondere/ripristinare solo dagli utenti del gruppo *DbStampi_Admins* con relativo comando dalla pagina di visualizzazione del dettaglio 
	- Nelle stampe i dati nascosti (e quelli collegati, per esempio un articolo collegato ad uno stampo nascosto) vengono oscurati 
- Aggiunta la sessione nella registrazione del log (consente di filtrare per sessione) 
- Aggiunta la funzione di archiviazione dei log più vecchi di un mese. 
	- Si possono visualizzare nella classica funzione, solo se consentito dall'impostazione *Visualizza log archiviati*. Si distinguono da quelli recenti per il suffisso [ARC]
	- Si può eseguire l’archiviazione manualmente tramite *DbManager* con la funzione *DbManager/Strumenti/Schedulazioni*
	- L’archiviazione automatica viene eseguita ogni giorno alle 07:35 
- Aggiunta la funzione di ricreazione di tutti gli Excel delle lavorazioni manuali. 
	- Si può eseguire la ricreazione manualmente tramite *DbManager* con la funzione *DbManager/Strumenti/Schedulazioni *
- Creati i nuovi report (e le relative Stored Procedures):  
	- IDX00007 – Cambi stampo su presse per anno/operatore
	- IDX00008 – Media oraria parziale per articolo
	- IDX00009 – Scarti per trimestre
	- IDX00010 – Scarti per anno (Fino a fine mese di riferimento)
	- IDX00011 – Scarti per articolo
- Aumentati i tempi di timeout per i servizi da 1 minuto a 3 minuti 
- Miglioramenti in *DbManager*
	- Nella pagina di visualizzazione del dettaglio del movimento è stato inserito il codice articolo 
	- Il nuovo campo “Descrizione 3” è visibile nella pagina di dettaglio *Articolo*, nella pagina *Elenco articoli* e nell’esportazione su Excel
	- Rivista la pagina di gestione delle impostazioni: 
		- Il punto menu di accesso *Strumenti/Impostazioni* ora è visibile solo agli utenti del gruppo *DbStampi_Admins*
		- Aggiunta la gestione delle nuove impostazioni
		- Le impostazioni sono state raggruppate per genere e organizzate in Tab (e sotto-tab) 
		- Nelle impostazioni *Messaggi* ora non è più disponibile la sezione *Rete* (obsoleta) 
	- Nuova pagina di visualizzazione delle configurazioni: 
		- Il punto menu di accesso *Strumenti/Configurazioni* è visibile solo agli utenti del gruppo *DbStampi_Admins*. 
		- L’accesso alla pagina è consentito solo agli utenti del gruppo *DbStampi_Admins*. 
	- Aggiunta la possibilità di nascondere i punti menu principali tramite configurazione

#### Database
| Tabella | Campi | Intervento |
| --- | --- | --- |
| Movimenti | | Creato indice su Mov_AutStato per velocizzare il caricamento dell'elenco nei movimenti da autorizzare |
| vArticoli | Descrizione3 | Nuovo campo |

---

### 2.6.22307.1

| Informazioni |  | 
| --- | --- | 
| Data di rilascio | 01/11/2022 | 

#### Interventi evolutivi
- Miglioramenti in *DbManager*
	- Nuova modalità *Sola lettura*:
		- *Localizzazione Stampi (Silverlight)* non è disponibile 
		- Le funzioni di inserimento/modifica/cancellazione non sono disponibili (ogni riferimento alle stesse viene nascosto, e l’accesso forzato alle funzioni viene reindirizzato a quelle di visualizzazione) 
		- Alcuni punti menu non sono disponibili:
			- Strumenti / Database / Controlli di integrità
			- Strumenti / Database / Attività 
			- Strumenti / Schedulazioni 
		- La sezione *Flash* in Home Page non è disponibile 
- Aggiunti nuovi temi, oltre al default (Blu): 
	- Rosso 
	- Verde 
- Rivisto lo stile rendendo l’interfaccia leggermente più compatta 
