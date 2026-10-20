# Backlog

La fuente de verdad del desarrollo. Cada bloque dice **quién lo pidió, cuándo,
qué se pide y cómo se cierra**. Cada PR fusionado se cierra aquí con lo medido.

## Pendiente

### El CI comprueba que el cerebro está al día (pedido 2026-10-17)

**Pedido por:** Álvaro, al integrar el codex. **Qué:** que `cerebro-datos.js`
no se quede viejo cuando cambia el codex de TeamTowers (veda 4).
**Cómo se cierra:** un paso de CI que regenera con `cerebro-codex.mjs` y falla
si sale distinto.

### Lo que viene en la página (pedido 2026-10-16)

**Pedido por:** Álvaro. **Qué:** enlaces a las noticias de los premios y de la
prensa, audios para el tramo biográfico, mapas mentales por nodo y el avatar
con su voz. **Cómo se cierra:** cada enlace apunta a una fuente que existe y
cada audio suena en su nodo.

### La IA a la vista en los demás repositorios (pedido 2026-10-17)

**Pedido por:** Álvaro: «quiero que en mis proyectos la IA se integre y se
muestre que lo hacemos con transparencia». **Qué:** llevar la veda 6 a los
otros proyectos y, si vale para todos, subirla a la matriz con `--recull`.
Una guarda que compruebe que cada página enlaza `ia.html`.
**Cómo se cierra:** cada web del proyecto tiene su «Cómo uso la IA» leyendo
su propio historial. **Avance:** la veda subió a la matriz como 167, el
contador es común (`teamtowershuma.com/js/ia-a-la-vista.js`) y molekulon.org
tiene `/ia`.

## Hecho

### La barra de la portada, legendaria (pedido 2026-10-17)

**Pedido por:** Álvaro: «¿puede ser que no enlace desde la home? Revisa la home,
la navbar y hazla legendaria». **Causa:** la barra no enlazaba el cerebro; solo
salía en Recursos y en el ikigai. **Hecho:** un botón «Cerebro» siempre visible,
del móvil al escritorio; un panel «Todo/Menú» con cuatro grupos (mi vida,
mi trabajo, mis herramientas y la red, con El teu cervell y la agenda y el Club
2027 de Events Penedès); la barra marca la sección en la que estás y el panel
se cierra con Escape o tocando fuera. Sin scroll horizontal a 390 px.

### El cerebro, motor de cada persona (pedido 2026-10-17)

**Pedido por:** Álvaro: «Y esto para cada persona», «exportable a LMS local» y
«como motor de cada persona con las IAs». **Hecho:** el motor (lector del
codex, fuerzas, 3D, vista y exportación) vive en la matriz, en SOS/cervell de
TeamTowers Humà, y esta web lo carga de allí en lugar de copiarlo (veda 5).
La matriz publica «El teu cervell», que dibuja el codex de cualquier repo
público o de un codex.md subido. Desde allí y desde `cerebro.html` el cerebro
se lleva como cerebro.md (contexto para las IA), JSON, HTML sin conexión y
paquete SCORM 1.2 para un LMS local. Solo lo público: la capa privada no entra
en ningún fichero. **Medido:** sin errores de consola, sin scroll lateral a
390 px, el HTML se abre sin red y el zip SCORM es válido.

### El cerebro en tres dimensiones, por koshas (pedido 2026-10-17)

**Pedido por:** Álvaro: «vista del cerebro tridimensional por koshas y las
fuerzas gravitacionales y cuánticas… el SVG actual puede ser la castellera con
3 [pisos] donde se integran las 5», y «pinya, tronc, pom de dalt».
**Hecho:** `cerebro.html` 0.4 con cuatro vistas: tres dimensiones (cada kosha
una esfera, el propósito en el centro), castellera (pinya = annamaya y
pranamaya, tronc = manomaya y vijnanamaya, pom de dalt = anandamaya), cinco
capas y en movimiento. Las fuerzas salen del motor de la matriz, que se
calcula del codex sin cifras inventadas: masa (citas), enlaces cuánticos
(saberes y vecinos en común entre koshas distintas), disparo y potencial, y la
optimización (citas que faltan, vedas sueltas, si la castellera aguanta). El
3D es un lienzo propio, sin librerías ni CDN. **Medido:** sin errores de
consola, sin scroll lateral a 390 px.

### El ikigai y el cerebro evolucionan (pedido 2026-10-17)

**Pedido por:** Álvaro: «Evoluciona mi ikigai y cortex y merge». **Hecho:** el
ikigai suma la naturaleza, la música, sus maestros, el payaso, el codex y la IA
que se declara; cada círculo dice su eje de la trinidad y el centro cuenta las
vedas nacidas aquí y el sprint en marcha. El cerebro pasa a la 0.3 con «Mis
vedas» y suma las vedas 8 (lo que él quita no vuelve) y 9 (las tareas en un
solo sitio), con lo que enseñan en `sintesis.json`.

### La trinidad y el sprint (pedido 2026-10-17)

**Pedido por:** Álvaro: «quita esos colores de fondo e integra los mismos en la
paleta trinidad Brahma, Vishnu, Shiva… Dale estilo de mis apps para ir creando
mi sprint». **Hecho:** fuera los fondos de noche de la cabecera, el payaso y el
arte; sus colores pasan a `--brahma`, `--vishnu` y `--shiva` en `red.css`, con
una barra de tres colores bajo la navegación. Nueva sección «Sprint» con el
tablero del SOS (Por hacer, En marcha, Hecho) leído de `sprint-datos.js`, con
filtro «Lo que me toca». Imagen para compartir rehecha en papel.
**Medido:** sin errores, la navegación cabe a 1280 px y no hay scroll lateral a
390 px.

### El diseño de la red (pedido 2026-10-17)

**Pedido por:** Álvaro: «Revisa diseño del site para integrar look and feel de
toda la red». **Hecho:** `red.css` con la piel de TeamTowers leída de la matriz
(veda 7), en la portada, el cerebro y «Cómo uso la IA»; Space Grotesk como
letra de texto, igual que la red (fuera Inter); botones de 44 px y radio 10 como
los de la matriz; el pie «La red» con los cinco sitios. Fuera el modo oscuro de
estas páginas: la red es clara y el escenario de noche se queda.
**Medido:** sin errores de consola, sin scroll lateral a 390 px,
`pell.mjs --check` en verde. **Después (mismo día, pedido por Álvaro):** `cv.html`, `valor.html`, `coops.html`,
`equipos.html` y `events.html` también enlazan `red.css`: sus colores fijos pasan
a tokens de la piel, los degradados a azul liso y todas llevan el pie «La red».
La tabla de `coops.html` ya no desborda a 390 px. **Queda:** las páginas de
Nicepage (`Acerca-de.html`, `Página-1.html`…) y revisar las cifras del CV.

### El linaje, contado por él (pedido 2026-10-17)

**Pedido por:** Álvaro: «En mi linaje quita Codorníu y los avis…».
**Hecho:** fuera Codorníu y «Montaña y agua»; entran los abuelitos (el modisto
y la mamita, bisabuelos), los litos (abuelos paternos), sus dos hermanas,
Swami Tilak a los 6 años y Amma a los 20, la naturaleza, la música y el arte
en León. Lo mismo en el recorrido y en el mapa vivo, sin nombres propios que
él no haya dado. **Medido:** sin errores de consola, ninguna relación rota
en `mapa-datos.js`, sin scroll lateral a 390 px.

### La home a su altura y el camino del payaso (pedido 2026-10-17)

**Pedido por:** Álvaro: «Audita la home y mejórala y merge que esté a mi
altura. El camino del payaso». **Hecho:** datos de vida al día (Cal Segué en
lugar de La Floresta, comunitats.org sin nombrar a nadie), sección «El camino
del payaso» con nodo propio en el mapa vivo, menú en móvil, imagen para
compartir (`images/og.png`, antes apuntaba a un fichero que no existía) y el
ikigai accesible con teclado y lector. **Medido:** sin errores de consola y
sin scroll lateral a 390 px. El texto del payaso es un primer trazo: se
reescribe con sus audios.

### Cómo uso la IA (pedido 2026-10-17)

**Pedido por:** Álvaro. **Hecho:** `ia.html` con el compromiso, qué hace la IA
y qué hace él, los commits firmados con Claude leídos del historial y las vedas
heredadas que la sujetan; veda propia 6.

### El codex integrado: esta web tiene cerebro (pedido 2026-10-17)

**Pedido por:** Álvaro: «Estoy haciendo tu cerebro #codex. Intégralo y
evoluciónate y merge», y «Sé DRY». **Hecho:** cerebro instalado con
`cervell.js --nou` (58 vedas heredadas), vedas propias 4 y 5, guarda en CI y el
cerebro de la web leyendo también el codex propio.

### Mi historia en internet y el libro de memorias (pedido 2026-10-19)

**Pedido por:** Álvaro: «Te han pasado info para conocerme más y actualizar el
cerebro», con sus notas «Mi historia en internet» y la idea de unas memorias
como un libro de «Elige tu propia aventura», privadas con una parte pública.
**Hecho:** siete nodos nuevos en el mapa vivo (radioenlace de 1994, HTML, Usenet
en HP, encuestas en InfoJobs, el wiki de incidencias, BBS y P2P, «Todo es un
link»), el saber de web 3.0 ampliado y una respuesta del avatar. Lo que nombra
a terceros o afirma un logro sin fuente se queda en el borrador privado de las
memorias, fuera de la web. **Medido:** ningún `rel` roto en `mapa-datos.js`.

### Hitos públicos con fuente (pedido 2026-10-20)

**Pedido por:** Álvaro: «Los hitos más relevantes que sean públicos, puedes
analizar de ponerlos públicos». **Hecho:** búsqueda de fuentes; pasan a la web
los inicios en InfoJobs (León en red, 2011) y Grow in Barcelona con su noticia
(iymagazine, 2014). Emprendedor XXI y Antena 3 siguen sin fuente encontrada.
**Medido:** cada enlace nuevo abre y nombra el hecho que respalda.

### Los avis y mis hijos en el linaje (pedido 2026-10-20)

**Pedido por:** Álvaro: «En linaje faltan los abuelos… los avis» y «falta los
hijos, las tres hijas y un hijo, empezando en el 97». **Hecho:** «Los avis» y
«Mis hijos» en el linaje y en el mapa vivo, sin nombres; el recorrido pasa de
«c. 1996» a «1997 – 2007». **Medido:** sin `rel` rotos ni errores de consola.

### Los litos, contados por mí (pedido 2026-10-20)

**Pedido por:** Álvaro, con sus recuerdos de los litos y de los avis. **Hecho:** sus nombres
(Fernando Solache y Josefina Sánchez; Mercedes Raventós Blanc y Pedro Rodríguez Marià), de dónde y cómo
eran, en el linaje y en el mapa vivo; el detalle va al capítulo «Linaje» de las
memorias. **Medido:** sin errores de consola.

### Mi padre y mi madre, contados por mí (pedido 2026-10-20)

**Pedido por:** Álvaro. **Hecho:** mi padre, Fernando Solache (ESADE, las
multinacionales, la masía, la fotografía, el campo, su biblioteca y los libros
que me dio), distinguido del lito; mi madre, el amor incondicional y el seva.
**Medido:** sin errores de consola.
