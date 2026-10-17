# Álvaro Solache · cómo se trabaja aquí

Antes de escribir nada, lee en este orden: `saber/MAPA.md`, `saber/codex.md`,
`saber/para-la-ia.md` y `saber/taxonomia.md`.

## Comunicación

- Consumir menos tokens explicando el proceso: no narrar exploraciones, planes
  intermedios ni justificaciones paso a paso.
- Publicar **solo el resumen final de lo implementado** una vez hecho.
- Actualizaciones cortas solo si hay cambio de dirección o un bloqueo real.
- Formato: lista breve. Sin preámbulos del tipo «ahora haré…».

## Este proyecto

- Web estática en Netlify, publicada desde `main`. Sin build.
- Es hija de TeamTowers: el cerebro se pone al día con
  `node ../teamtowershuma/SOS/tools/cervell.js --actualitza .` y lo que se
  aprende aquí sube con `--recull` (veda 5).
- El cerebro de la web y el ikigai salen del codex. Tras cambiar un codex:
  `node herramientas/cerebro-codex.mjs --fuente "TeamTowers Humà=../teamtowershuma" --fuente "Álvaro Solache=."`
  y después `node guardas/cervell.js`.
- La piel es la de la red (veda 7): tras `--actualitza`,
  `node herramientas/pell.mjs` vuelve a escribir la paleta en `red.css`.
