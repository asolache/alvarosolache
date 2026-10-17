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

**Dicho por Álvaro el 17/10/2026:** «quiero que en mis proyectos la IA se
integre y se muestre que lo hacemos con transparencia», y «cobre lo que cobre
por token, el codex siempre será lo más inteligente posible al menor coste
energético». El error que evita: una web hecha con IA que no lo dice, o que lo
dice con un número escrito a mano que nadie comprueba. Por eso `ia.html` cuenta
los commits firmados con Claude leyendo el historial (veda 102 heredada) y no
publica el coste sin fuente (veda 67 heredada). El modelo por tarea y su coste
real no se copian aquí: viven en el backlog de TeamTowers y en su página de
servicios conectables.

**Guarda:** la cifra de `ia.html` sale de la API de GitHub al abrir la página;
si no responde, lo dice. Que una guarda compruebe que cada página enlaza
`ia.html` queda en el backlog.
