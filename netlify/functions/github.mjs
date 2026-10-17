/* El cerebro · entrada con GitHub (OAuth)
   La capa privada del cerebro no está en esta web: cerebro.html la lee en tu
   navegador, con tu sesión de GitHub, de los repos a los que ya tienes acceso.
   Esta función solo hace el intercambio de OAuth, que necesita el secreto de la
   app y por eso no puede ir en la página. No guarda el token ni lo registra.

   Variables en Netlify: GITHUB_CLIENT_ID y GITHUB_CLIENT_SECRET, de una OAuth
   App de GitHub cuya «Authorization callback URL» sea
   https://<tu-dominio>/.netlify/functions/github

   /.netlify/functions/github?entrar  → manda a GitHub a pedir permiso
   /.netlify/functions/github?code=…  → vuelve de GitHub y entrega el token a la página */
const VUELTA = '/cerebro.html#privado';

const html = (cuerpo, cabeceras = {}) => new Response(
  '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><title>El cerebro</title>' + cuerpo,
  { status: 200, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'referrer-policy': 'no-referrer', ...cabeceras } });

const error = (txt) => html('<p style="font-family:system-ui;padding:24px">' + txt + ' <a href="/cerebro.html">Volver al cerebro</a></p>',
  { 'set-cookie': 'gh_estado=; Path=/.netlify/functions/github; Max-Age=0; HttpOnly; Secure; SameSite=Lax' });

export default async (req) => {
  const id = process.env.GITHUB_CLIENT_ID, secreto = process.env.GITHUB_CLIENT_SECRET;
  if (!id || !secreto) return error('La entrada con GitHub aún no está configurada en esta web.');
  const url = new URL(req.url), q = url.searchParams;
  const vuelta = url.origin + url.pathname;

  if (q.has('entrar')) {
    const estado = crypto.randomUUID();
    /* «repo» es el único permiso de GitHub que deja leer repos privados; solo se usa para leer. */
    const a = new URL('https://github.com/login/oauth/authorize');
    a.search = new URLSearchParams({ client_id: id, redirect_uri: vuelta, scope: 'repo', state: estado, allow_signup: 'false' });
    return new Response(null, { status: 302, headers: { location: a.toString(), 'cache-control': 'no-store',
      'set-cookie': `gh_estado=${estado}; Path=/.netlify/functions/github; Max-Age=600; HttpOnly; Secure; SameSite=Lax` } });
  }

  const code = q.get('code'), estado = q.get('state');
  const cookie = (req.headers.get('cookie') || '').match(/(?:^|;\s*)gh_estado=([^;]+)/);
  if (!code || !estado || !cookie || cookie[1] !== estado) return error('No se pudo comprobar la entrada. Vuelve a intentarlo.');

  const r = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST', headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify({ client_id: id, client_secret: secreto, code, redirect_uri: vuelta })
  });
  const j = await r.json().catch(() => ({}));
  if (!j.access_token) return error('GitHub no dio acceso.');

  /* El token pasa a la pestaña (sessionStorage) y nunca va en la URL. */
  return html('<script>try{sessionStorage.setItem("gh_token",' + JSON.stringify(j.access_token) + ')}catch(e){}location.replace(' + JSON.stringify(VUELTA) + ')</script>',
    { 'set-cookie': 'gh_estado=; Path=/.netlify/functions/github; Max-Age=0; HttpOnly; Secure; SameSite=Lax' });
};
