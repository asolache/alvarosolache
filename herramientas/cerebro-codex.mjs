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

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const fuentes = args.flatMap((a, i) => a === '--fuente' ? [args[i + 1]] : [])
  .map(f => { const [nom, ruta] = f.split('='); return { nom, ruta }; });
if (!fuentes.length) { console.log('✗ Falta --fuente "Nombre=ruta/al/repositorio"'); process.exit(1); }

/* Las cinco capas, de la más densa a la más sutil (los cinco koshas de la
   Taittiriya Upanishad). Las palabras están en catalán porque el codex lo está. */
const CAPAS = [
  { id: 'anna', n: 'Cuerpo', s: 'Annamaya', d: 'La obra: el código, las páginas, las herramientas y las guardas que la sostienen.',
    k: ['w3c', 'html', 'css', 'pàgina', 'fitxer', 'codi', 'eina', 'test', 'prova', 'guarda', 'pwa', 'navegador', 'build', 'barra', 'pell', 'botó', 'zip', 'netlify', 'funció'] },
  { id: 'prana', n: 'Energía', s: 'Pranamaya', d: 'Lo que circula: valor, dinero, intercambios, el registro y quién aporta qué.',
    k: ['valor', 'diner', 'comptab', 'fons', 'pagament', 'cobr', 'token', 'slicing', 'pie', 'ledger', 'registre', 'intercanvi', 'comissió', 'preu', 'euro', 'quota', 'aportació', 'transacció', 'flux'] },
  { id: 'mano', n: 'Mente', s: 'Manomaya', d: 'Lo que se recuerda y se ordena: datos, mapas, el cerebro, la taxonomía y el backlog.',
    k: ['dada', 'dades', 'mapa', 'memòria', 'cervell', 'coneixement', 'backlog', 'taxonomia', 'font', 'índex', 'json', 'llista', 'catàleg', 'document', 'llengua', 'traducció', 'perfil'] },
  { id: 'vijnana', n: 'Discernimiento', s: 'Vijnanamaya', d: 'El criterio: decir solo lo que se puede sostener, medir antes de estimar, el sedàs.',
    k: ['veritat', 'estimació', 'null', 'sedàs', 'decid', 'criteri', 'verific', 'afirma', 'mesura', 'comprova', 'honest', 'invent', 'fals', 'evidència', 'regla', 'llei'] },
  { id: 'ananda', n: 'Propósito', s: 'Anandamaya', d: 'Para qué: la misión, la comunidad, las personas, el cuidado y el relato que lo une.',
    k: ['missió', 'comunitat', 'persona', 'cura', 'mitolog', 'shiva', 'shakti', 'molekulon', 'superheroi', 'identitat', 'territori', 'colla', 'castell', 'confiança', 'reconeixement', 'visió', 'propòsit'] }
];
/* Los saberes de Álvaro: la lista cerrada con la que se etiqueta cada veda. */
const SABERES = {
  vna: 'Mapa de valor', contabilidad: 'Contabilidad de valor y tokenomics', defi: 'DeFi y P2P',
  conocimiento: 'Gestión del conocimiento', personas: 'Personas y equipos', proyectos: 'Proyectos, kanban y backlog',
  desarrollo: 'Desarrollo web y SOS', comunidad: 'Comunidad y territorio', relato: 'Relato y marca'
};
/* sintesis.json: los saberes y lo aprendido de cada veda, y los principios de
   cada capa. Lo escribe una lectura de las vedas y lo revisa Álvaro; una veda
   nueva sale sin etiquetar hasta que se añade. */
const SINT = existsSync(join(RAIZ, 'sintesis.json')) ? JSON.parse(readFileSync(join(RAIZ, 'sintesis.json'), 'utf8')) : { vedas: {}, principios: {} };
const fijadas = existsSync(join(RAIZ, 'capas.json')) ? JSON.parse(readFileSync(join(RAIZ, 'capas.json'), 'utf8')) : {};

const nodos = [], aristas = [];
for (const { nom, ruta } of fuentes) {
  const codex = readFileSync(join(ruta, 'SOS/knowledge/codex.md'), 'utf8');
  const her = existsSync(join(ruta, 'SOS/knowledge/cervell/heretat.json'))
    ? JSON.parse(readFileSync(join(ruta, 'SOS/knowledge/cervell/heretat.json'), 'utf8')).vedes : {};
  const temaDe = {};
  for (const [t, ns] of Object.entries(her)) ns.forEach(n => { temaDe[n] = t; });
  const caps = [...codex.matchAll(/^##+ (?:Veda (\d+) — (.+)|V(\d+) · (.+))$/gm)];
  caps.forEach((m, i) => {
    const num = +(m[1] || m[3]);
    const titulo = (m[2] || m[4]).replace(/^Veda (de |del |d'|dels )?/i, '').trim();
    const cuerpo = codex.slice(m.index + m[0].length, i + 1 < caps.length ? caps[i + 1].index : codex.length);
    const plano = cuerpo.replace(/```[\s\S]*?```/g, '').replace(/[*`#>|]/g, '').replace(/\s+/g, ' ').trim();
    const fecha = (cuerpo.match(/(\d{2})\/(\d{2})\/(20\d\d)/) || []).slice(1).reverse().join('-') || null;
    const id = nom + ':' + num;
    const texto = (titulo + ' ' + plano).toLowerCase();
    /* Al principio de palabra: «ci» no ha de contar dentro de «decisió». */
    const puntos = CAPAS.map(c => c.k.reduce((s, k) => s + (texto.match(new RegExp('(?<![\\p{L}])' + k.replace(/[€]/, '\\$&'), 'gu')) || []).length, 0));
    const max = Math.max(...puntos);
    const propuesta = max ? CAPAS[puntos.indexOf(max)].id : 'vijnana';
    nodos.push({ id, fuente: nom, n: num, t: titulo, fecha, tema: temaDe[num] || null,
      capa: fijadas[id] || propuesta, fijada: !!fijadas[id],
      saberes: (SINT.vedas[num] || {}).saberes || [], aprende: (SINT.vedas[num] || {}).aprende || null,
      txt: plano.length > 420 ? plano.slice(0, 420).replace(/\s\S*$/, '') + '…' : plano });
    for (const c of new Set([...cuerpo.matchAll(/\b(?:[Vv]ed[ae]s?|V)\s?(\d{1,3})\b/g)].map(x => +x[1])))
      if (c !== num) aristas.push([id, nom + ':' + c]);
  });
}
const ids = new Set(nodos.map(n => n.id));
const vistas = new Set();
const limpias = aristas.filter(([a, b]) => {
  const k = [a, b].sort().join('|');
  if (!ids.has(b) || vistas.has(k)) return false;
  vistas.add(k); return true;
});
nodos.sort((a, b) => a.n - b.n);
const datos = { generado: new Date().toISOString().slice(0, 10), fuentes: fuentes.map(f => f.nom),
  capas: CAPAS.map(({ k, ...c }) => ({ ...c, principios: SINT.principios[c.id] || [] })), saberes: SABERES, nodos, aristas: limpias };
const raros = nodos.flatMap(n => n.saberes.filter(x => !SABERES[x]));
if (raros.length) { console.log('✗ Saberes que no están en la lista: ' + [...new Set(raros)].join(', ')); process.exit(1); }
writeFileSync(join(RAIZ, 'cerebro-datos.js'),
  '/* Generado por herramientas/cerebro-codex.mjs. No se edita a mano: las capas fijadas van en capas.json. */\nwindow.CEREBRO = ' + JSON.stringify(datos) + ';\n');
const porCapa = CAPAS.map(c => `${c.n} ${nodos.filter(n => n.capa === c.id).length}`).join(' · ');
console.log(`✅ cerebro-datos.js · ${nodos.length} vedas, ${limpias.length} citas · ${porCapa}`);
