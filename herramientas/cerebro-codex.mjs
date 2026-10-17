#!/usr/bin/env node
/* El cerebro · las vedas de los codex como grafo
   Lee el codex de cada proyecto (hoy el de TeamTowers Humà, que es público) y
   escribe cerebro-datos.js: una veda por nodo, las citas entre vedas como
   aristas, el tema de la herencia cuando lo tiene y una capa de las cinco.
   La capa es una PROPUESTA por palabras clave, para pulirla con Álvaro: lo que
   él fije a mano en capas.json manda sobre lo que salga de aquí.

   node herramientas/cerebro-codex.mjs --fuente "TeamTowers Humà=../teamtowershuma"
*/
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

/* El lector del codex es el mismo que usa la capa privada en el navegador. */
const { CAPAS, SABERES, RUTA_CODEX, RUTA_HERENCIA, lee, limpia } = createRequire(import.meta.url)('../codex-parse.js');

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const fuentes = args.flatMap((a, i) => a === '--fuente' ? [args[i + 1]] : [])
  .map(f => { const [nom, ruta] = f.split('='); return { nom, ruta }; });
if (!fuentes.length) { console.log('✗ Falta --fuente "Nombre=ruta/al/repositorio"'); process.exit(1); }

/* sintesis.json: los saberes y lo aprendido de cada veda, y los principios de
   cada capa. Lo escribe una lectura de las vedas y lo revisa Álvaro; una veda
   nueva sale sin etiquetar hasta que se añade. */
const SINT = existsSync(join(RAIZ, 'sintesis.json')) ? JSON.parse(readFileSync(join(RAIZ, 'sintesis.json'), 'utf8')) : { vedas: {}, principios: {} };
const fijadas = existsSync(join(RAIZ, 'capas.json')) ? JSON.parse(readFileSync(join(RAIZ, 'capas.json'), 'utf8')) : {};

const nodos = [], aristas = [];
for (const { nom, ruta } of fuentes) {
  const codex = readFileSync(join(ruta, RUTA_CODEX), 'utf8');
  const herencia = existsSync(join(ruta, RUTA_HERENCIA)) ? JSON.parse(readFileSync(join(ruta, RUTA_HERENCIA), 'utf8')) : null;
  const r = lee(codex, { nom, herencia, fijadas, sint: SINT });
  nodos.push(...r.nodos); aristas.push(...r.aristas);
}
const limpias = limpia(nodos, aristas);
nodos.sort((a, b) => a.n - b.n);
const datos = { generado: new Date().toISOString().slice(0, 10), fuentes: fuentes.map(f => f.nom),
  capas: CAPAS.map(({ k, ...c }) => ({ ...c, principios: SINT.principios[c.id] || [] })), saberes: SABERES, nodos, aristas: limpias };
const raros = nodos.flatMap(n => n.saberes.filter(x => !SABERES[x]));
if (raros.length) { console.log('✗ Saberes que no están en la lista: ' + [...new Set(raros)].join(', ')); process.exit(1); }
writeFileSync(join(RAIZ, 'cerebro-datos.js'),
  '/* Generado por herramientas/cerebro-codex.mjs. No se edita a mano: las capas fijadas van en capas.json. */\nwindow.CEREBRO = ' + JSON.stringify(datos) + ';\n');
const porCapa = CAPAS.map(c => `${c.n} ${nodos.filter(n => n.capa === c.id).length}`).join(' · ');
console.log(`✅ cerebro-datos.js · ${nodos.length} vedas, ${limpias.length} citas · ${porCapa}`);
