#!/usr/bin/env node
/* La piel de la red · la paleta de TeamTowers, escrita en red.css
   La web es hija de la matriz (veda 5): la paleta no se copia a mano, se lee de
   `SOS/tools/build-pell.js`, que es donde TeamTowers la declara una vez para
   todas sus páginas. Si allí cambia un color, aquí se vuelve a escribir.

   node herramientas/pell.mjs            escribe la paleta en red.css
   node herramientas/pell.mjs --check    falla si red.css ha quedado vieja
   Sin ../teamtowershuma al lado (en el CI) no hay matriz que leer: avisa y sale bien. */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const MATRIZ = join(RAIZ, '..', 'teamtowershuma', 'SOS', 'tools', 'build-pell.js');
const CSS = join(RAIZ, 'red.css');
const OBRE = '/*TT-PELL*/', TANCA = '/*/TT-PELL*/';
const CHECK = process.argv.includes('--check');

if (!existsSync(MATRIZ)) { console.log('· No está ../teamtowershuma: la piel no se puede comparar.'); process.exit(0); }
const { bloc } = createRequire(import.meta.url)(MATRIZ);
const txt = readFileSync(CSS, 'utf8');
const i = txt.indexOf(OBRE), j = txt.indexOf(TANCA);
if (i < 0 || j <= i) { console.log('✗ red.css no tiene las marcas ' + OBRE); process.exit(1); }
const nuevo = txt.slice(0, i) + OBRE + '\n' + bloc() + '\n' + txt.slice(j);
if (nuevo === txt) { console.log('✓ La piel de red.css es la de la matriz.'); process.exit(0); }
if (CHECK) { console.log('✗ La piel de red.css está vieja. Arréglalo con: node herramientas/pell.mjs'); process.exit(1); }
writeFileSync(CSS, nuevo);
console.log('✓ Piel escrita en red.css desde la matriz.');
