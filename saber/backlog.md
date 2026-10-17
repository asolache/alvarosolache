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
su propio historial.

## Hecho

### Cómo uso la IA (pedido 2026-10-17)

**Pedido por:** Álvaro. **Hecho:** `ia.html` con el compromiso, qué hace la IA
y qué hace él, los commits firmados con Claude leídos del historial y las vedas
heredadas que la sujetan; veda propia 6.

### El codex integrado: esta web tiene cerebro (pedido 2026-10-17)

**Pedido por:** Álvaro: «Estoy haciendo tu cerebro #codex. Intégralo y
evoluciónate y merge», y «Sé DRY». **Hecho:** cerebro instalado con
`cervell.js --nou` (58 vedas heredadas), vedas propias 4 y 5, guarda en CI y el
cerebro de la web leyendo también el codex propio.
