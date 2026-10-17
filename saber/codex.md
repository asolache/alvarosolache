# Codex · las vedas

Cada veda es un error que ya se cometió, escrito para que nadie tenga que
volver a aprenderlo. No es estilo: es ley. Una veda nueva entra con **quién la
dijo, cuándo, el error que evita y la guarda que la vigila** (`../guardas/`).

Aquí van **las vedas propias** de este proyecto. Además, el proyecto hereda las
de TeamTowers que valen para cualquiera (`vedas-heredadas.md`): no se editan
aquí, llegan con cada actualización del cerebro. Si una veda propia resulta
valer para todos, se propone a TeamTowers y vuelve heredada.

## Veda 1 — Siempre hay un backlog

Ninguna petición se queda en una conversación. Antes de hacerla, o si no se
hace ahora, entra en `backlog.md` con quién la pidió, cuándo, qué se pide y
cómo se cerrará. El flujo tiene cuatro pasos: la petición, el backlog, el
trabajo (que se cierra con lo medido, no con un «hecho») y la veda, cuando el
trabajo enseñó algo que vale para la próxima vez.

## Veda 2 — Un mapa falso es peor que ningún mapa

Lo que caduca no se escribe a mano: se genera o se comprueba. `MAPA.md` sale
del árbol; lo que este cerebro cita entre comillas invertidas tiene que
existir, y la guarda `cervell.js` falla si no.

## Veda 3 — Lo que no se sabe va a `null`

No se estima. Un dato inventado acaba delante de un cliente con la cara de
saberlo.

## Veda 4 — El cerebro de la web lee el codex, no lo copia

**Dicho por Álvaro el 17/10/2026** al pedir el cerebro como grafo (PR #5).
`cerebro-datos.js` lo escribe `herramientas/cerebro-codex.mjs` leyendo el codex
de cada fuente; no se edita a mano. Lo único que se escribe a mano son las capas
fijadas (`capas.json`) y lo que enseña cada veda (`sintesis.json`). Si el codex
cambia, se vuelve a generar. Es la veda 71 de TeamTowers aplicada a esta web:
una copia a mano diverge en silencio.

**Guarda:** el generador para si una veda trae un saber que no está en la lista.
Que el CI compruebe que `cerebro-datos.js` está al día queda en el backlog.

## Veda 5 — Esta web es hija de la matriz: lo heredado no se repite

**Dicho por Álvaro el 17/10/2026:** «Estoy haciendo tu cerebro #codex.
Intégralo y evoluciónate» y «Sé DRY». El cerebro de este proyecto es el de
TeamTowers, instalado con `cervell.js --nou` y puesto al día con
`--actualitza`. Una regla que ya está en `vedas-heredadas.md` se cita, no se
reescribe: por ejemplo, «una cifra sin fuente no se publica» es la veda 67
heredada. Aquí solo entran las vedas que nacen de esta web, y las que valgan
para todos suben a la matriz con `cervell.js --recull`.

**Guarda:** `guardas/cervell.js --check` en CI. Y el cerebro de la web no
muestra las vedas de la plantilla (1 a 3) como propias: ya están en la matriz.

## Veda 6 — La IA se declara, y lo que gasta se elige

**Dicho por Álvaro el 17/10/2026.** Nació aquí y subió a la matriz: hoy es la
veda 167 heredada (`vedas-heredadas.md`), y por la veda 5 aquí solo se cita.
Lo propio de esta web es `ia.html`, que usa el contador común de TeamTowers.

## Veda 7 — La piel es la de la red

**Dicho por Álvaro el 17/10/2026:** «Revisa el diseño del site para integrar el
look and feel de toda la red». La paleta (papel, tinta, bordes y acentos con
contraste AA medido) la declara TeamTowers una vez en
SOS/tools/build-pell.js, en el repositorio teamtowershuma. Aquí no se copia: la escribe
`herramientas/pell.mjs` en `red.css` entre las marcas `TT-PELL`, y las páginas
nuevas enlazan `red.css` en vez de declarar su propio `--bg`. Lo propio de esta
web (los colores de su dharma, que desde el PR #16 son la trinidad `--brahma`,
`--vishnu` y `--shiva` sobre el papel, y Unbounded y Fraunces) va encima, no en lugar de la piel. Es la veda 5 aplicada al diseño.

**Guarda:** `node herramientas/pell.mjs --check` falla si `red.css` se queda
vieja frente a la matriz. Sin la matriz al lado (el CI) avisa y no falla.

## Veda 8 — Su vida la cuenta él: lo que pide quitar no vuelve

**Dicho por Álvaro el 17/10/2026** al reescribir el linaje (PR #12). Un dato de
su vida que él quita no se quita de una sección: se quita de todas las que lo
repiten, que aquí son la portada, el mapa vivo (`mapa-datos.js`), las preguntas
del avatar y el ikigai. El error que evita: borrarlo del texto y que vuelva por
el mapa o por una respuesta del avatar. Lo que no ha contado él no se deduce, y
lo que escribe Claude por él va al sprint como «revisar» hasta que lo lea.

**Guarda:** al cerrar un cambio de su vida, buscar en todo el repositorio lo
que se quitó. Una guarda automática queda en el backlog.

## Veda 9 — Lo que está en movimiento vive en un solo sitio

**Dicho por Álvaro el 17/10/2026** al pedir su sprint «con mis tareas
pendientes» (PR #16). Las tareas de su vida y de esta web están en
`sprint-datos.js` y nada más: la portada las pinta como tablero y el ikigai
cuenta de ahí lo que está en marcha. El error que evita: una tarea cerrada en
la conversación que sigue «por hacer» en la web, o la misma lista copiada en
dos sitios que se separan. El desarrollo nace en `backlog.md` (veda 1); el
sprint solo lo muestra.

**Guarda:** el centro del ikigai lee el sprint; si la lista se queda vieja, se
ve en la portada.
