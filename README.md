# Álvaro Solache

Mi página personal: el ikigai dibujado como un mapa que se recorre, con el
árbol de lo vivido desde 1971, los proyectos, la red y un cerebro que crece
con el codex de TeamTowers.

**Web:** <https://alvarosolache.netlify.app> · estática en Netlify, publicada
desde `main`, sin build.

## Por dónde empezar

| Página | Qué es |
|---|---|
| [`index.html`](index.html) | Ikigai, recorrido desde 1971, linaje, arte, prensa y el mapa vivo |
| [`cerebro.html`](cerebro.html) | El codex como grafo: vedas heredadas y propias, buscador y zoom |
| [`ia.html`](ia.html) | Cómo uso la IA: qué hace ella, qué hago yo y lo que cuesta |

Para trabajar en el repositorio: [`CLAUDE.md`](CLAUDE.md) y después
[`saber/MAPA.md`](saber/MAPA.md). La ley está en el
[codex](saber/codex.md), que hereda de
[teamtowershuma](https://github.com/asolache/teamtowershuma); aquí no se copia.

## Roadmap

El detalle de cada punto (quién lo pidió, qué se pide y cómo se cierra) vive
en [`saber/backlog.md`](saber/backlog.md). Esto es la vista rápida.

### Hecho

- [x] **v1 · Página personal** ([#1](https://github.com/asolache/alvarosolache/pull/1)):
  ikigai, recorrido desde 1971 filtrable por tema, linaje, arte, prensa y recursos.
- [x] **Linaje** ([#2](https://github.com/asolache/alvarosolache/pull/2)):
  la herencia del padre y de la madre.
- [x] **v0.1 · El mapa vivo** ([#3](https://github.com/asolache/alvarosolache/pull/3)):
  árbol, grafo por tiempo, tema y contexto, mapa mental por nodo y el avatar «Pregúntame».
- [x] **Flujos de valor** ([#4](https://github.com/asolache/alvarosolache/pull/4)):
  barra de flujos y enlace al universo de conocimientos.
- [x] **El cerebro** ([#5](https://github.com/asolache/alvarosolache/pull/5)):
  el codex como grafo en cinco capas.
- [x] **El codex integrado** ([#6](https://github.com/asolache/alvarosolache/pull/6)):
  la web hereda el cerebro de teamtowershuma y el ikigai crece con él.
- [x] **Cómo uso la IA** ([#8](https://github.com/asolache/alvarosolache/pull/8)):
  la IA a la vista y el compromiso de gastar lo menos posible.
- [x] **Cerebro 0.2** ([#7](https://github.com/asolache/alvarosolache/pull/7)):
  buscador, zoom y capa privada que se lee con GitHub.

### Siguiente

- [ ] **Audios de mi historia → árbol desde 1971.** Cada audio suena en su nodo
  y deja lo aprendido (campos `audio` y `aprendi` en `mapa-datos.js`).
- [ ] **Grafo y mapas mentales por nodo**, alimentados por los audios, con
  enlaces a todo lo que ya existe.
- [ ] **Avatar con mi voz:** preguntas y respuestas hechas por mí.
- [ ] **Prensa y premios:** enlaces a las noticias de Emprendedor XXI, Grow in
  Barcelona, Antena 3, InfoJobs, UOC y Fòrum RRHH. Solo enlaces a fuentes que existan.

### Infraestructura

- [ ] **Capa privada del cerebro:** crear la OAuth App en GitHub y poner
  `GITHUB_CLIENT_ID` y `GITHUB_CLIENT_SECRET` en Netlify. Sin acceso por
  OAuth no se muestra nada de repos privados.
- [ ] **Aviso de CI cuando el cerebro quede viejo:** regenerar con
  `herramientas/cerebro-codex.mjs` y fallar si sale distinto.

### La IA a la vista en mis otros proyectos

- [ ] Llevar «Cómo uso la IA» a [molekulon.org](https://github.com/asolache/molekulonorg)
  y al resto de webs, cada una leyendo su propio historial. Si vale para
  todas, subirlo a la matriz con `--recull`.
  ([molekulonClub](https://github.com/Molekulon3/molekulonClub) queda solo como
  referencia de los smart contracts y dApps que hicimos.)

## Cómo se mantiene

Tras cambiar un codex:

```sh
node herramientas/cerebro-codex.mjs --fuente "TeamTowers Humà=../teamtowershuma" --fuente "Álvaro Solache=."
node guardas/cervell.js
```

Cada PR fusionado se cierra en [`saber/backlog.md`](saber/backlog.md) y, si
cambia el roadmap, también aquí.
