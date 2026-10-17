# Vedas heredadas de TeamTowers

> **No lo edites:** sale del codex de TeamTowers (https://github.com/asolache/teamtowershuma/blob/main/SOS/knowledge/codex.md)
> y se actualiza con `cervell.js --actualitza`. Las vedas propias de este
> proyecto van en `codex.md`. Están en catalán, la lengua en que se escribieron.

## La veritat del que es diu

### Veda 61 — No es diu «verificat» del que no s'ha verificat

El SOS signa amb `did:sos` i ancorava amb la clau Nostr de l'extensió del
navegador, i **res no deia que fossin la mateixa persona**. Un ancoratge provava
que *algú* amb una clau Nostr havia publicat aquell hash, no que fos qui el va
registrar. Per a un registre d'usuaris a la permaweb, aquest era el forat.

El pont és una afirmació **signada dues vegades**: un registre que diu «el did D
i la clau N són la mateixa persona», firmat pel `did` i publicat sencer com a
event Nostr firmat per N.

I aquí la part que importa més que la funcionalitat: **la firma Nostr no es pot
verificar dins del SOS**. És Schnorr sobre secp256k1 i SubtleCrypto no en sap;
caldria una biblioteca, i el SOS és un sol fitxer. Davant d'això hi ha dues
sortides i només una és acceptable:

- Dir «pont verificat» i callar. Seria mentida per omissió, i just al lloc on la
  gent decidirà si es refia d'una identitat.
- Dir exactament què s'ha mirat: la banda `did:sos` **verificada** amb
  SubtleCrypto; el **lligam verificat** en les tres coses (que l'event contingui
  el registre firmat, que la clau declarada sigui la de l'event, que l'id sigui
  el SHA-256 de la serialització NIP-01); i la firma Nostr **no verificada
  aquí**, amb el motiu escrit.

I dir també què sí que la prova: **els relés rebutgen els events amb firma
invàlida**. Si el pont és publicat i acceptat, la clau Nostr hi va signar. Això
és una prova de debò i s'explica com a tal, sense confondre-la amb una
comprovació local.

### Veda 67 — Una xifra inflada i incompleta és pitjor que cap xifra

El toast deia «Sincronitzat · N canvis», i aquell N mentia dues vegades:
comptava la mateixa fusió diverses vegades —una pel xat, una per cada
col·lecció, una pel node sencer— i **no comptava el que s'havia sobreescrit**.
Un número així no és una aproximació: és una invitació a refiar-se'n.

Des de la veda 64 els apunts ja no es perden —s'uneixen—, però la resta del node
segueix resolent-se per LWW: el mapa de valor, el tauler, el nom. Això no és cap
defecte a tapar; per a camps que es reescriuen sencers és la decisió correcta.
El que no és correcte és **no dir-ho**. Si en sincronitzar el teu mapa de valor
ha estat substituït pel de l'altre, ho has de saber en aquell moment, no
descobrir-ho un mes després.

D'aquí surt la regla: **el que s'uneix i el que se substitueix no es barregen
mai al mateix comptador**. Un «+3 a ledger» i un «mapa de valor substituït» són
notícies de signe contrari, i sumar-les en un sol número les amaga totes dues.

I el corol·lari de tracte: quan alguna cosa s'ha substituït, no n'hi ha prou amb
un toast. Es diu a la cara i es pot mirar què i on. Sense oferir cap botó de
desfer que no podríem complir.

### Veda 85 — Un número que puja sense que hagi passat res és una mètrica de vanitat

`COMANDO_TARGET = 150.000` ja sortia a la pantalla del Comando amb un comptador i
una barra de progrés. Comptava `comandoRoster().length` —**tota fitxa de soci de
qualsevol node**— i ho etiquetava «superherois validats».

Una fitxa no és ningú: la crea qualsevol escrivint un nom en un formulari. El
comptador pujava amb altes, no amb feina, i ho feia al lloc més visible d'una
eina que existeix precisament per distingir el que s'ha fet del que s'ha dit.
No era un error de càlcul: era la contradicció del projecte, en gran, a la
portada del seu propi relat.

Ara compta persones amb **almenys una aportació signada**. Dues coses més, que
són la meitat de la correcció:

- **Les fitxes segueixen sortint al costat.** Amagar-les seria l'error simètric:
  la diferència entre les dues xifres és informació —diu quanta gent hi ha
  apuntada que encara no ha registrat res, que és exactament el que caldria
  mirar.
- **El 150.000 no s'explica.** Hi surt, puja i ningú diu per què és aquest
  número. Una promesa que no es cobra fins al final només funciona si no
  s'espatlla abans explicant-la.

### Veda 89 — Una paraula que vol dir dues coses al mateix text no en vol dir cap

El blog feia servir *Shiva* i *Shakti* per a dues coses alhora, i totes dues
estaven ben explicades per separat:

- **L'estructura i l'energia d'una organització.** Shiva era el marc, el procés,
  la pinya; Shakti l'empenta, el moviment, la canalla. La veda 16 ja deia que
  això, aquí, es diu **seny** i **rauxa**.
- **El balanç d'una persona.** Shakti era crear, cuidar i ensenyar; Shiva
  transformar, auditar i reparar. Surt de la categoria del que cadascú fa de
  debò (`SKILL_POLARITY`).

Són dos eixos diferents. Llegits seguits, el segon diu que qui repara bicicletes
és «menys Shiva» que qui coordina un ateneu, cosa que no vol dir res —i pitjor,
convida a llegir un judici sobre persones on només hi ha una categoria de servei.

La sortida fàcil era canviar les paraules per «seny» i «rauxa» als dos llocs, que
és el que semblava demanar-se. Hauria mogut el problema, no resolt: tindríem la
mateixa col·lisió amb vocabulari d'aquí. El primer eix es diu ara **pel seu nom
d'aquí** (seny i rauxa, que és exactament el que descriuen); el segon, **pel que
mesura**: obrir i sembrar contra tallar i renovar.

Tres decisions que van amb això:

- **Els camps de dades segueixen dient-se `shakti` i `shiva`.** Són a SOS ja
  desats i renombrar-los els trencaria. El que canvia és la pantalla, i al costat
  del càlcul hi ha escrit per què les dues coses no coincideixen.
- **Shiva es queda al panteó**, que és una altra cosa: allà és una deïtat d'un
  conjunt d'arquetips vèdics que la persona **tria**, al costat del celta, l'andí
  i el secular. Treure'l d'allà hauria estat confondre un nom mal fet servir amb
  un nom.
- **L'esmena s'escriu al blog, no s'esborra.** L'entrada diu que aquests vectors
  s'havien anomenat així i per què ja no. Reescriure el passat perquè sembli que
  sempre ho vam tenir clar és barat i costa la confiança de qui hi era.

### Veda 97 — Trobar una cosa no és fiar-se'n, i la pantalla ho ha de dir

La llista d'orígens (veda 96) resol que un lloc caigui, però no que en
desaparegui un **i ningú sàpiga on és el següent**: la llista viu al teu
navegador, i qui entra de nou no en té cap. Repartir el descobriment sense
repartir el contingut és la peça que fa que això sobrevisqui que un lloc
desaparegui, i la divisió és **l'anunci per Nostr, els fitxers per HTTPS**.

Els relés Nostr són molts, gratis, i el navegador hi parla nativament: serveixen
per dir «sóc aquí». Un relé **no** és un magatzem de fitxers, i fer-l'hi servir
seria fer-lo caure —que és la temptació òbvia i l'error que hauria fet inútil
tota la peça.

Ara la frontera, que és la mateixa de la veda 61 aplicada a un cas nou: **la
firma Nostr no es verifica al navegador**. És Schnorr sobre secp256k1 i
SubtleCrypto no en sap; caldria una biblioteca i el SOS és un sol fitxer. Que un
anunci arribi d'un relé prova que **un relé l'ha acceptat**, no qui l'ha escrit.
Dues conseqüències que no són negociables:

- **Trobar no és afegir.** Els orígens descoberts són *propostes*, i les afegeix
  la persona. Afegir-los sols voldria dir que qualsevol que publiqui a un relé
  públic decideix d'on llegeixes. Aquesta és tota la veda: la comoditat d'un pas
  menys costaria el control de la font.
- **El hash anunciat detecta un mirall que no quadra, no un atac.** Comparar el
  que un origen serveix ara amb el que va anunciar veu que una còpia s'ha quedat
  enrere o s'ha tocat. No diu qui l'ha tocat, i la pantalla ho diu amb aquestes
  paraules en comptes de deixar-ho entendre.

I el mateix criteri que a mà: una proposta que no sigui `https` cau, i un anunci
que no es pot llegir no atura la cerca —només no compta. Quan no n'apareix cap es
diu que **ningú n'ha publicat cap**, que no és el mateix que dir que no n'hi ha.

### Veda 102 — El que es declara i el que es demostra no es poden pintar igual

L'ikigai eren quatre cercles i la manera òbvia de fer-los era un formulari de
quatre camps. Hauria estat un test de personalitat: quatre caselles que la
persona omple imaginant-se, i una pantalla bonica que no sap res.

Tres dels quatre **ja els sabia el sistema**. «Se't dona bé» surt dels cromos
verificats, que surten d'aportacions signades. «Fa falta» surt de les demandes
obertes d'altres persones, ordenades per proximitat. «Et valoren per» surt del
que t'han confirmat i del moneder. Cap dels tres s'ha de preguntar.

El quart —**què t'agrada**— no es pot deduir de res, i aquí és on hi ha la
regla: **un quadrant declarat presentat com a evidenciat converteix una intenció
en un fet**. Es distingeixen a la pantalla sense haver-hi de passar el ratolí: la
vora del que està demostrat és sòlida i verda, la del que has dit tu és
discontínua, i cadascun porta escrit d'on surt —«de l'evidència» o «ho dius tu».
Declarar que cuines no t'omple el quadrant de cuinera: això només ho fa el
ledger.

Dues conseqüències que en surten:

- **Un quadrant buit és un fet, no un fracàs.** No s'omple amb ànims. I la
  redacció importa: «encara no hi ha cap aportació verificada» no vol dir el
  mateix que «no se't dona bé res» —diu que **encara no consta**, que és tot el
  que el sistema pot saber.
- **El centre és una intersecció, no una metàfora.** Quan el que se't dona bé es
  creua amb el que fa falta a prop, es diu quants creuaments hi ha; quan no n'hi
  ha cap, es diu això, i no es fabrica una suggerència perquè el cercle del mig
  quedi ple.

#### I una precisió que no es pot inventar

`proximity()` torna `km:null` quan els nodes no tenen coordenades: el que se sap
és la **jerarquia territorial** —mateix municipi, mateixa comarca— i això **no és
una distància**. Dir «a 3 km» quan només saps que sou de la mateixa comarca és
inventar-se una precisió que ningú ha mesurat. Les lents de les missions ordenen
per rang i diuen «al barri del costat», no un número.

I la que ve de la veda 51: canviar de lent —urgència, proximitat, afinitat—
**reordena, mai filtra**. Cap missió desapareix perquè hagis triat mirar-les
d'una altra manera, i qui t'espera segueix sortint primer passi el que passi.

### Veda 128 — Una pàgina que explica un mètode envelleix sense petar mai

`https://github.com/asolache/teamtowershuma/blob/main/SOS/matriu.html` explica la incubadora: quatre etapes, tres portes amb els seus
criteris, tres vies de creació i els multiplicadors del repartiment. Tot això
existeix a l'app i **decideix de debò** què passa amb una venture.

El risc no és que la pàgina estigui malament avui: és que no hi ha cap moment en
què es torni a mirar. Si demà es canvia un criteri de graduació, aquí queda
l'antic **sonant igual de cert**, i qui el llegeixi prepararà el seu projecte per
a una porta que ja no existeix. La pàgina, a més, ho promet a la primera
pantalla —«cada criteri d'aquesta pàgina és una comprovació que el SOS fa de
debò»—, i una promesa que no vigila ningú és una promesa fins al primer canvi.

`tools/check-matriu.js` compara les dues coses, i **el primer cop que va córrer
va trobar dues divergències que ja hi eren**:

- La guia de coneixement deia **10 plantilles d'activitat crítica** i a l'app
  ja n'hi havia **14**. La pàgina havia copiat de la guia, no del codi.
- La porta de graduació té un **sisè criteri** —que el llindar de sostenibilitat
  sigui assolible— que només s'aplica als tipus amb ànim de lucre, i ni la guia
  ni la pàgina el deien.

D'aquí surt la regla, que val per a qualsevol pàgina que expliqui el que fa
l'eina: **la pàgina no copia de la documentació, es compara amb el codi.** La
documentació també envelleix, i copiar-ne hereta l'error amb una capa més de
distància fins a la font.

I una comprovació que val el doble que les altres: **cada peça que la pàgina diu
que el SOS fa ha d'existir al fitxer.** La taula de cobertura anomena funcions, i
totes s'han de poder trobar. Presumir d'una funció que no hi és és el pitjor que
pot fer una pàgina que ve a explicar per què confiar en una eina.

### Veda 136 — Un avís que acusa ha de poder dir de qui és la culpa

El directori tenia un cartell per a les fitxes que el sedàs descarta. Deia sempre
el mateix: *«no es pinten perquè la firma no quadra. Això no és un error teu: vol
dir que algú ha escrit al directori sense la clau de qui deia ser, i el sedàs ho
ha aturat»*.

Amb una sola fitxa publicada —la de qui havia escrit el cartell— el missatge era
fals de dalt a baix. No hi havia cap intrús: hi havia la veda 135. I com que el
cartell donava una causa amb tanta seguretat, va enviar a buscar un atacant
inexistent en comptes de mirar la derivació del `did`.

L'error de disseny no és el text, és **haver escrit una causa on només hi havia
un símptoma**. El sedàs ja sabia el motiu de cada descart —`sense firma`, `firma
que no quadra`, `el did no surt d'aquesta clau`— i el cartell els llençava tots
per posar-hi una explicació inventada.

Dues regles, doncs:

- **Es diu el motiu que s'ha recollit, no el que se suposa.** Els motius van
  agrupats i comptats, i cadascun és el que el sedàs ha vist de debò.
- **Una acusació ha de saber a qui acusa.** Quan la fitxa descartada és la de qui
  mira la pantalla, dir «algú ha escrit sense la seva clau» és mentir-li sobre la
  seva pròpia fitxa. Ara les pròpies es diuen a part i s'apunta on toca: aquest
  navegador. La frase que culpa un tercer només surt quan es pot descartar que
  siguis tu, i la guarda del directori falla si algun dia torna a sortir tota
  sola.

### Veda 143 — Una garantia sense la seva condició escrita no és una garantia

El programa de mentoria per a organitzacions es ven amb un compromís: si al
final del sisè mes una evidència no hi és, les sessions que calguin per tancar-la
no es tornen a facturar. És el que el fa diferent d'un curs, i és el que el fa
venible.

També és el lloc més fàcil per mentir. Una promesa d'aquest tipus té dues vores
que gairebé mai s'escriuen, i totes dues s'han d'escriure abans de cobrar:

- **Fins on arriba.** No es pot prometre que una decisió sigui bona ni que una
  persona canviï. El que es compromet és la nostra part —que la competència quedi
  desenvolupada i demostrada— i no el resultat de negoci de l'altre. Vendre-ho
  com si fos el segon és el que fa que després ningú es refiï de cap consultora.
- **On decau.** La condició és que la persona vingui a les sessions i porti
  l'encàrrec fet. Si no passa, el compromís s'acaba. Una garantia sense condició
  és una que s'invocarà el dia que algú no hagi vingut mai, i llavors es
  discutirà de mala fe per les dues bandes.

La regla general: **quan es prometi alguna cosa amb un cost al davant, la
promesa i la seva condició van al mateix paràgraf.** Si la condició queda per a
un annex, o per a la conversa, la promesa és publicitat. I si no es troba una
condició que es pugui escriure, el que hi havia no era una garantia.

### Veda 149 — El que qualsevol entén és el que queda pitjor explicat

De les dotze dinàmiques del catàleg, sis tenien pàgina pròpia: La Compra,
L'Energia, L'Habitatge, la MATRIU, el mapa de valor i Molekulandia. Les dues
**per on comença tothom** —el banc de temps i la biblioteca de les coses— no en
tenien cap.

No és casualitat i el mecanisme val per a qualsevol projecte: **s'escriu el que
costa d'explicar.** Una comunitat energètica obliga a fer una pàgina perquè
sense ella ningú entén els coeficients; un banc de temps l'entén tothom a la
primera frase, i per això ningú s'hi posa. El resultat és que la persona que
arriba i pregunta «i què és un banc de temps?» ha d'obrir l'aplicació sencera:
se li demana una decisió abans de respondre-li la pregunta.

I una pàgina d'una cosa fàcil té un perill propi: **surt bonica i no serveix de
res.** Què és, que bonic, apunta't. El que la fa útil és la part que no
s'explica mai, i que en aquestes dues és molt concreta:

- **Un saldo molt positiu és un avís, no una medalla.** Qui ha donat vint hores
  i no n'ha rebut cap és la primera que plegarà, i qui ha rebut sense donar
  sovint no torna per vergonya. La feina no és animar a donar més: és
  buscar-li a algú alguna cosa que pugui oferir i demanar-la-hi de debò.
- **Què es fa el dia que una cosa es trenca o no torna.** Passarà, i les
  biblioteques no moren per falta d'objectes: moren el dia que algú se sent
  estafat i ningú havia escrit què s'havia de fer. La norma s'acorda abans del
  primer préstec, perquè decidida el dia que passa sempre sembla arbitrària.

Dues coses de mètode que en surten:

- **Una xifra amb la fórmula al costat.** El valor d'un préstec és
  «valor estimat × taxa de desgast», i les dues taules són les de l'app, no una
  còpia: si divergissin, algú acordaria les normes del seu barri amb una xifra i
  l'eina en registraria una altra. La guarda no compara el text de les taules,
  compara **el que calculen**.
- **La mitjana que no mesura res.** El saldo mitjà amb signe d'un banc de temps
  és zero sempre, perquè cada hora donada és una hora rebuda. Un grup on dues
  persones sostenen tot i dues no han tornat mai res té mitjana zero exacta i
  està trencat. El que compta és **la distància mitjana al zero**, i confondre
  les dues és com un grup es convenç que va bé.

### Veda 156 — Una estimació no entra mai en una casella de comptabilitat

Al SOS gairebé tot valor és una estimació amb forquilla: és honest, està escrit
i és el que fa que el mapa serveixi per decidir. Però hi ha caselles que no
admeten una estimació de cap manera —la taula de despesa d'una justificació de
subvenció, un rebut, una liquidació— perquè es contrasten amb factures i el que
hi va s'hi compara número a número.

La regla té dues meitats i les dues són necessàries:

- **L'etiqueta viatja amb el número.** Una xifra que surt del SOS cap a un
  document ha de dur al costat si és un recompte exacte o una estimació, i amb
  quina forquilla. Si l'etiqueta es queda a la pantalla d'origen, el document
  que en surt la perd i ningú sabrà mai que allò era aproximat.
- **Davant d'una casella comptable, l'eina s'atura i ho diu.** No perquè no
  sàpiga, sinó **perquè sap que el que sap no serveix per a aquella casella**.
  Deixa el concepte, deixa quin paper caldrà, i deixa l'import a «[a completar]».

I el corol·lari operatiu: **un import en blanc no és un import buit, és un
zero**. Dins d'una taula ningú el llegeix com «falta»; el llegeixen com «no hi
ha hagut despesa». El que torni buit es força a marcar.

### Veda 158 — Un model no suma, i una taula que ja tens no es demana

Dues coses que una eina d'IA fa malament **no perquè sigui poc capaç, sinó
perquè el resultat no es repassa**:

- **Sumar.** Un model que suma una llista de la compra encerta gairebé sempre.
  En una comanda, «gairebé sempre» vol dir que una vegada algú paga el que no
  toca —i un total ningú no el torna a fer a mà. Les sumes es fan al codi: el
  model posa preu unitari i quantitat, i l'aritmètica és aritmètica.
- **Copiar una taula que ja tens.** Si el nom, l'estat, el valor i el
  responsable de cada objecte ja consten al node, demanar-li la taula és
  demanar-li que copiï una base de dades. **Una còpia pot equivocar-se mentre
  l'original no.** El que se li demana és el que no hi ha: la lectura.

I el corol·lari operatiu, que és el que fa el número honest: **una línia que no
es pot comptar no es reparteix en silenci.** Un total que s'empassa les línies
sense preu és una mentida arrodonida. Es descarta abans de sumar, es compta a
part, i el total es declara parcial.

### Veda 167 — La IA es declara, i el que gasta s'escull

**Demanat per l'Àlvar el 17/10/2026:** «vull que als meus projectes la IA
s'integri i es mostri que ho fem amb transparència», i «cobri el que cobri per
token, el codex sempre serà el més intel·ligent possible al menor cost
energètic». Va néixer com la veda 6 de la web d'Álvaro Solache i ha pujat amb
`--recull`.

L'error que evita: una web feta amb IA que no ho diu, o que ho diu amb un
número escrit a mà que ningú comprova. Dues coses en surten:

- **El que fa la IA es mostra llegint-lo de l'historial**, no declarant-ho
  (veda 102). El giny `js/ia-a-la-vista.js` compta els commits que porten la
  firma de Claude cada cop que s'obre la pàgina, i si GitHub no respon deixa
  dir on és l'historial (veda 105). És un sol giny per a tots els projectes:
  els fills l'enllacen, no el copien (veda 71).
- **El preu per token el posa qui ven el model; el que es gasta ho decidim
  nosaltres.** Cada tasca va amb el model més petit que la fa bé, i si perd
  qualitat torna al d'abans (`conecta/` mostra el cost real amb la font i la
  data). Aquest cost l'han de pagar els ingressos recurrents dels serveis. La
  energia no es mesura directament: els tokens en són l'aproximació, i es diu
  així.

**Guarda:** el número surt de la API de GitHub, no d'una casella. Que cada
projecte fill enllaci la seva pàgina d'IA queda al backlog.

## Guardes i proves

### Veda 50 — Mesurar abans de patir, i comprovar que la prova comprova

500 nodes i 5.000 apunts —l'ordre de magnitud d'una comarca al cap de dos
anys— per veure si el SOS s'ofega. **No s'ofega**: el render triga 33 ms, el
segon 5 ms, i cap funció que recorri tot el SOS passa de 25 ms. Val la pena
haver-ho mesurat precisament perquè el resultat és aquest: ara ja no cal
optimitzar res «per si de cas», i qualsevol regressió futura es veurà contra un
número i no contra una impressió.

La única cara és `verifyNoLeak` (211 ms), i és cara **a posta**: compara cada
nom, contacte i títol del SOS sencer contra el JSON que sortirà. Es paga un cop
per publicació i és el preu de no filtrar dades de ningú.

Dos defectes reals que només apareixen a escala i en pantalla petita, tots dos a
**360 px** —l'amplada de molts Androids, i per això `test-mobilenav` a 375 px no
els veia mai:

- **La barra de pestanyes** era una fila que no podia encongir-se: amb totes les
  eines obertes sortia de la pantalla i feia desplaçar la pàgina sencera. Ara
  llisca ella, no la pàgina.
- **La barra superior** sumava 361 px. Un píxel. Prou perquè tota la pàgina es
  pogués moure en horitzontal.

I la lliçó que val més que les dues: **una prova que passa per no haver-hi res
no prova res**. Les comprovacions d'accessibilitat corrien sobre la pantalla
d'entrada buida i deien «0 camps sense etiqueta» perquè no hi havia cap camp.
Ara carreguen dades i obren un formulari de debò —37 botons, 7 camps— i el test
comprova **primer que hi ha alguna cosa a comprovar**. Un verd buit és pitjor
que un vermell: el vermell almenys demana atenció.

De la mateixa manera, «aquest element surt de la pantalla» no és un defecte si
el seu contenidor **llisca a posta**. La comprovació ha de ser sobre la pàgina,
no sobre el fill.

### Veda 106 — Un test que deixa un camp buit no passa mai per la branca que el llegeix

El taulell petava per a qui hagués declarat arquetips: `(ARCHETYPES||[]).find(...)`
sobre una taula que és un **objecte indexat per clau**, no una llista. El `||[]`
feia bona cara —semblava una precaució— i era el contrari: amagava que allò mai
havia estat un array. Les taules d'arquetips no tenen ni camp `id`; la clau *és*
la identitat, i buscar-hi `x.id===a` no hauria trobat res ni sent una llista.

El que val la pena no és l'errata, és **per què va passar el test**. La prova
guardava `declared: []` i comprovava la frontera entre declarat i evidenciat amb
les habilitats escrites a mà. Amb la llista buida, el `forEach` no s'executa mai i
la línia que peta **no s'arriba a llegir**. El test verd no deia «això funciona»:
deia «això no s'ha provat». La regla que en surt:

**Un camp posat a buit en una prova no és un cas límit provat: és una branca no
executada.** Si un test toca un camp de llista, n'ha de tenir una versió amb
elements a dins, i no només perquè el buit també importa.

I dues conseqüències més, que són les que fan que això no torni:

- **Un `||[]` sobre alguna cosa que no és una llista és pitjor que res.** No
  protegeix de res i fa que qui llegeixi el codi doni per fet un tipus fals. La
  guarda que ho troba no és una asserció, és una lectura: cap constant declarada
  com a objecte pot rebre un mètode d'array.
- **Un arquetip declarat amb un set simbòlic no pot desaparèixer llegit amb un
  altre.** Es resol per clau i, si no, per nom visible, a tots els sets; i el que
  no és de cap set **es mostra tal com la persona el va escriure**. Ensenyar el
  que algú va triar val més que un buit net.

El que sí que va funcionar: la veda 105. La pantalla no es va quedar muda —va dir
què havia fallat i on, i d'aquí va sortir un informe d'incidència amb el navegador,
el rol i la pestanya. La xarxa de seguretat va fer exactament la seva feina, que és
convertir una caiguda en una frase.

### Veda 112 — La guarda que mira les pàgines i no es mira el codex deixa fora la font

La veda 109 va posar la regla —una sola llista mana— i una guarda que l'aplica a
les pàgines: `comando.html`, `blog.html`, `uneix-te.html`, `online.html`,
`crm.html` i, després, `joc.html`. Va donar verd durant mesos.

Mentrestant, **la llista del codex mateix seguia sent la vella**: vuit herois
quan ja n'hi ha catorze, `Guiriguai` i `Ectoplasman` amb la grafia antiga, i
poders que no són els del còmic —«Purpleman · persuasió i visualització»— que
són exactament els que la veda 109 cita com a error. La guarda no ho va veure
mai perquè el codex no era a la llista de fitxers a escombrar.

És el mateix error de la 109 un pis més amunt: **el document que declara que hi
ha una font única no s'havia sotmès a la seva pròpia regla**. I fa més mal aquí
que en una pàgina, perquè el codex és el que llegeix qui vol saber què és cert.

Dues coses, doncs:

- **El codex, `vedes.html` i `index.html` entren a l'escombrada.** Si un nom
  vell hi apareix, falla igual que a qualsevol pàgina. L'app hi entra pel mateix
  motiu que el codex: era la font i per això no se la mirava ningú. Hi vivien
  encara **«Corporació Món Mort» a la missió del mòdul Comando i a la sinopsi de
  la vista** —dos textos que llegeix tothom— i **«Local-first» i «Zero servidor»
  a la descripció de Google, al peu de l'onboarding i al registre**, que és
  exactament el que prohibeix la veda 107.
- **Anomenar no és utilitzar.** Els noms antics que la veda 109 cita com a
  exemple van entre cometes simples o baixes, i la guarda els buida abans de
  mirar: explicar un error no és cometre'l, i una guarda que no ho sap distingir
  prohibeix parlar del passat. Pel mateix motiu **els comentaris de codi queden
  fora**: un comentari és el gremi parlant amb ell mateix, i el problema de la
  107 és el mot a la cara de qui no és del gremi.
- **La taula del codex diu on està documentat cadascú.** Còmic, vídeo o tema
  propi: el camp `on`. Que un personatge visqui en un vídeo no el fa menys real
  (veda 109), però barrejar-ho tampoc.

I la correcció que ho va destapar ha anat i ha tornat **tres vegades**, que és
el que la fa valer la pena escriure. El roster deia «Afrodito»; l'autor va
demanar «Afrodita» i es va canviar a tot arreu; després va tornar a «Afrodito»
i es va desfer; i el 2026-09-28 l'autor ho ha tancat: **es diu Afrodita**, i
la raó que abans semblava impedir-ho ell la desmunta en una frase —*«el de la
llista del Comando és Afrodita, la deessa del panteó és Afrodita, són
diferents»*.

I té raó, i val la pena entendre per què. El que la passa intermèdia havia
deixat no era una confusió del **programa**: `CANONICAL_HEROES` i el panteó de
12 són dues llistes que el codi no creua mai, i el mapa heroi→déu
(`hero:'Afrodita', god:'afrodita'`) és el pont explícit entre les dues i no un
accident. La «-o» final servia per no confondre **una persona llegint**, i
aquesta és una decisió d'autor i no de codi. La conseqüència pràctica s'ha
girat: ara el nom vell és «Afrodito», que no té cap ús legítim enlloc i va a la
llista negra general; i la llista a part que només mirava les pàgines públiques
**s'ha pogut esborrar**, perquè existia només per aquesta excepció.

El que això deixa escrit per al pròxim cop: **una guarda que protegeix una
distinció que l'autor no vol, protegeix un error.** La consistència es pot
automatitzar; quin nom és el bo, no.

El que queda per damunt de tot és el de sempre: cap guarda pot dir si un nom és
el bo. La consistència es pot automatitzar, la veritat no (veda 109). El que sí
que es pot automatitzar és que, un cop l'autor ho diu, **no torni** —i que si un
dia ho torna a canviar, canviar-ho sigui una línia i no una recerca.

### Veda 152 — Una guarda que mira les dades no veu el dibuix

El mapa de valor de la colla viu a dos llocs, i `check-vna.js` existeix
precisament per això. Comprovava quatre coses i totes eren certes: els dotze
rols són els mateixos, diuen el mateix paraula per paraula, els vint-i-quatre
lliuraments van entre rols que existeixen, i **cap rol es queda sense
lliuraments**.

I la portada ensenyava igualment **dos cercles solts**: les mans i els laterals,
dibuixats sense cap línia que hi arribés. `vna.html` declarava els seus quatre
lliuraments cap als segons —són el primer cordó, els qui aguanten el segon pis—
i el dibuix no en pintava cap. La guarda mirava **el graf declarat**; el defecte
era **al dibuix**.

La regla general: **quan una cosa es declara en dades i es pinta a mà, la guarda
ha de llegir el dibuix.** Comparar les dades amb elles mateixes sempre surt bé.

I el motiu pel qual aquest defecte concret no el troba ningú: **un node sense
arestes no peta, no desquadra cap comptador i es llegeix com una decoració.** En
un mapa que existeix per demostrar que tothom hi és necessari, deixar dos rols
com a adorn diu exactament el contrari del que la pàgina afirma —i ho diu en
silenci.

Es comprova per geometria i no per etiquetes quan les arestes no en porten: de
cada node, el centre i el radi; de cada camí, els extrems; i es demana que cada
node tingui algun extrem a tocar. No diu si l'aresta va on toca —això ho sap qui
sap de castells—, però sí que no n'hi falta cap.

### Veda 154 — «Acceptat» no vol dir res si no es podia corregir

La promesa que ven aquest tram és que els entregables els prepara una màquina i
**els accepta una persona**. Es va escriure així, i durant un temps l'esborrany
no es podia tocar: hi havia un botó d'acceptar i prou. Amb aquella pantalla,
acceptar només volia dir «no m'hi barallo», i el percentatge que en sortia no
mesurava res —no distingia entre un text bo i un text que ningú tenia manera
d'arreglar sense tornar a començar.

La regla: **quan una pantalla demana que una persona validi el que ha fet una
màquina, la persona hi ha de poder posar les mans allà mateix**, i el que es
desa ha de dir si les hi ha posat. Si el que es guarda només és el resultat, la
validació és un tràmit.

I el corol·lari, que és el que la fa auditable: **es desa també l'original de la
màquina.** Una correcció només vol dir alguna cosa si es pot comparar amb el que
hi havia; sense l'original, «corregit» és una etiqueta sense contingut i ningú
pot saber mai si el que es corregia era una coma o una xifra.

### Veda 155 — Una guarda que es compta a si mateixa no comprova res

`function acceptacioEntregables(` també conté `acceptacioEntregables(`. Una
guarda que busca «hi ha alguna crida?» amb un `indexOf` troba la definició i
diu que sí encara que no la cridi ningú. Va passar dues vegades seguides —a la
guarda 10 i a la 11 de `check-entregables.js`— i la segona és la que la fa veda:
si un error es repeteix amb el mateix codi davant, no era un descuit.

La regla: **tota guarda es prova trencant el que vigila, abans de donar-la per
bona.** Si en trencar-ho segueix verda, la guarda és pitjor que no tenir-ne cap,
perquè ensenya a confiar en un número que no mira res.

### Veda 159 — El que surt a fora passa pel sedàs de sempre, i el bloqueja

Un entregable que llegirà un desconegut no es tracta com els altres: **passa pel
mateix `verifyNoLeak` que una publicació**, no per un sedàs propi —un segon
sedàs divergeix del primer i el dia que divergeix ningú se n'adona.

I la distinció que el fa utilitzable en comptes de només estricte:

- **Una dada d'una persona bloqueja.** Nom, id de fitxa, identitat o contacte:
  **no es pinta el botó d'acceptar.** No és un avís, perquè un avís es clica amb
  pressa; i el que es publica no es pot desfer, i qui hi sortiria no ho ha
  consentit.
- **La resta avisa i decideix qui accepta.** El nom d'un objecte de la
  biblioteca no és dada de ningú: si el node vol dir a fora que té un trepant,
  és una decisió seva.

Bloquejar-ho tot hauria semblat més segur i hauria fet la pantalla inservible —i
una pantalla inservible acaba amb la fitxa escrita a mà, fora de l'eina i sense
cap sedàs. **Un fre que no deixa treballar no protegeix: es desmunta.**

## Una sola font

### Veda 44 — Dues llistes raonables poden no parlar-se

El banc de temps té «petites reparacions de la llar». La biblioteca de les coses
té «bricolatge i eines». Cadascuna és correcta al seu lloc i cap de les dues està
mal feta. El problema apareix quan es creuen: **qui ofereix reparar i qui busca un
trepant no s'han trobat mai**, encara que a la vida vagin sempre plegats — són la
mateixa tarda de dissabte.

La sortida fàcil seria unificar les dues llistes. Seria un error: la categoria
d'un objecte i la d'un servei no volen dir el mateix ni serveixen per al mateix,
i fondre-les faria pitjors les dues pantalles per arreglar una tercera.

L'**àmbit** és la capa de sobre. No substitueix cap taxonomia, no en canvia cap
fitxa, i **no s'inventa equivalències**: només uneix el que de debò es fa junt.
Set àmbits fan de pont de veritat; vuit en tenen una sola banda, i així ha de ser
—dir que «tràmits i paperassa» té un objecte equivalent seria fer-ho quadrar a la
força, i un pont que va a lloc no es nota.

Dues regles que eviten que la banda de coincidències menteixi:

- **Una coincidència d'àmbit no és una coincidència exacta**, i no es poden
  presentar iguals. La targeta ho diu amb el nom: «es creuen *reparacions* i
  *bricolatge* — no és la mateixa cosa, és el mateix àmbit». Vendre-ho com a
  equivalent seria prometre un aparellament que no existeix.
- **Un àmbit que no travessa res no es mostra.** Si el que s'ofereix i el que es
  busca són la mateixa cosa de la mateixa taxonomia, la coincidència exacta ja ho
  diu i l'àmbit només ocuparia el lloc de la que sí aporta.

I una conseqüència d'interfície que era un defecte esperant: **un àmbit no es pot
escriure a la caixa de cerca**. «Reparar i bricolar» no és el text de cap fitxa,
així que clicar-hi i posar-ho al camp de text hauria donat zero resultats. Es
filtra pel que és —un xip d'àmbit que es pot treure—, no per un text que ho
imita.

### Veda 71 — Tres còpies d'una regla són tres llocs on afluixar-la

El canal (veda 65), la custòdia (veda 69) i el relé (veda 70) fan exactament la
mateixa feina: agafar el que puc demostrar d'un node, xifrar-ho amb la clau del
node, signar-ho; i a l'altra banda comprovar la firma, desxifrar i verificar
apunt per apunt.

Escrit tres vegades, són tres llocs on la regla de «el transport no dona
veritat» es pot afluixar sense que ningú se n'adoni — i el tercer sempre és el
que s'oblida. `sealPack` i `openPack` ho fan un sol cop.

Això no és estalviar línies: és que **hi hagi un sol lloc on sigui difícil
equivocar-se**. Quan una garantia es repeteix, el que es multiplica no és el
codi, és la superfície on pot fallar.

### Veda 90 — Dues pantalles que diuen coses contràries sobre la mateixa dada: la pitjor manera de tenir raó

Report d'ús real: una MATRIU amb **quatre aportacions al registre** i la pantalla
d'equity dient **«Encara no hi ha aportacions»**. Cap de les dues frases era
falsa, i justament per això el defecte era pitjor que un error: qui ho llegeix
conclou que l'app s'equivoca —o, molt pitjor, que ha perdut la seva feina.

La causa: **dos formularis escriuen al mateix ledger i només un posava
`memberId`**. `openContributionModal` demana el soci; `openLedgerEntryModal` —el
del tauler i el del kanban— demanava «Qui ho ha aportat» com a **caixa de text**.
`computeEquityCore` salta tot apunt sense `memberId`, així que el nom escrit a mà
no arribava mai a la tarta. Dues persones a l'app: el soci amb el seu id, i el
nom escrit en una casella. No s'havien conegut mai.

Arreglat als **tres** llocs, perquè qualsevol d'ells tot sol hauria deixat el
problema a mitges:

- **L'origen.** El formulari tria un soci de la llista. Es pot seguir escrivint
  un nom per a qui no ho és —hi ha aportacions de gent que no és sòcia— però ara
  és una tria visible, amb la conseqüència escrita al costat, en comptes d'un
  descuit.
- **El que ja està escrit.** Aquí hi ha la restricció que mana: **els apunts van
  signats i encadenats**. Afegir-los el `memberId` que els falta trencaria la
  firma i l'app diria que el registre s'ha manipulat —arreglar la comptabilitat
  destruint-ne la prova. Així que s'atribueixen **en llegir**, pel nom, i **només
  quan un sol soci del node el porta**. No toca cap fitxa, no fusiona ningú i no
  es desa enlloc: és llegir una casella que ja hi era. Amb dos socis homònims no
  s'endevina (veda 59), i es diu.
- **La pantalla.** Si hi ha apunts i no compten, es diu **quants** i **per què**,
  amb el motiu concret —no hi ha socis / el nom no és de cap soci. I quan compten
  pel nom, també es diu: una slice atribuïda per una casella de text no és el
  mateix que una registrada a nom del soci, i barrejar-les sense dir-ho seria fer
  passar una per l'altra.

La regla general, que val més que aquest cas: **quan dues pantalles poden dir
coses contràries sobre la mateixa dada, la que ensenya el zero és la que ha
d'explicar-se.** Un buit que contradiu un número que l'usuari ja ha vist no és
un buit: és una acusació contra la seva feina.

### Veda 98 — Un índex que es manté a mà es desincronitza el segon dia

Publicar ja se sabia fer: el fitxer del paquet sortia bé. El que no se sabia fer
era **l'índex que hi apunta**, que es mantenia a mà —i un índex escrit a mà
acaba anomenant un fitxer que no hi és, o deixant-ne un que ningú anomena. El
primer cas el lector el compta com a «paquet fallat» sense saber per què; el
segon és un fitxer que no llegirà mai ningú. Ara es genera, i abans de baixar-lo
es comprova en totes dues direccions.

Amb això queda tret l'últim lligam: **publicar no demana ni token ni el
repositori de ningú**. Un origen és una carpeta amb dos fitxers estàtics.

I la propietat que sembla un detall i és el que fa que la peça anterior serveixi:
**el hash que s'anuncia ha de ser el de l'índex que es publica**. Si no ho fos, el
`checkAnnounced` de la veda 97 diria «no quadra» del teu propi origen ben
publicat. Una comprovació que crida al llop amb les teves dades correctes
s'aprèn a ignorar, i llavors ja no hi és per al cas de debò. Una alarma que es
desactiva sola per soroll és pitjor que no tenir-ne.

#### El que va destapar

Aquesta peça va ser la primera a passar el sedàs de sortida **abans de
descarregar**, i va caçar una fuita que hi era de feia temps: quan una oferta té
una categoria que no és de la llista —o no en té cap— `supplyThing` i
`thingLabel` cauen al **títol lliure**, i el títol sortia de casa com a
`category` i com a `label` del paquet agregat. «Necessito ajuda amb la hipoteca»
convertit en categoria pública.

A dins, aquell recurs està bé: és el que la persona va escriure i l'ha de veure.
A fora no, i el motiu és el de la veda 47: **el paquet és agregat, i una etiqueta
lliure torna a identificar el cas concret que l'agregació havia d'amagar**. El
que no és de la llista surt com «altres».

La lliçó que val més que l'arreglada: la comprovació existia i era correcta —
`verifyNoLeak` ho detectava perfectament— però **cap camí de publicació la
cridava**. Una guarda que no és a la porta per on es passa no guarda res.

### Veda 100 — Dues fonts que no es contradiuen igual es poden desincronitzar

Anava a ampliar els mòduls formatius perquè el backlog deia que «`FORMACIO_MODULES`
diu què és cada mòdul i prou; qui l'obre no hi troba res per llegir». Era fals, i
val la pena dir per què m'ho vaig creure: **ho havia escrit jo mateix mirant només
un dels dos costats**.

`formacio.html` tenia el temari sencer —objectius, skills, aptituds, eines,
metodologia i exercici per mòdul— i l'app ja hi enllaçava amb l'àncora correcta.
L'arquitectura era bona i deliberada: la pàgina és la **font única de la docència**
i `FORMACIO_MODULES` només n'és **l'esquelet referenciable**. Escriure contingut
nou hauria estat duplicar-lo, que és el pitjor que se li pot fer a una cosa que ja
està bé.

El problema real era un altre i no s'assemblava gens: **la pàgina tenia 16 mòduls
i l'app en modelava 8**. Els vuit del Bloc B —facilitació, comunicació, conflictes
i cures, finançament, formes jurídiques, mesura d'impacte, RGPD i formació de
formadors— existien sencers i **cap itinerari de rol els citava mai**. Justament la
meitat que ensenya a sostenir una comunitat, que és el que de debò fa caure els
projectes; la meitat de l'eina, no.

Ningú se n'assabenta perquè **els dos costats funcionen**. La pàgina es llegeix bé.
L'app no dona cap error. No hi ha res trencat: només hi ha una cosa que no existeix
en un dels dos llocs, i el silenci és exactament igual que si hi fos. Aquesta és la
forma que pren aquest error sempre: no una contradicció —que es veuria— sinó una
absència.

La regla que en surt: **quan una cosa viu partida en dues fonts a posta, la
correspondència entre elles ha de ser una guarda, no una intenció**. `check-formacio.js`
falla per dues coses, i totes dues deixen algú a mig camí:

- **Un mòdul de l'app sense àncora a la pàgina**: l'enllaç no va enlloc.
- **Un mòdul de la pàgina que l'app no modela**: ningú l'hi enviarà mai.

I una que la guarda també ha de fer, perquè si no és una guarda cega: si el lector
no entén tants mòduls com n'hi ha escrits, **ha de dir que no els ha entesos** en
comptes de comptar-ne menys i concloure que tot quadra.

### Veda 135 — Un identificador que surt de `JSON.stringify` identifica l'ordre de les claus, no la clau

El `did:sos` d'una persona és el hash de la seva clau pública. Per fer-ne el hash
cal convertir la clau en text, i allà hi havia escrit `JSON.stringify(jwk)`. És
la línia més raonable del món i va estar mesos sense fer cap mal, perquè tots dos
extrems escrivien el JSON igual.

Fins que un extrem va ser Postgres. El navegador exporta el JWK amb les claus en
ordre alfabètic; `jsonb` les torna ordenades **per longitud i després pel seu
byte**. Mateixa clau, dos textos, dos hashos, dos `did`. El directori recalculava
el did de cada fitxa per lligar-la a qui la firmava —que és el que impedeix
suplantar ningú— i li'n sortia sempre un altre. Resultat: **totes les fitxes
descartades, amb la firma perfectament vàlida**.

Val la pena veure per què no ho va trobar res. La firma Ed25519 verificava, i
verificava de debò: el que fallava era una comparació d'igualtat entre dues
cadenes que havien de ser la mateixa. Les proves passaven perquè totes vivien
dins d'un navegador, on l'ordre no canvia mai. I llegint el codi no es veu: cal
saber què fa `jsonb` amb les claus d'un objecte.

La regla, doncs, no és «vigileu Postgres»:

**Tot el que identifica o es firma passa per la forma canònica.** `_canon`
ordena les claus i dona els mateixos bytes vingui d'on vingui l'objecte —d'un
`exportKey`, d'un fitxer, d'una taula, d'un altre navegador. `JSON.stringify` no
serveix per a res que s'hagi de comparar més tard amb el resultat d'una altra
màquina, i no perquè estigui malament: perquè no promet el que li demanem.

Dues conseqüències que ja s'han aplicat:

- El **hash del certificat** (`confirmCertificate`) tenia exactament el mateix
  patró i s'ha canviat alhora, abans que dues confirmacions del mateix certificat
  parlessin de «sobres» diferents.
- **La canònica és l'alfabètica**, que és la que el navegador ja feia servir: cap
  identitat existent s'ha mogut. No era garantit, es va comprovar contra la fitxa
  ja publicada abans de tocar res. Si algun dia una identitat no quadra amb la
  seva pròpia clau, **no es torna a derivar sola**: el `did` és el que et fa
  propietari dels teus nodes i el que porta els teus vistiplaus, canviar-lo no té
  camí de tornada, i el que toca és dir-ho.

## Persones i dades

### Veda 39 — Una persona és una, encara que estigui a cinc llocs

`newMember` encunyava un `uid()` nou cada vegada. La mateixa persona donada
d'alta a la MATRIU, al banc de temps i a la biblioteca eren **tres registres
sense cap relació**, units només perquè s'escriuen igual. Canvia-li el nom en un
lloc i es partia en dues. Les seves hores, la seva equity i la seva reputació
anaven partides amb ella.

Tres capes, de menys a més compromís:

1. **Triar d'entre qui ja hi és.** `knownPersons()` és un índex **derivat, mai
   desat** de tota la gent que el SOS coneix. L'alta té dues portes i la primera
   és «Ja el coneixem». Triar-hi enllaça en comptes de duplicar.
2. **`did` a la fitxa.** Qui vol **reclama** la seva fitxa signant
   `{nodeId, memberId, did}`. A partir d'aquí el que uneix els registres és la
   clau, no el nom. Una fitxa reclamada per un altre no es pot prendre: només
   qui la té la pot deixar anar.
   La comprovació que ho aguanta tot és `signer.did === member.did`. Sense ella,
   qualsevol podria signar una reclamació posant-hi el `did` d'un altre — i la
   signatura seria **vàlida**, perquè l'ha feta de debò. Que la signatura sigui
   vàlida no vol dir que digui la veritat sobre qui és.
3. **Fusió de duplicats.** I aquí la regla que governa la resta:

> **La fusió no reescriu mai història signada.**

Els apunts del ledger conserven el seu `memberId` original i es llegeixen per
una **taula d'àlies** (`node.memberAliases`). Reescriure'ls trencaria la seva
signatura i la cadena de hash, i la fusió deixaria de ser auditable. El que sí
que es repunta és l'**estat mutable** —ofertes, objectes, mentors, leads,
reserves—, que no porta la signatura de ningú.

La línia és aquesta: **el que està signat es resol; el que no, es mou.**

Equity, saldos, reputació i perfil resolen per àlies, així que fusionar reuneix
les hores en comptes de perdre-les. La fitxa absorbida queda com a làpida amb
`mergedInto`: no s'esborra res.

I dos `did` diferents sota el mateix nom **no es fusionen**: són dues persones
que es diuen igual, es marca com a conflicte i es diu.

### Veda 42 — Qui exporta ha de saber què s'emporta

La còpia de la identitat (V25) resolia una pèrdua: esborrar el navegador
destruïa el `did:sos`. Però la identitat sola no és el teu SOS. Si perds el
navegador amb els nodes, els socis, el registre d'hores i la biblioteca, el que
et queda és una clau sense res a obrir.

`exportBackup` s'emporta la base de dades sencera. I aquí hi ha la decisió que
importa: **la contrasenya en blanc és una opció legítima** —hi ha gent que fa la
còpia en un disc que ja té xifrat, o que necessita poder-la obrir sense
recordar res— **però un fitxer en clar amb la teva clau privada dins no és una
còpia de seguretat qualsevol**. Qui el tingui no només et pot llegir: et pot
**signar coses en nom teu**, i les signatures del SOS són el que fa que el
registre valgui alguna cosa.

Per això el botó no diu el mateix en els dos casos. Amb contrasenya:
«Descarrega la còpia xifrada». Sense: **«⚠ Descarrega SENSE xifrar»**, i
l'avís diu exactament què implica. No es bloqueja, no es fa un sermó: es diu.
I hi ha una casella per treure la identitat de la còpia, que és la resposta
raonable per a qui vol les dades però no el poder de signar.

L'altra meitat és la restauració. **Importar és sobreescriure**, i ningú hauria
de sobreescriure a cegues: primer es llegeix el paquet i es diu què porta
—quants registres, de quin dia, si hi ha identitat a dins— i només llavors
s'importa. Substituir-ho tot (esborrar el que hi ha abans d'entrar el nou) és
una casella a part, apagada per defecte, amb confirmació.

I una cosa que semblava un detall: un fitxer malmès sense la llista de registres
restaurava **zero** i deia que tot havia anat bé. Un `|| []` que amagava un
fitxer trencat. Ara distingeix «no hi ha registres» de «no hi ha llista de
registres», que no és el mateix.

### Veda 46 — Una persona no és un rol

`roleOfPerson` retornava **un** rol, i amb aquell rol es decidia la lent de tot
el SOS. Hi fallaven dues coses alhora, i la segona és pitjor que la primera.

La primera és de model: la mateixa persona és **superheroina al seu barri i
mentora d'una MATRIU de la comarca** a la vegada. La implicació no és un estat
global —**depèn del node i del que hi fa**— i aplanar-la a un sol valor obliga a
triar quina de les dues veritats s'esborra.

La segona és pitjor perquè era invisible: quan la casella no deia res, el rol
sortia del **primer node que es trobava recorrent la llista**. Dues persones
idèntiques podien acabar amb lents diferents per l'ordre en què s'havien creat
els nodes. Un resultat que depèn de l'ordre d'iteració no és un resultat, és un
accident.

Ara el rol es **dedueix de l'evidència que el sistema ja tenia**: qui acompanya
ventures és mentora (`mentorsOf`), qui reclama o custodia un node és guardiana
(`govOf`), qui aporta hores i objectes és superheroina. Cada rol porta **el seu
perquè** —«acompanya 2 iniciatives», «3 aportacions · 1 objecte»— perquè un rol
que no es pot explicar és una etiqueta.

Tres coses que això obliga a decidir bé:

- **Una casella per defecte no és una declaració.** `newMember` posa
  `superheroi` a tothom, així que comptar-lo com a evidència seria dir que tot
  el món ha declarat el mateix. Només compta la casella quan hi ha una **altra**
  cosa; i «superheroi» es dedueix de l'activitat, que és més veritat.
- **`mentor` no existia a `SOS_ROLES`** tot i que la MATRIU ja tenia mentors amb
  àmbit i sessions al registre. Es podia ser mentora sense que el SOS ho digués.
  Ara hi és, amb recorregut propi.
- **La lent es tria, no s'endevina.** «Ara miro el SOS com a mentora» és una
  decisió teva, amb un selector visible quan tens més d'un rol —i cap selector
  quan en tens un de sol, que seria soroll. El selector **no** viu dins del bloc
  que pinta la frase de la lent: un rol sense frase per a aquest context segueix
  sent un rol teu, i amagar-li el botó el faria desaparèixer del SOS.

### Veda 47 — Publicar no és publicar-ho tot

L'objectiu és que algú d'un poble premi un botó i el que ha decidit compartir
quedi publicat perquè algú altre ho trobi. La temptació és òbvia: agafar el
catàleg i penjar-lo. Però publicar «hi ha algú a Manresa que fa fusteria» **no
és** publicar qui és, ni el seu telèfon, ni el seu registre. I publicar és
irreversible a la pràctica: un paquet que algú ja ha copiat no es retira.

Per això la decisió del **gra** va abans que el botó, i és aquesta: **el que surt
és agregat**. Categoria + municipi + quants. El paquet et diu **on preguntar, no
a qui**. El node és la porta, i un node és una comunitat, no una persona.

D'aquí surten tres coses que semblaven detalls i no ho són:

- **Els títols lliures no surten.** Sonava excessiu fins que es va veure el cas:
  algú escriu «Trepant d'en Quim Ferrer» o «Fusteria a casa de la Berta», i el
  nom hauria sortit igualment **sense que ningú ho hagués decidit**. Un camp que
  qualsevol pot omplir amb el que vulgui no es pot publicar mai.
- **Deny by default, i node a node.** No surt res de cap node fins que aquell
  node ho demana explícitament, i per separat per a habilitats i per a objectes.
  Un valor per defecte que publica és una fuita amb bona intenció.
- **La comprovació és codi, no un test.** `verifyNoLeak` recorre tots els noms,
  contactes, `did`, títols i apunts que hi ha al SOS i els busca dins del JSON
  que viatjarà; i a més rebutja **qualsevol clau fora de la llista blanca**,
  encara que el valor sembli innocu. Si falla, **el botó no publica**. Una
  garantia que només viu a la suite de tests protegeix el desenvolupador, no la
  persona.

I la mateixa porta funciona en tots dos sentits: el paquet que **entra** passa
pel mateix sedàs que el que surt. Un paquet manipulat amb camps de més no pot
afegir res de nou al SOS de qui el llegeix.

Finalment, la pantalla ensenya **la taula sencera del que sortirà** abans de
deixar-te descarregar res. Qui no ho entengui no ha de poder prémer el botó
sense haver-ho vist.

### Veda 59 — Unir persones pel nom corromp dades en silenci

`joinNode`, `knownPersons`, `personProfile` i el rànquing unien registres pel
**nom normalitzat**. Dues maneres de fer mal sense que res avisi:

- **Dues persones que es diuen igual** al mateix poble es fusionaven en una:
  hores, ofertes, saldo i reputació barrejats.
- **Una persona escrita de dues maneres** —«Àlvaro» en un node, «Alvaro Solache»
  en un altre— es partia en dues: perfil partit, rànquing partit, i el fons
  comptant-la dos cops com a dues persones.

El `did` ja hi era des de V39: `claimMember` signa `{nodeId, memberId, did}`. El
que no es feia era **emparellar per ell**. Tres regles:

- **Un `did` mana sobre el nom.** Dos registres amb el mateix `did` són la
  mateixa persona encara que s'escriguin diferent.
- **Dos `did` diferents no s'uneixen mai**, encara que el nom coincideixi. I el
  nom ambigu es **marca**, en comptes d'amagar que hi ha dues persones al darrere.
- **Un registre sense `did` s'adopta pel nom**, però només si aquell nom apunta a
  **un sol** `did`. Si n'apunta a dos, no s'endevina: endevinar aquí seria triar a
  qui li regalem les hores d'un altre.

I la que ho fa reversible: **res d'això reescriu història signada**. Els apunts
conserven el seu `memberId` i el seu `who` originals; la identitat **es resol en
llegir**, no es reescriu. Per això reclamar una fitxa vella la uneix a la persona
sense tocar cap signatura ni cap cadena de hash.

### Veda 60 — Publicar sense descobriment no és publicar

`supplyPublicPack` generava un paquet agregat, comprovava que no filtra res, el
versionava amb CID… i el deixava **al teu disc**. Ningú el podia trobar. Tota la
feina difícil feta i el resultat, invisible.

La solució ja existia al mateix repositori i ningú se n'havia adonat: **l'atles**
és un repositori públic servit per CDN, on s'aporta amb una *pull request* i d'on
qualsevol baixa amb un `fetch`. Públic, versionat, amb historial, auditable,
gratis, i amb revisió humana abans de publicar-se. L'oferta comuna fa el mateix
camí.

Dues regles que no es poden relaxar:

- **El que es llegeix no es fusiona amb el teu.** L'oferta comuna viu a part i es
  marca com a vinguda de fora. Barrejar-la convertiria el que ha dit un altre en
  dada teva, i això no es pot desfer un cop la gent hi confia.
- **Entra pel mateix sedàs que surt.** Una fila que porti noms, correus,
  telèfons o `did` es descarta sencera **encara que vingui del repositori
  oficial**. Confiar en l'origen és exactament com es cola una fuita.

I es diu el que és: **això no és permaweb**. Si algú esborra el repositori,
desapareix. És públic, versionat i amb un CID que prova integritat —molt més que
tenir-lo al calaix, i menys que Arweave. El mateix fitxer es pot pinnar després;
ja porta el seu CID.

## Pantalles i UX

### Veda 35 — Res no interromp el que estàs fent

`modal()` buida `#modalRoot` sencer. Vol dir que **qualsevol** pantalla que
s'obri per iniciativa de l'app destrueix la que tenies oberta, i amb ella tot
el que hi havies escrit. El tour d'acollida arribava amb retard i feia
exactament això: si mentrestant havies obert el registre d'hores i n'havies
omplert la meitat, es perdia.

La norma: **cap pantalla automàtica s'obre a sobre d'una d'oberta**. Espera i
torna-ho a provar; si al cap d'una estona segueixes ocupat, renuncia. Val més
un tour que no surt que un formulari perdut.

### Veda 36 — El semàfor no és decoració

Cada iniciativa té un color, i el color surt de fets, no d'opinions:

- **Vermell** — un risc de probabilitat i impacte alts **sense pla de
  mitigació**, o un bloqueig que fa 14 dies o més que dura, o silenci greu.
- **Ambre** — qualsevol bloqueig obert, silenci d'avís, o qualsevol risc apuntat.
- **Verd** — res de tot això. Una graduada sempre és verda: ja no la vigilem.

Un risc **amb** pla baixa a ambre. Aquesta és la diferència que compta: apuntar
un risc no és gestionar-lo, escriure què faràs sí. Un bloqueig demana **qui el
desbloqueja** — sense nom no és un bloqueig, és una queixa.

La cartera de la MATRIU mostra el semàfor **pitjor primer**, i el tauler
d'atenció puja els bloquejos encallats per damunt de tota la resta.

### Veda 80 — Val més dir «això no ho faig jo» que un botó que ho sembla

Al registre públic li faltava permanència: el repositori es pot esborrar i els
relés de Nostr no guarden res per sempre. Això es paga un cop i es fa a fora.

La temptació era un botó que digués «Puja a Arweave» i que en realitat obrís una
pestanya. Ho hauria fet servir tothom i ningú hauria sabut que **el que ha
quedat pujat és el que hi hagi pujat ell**, no el SOS.

Per això el botó diu **«fes-lo permanent»** i la pantalla diu, sense endolcir-ho,
que el SOS no puja res. El projecte porta massa vedes dient «no es diu verificat
del que no s'ha verificat» com per fallar aquí.

I la peça que de debò fa la feina no és el fitxer ni el CID: és **quedar-se
l'adreça on has dit que l'has posat**. Un ancoratge del qual no saps tornar no
és un ancoratge — i per això, **sense adreça no es desa res**. Deixar-ho desar
buit hauria estat pitjor que no oferir-ho: tindries una llista d'ancoratges que
et faria creure que estàs cobert.

Es guarda **dins de l'ancoratge que ja existia**, no en una llista nova. Dos
llocs on mirar el mateix acaben sempre igual: un dels dos menteix.

### Veda 94 — Una porta que existeix i no es pot obrir compta com si no hi fos

Publicar una oferta ja es podia fer d'una tirada, i tot i així gairebé ningú hi
arribava. No era un problema de funcionalitat sinó de **les tres maneres en què
una acció es pot fer inaccessible sense deixar de funcionar**, i les tres hi eren
alhora:

- **Viure en un sol lloc.** L'acció només estava al lateral. Qui feia servir el
  menú d'accions o la cerca global no la trobava mai, per molt que la fes servir
  cada dia. Una acció central ha de tenir més d'una entrada; no per redundància
  sinó perquè **no hi ha un únic camí pel qual la gent hi va**.
- **Ser un `div` amb `onclick`.** Les files del taulell es podien clicar i prou.
  Sense `role`, sense `tabindex` i sense Enter, qui navega amb teclat o amb lector
  de pantalla llegia el número —«ofertes: 1»— i no arribava mai a l'acció. La
  informació hi era; la porta, no. Una fila que fa una cosa **és un botó**, i s'ha
  d'escriure com un botó encara que es pinti com una fila.
- **Acabar en un cul-de-sac.** Qui encara no era a cap banc de temps rebia
  «entra a un node o crea'n un, i torna aquí»: una pantalla que t'explica el que
  et falta i et deixa amb el problema a les mans. És exactament el que prohibeix
  la veda 62, i costava d'endevinar perquè per a qui ja hi era, la pantalla
  funcionava perfectament.

La sortida del tercer cas és la que dona la regla: **crear el que falta és part
de l'acció, no un requisit previ**. Obrir el banc de temps al municipi, entrar-hi
com a soci i publicar l'oferta és la mateixa feina que ja fa l'alta de perfil;
l'única cosa que faltava era poder-la fer des d'aquí. Un formulari, un botó, i el
mateix resultat tant si el lloc existia com si no.

I la seva germana, que és la que evita substituir un cul-de-sac per un altre:
quan encara no se sap **qui** publica, no es diu «no pots». Es diu què falta —
saber qui ets— i s'hi porta amb el botó al costat.

### Veda 99 — El primer que veu tothom és l'últim que mira ningú

Revisant l'ajut d'inici van sortir tres defectes, i els tres tenien la mateixa
causa: **és la pantalla per on tothom passa una vegada i on ningú torna**. Es
prova el dia que s'escriu i després es queda sola per sempre, mentre la resta de
l'app té tests que la vigilen.

El pitjor era visible i portava temps allà: el text dels passos porta èmfasi
escrit a mà, i es pintava amb `esc()`. Resultat: la primera frase que llegeix
qualsevol que obre el SOS deia literalment «s'uneixen en una `<strong>`aventura
comuna`</strong>`». No hi ha manera més ràpida de dir «això no està acabat».

La solució no és treure l'escapament —el dia que algú hi posi una variable, això
seria una porta oberta— sinó **escapar-ho tot i tornar a obrir només les dues
etiquetes que aquest text fa servir**. Una llista blanca, com a tot arreu.

Els altres dos són de forma, i tots dos són casos de la veda 62:

- **L'últim pas no tenia manera de dir «ja està»** que no fos «Salta la
  introducció». Quan has arribat al final no queda res a saltar, i oferir-ho és
  demanar a algú que renegui del que acaba de fer.
- **Un cop vista, la introducció era irrecuperable.** S'obria a l'arrencada i
  només el primer cop. Explicar-se una sola vegada —i justament en el moment en
  què encara no saps si t'interessa— és no explicar-se. Ara es torna a obrir des
  de la guia, que és on va qui es perd, i des de la cerca.

I la que ja hi era i s'ha de conservar: **una presentació no interromp una feina
començada**. Si hi ha res obert, el tour espera. `modal()` buida l'arrel, i un
tour que arriba tard es menja el formulari que estiguessis omplint amb el que hi
hagis escrit a dins.

### Veda 105 — Una pantalla que peta a mig pintar es queda muda, i el silenci menteix

Restaurar una còpia deixava el tauler en blanc. Dues causes, i la segona val més
que la primera.

**La causa directa**: una còpia antiga porta nodes sense els camps que s'han anat
afegint —`vna`, `kanban`, `ledger` a `null`— i el codi que els llegeix dona per
fet que hi són. Es normalitzen **en llegir-los, no en desar-los**: el fitxer de la
còpia és el que és i no s'ha de tocar; qui ha de ser tolerant és qui el llegeix. I
es normalitzen **buits**: assegurar la forma no és inventar contingut.

**La causa de fons, que és la que estabilitza**: `renderWorkspace` buida la
pantalla i **després** pinta. Si el pintat peta, queda un blanc sense una sola
paraula. I vist des de fora, tres coses molt diferents s'assemblen exactament:

- l'app s'ha trencat,
- he perdut les dades,
- no hi ha res a ensenyar.

Només una és certa, i el silenci deixa que la persona es cregui la pitjor. Per
això ara una vista que peta pinta l'error: **què** ha fallat, **on**, i el que sí
que se sap del cert —que això és un error dibuixant i que el que hi ha desat
segueix sencer— amb tres sortides que funcionen de debò: tornar al tauler, fer
una còpia ara mateix, i dir què s'ha trencat.

Dues coses que això ensenya i que no s'endevinaven:

- **La protecció ha d'anar al voltant de tot el pintat, no del tros que sospites.**
  El primer intent la va posar al voltant de les vistes, i la petada passava
  construint la barra de pestanyes —abans d'arribar a cap vista. Un `try` mal
  col·locat dona la mateixa falsa seguretat que no tenir-ne cap.
- **Pintar l'error no és lleig; el lleig és el blanc.** La temptació d'amagar les
  fallades perquè «queda millor» és la que fa que la gent no sàpiga mai si pot
  confiar en el que veu.

#### I una guarda que va deixar de comptar bé, dues vegades

La guarda de KISS comptava les portades llegint `state.homeView==='x'` pel codi.
Això la lligava a **com estigués escrit el `switch`**, i va fallar dues vegades
seguides: primer va comptar «tauler» dues vegades (hi sumava 1 a cegues donant
per fet que la portada per omissió mai es compararia explícitament), i després va
perdre de vista «mapa» el dia que en va sortir una variable local.

Les dues xifres eren falses, però **no són igual de greus**: comptar de més fa
soroll i es corregeix; **comptar de menys deixa de protegir sense dir-ho**. Ara
llegeix una llista declarada —`HOME_VIEWS`— i, si no la troba, **crida en comptes
d'aprovar**: una guarda que no troba el que mesura mai ha de dir que tot va bé.

### Veda 122 — No es pregunta a la porta el que el sistema pot deduir

Qui entrava al SOS havia de triar **un rol d'entre sis** abans d'haver fet res, i
li ho preguntaven **dues vegades**: al pas 4 del tour i un altre cop al formulari
de perfil. Ningú que arriba pot saber si és «Guardian del territori» o «Agent
territorial»; el que sap és que li estan demanant una cosa que no pot contestar.

I la pregunta contradeia el que aquesta mateixa app fa dues funcions més amunt:
`rolesOfPersonIn` **dedueix els rols de l'evidència** —qui reclama un node és
guardiana, qui acompanya ventures és mentora, qui aporta hores i objectes és
superheroina— i el seu propi comentari ja deia que la casella declarada no és
l'única evidència. Dues fonts per a la mateixa cosa, i la que es preguntava
primer era la que menys sabia.

Ara **s'entra com a superheroi/na i prou**. Els altres rols queden com el que ja
eren: coses que **es guanyen** fent o que **algú t'assigna**. El pas del tour no
desapareix —la pregunta «i jo què puc arribar a ser?» és bona i mereix
resposta—: deixa de ser un selector i passa a ser el mapa, amb cada rol dient
com s'hi arriba.

La regla, que és la veda 120 aplicada a una altra taula:

> **Només es pot prometre un camí que el codi recorri de debò.** Per això la
> prova no llegeix `ROLE_ACCES`: reclama un node, inscriu una mentoria, registra
> una aportació i marca una fitxa, i comprova que el rol apareix.

#### El forat que el canvi va destapar

`coordinador` i `agent` **no tenien cap camí d'evidència**: només s'obtenien
escrivint-los a la casella de la fitxa, i aquella casella només es tocava a la
porta. Treure el selector sense res més els hauria deixat inabastables i ningú
ho hauria notat fins que algú els busqués. Ara s'assignen **des de la fitxa de
soci**, per qui porta el node.

I una decisió que costa d'explicar però que és la que dona sentit a la resta: al
desplegable de la fitxa **només hi ha aquests dos**. `guardian` surt de la
governança signada i `mentor` del registre de mentories, i posar-los en un
desplegable seria repartir per formulari el que es guanya deixant rastre. Un
sistema de rols on el rol més alt es tria en un `<select>` no és un sistema de
rols.

Dues coses petites que la pantalla va ensenyar en pintar-la:

- **La porta ha de sortir primera.** Ordenant els rols pel pes del rol,
  «superheroi/na» —el rol pel qual s'entra— sortia el cinquè de sis a la pantalla
  d'entrada.
- **L'etiqueta de cada rol la diu la taula, no una condicional.** «Ciutadà/na
  simpatitzant» no és una porta per on s'entra: és on ets mentre no hi ha res
  registrat, i deduir l'etiqueta del tipus feia dir-li el que no és.

I un error meu que val la pena per la seva forma: la prova del camí de mentora
deia que aquell camí no existia. El que no existia era **el meu muntatge** —
`newVenture` retorna la venture i no la desa, i `addMentor` és posicional. Segona
vegada en poques tandes que una prova acusa el codi d'un defecte propi: quan una
prova nova falla, la primera hipòtesi ha de ser la prova.

### Veda 127 — Sis menús raonables no fan una arquitectura

`comando.html` tenia nou enllaços al menú, `compra.html` sis, `vna.html` cinc,
`crm.html` tres. Cap dels sis coincidia amb cap altre, i cadascun era **una
decisió raonable presa en un moment concret**: quan es va escriure aquella
pàgina, aquells eren els llocs on tenia sentit anar.

Això no peta mai, i és exactament el problema. **Ningú pot aprendre on són les
coses si es mouen a cada pantalla.** El que a una app comercial és memòria
muscular —«el menú és aquí i l'acció principal a la dreta»— aquí era tornar a
llegir sis vegades. I una pàgina nova heretava el menú de la que s'havia copiat,
que ja era el més divergent de tots.

La sortida és la de sempre en aquest repositori: **es declara un cop i es
genera.** `tools/build-nav.js` porta l'arquitectura —quatre grups i una acció— i
l'escriu a totes les pàgines entre marques; `--check` peta al CI si alguna se'n
desvia. Afegir una pàgina al SOS passa a incloure dir on va al menú, que és
justament la decisió que abans no prenia ningú.

#### Quatre grups, i l'ordre no és alfabètic

`Comença · Eines · Aprèn · Xarxa`, i és el camí que fa la gent: primer saber on
ets, després les eines, després aprendre'n, i al final la xarxa. Quatre i no set
—un menú amb set grups es torna a llegir cada vegada, que és el que això ve a
arreglar.

#### Dues decisions d'implementació que no són òbvies

- **Sense JavaScript.** Els desplegables són `<details>`/`<summary>`, que el
  navegador ja serveix com a component accessible i amb teclat. Injectar un
  script a catorze fitxers autocontinguts seria catorze còpies d'una cosa que
  ja existeix —i el dia de tocar-la, catorze llocs.
- **Les excepcions es declaren amb el motiu.** `index.html` té la seva pròpia
  barra d'aplicació i `joc.html` és una pantalla de joc completa. Una excepció
  no escrita és un descuit que d'aquí a sis mesos ningú sabrà si era volgut.

#### El conflicte que va sortir en fer-ho

`build-vedes.js` genera `vedes.html` sencer des del codex, o sigui que escrivia
per sobre del menú i la següent passada del generador del menú el tornava a
posar: **dues guardes contradient-se, i cap de les dues equivocada.** La sortida
no va ser desactivar-ne una sinó que el generador dels vedes **apliqui el mateix
menú**, requerint-lo de `build-nav.js`. Una sola declaració, dos que la fan
servir — que és el que la regla deia des del principi.

### Veda 138 — Vuit safates és cap safata

El SOS sabia perfectament què calia fer. Ho sabia **en vuit llocs diferents**:
les missions, la safata de vistiplaus, el tauler d'atenció, els riscos, els
blocatges, les alertes de cures, els taulers de cada projecte i els forats de la
xarxa. I cap deia «això és el que et toca a tu».

Cadascuna, per si sola, era correcta. Aquest és el motiu pel qual va durar
tant: **no hi havia res a arreglar en cap de les vuit**. El defecte era la suma
—el cost de saber què has de fer era obrir vuit pantalles i recordar-les totes—
i un defecte que només existeix a la suma no el troba mai qui mira les parts.

La sortida no és afegir una novena pantalla que les resumeixi: és que la llista
**sigui** l'única, i que les vuit fonts hi desemboquin. Res es recalcula; es
normalitza el que ja hi havia.

#### Tres coses que la fan servir d'alguna cosa, i que la guarda vigila

- **Les columnes són les que ja existien.** Cada projecte té el seu tauler amb
  per fer / fent / fet. Inventar-ne unes altres a la safata comuna hauria estat
  el mateix defecte un pis més amunt: dues maneres de dir en quin punt està una
  feina.
- **Només es mou el que té estat desat.** La majoria d'aquestes tasques es
  calculen a cada pintada. Deixar arrossegar-les a «fent» escriuria un estat que
  el següent render desmentiria, i una columna que menteix és pitjor que una
  columna que no hi és.
- **Els dos eixos, i les dues direccions.** Territori i tema ja existien al codi
  i no es feien servir junts enlloc. El que faltava de debò era la direcció:
  **cap enfora ha de veure el que et conté i tu no**. Si l'àmbit s'inclogués a
  si mateix, les dues direccions dirien gairebé el mateix i el botó no serviria
  de res. La meitat de la feina d'una xarxa és cap amunt.

I una que ve de la veda 133 i es podia perdre aquí sense adonar-se'n: **portar
les alertes de cures a una pantalla comuna era la manera més fàcil de saltar-se
el permís**. Una alerta que abans només veia qui sostenia el node ara la veu
qualsevol que obri la safata, així que el nom hi passa pel mateix gate que a
`renderCures` — i qui no pot escriure al node veu el número i cap persona.

Finalment, una tasca **sense node no es filtra mai**: no és de cap territori ni
de cap tema perquè és de tothom, i amagar-la seria amagar precisament la feina
que ningú ha reclamat encara.

### Veda 157 — Una pantalla que no es pot prémer és una pantalla que no existeix

Tres defectes seguits de la mateixa família, i tots tres van sortir d'una
pregunta d'algú que volia fer servir això:

1. **`openPreparaEntregable` no la cridava cap botó.** Escrita, provada,
   inabastable. → «Donde trasteo la IA».
2. **`modal(html, botons)` ignorava el segon argument.** Sis pantalles li
   passaven una llista de botons i **cap n'ha pintat mai cap**: el contingut hi
   era, ben maquetat, i no hi havia res per prémer.
3. **`x.entregable` es llegia i no l'escrivia ningú.** La sortida que la
   pantalla proposava —«posa-li una etiqueta que ho digui»— era una porta
   pintada a la paret. → «com i on ho faig?».

Els tres tenen la mateixa forma i és la pitjor que hi ha: **el codi és
correcte, les proves passen i a la pantalla no es pot fer res.** Les proves
criden les funcions directament, així que no toquen mai el camí que fa servir
una persona.

La regla: **una funció no està feta fins que s'ha obert des d'on l'obrirà
algú.** I la seva prova tampoc: si la prova crida la funció i no clica el botó,
prova la meitat que no falla.

I el corol·lari que val per a tota sortida escrita a la interfície: **si una
pantalla diu «fes això», ha d'haver-hi un lloc on fer-ho.** Un consell que no
es pot seguir és pitjor que no dir res, perquè fa perdre l'estona buscant-lo.

## Producte i oferta

### Veda 37 — Comparar no pot ser una opinió

Qui coordina una MATRIU no pot obrir dotze pantalles per saber com va la
promoció. La vista de cohort posa **una fila per iniciativa amb les mateixes
columnes**: etapa, semàfor, preparació, backlog, hores, equity concentrada,
salut del mapa, dies sense moure's, mentores i incidències.

Dues condicions, o la taula menteix:

1. **Cap xifra és nova.** Tot surt del mateix estat que ja es podia llegir
   venture a venture. El semàfor de la taula i el de la cartera són el mateix
   càlcul; si un dia divergissin, la taula seria una segona veritat.
2. **La salut del mapa és un sol número comparable.** Reciprocitat (45),
   densitat (25), barreja tangible/intangible (15), cap rol aïllat (10) i que
   no tot passi pel nucli (5). Un mapa amb menys de dos rols o sense fluxos
   puntua zero i **ho diu**: «Mapa incomplet», no un 0% que sembli un suspens.

L'**embut** diu si la MATRIU incuba o acumula: quantes a cada estadi i quin
percentatge n'ha sortit. Vint idees i cap graduada no és una cartera, és un
calaix.

I surt en **CSV**, perquè les memòries i les justificacions de subvenció es fan
en full de càlcul, no mirant una pantalla.

### Veda 41 — Una càrrega parcial no és una càrrega correcta

`updateAtles` s'empassava els errors de cada paquet en un `catch` buit i després
deia **«L'atles ja estava al dia»**. Si tres dels cinc paquets no arribaven,
l'usuari veia exactament el mateix missatge que si tot hagués anat bé.

Callar un error de xarxa no el fa desaparèixer: fa que algú es fiï de dades que
no hi són. Ara es compten els paquets que fallen i es diu —«Atles incomplet · 3
de 5 paquets no han arribat»— i queda a `updateAtles.last` per si algú ho vol
comprovar.

I la segona meitat del mateix defecte: la càrrega **automàtica d'arrencada**
corria alhora que la manual, i totes dues fusionaven els mateixos paquets des de
dos punts diferents. D'aquí que dues càrregues seguides donessin un nombre
d'entitats diferent cada vegada (18 · 17 · 20 · 28). Amb un pany d'una sola
càrrega en vol: **17 · 17 · 17**.

La regla general: **tota operació que fusiona estat compartit ha de ser una a la
vegada**, i ha de dir la veritat sobre què ha entrat i què no.

### Veda 48 — Una versió és un canvi, no una data

Publicar una vegada és fàcil. El problema és el segon dia: has canviat coses, i
ni tu ni ningú sap què va sortir l'última vegada ni què ha canviat des de
llavors. Sense això, «torna-ho a publicar» és una acció a cegues, i qui la fa no
pot respondre la pregunta que importa —*què estic canviant del que la gent ja
té?*

Cada publicació guarda el seu **CID** i el **CID del seu pare**, i d'aquí surten
les tres coses que ho fan utilitzable: saber si el que tens ara és diferent del
que vas publicar, veure **què** ha canviat, i poder tornar enrere.

La decisió que ho fa funcionar és petita i fàcil de fer malament: **el CID no
inclou la data de generació**. Si la inclogués, construir el paquet dues vegades
seguides en donaria dues versions diferents sense haver tocat res, i l'historial
passaria a ser un registre del rellotge en comptes d'un registre dels canvis.
Per la mateixa raó, publicar contingut idèntic a l'últim **no crea cap versió
nova**: repetir el mateix amb una data diferent no és versionar, és fer soroll.

**Tornar enrere no esborra res.** Restaurar publica una versió *nova* amb el
contingut d'una d'antiga, encadenada a sobre de la que hi havia. Esborrar la
versió intermèdia seria mentir sobre el que es va publicar —i el que ja s'ha
replicat no es desfà igualment.

I una que val per a qualsevol automatisme: **l'automàtic no es salta la
comprovació**. Si `verifyNoLeak` troba una fuita, el versionat automàtic
s'atura. Un automatisme que es salta la revisió perquè «ja anirà bé» és pitjor
que no tenir-lo, perquè la fa a la teva esquena.

Finalment, l'automatisme es diu **amb el que fa i amb el que no**: estampa
versions al teu historial, **no puja res a cap servidor**. Anomenar-ho
«sincronització» quan el destí depèn de relés de tercers que encara no hi són
seria vendre el que no hi ha.

### Veda 49 — Una capacitat que no hi és s'ha de dir, no suplir a qualsevol preu

El QR ja es generava, però escanejar-lo obligava a sortir a l'app de càmera del
sistema, copiar un text llarguíssim i tornar a entrar. `BarcodeDetector` —W3C,
natiu— ho resol des de dins.

El problema: **no hi és a tot arreu**. Comprovat en aquest entorn, el Chromium
d'escriptori (Linux) no el porta; Android i ChromeOS sí. Hi havia dues sortides
fàcils i totes dues dolentes: fer veure que va i deixar l'usuari clicant un botó
mort, o encastar un descodificador de tercers de 250 KB al fitxer per cobrir un
navegador que **no és el que escaneja**.

Perquè aquí hi ha el detall que decideix: **el que escaneja és el mòbil**. El
d'escriptori és el que *ensenya* el codi. La capacitat falta exactament on no
fa falta, i per tant la resposta correcta no és suplir-la sinó **dir-ho**: la
pantalla anomena l'API que li manca, diu on sí que funciona, i deixa sempre a la
vista el camí d'enganxar el text, que no depèn de res.

La mateixa regla val per als **trackers WSS** del codi de sala: es van provar i
en aquest entorn no responen. Escriure codi de xarxa que no es pot verificar de
cap manera és pitjor que no escriure'l —queda com si estigués fet, i el dia que
falli ningú sabrà si va funcionar mai. Es queda al tram bloquejat, amb la prova
anotada, i el que sí que funciona (enganxar, enllaç, QR) segueix sent el camí.

Dues coses més que un escàner ha de fer bé i és fàcil oblidar: **apagar la
càmera** quan es tanca el modal per qualsevol via —també per fora—, i demanar
**només** el format que vol (`formats:['qr_code']`) en comptes de tots.

### Veda 62 — Una eina que només creix acaba sent inservible

El SOS ha crescut **sempre per addició** i no s'hi ha tret mai res. Cada tanda hi
posava una portada, una pestanya o una entrada de menú, i com que ningú ho
mesurava, ningú ho veia. Tres coses que es van trobar en mirar-ho de debò:

- **El mapa de Catalunya no tenia cap sortida.** S'hi entrava i s'hi quedava
  atrapat qui no sabés que el logo també hi porta.
- **Tres portades es fabricaven el mateix botó de tornada** per separat. No és
  que cinc portades competeixin: és que no hi havia **una** manera de tornar.
- **La pestanya de conversa es va afegir sense guia contextual**, incomplint la
  veda que diu que un context sense guia és un context que s'ha d'endevinar. Es
  va incomplir la mateixa tanda que es va escriure.

D'aquí surten dues regles:

**Una sola manera de tornar.** Una funció, un text, un comportament
(`homeBackBtn`). Quan cada pantalla s'inventa la seva sortida, la navegació es
parteix i qui es perd no sap per què.

**Sostres declarats, no límits tècnics.** `https://github.com/asolache/teamtowershuma/blob/main/SOS/tools/check-kiss.js` corre a cada
PR i mesura el pes gzip, que cap pestanya es quedi sense guia, que el hook de
test no tingui duplicats, i quantes portades, rutes i entrades de menú hi ha.
**No prohibeix créixer**: obliga que créixer sigui una decisió que algú pren i
escriu al commit. Aquesta fricció és tota la seva utilitat.

Va a `tools/` i no als tests de Playwright per un motiu que val la pena saber:
**els tests de Playwright no corren al CI**. El `npm test` del workflow no fa res
perquè no hi ha `package.json`, i per això el CI sortia verd comprovant només
sintaxi. Una guarda que ha de mossegar ha d'anar on de debò s'executa.

### Veda 63 — Una llista plana llarga és un calaix, i el que no és de ningú no es fa

Dues coses que la guarda de KISS va treure a la llum en comptar de debò.

**El llançador tenia 32 accions en una sola columna.** Ningú les havia comptat
mai —cada tanda n'hi posava una, i com que la llista no protesta, la llista
creixia. Trenta-dues entrades sense cap ordre no són un menú: són un calaix on
es busca amb la vista una per una, i on la trenta-dosena no la troba ningú
perquè ja s'ha desistit a la desena.

La sortida **no era treure'n**. Cadascuna serveix a algú i esborrar-ne seria
decidir per aquell algú. El que faltava era **contestar la pregunta que es fa
qui obre el llançador**, que no és «quines accions hi ha» sinó «què hi puc fer
*ara*». Set grups (jo · comunitat · govern · xarxa · proves · relat · sistema)
i un filtre per a qui ja sap què busca. La mateixa llista, i es troba.

Dues regles que la guarda comprova i no es poden saltar:

- **Cap acció sense grup.** Una entrada sense `g:` cau fora de tots els blocs i
  torna a ser el que era: una línia solta enmig d'una llista. La guarda falla si
  n'hi ha cap, perquè afegir-ne una sense pensar on va és exactament el descuit
  que ens va portar a 32.
- **Un filtre que no troba res ho ha de dir.** Un cos buit sembla una app
  trencada. Diu «cap acció», i qui filtra sap que ha filtrat massa.

**I la feina que no és de ningú.** Les missions només sabien mirar què t'espera
**a tu**: el que tens pendent, el que has de confirmar, el teu camí. Tot el que
el SOS ja diagnosticava sobre la **xarxa** —regions sense cap dinàmica, mapes de
valor amb reciprocitat sota el 50 %, rols aïllats— es calculava, es dibuixava en
un panell, i **no li tocava a ningú**. Un forat que és de tothom no és de ningú,
i per tant no es tapa mai.

Ara són missions de veritat (`MISSION_KINDS.xarxa`), amb dues condicions:

- **Cada missió ha de portar a un lloc concret.** «Falta cobertura» és una
  estadística; «Girona no té cap dinàmica viva, obre-n'hi una» és una missió.
  Sense `act`, una missió és un retret.
- **Van al final de la llista.** El que t'espera a tu passa davant del que
  espera la xarxa —altrament la llista de qui té tres confirmacions pendents
  s'omple de deures col·lectius i deixa de servir per al que servia.

### Veda 66 — Simplificar és decidir per on comences, no esborrar el que hi ha

Tothom veia el mateix: fins a 13 pestanyes al node, 32 accions al llançador, 17
rutes. Una persona que ve a apuntar tres hores al mes n'ha de fer servir sis, i
les ha de trobar entre totes les altres. La informació hi era; el que no hi
havia era **una manera de saber quina et toca a tu**.

I les peces per saber-ho ja hi eren, sense connectar: `ROLE_JOURNEYS` sap què fa
cada rol, `activeRoleId` sap quin ets ara, i cada guia contextual porta la seva
`lens`. El que faltava era que allò **decidís**, i no només ressaltés.

La temptació era treure funcions. Seria un error i ja el vam evitar a la veda
63: cadascuna serveix a algú, i esborrar-ne és decidir per aquell algú. El que
sí que es pot decidir és **per on comences**.

Tres regles, perquè simplificar no acabi sent amagar:

- **El que té contingut no s'amaga mai.** Si hi ha apunts, socis o objectes a
  dins, la pestanya hi és encara que el teu rol no la necessiti. Amagar feina
  que algú ja ha fet no és simplificar: és fer-la desaparèixer. El comptador que
  ja es pintava a cada pestanya és exactament el senyal que calia, i no va caldre
  calcular res de nou.
- **La pestanya on ets no desapareix sota els peus.**
- **El que s'amaga es diu i es desamaga des del mateix lloc.** «▸ 3 més», al
  costat de les altres. Una pestanya que marxa en silenci és una decisió que
  l'app t'ha pres a l'esquena, i qui se n'adona deixa de refiar-se de la resta
  de la pantalla.

I una salvaguarda que val per a tot filtre: **si el filtre deixaria la llista
buida, no es filtra**. Val més ensenyar-ho tot que ensenyar el no-res.

### Veda 74 — El proper pas surt del que hi ha, no del que falta per estrenar

Quan no hi havia res que reclamés atenció, «els teus propers passos» eren tres
«Prova: …» — la llista de capacitats que encara no havies tocat. És un ganxo de
completista, i el completista no és qui tenim al davant.

A un banc de temps amb cinc socis i cap apunt, el proper pas no és «Prova:
MATRIU · incubar»: és **registrar les primeres hores**. El buit que es nota és
el que el SOS ja sap veure —socis sense cap apunt, un node sense ningú— i mirava
just per sobre.

L'ordre correcte és: el que reclama atenció, després el buit que es nota, i
només al final provar coses noves. Provar coses noves és l'última prioritat de
qui ha vingut a fer una feina concreta.

El ganxo de completar no s'ha tret —enganxa, i això és cert—: s'ha plegat a una
línia amb la barra. Era **la secció més gran de la pantalla**: deu targetes de
deures a algú que havia vingut a apuntar hores.

I una que val per a qualsevol pantalla: **una secció buida no ocupa lloc**. Un
títol seguit de «res reclama atenció» és una secció sencera per dir que no n'hi
ha cap, i empeny cap avall les que sí que en tenen.

### Veda 87 — Detectar sense oferir res és fer de termòmetre

El SOS sabia dir que una iniciativa feia seixanta dies que no es movia, i el que
oferia en clicar-hi era **obrir la fitxa de la iniciativa aturada**: tornar a
ensenyar el problema. Dir la temperatura no és baixar-la, i un tauler que t'avisa
cada dia del mateix sense donar-te res a fer s'aprèn a ignorar molt de pressa.
El senyal no es perd de cop: es gasta.

La Bomba Disco no afegeix cap detecció. Afegeix les **tres jugades** que ja es
podien treure del que el SOS sap, i que ningú havia tret:

- **Qui hi era i ja no hi és** — gent que havia aportat i fa temps que no. Es
  mira per persona, no pel node: un node pot estar viu i tenir gent despenjant-se
  a dins, i aquest és justament el cas que no es veu fins que ja no hi ha ningú.
- **La coincidència que ningú ha fet servir** — una oferta i una demanda que
  casen i on no ha passat mai res entre les dues persones. Quan l'intercanvi es
  registra, deixa de sortir: el que ja s'ha fet no es torna a proposar.
- **El veí que té el que aquí falta** — un node del costat que ofereix la
  categoria que aquí es demana i no es cobreix. El veïnatge surt dels temes
  compartits, que és la federació que la gent ja ha declarat, no d'una
  proximitat que ens inventem nosaltres.

I tres regles que decideixen com es fa:

- **Quan no hi ha jugades, no se n'inventa cap.** Es diu el motiu, i el motiu és
  el valor: «encara no hi ha ningú», «no hi ha res ofert», «no hi ha cap
  moviment fàcil pendent». Saber que un node està aturat i que no hi ha res
  barat a fer és una informació diferent de no saber res —i un tauler que sempre
  té alguna cosa a dir acaba dient qualsevol cosa.
- **Cada jugada és una acció, no un consell.** «Reforça la teva comunitat» no és
  una jugada. Obrir el formulari on es registra l'intercanvi, sí. Cap targeta
  sense botó.
- **Qui ha deixat d'aparèixer només ho veu qui sosté el node.** Una llista de qui
  s'ha despenjat és informació delicada sobre persones concretes, no una
  estadística. Qui no pot escriure al node no la veu, i se li diu per què en
  comptes de deixar-li un forat sense explicació.

### Veda 107 — Un mètode que només s'entén de dins no és un mètode: és un gremi

La portada explicava el que fem amb el vocabulari amb què ho pensem: «Value
Network Analysis», «local-first», «Slicing Pie», «tauler àgils», «capacitat
instal·lada», «Social Operating System». Cap d'aquestes paraules és falsa. Totes
són il·legibles per a qui les ha de llegir —una regidora, un tècnic de promoció
econòmica, la junta d'un ateneu—, i el titular en deia «comunitats antifràgils,
comptables i verificables», que són tres adjectius abstractes seguits.

La regla que en surt, i que val per a tota pantalla d'aquesta casa:

**Primer el que és, després com es diu.** La descripció plana encapçala; el nom
tècnic va una sola vegada, entre parèntesis, i només allà on afegeix crèdit a qui
sí que el reconeixerà. «El mapa de qui es passa què amb qui» primer; «el mètode
que en diuen VNA» després. Al revés, la persona ha d'aprendre el nom abans de
saber per a què serveix, i abandona pel camí.

I el corol·lari, que és el que fa que no torni: **si una paraula cal, s'explica a
la mateixa pàgina i abans de fer-la servir.** El glossari va davant de la secció
que la introdueix, no al peu —un glossari que arriba després del text que
l'exigia arriba quan ja s'ha decidit que allò no s'entén.

Tres coses més que la revisió va deixar escrites:

- **La guia d'estil ja ho deia i no ho comprovava ningú.** L'estructura d'una
  pàgina de venda hi és des del principi —dolor, promesa, com, prova, oferta,
  crida, objeccions— i en faltaven dos blocs sencers: el **com** i les
  **objeccions**. El preu és que les cinc preguntes que decideixen si algú truca
  es quedaven per a la primera reunió, que és tard.
- **Una cita inventada, retolada com a inventada, resta.** Al lloc de més
  conversió hi havia una frase entre cometes amb el peu «el que un tècnic *pot*
  dir». Dir el que no tenim —«aquest servei és nou i encara no en tenim
  testimonis»— genera més confiança que una prova que reconeix ser hipotètica.
- **El que no fem s'escriu.** No garantim participació, no gestionem el projecte
  per ningú i no dinamitzem res sense tres persones que ho sostinguin. Això no
  espanta clients: filtra els que haurien acabat malament.

### Veda 140 — «A mida» sense el mètode és «consulta'ns»

Deixar de publicar un preu és una decisió legítima quan el que costa una cosa
depèn de coses que la pàgina no pot saber. El que no és legítim és que això
acabi sent el «consulta'ns» de sempre, que obliga a trucar per saber si t'ho
pots ni plantejar i que fa que la meitat dels que trucarien no ho facin.

La sortida és que **cada paquet sense xifra porti al mètode amb què es
calcula**, i que el mètode sigui a la pàgina sencer: els passos, l'escala de
preus hora i què hi entra com a despesa directa. Amb això, qui llegeix pot fer
el càlcul pel seu compte abans de trucar; sense això, el preu només el sap qui
truca, i qui no truca no el sabrà mai.

Per això la guarda de la portada exigeix les dues coses alhora: que cap fitxa
«a mida» es quedi muda, i que la secció on porten existeixi de debò amb els seus
passos i els seus nivells. Un enllaç a una àncora que no hi és no dona cap
error: baixa la pàgina fins al final i qui hi clica es pensa que s'ha equivocat.

### Veda 141 — El que decideix un preu es pregunta, no s'endevina

El formulari de pressupost podria haver calculat un import per al taller de
castells: hi ha trams per nombre de participants i seria fàcil. No ho fa, i
val la pena dir per què, perquè la temptació tornarà.

El que costa un taller depèn de **quanta gent hi ha, quanta colla cal moure i a
quina distància**. Les tres coses les sap el client i no la pàgina. Un formulari
que en calculés un total hauria d'endevinar-les, i el que en sortiria és una
xifra amb aparença de càlcul que després s'ha de desdir — que és pitjor que no
donar-ne cap, perquè el client ja l'ha portada a una junta.

El que sí que ha de fer el formulari és **preguntar-les** i dir clarament que
aquell paquet es pressuposta a part. La proposta esborrany en surt honesta: suma
el que té forquilla publicada, deixa fora el que no en té dient-ho pel seu nom,
i explica el mètode amb què es tancarà.

### Veda 146 — Sis peces bones que no es diuen entre elles no són un projecte

El Comando existia sis vegades. La història dels còmics, a la seva pàgina. Els
catorze personatges, dins de l'app en una constant. El perfil de superheroi/na,
en un modal. El kit narratiu amb IA, en un altre. El multivers, en un tercer. I
el poble on tot allò passa, en una pàgina a part. **Cada peça estava ben feta i
cap deia que les altres existissin.**

El que faltava no era una peça més: era **dir què és tot plegat**. Una
pel·lícula col·laborativa que faran 150.000 persones, on el teu personatge no
és un avatar inventat sinó el que ja fas amb nom i superarma. Amb aquesta frase
al davant, les sis peces deixen de ser sis coses i passen a ser quatre passos
seguits i un decorat.

Això no peta mai, i per això costa tant de veure: cada peça, provada per
separat, funciona. El senyal de què està passant és **que ningú no arriba a la
segona**. La guarda comprova ara que els quatre mòduls s'obrin des de la pàgina
pel seu nom de ruta, perquè el dia que un canviï de nom l'enllaç no petarà:
obrirà l'aplicació per la portada i semblarà que no ha passat res.

I dues regles que van sortir de fer-ho:

- **El que encara no està filmat es diu, i no es pinta com una porta.** De les
  sis peces de vídeo i so declarades, cinc encara no tenen enllaç. Surten a la
  pàgina dient exactament això. La temptació era enllaçar-hi el canal de YouTube
  «mentrestant»: qui hi clica no troba el que anava a veure i deixa de fer cas
  de la resta de targetes. Un inventari honest val més que una promesa (veda 116).
- **Una xifra que la pàgina presenta com a dada surt del codi que la fa servir.**
  L'objectiu de gent és a `COMANDO_TARGET` i el nombre d'herois és el llarg de
  `CANONICAL_HEROES`; escrits a mà, el comptador ja va arribar a dir vuit herois
  quan n'hi havia nou. Comprovar que «la xifra surt a la pàgina» no n'hi ha
  prou: surt tres vegades, i canviar-ne dues hauria passat la guarda.

## Mapa de valor

### Veda 116 — Un graf bonic no és una anàlisi, i cinc portes iguals no són cap porta

Dues coses d'aquesta tanda i la mateixa idea a sota: **ensenyar una cosa no és
explicar-la**.

#### El mapa de valor

La portada tenia des de feia temps la colla castellera amb els dotze rols i el
que aporta cadascun, tangible i intangible. Bonic, i mut: un diagrama amb
etiquetes no diu què se'n fa. `https://github.com/asolache/teamtowershuma/blob/main/SOS/vna.html` ho fa en vuit passos —els cossos es
tornen rols, apareix el que es veu, després el que no, es compten, i es fan les
tres preguntes de Verna Allee— i acaba on ha d'acabar: **el mateix graf amb els
noms d'un poble**.

Tres regles que el separen d'un pòster:

- **Qui només dona es calcula, no s'assenyala.** El pas de l'anàlisi d'intercanvi
  marca els rols amb fletxes de sortida i cap d'entrada llegint el graf. Una
  llista escrita a mà seguiria assenyalant els d'abans el dia que les fletxes
  canviïn, i ningú ho notaria. La prova ho comprova afegint un lliurament i
  mirant que el resultat canviï.
- **Treure un node té un cost comptat.** «Traieu els Músics» només ensenya alguna
  cosa si el número de lliuraments perduts surt del graf.
- **Cap fletxa inventada.** Cadascuna porta escrit de quina frase de quina fitxa
  surt. Que els Músics enviïn als Baixos no és una idea meva: ho diu la seva
  fitxa —«la melodia assenyala la fase exacta de l'Enxaneta als Baixos».

I la còpia: els dotze rols viuen a la portada **i** a la pàgina del mapa, perquè
cada pàgina ha de funcionar sola. Dues còpies deliberades divergeixen en silenci
—és el que va costar la veda 109— així que `tools/check-vna.js` les compara
paraula per paraula.

#### Cinc portes iguals

`/sos/comando` tenia cinc crides a l'acció al capdamunt, totes amb la mateixa
forma i cap dient què passava en clicar-les. **Cinc portes iguals és cap porta**:
es tria la que sona millor, i la meitat de la gent no troba el que buscava.

Ara el hero en té dues i just a sota hi ha una secció on cada porta diu **què és,
quant dura i què te'n treuràs**, en l'ordre en què tenen sentit —la intro de 90
segons destacada, i després el joc, el mapa de valor, el cromo, l'aula i el
directori. La durada hi és perquè és la primera pregunta que es fa qui hi
arriba, i no la responia cap.

### Veda 120 — Un rol només pot demanar el que el mapa diu que lliura

Els mapes de valor eren correctes i eren d'algú altre. El que frena la gent
davant d'un no sol ser la mandra: és **no saber on encaixa**. Ara totes les
pàgines amb mapa —`https://github.com/asolache/teamtowershuma/blob/main/SOS/vna.html` i `https://github.com/asolache/teamtowershuma/blob/main/SOS/compra.html`— deixen declarar què hi pots
posar i et proposen el rol; a la colla apareixes amb un anell i la paraula «tu»,
i al grup de consum el rol que agafes queda omplert i els seus lliuraments passen
a comptar com a vius. Aquest és el cercle sencer: **perfil → rol → lliuraments**.

La regla que ho separa d'un test de personalitat, i que és tota la veda:

> Un rol només pot demanar a una persona **allò que el mapa diu que aquell rol
> lliura**. Cada demanda porta `per`, que és una cita literal de la fitxa del rol
> —un lliurament seu al grup de consum, la seva lectura de poble a la colla—, i
> `https://github.com/asolache/teamtowershuma/blob/main/SOS/tools/check-perfil.js` comprova que la cita hi sigui de debò.

Sense això, «aquest rol demana ordre» és una opinió meva escrita amb lletra
d'eina. Amb això, la pantalla pot dir-li a algú *per què* li proposa allò, i qui
ho llegeix pot discutir-ho amb el mapa a la mà.

De la mateixa peça:

- **El perfil són capacitats, no identitat.** Deu caselles del que pots posar-hi
  —temps, ordre, un espai, un ofici, contactes, veu…— i cap camp de nom, correu
  o edat. Una eina que per proposar-te un rol et demana qui ets, ha canviat de
  negoci sense avisar.
- **Es declara un cop i val a tot arreu.** Mateixa clau a totes les pàgines: qui
  l'ha omplert a la colla castellera el porta posat al grup de consum. Per això
  el bloc és **caràcter a caràcter el mateix** i la guarda el compara: amb una
  llista curta en una pàgina, dues persones amb el mateix perfil rebrien
  propostes diferents i no petaria res.
- **Proposa, no assigna.** L'ordre és una recomanació, el rol s'agafa i es deixa
  prement el mateix botó, i agafar-ne un allibera l'anterior —no es fan dues
  persones d'una.
- **Quan no encaixes, ho diu.** Si cap rol es cobreix del tot, la pantalla no
  arrodoneix: diu què et faltaria «o algú que ho porti», que és exactament per a
  què serveix un mapa de valor.

#### I a l'app, on els rols els dibuixa la gent

`https://github.com/asolache/teamtowershuma/blob/main/SOS/index.html` també deixa associar una persona a cada rol del mapa. Hi ha una
diferència que canvia el disseny: a les altres dues pàgines els rols són fixos i
el que demanen ve escrit amb una cita del mapa; **aquí els rols els dibuixa la
gent**, i per tant el que demana cada rol també l'ha de dir la gent. El que fa el
formulari és posar-li al davant **què lliura aquell rol segons el mapa**, que és
l'única cosa que legitima demanar-li res a ningú — la mateixa regla, aplicada on
no es pot escriure per endavant.

El que sí que és igual, i la guarda ho compara: el vocabulari, els pesos i la
clau. Una persona no pot rebre propostes diferents segons per quina pantalla hi
entri.

Dues coses que només tenen sentit a l'app:

- **Assigna per defecte.** Omple d'un cop els rols buits, i **no toca els que
  algú ja ha triat a mà**: una proposta no pot desfer una decisió.
- **Concentrar rols es penalitza i es diu.** Cada rol que algú ja porta li baixa
  la puntuació per al següent, i la pantalla avisa de qui en porta més d'un.
  Portar-ne tres no és eficiència: és exactament el que aquest mètode serveix
  per veure abans que passi, i seria absurd que l'eina hi empenyés.

Dos defectes que va trobar posar-ho a prova, i que valen més que la funció:

- **La puntuació premiava rols exigents que no cobries.** El terme de «com
  d'exigent és el rol» anava sumat, així que amb el perfil buit sortia un
  rànquing sencer que no volia dir res. Ara va multiplicat per la cobertura: si
  no cobreixes res, no puntues res.
- **La guarda es queixava d'unes dades correctes.** Aplanava els rols per nom, i
  «Coordinació» existeix a les dues dinàmiques amb lliuraments diferents: el
  motiu d'una es comprovava contra els lliuraments de l'altra. La clau ha de ser
  el mapa **més** el rol. Una guarda que crida per un problema seu gasta la
  confiança que necessitarà el dia que cridi per un de bo.
- **Comparar text no distingeix codi de comentari.** El bloc es va enganxar a
  l'app sota un comentari que no vaig tancar: les tres pàgines el tenien
  «idèntic», la guarda donava verd, i a l'app no hi havia ni `APORTS`. Ho va
  trobar la prova de navegador, que és el lloc car de trobar-ho. Ara la guarda
  mira enrere des de la declaració i comprova que no quedi dins d'un comentari.
  El primer intent d'aquesta comprovació —«que comenci a principi de línia»— no
  detectava el mateix error que la va motivar, i el segon es va tallar sol
  perquè el comentari que l'explicava contenia els dos caràcters del tancament.
  Tres vegades el mateix, i és el motiu pel qual **una guarda nova s'ha de
  provar trencant expressament allò que ha de trobar**, no llegint-la.

## El cervell

### Veda 160 — Sempre hi ha un backlog, i el flux de la creativitat acaba en vedes

**Dit per l'Àlvar el 09/10/2026:** «Sempre hi ha un backlog» i «el flux de valor
de la creativitat de Shakti té les vedes».

Una petició és energia creativa —Shakti, la Kriya del panteó, la rauxa de la
veda 16— i l'energia que no s'escriu enlloc es perd. Per això **cap petició es
queda en una conversa**: abans de fer-la, o si no es fa ara, entra al backlog
(`knowledge/dev/backlog.md`) amb qui la va demanar, quan, què es demana i com es
tancarà. Una idea dita en un fil i no anotada és una idea que la sessió següent
no sabrà que existeix.

I el flux no s'acaba quan la feina està feta. Té quatre passos i un lliurament
al final:

1. **La petició**, tal com la diu qui la fa.
2. **El backlog**, on queda escrita, prioritzada i amb el criteri per tancar-la.
3. **La feina**, que es tanca amb el que s'ha mesurat, no amb un «fet».
4. **La veda**, quan la feina ha ensenyat alguna cosa que val per a la propera
   vegada.

La veda és l'intangible que la creativitat retorna a la casa: el que s'ha après
fent, escrit perquè ningú l'hagi de tornar a aprendre (veda 15, el codex com a
font viva). Una onada de feina que no deixa cap veda no és dolenta; una que
n'havia de deixar i no la deixa obliga a repetir el mateix error.

- Tot autocontingut a `https://github.com/asolache/teamtowershuma/blob/main/SOS/index.html` per defecte.
- `https://github.com/asolache/teamtowershuma/blob/main/SOS/prompts/*.md` guarda els prompts versionats de cada intent d'IA.
- `https://github.com/asolache/teamtowershuma/blob/main/SOS/knowledge/references/*.md` guarda notes curtes de referents (Verna Allee, Ostrom, Boal, Penrose, X-Men, Mondragón, Pantheon.work…).
- `https://github.com/asolache/teamtowershuma/blob/main/SOS/knowledge/vision/*.md` guarda decisions d'arquitectura vives.

### Veda 161 — El cervell es comprova, i n'hi ha un per a tots

**Dit per l'Àlvar el 09/10/2026:** «que el model de cervell del projecte sigui
reutilitzable» i «que el que aprenguem ara ho reutilitzem i passi a les vedes,
al blog i al servei».

El cervell d'un projecte és el que una IA llegeix abans d'escriure-hi: la
taxonomia, el mapa, el codex, el contracte i el backlog. Dues coses el fan
cervell i no documentació:

1. **Es comprova.** Tot el que els fitxers de lectura citen ha d'existir, i el
   que diuen que no hi és no hi ha de ser. El contracte de la IA ja havia
   mentit una vegada (els 18 vedes quan n'hi havia 116) i ho va arreglar una
   revisió a mà; ara ho vigila `https://github.com/asolache/teamtowershuma/blob/main/SOS/tools/cervell.js` al CI. El primer dia va
   trobar la taxonomia citant un fitxer que encara no existia.
2. **N'hi ha un.** L'eina i la plantilla són les mateixes per a TeamTowers i per
   a cada client (`https://github.com/asolache/teamtowershuma/blob/main/SOS/knowledge/cervell/`). El que canvia és `cervell.json`.
   Una millora que neix en un projecte client torna aquí, i des d'aquí arriba a
   tots; dues còpies del model divergirien en silenci (veda 71).

El que s'aprèn en un cervell segueix el flux de la veda 160 fins al final: un
error real al contracte del projecte, una veda aquí si val per a tots, una
comprovació nova a l'eina si es pot comprovar, un article al blog i la versió
nova del cervell al seguiment del client. El cervell és el valor afegit del
servei: el client s'emporta un projecte que avisa sol quan el que diu deixa de
ser cert.
