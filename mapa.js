/* Mapa vivo v0.1: árbol, grafo con tres vistas, mapa mental por nodo y avatar de preguntas.
   Sin librerías. Los datos están en mapa-datos.js. */
(function(){
  var M = window.MAPA; if (!M) return;
  var NS = "http://www.w3.org/2000/svg";
  var svg = document.getElementById("mv-svg");
  var gBg = document.getElementById("mv-bg"), gEd = document.getElementById("mv-edges"), gNd = document.getElementById("mv-nodes");
  var panel = document.getElementById("mv-panel");
  var byId = {}, nb = {};
  M.nodos.forEach(function(n){ byId[n.id] = n; nb[n.id] = {}; n.links = n.links || []; });
  var edges = [];
  M.nodos.forEach(function(n){ n.rel.forEach(function(r){
    if (!byId[r] || nb[n.id][r]) return;
    nb[n.id][r] = nb[r][n.id] = 1; edges.push([n.id, r]);
  }); });
  function neigh(id){ return Object.keys(nb[id]); }
  function col(n){ return "var(" + M.temas[n.te[0]].c + ")"; }
  function el(tag, attrs, parent){
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function txt(parent, x, y, s, cls, anchor){
    var t = el("text", {x:x, y:y, "class":cls || "", "text-anchor":anchor || "start"}, parent);
    t.textContent = s; return t;
  }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  var temaKeys = Object.keys(M.temas), ctxKeys = Object.keys(M.contextos);

  /* ---------- Vistas: cada una devuelve posiciones y dibuja su fondo ---------- */
  var V = {};

  V.arbol = function(bg){
    var W = 1000, H = 780, rx = 500, ry = 510, pos = {};
    pos.nace = {x:rx, y:ry, side:"r"};
    // Raíces hacia abajo
    var roots = M.nodos.filter(function(n){ return n.te[0] === "raices" && n.id !== "nace"; });
    roots.sort(function(a,b){ return (a.y || 0) - (b.y || 0); });
    roots.forEach(function(n, i){
      var a = (200 + 140 * (i + .5) / roots.length) * Math.PI / 180;
      var r = i % 2 ? 215 : 130;
      var x = rx + Math.cos(a) * r * 1.55, y = ry - Math.sin(a) * r * 1.05;
      el("path", {d:"M"+rx+","+ry+" Q"+(rx + (x-rx)*.25)+","+(y+10)+" "+x+","+y, "class":"mv-root"}, bg);
      pos[n.id] = {x:x, y:y, side: x < rx ? "l" : "r"};
    });
    txt(bg, rx + 14, ry + 22, "1971 · la raíz", "mv-cap");
    // Ramas hacia arriba
    var extra = [[rx + 10, ry + 10, rx + 120, ry + 26]];
    var ramas = temaKeys.filter(function(k){ return k !== "raices"; });
    ramas.forEach(function(k, i){
      var ang = (-54 + i * 27) * Math.PI / 180, len = 450;
      var ex = rx + Math.sin(ang) * len * 1.05, ey = ry - Math.cos(ang) * len;
      var c = "var(" + M.temas[k].c + ")";
      var cxp = rx + (ex - rx) * .3, cyp = ry + (ey - ry) * .8;
      el("path", {d:"M"+rx+","+ry+" Q"+cxp+","+cyp+" "+ex+","+ey, "class":"mv-branch", style:"stroke:"+c}, bg);
      var tx = ex + Math.sin(ang) * 26, ty = ey - Math.cos(ang) * 26, tw = M.temas[k].n.length * 7.4;
      var t = txt(bg, tx, ty, M.temas[k].n, "mv-lane", "middle"); t.style.fill = c;
      extra.push([tx - tw/2, ty - 13, tx + tw/2, ty + 4]);
      var ns = M.nodos.filter(function(n){ return n.te[0] === k; });
      ns.sort(function(a,b){ return (a.y || 3000) - (b.y || 3000); });
      ns.forEach(function(n, j){
        var tt = .2 + .8 * (j + 1) / (ns.length + .3);
        var x = (1-tt)*(1-tt)*rx + 2*(1-tt)*tt*cxp + tt*tt*ex;
        var y = (1-tt)*(1-tt)*ry + 2*(1-tt)*tt*cyp + tt*tt*ey;
        var side = i < 2 ? "l" : (i > 2 ? "r" : (j % 2 ? "l" : "r"));
        pos[n.id] = {x:x, y:y, side:side};
      });
    });
    labels(pos, extra);
    return {W:W, H:H, pos:pos};
  };

  // Coloca cada etiqueta donde no pise otra: a su lado, al otro lado, encima o debajo.
  function labels(pos, extra){
    var boxes = (extra || []).slice();
    function hit(b){ return boxes.some(function(o){ return b[0] < o[2] && b[2] > o[0] && b[1] < o[3] && b[3] > o[1]; }); }
    Object.keys(pos).forEach(function(id){ var p = pos[id]; boxes.push([p.x-7, p.y-7, p.x+7, p.y+7]); });
    var ids = Object.keys(pos).sort(function(a,b){ return pos[a].y - pos[b].y; });
    ids.forEach(function(id){
      var p = pos[id], w = byId[id].s.length * 6.4 + 4, other = p.side === "l" ? "r" : "l";
      var cands = [p.side, other, "t", "b"].map(function(c){
        if (c === "r") return {c:c, dx:11, dy:4, a:"start", b:[p.x+9, p.y-8, p.x+11+w, p.y+6]};
        if (c === "l") return {c:c, dx:-11, dy:4, a:"end", b:[p.x-11-w, p.y-8, p.x-9, p.y+6]};
        if (c === "t") return {c:c, dx:0, dy:-12, a:"middle", b:[p.x-w/2, p.y-24, p.x+w/2, p.y-9]};
        return {c:c, dx:0, dy:20, a:"middle", b:[p.x-w/2, p.y+9, p.x+w/2, p.y+24]};
      });
      var best = cands.filter(function(k){ return !hit(k.b); })[0] || cands[0];
      boxes.push(best.b);
      p.lab = {dx:best.dx, dy:best.dy, a:best.a};
    });
  }

  function lw(n){ return n.s.length * 6.6 + 18; }
  V.tiempo = function(bg){
    var W = 1000, top = 46, pos = {}, x0 = 190, x1 = 850, y = top, rows = [];
    function X(n){ if (n.y === null) return n.ya === "Antes de 1971" ? 30 : 945; return x0 + (n.y - 1971) / (2026 - 1971) * (x1 - x0); }
    temaKeys.forEach(function(k, i){
      var ns = M.nodos.filter(function(n){ return n.te[0] === k; });
      ns.sort(function(a,b){ return X(a) - X(b); });
      var subs = [];
      ns.forEach(function(n){
        var x = X(n), side = x > 900 ? "l" : "r";
        var lo = side === "l" ? x - lw(n) : x - 8, hi = side === "l" ? x + 8 : x + lw(n);
        var s = 0;
        while (subs[s] && subs[s].some(function(r){ return lo < r[1] && hi > r[0]; })) s++;
        (subs[s] = subs[s] || []).push([lo, hi]);
        pos[n.id] = {x:x, y:y + 34 + s * 19, side:side};
      });
      var h = 40 + subs.length * 19;
      rows.push({k:k, y:y, h:h, i:i});
      y += h;
    });
    var H = y + 8;
    rows.forEach(function(r){
      el("rect", {x:0, y:r.y, width:W, height:r.h, "class": r.i % 2 ? "mv-band" : "mv-band alt"}, bg);
    });
    [1971,1980,1990,2000,2010,2020].forEach(function(yr){
      var x = x0 + (yr - 1971) / 55 * (x1 - x0);
      el("line", {x1:x, y1:top-8, x2:x, y2:H-6, "class":"mv-grid"}, bg);
      txt(bg, x, top - 16, String(yr), "mv-cap", "middle");
    });
    txt(bg, x1, top - 16, "Hoy", "mv-cap", "middle");
    txt(bg, 30, top - 16, "Antes", "mv-cap", "start");
    txt(bg, 990, top - 16, "Sin fecha", "mv-cap", "end");
    rows.forEach(function(r){
      var t = txt(bg, 8, r.y + 16, M.temas[r.k].n, "mv-lane"); t.style.fill = "var(" + M.temas[r.k].c + ")";
    });
    return {W:W, H:H, pos:pos};
  };

  function clusters(bg, keys, nameOf, groupOf){
    var W = 1060, cw = 330, gap = 20, rowH = 24, pos = {}, y = 10, H;
    for (var r = 0; r < Math.ceil(keys.length / 3); r++){
      var rowKeys = keys.slice(r * 3, r * 3 + 3), maxh = 0;
      rowKeys.forEach(function(k, c){
        var ns = M.nodos.filter(function(n){ return groupOf(n) === k; });
        ns.sort(function(a,b){ return (a.y || (a.ya === "Antes de 1971" ? 0 : 3000)) - (b.y || (b.ya === "Antes de 1971" ? 0 : 3000)); });
        var x = 10 + c * (cw + gap), rows = Math.ceil(ns.length / 2), h = 40 + rows * rowH;
        maxh = Math.max(maxh, h);
        rowKeys[c] = {k:k, x:x, ns:ns, h:h};
      });
      rowKeys.forEach(function(o){
        el("rect", {x:o.x, y:y, width:cw, height:maxh, rx:12, "class":"mv-box"}, bg);
        var t = txt(bg, o.x + 14, y + 22, nameOf(o.k) + " · " + o.ns.length, "mv-lane");
        if (M.temas[o.k]) t.style.fill = "var(" + M.temas[o.k].c + ")";
        o.ns.forEach(function(n, i){
          pos[n.id] = {x:o.x + 18 + (i % 2) * 162, y:y + 46 + Math.floor(i / 2) * rowH, side:"r"};
        });
      });
      y += maxh + gap;
    }
    H = y;
    return {W:W, H:H, pos:pos};
  }
  V.tema = function(bg){ return clusters(bg, temaKeys, function(k){ return M.temas[k].n; }, function(n){ return n.te[0]; }); };
  V.contexto = function(bg){ return clusters(bg, ctxKeys, function(k){ return M.contextos[k]; }, function(n){ return n.cx; }); };

  /* ---------- Dibujo de nodos y aristas ---------- */
  var gN = {}, gE = [];
  M.nodos.forEach(function(n){
    var g = el("g", {"class":"mv-n" + (n.k === "saber" ? " saber" : ""), tabindex:"0", role:"button", "aria-label":n.t + ", " + n.ya, "data-id":n.id}, gNd);
    var shape = n.k === "saber"
      ? el("rect", {x:-6, y:-6, width:12, height:12, rx:2, transform:"rotate(45)"}, g)
      : el("circle", {r: n.id === "nace" ? 10 : 6.5}, g);
    shape.style.fill = col(n); shape.style.stroke = col(n);
    var t = txt(g, 11, 4, n.s, "mv-l");
    g._t = t;
    g.addEventListener("click", function(){ select(n.id, true); });
    g.addEventListener("keydown", function(e){ if (e.key === "Enter" || e.key === " "){ e.preventDefault(); select(n.id, true); } });
    g.addEventListener("mouseenter", function(){ hover(n.id); });
    g.addEventListener("mouseleave", function(){ hover(null); });
    gN[n.id] = g;
  });
  edges.forEach(function(e){ gE.push({a:e[0], b:e[1], l:el("line", {"class":"mv-e"}, gEd)}); });

  var cur = {}, view = "arbol", anim = null, selected = null;
  function place(P){
    for (var id in gN){
      var p = P[id]; if (!p) continue;
      gN[id].setAttribute("transform", "translate(" + p.x.toFixed(1) + "," + p.y.toFixed(1) + ")");
    }
    gE.forEach(function(e){
      var a = P[e.a], b = P[e.b]; if (!a || !b) return;
      e.l.setAttribute("x1", a.x); e.l.setAttribute("y1", a.y); e.l.setAttribute("x2", b.x); e.l.setAttribute("y2", b.y);
    });
  }
  function setView(v){
    view = v;
    document.querySelectorAll(".mv-tab").forEach(function(b){ b.setAttribute("aria-selected", b.dataset.v === v ? "true" : "false"); });
    while (gBg.firstChild) gBg.removeChild(gBg.firstChild);
    var L = V[v](gBg);
    svg.setAttribute("viewBox", "0 0 " + L.W + " " + L.H);
    svg.style.minWidth = "820px";
    for (var id in gN){
      var P = L.pos[id], lab = P.lab || (P.side === "l" ? {dx:-11, dy:4, a:"end"} : {dx:11, dy:4, a:"start"});
      gN[id]._t.setAttribute("x", lab.dx); gN[id]._t.setAttribute("y", lab.dy);
      gN[id]._t.setAttribute("text-anchor", lab.a);
    }
    svg.classList.toggle("tree", v === "arbol");
    var box = svg.parentNode;
    box.scrollLeft = v === "arbol" ? (box.scrollWidth - box.clientWidth) / 2 : 0;
    var from = {}, to = L.pos, t0 = null;
    for (var k in to) from[k] = cur[k] ? {x:cur[k].x, y:cur[k].y} : {x:to[k].x, y:to[k].y};
    if (anim) cancelAnimationFrame(anim);
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    function step(ts){
      if (t0 === null) t0 = ts;
      var p = reduce ? 1 : Math.min(1, (ts - t0) / 650), e = p < .5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2) / 2;
      for (var k in to) cur[k] = {x: from[k].x + (to[k].x - from[k].x) * e, y: from[k].y + (to[k].y - from[k].y) * e};
      place(cur);
      if (p < 1) anim = requestAnimationFrame(step);
    }
    anim = requestAnimationFrame(step);
    try { localStorage.setItem("mv-view", v); } catch(e){}
  }
  function mark(id, cls){
    var keep = id ? neigh(id).concat([id]) : null;
    for (var k in gN) gN[k].classList.toggle(cls, !!keep && keep.indexOf(k) < 0);
    gE.forEach(function(e){ e.l.classList.toggle(cls + "-e", !!id && e.a !== id && e.b !== id); e.l.classList.toggle("on", !!id && (e.a === id || e.b === id)); });
  }
  function hover(id){ if (!selected) mark(id, "dim"); }

  /* ---------- Ficha con mapa mental ---------- */
  function select(id, fromUser){
    var n = byId[id]; if (!n) return;
    selected = id;
    for (var k in gN) gN[k].classList.toggle("sel", k === id);
    mark(id, "dim");
    var ctx = M.contextos[n.cx];
    var ramas = [
      {h:"Cuándo", c:"--m-raices", li:[esc(n.ya)]},
      {h:"Dónde", c:"--m-comunidad", li:[n.lugar ? esc(n.lugar) : null, esc(ctx)].filter(Boolean)},
      {h:"Temas", c:"--m-sistemas", li:n.te.map(function(t){ return esc(M.temas[t].n); })},
      {h:"Conectado con", c:"--m-personas", li:neigh(id).map(function(r){ return '<button type="button" class="mv-go" data-go="' + r + '">' + esc(byId[r].s) + '</button>'; })},
      {h:"Enlaces", c:"--m-digital", li:n.links.length ? n.links.map(function(l){ return '<a href="' + esc(l[1]) + '">' + esc(l[0]) + '</a>'; }) : ['<span class="mv-pend">Aún sin enlace</span>']},
      {h:"Lo que aprendí", c:"--m-arte", li:[n.aprendi ? esc(n.aprendi) : '<span class="mv-pend">Lo contaré en audio</span>']}
    ];
    var audio = n.audio ? '<audio controls preload="none" src="' + esc(n.audio) + '"></audio>' : '<p class="mv-voz"><span aria-hidden="true">🎙</span> Aquí irá el audio de este nodo, con mi voz.</p>';
    panel.innerHTML =
      '<div class="mv-head"><p class="kicker" style="color:' + col(n) + '">' + (n.k === "saber" ? "Saber" : "Hito") + ' · ' + esc(n.ya) + '</p>' +
      '<h3>' + esc(n.t) + '</h3><p>' + esc(n.txt) + '</p>' + audio + '</div>' +
      '<div class="mm" id="mv-mm"><svg class="mm-lines" aria-hidden="true"></svg>' +
      '<div class="mm-c" style="border-color:' + col(n) + '">' + esc(n.s) + '</div>' +
      ramas.map(function(r, i){
        return '<div class="mm-b mm-' + i + '" style="--bc:var(' + r.c + ')"><b>' + r.h + '</b><ul>' + r.li.map(function(x){ return '<li>' + x + '</li>'; }).join("") + '</ul></div>';
      }).join("") + '</div>' +
      '<p class="hint"><a href="#mapa/' + id + '" class="mv-share">Enlace a este nodo</a> · Toca otro nodo o una conexión para seguir el camino.</p>';
    drawMM();
    if (fromUser){
      try { history.replaceState(null, "", "#mapa/" + id); } catch(e){}
    }
  }
  function drawMM(){
    var mm = document.getElementById("mv-mm"); if (!mm) return;
    var s = mm.querySelector(".mm-lines"), c = mm.querySelector(".mm-c");
    s.innerHTML = "";
    if (getComputedStyle(s).display === "none") return;
    var R = mm.getBoundingClientRect(), cr = c.getBoundingClientRect();
    s.setAttribute("viewBox", "0 0 " + R.width + " " + R.height);
    var cx = cr.left - R.left + cr.width / 2, cy = cr.top - R.top + cr.height / 2;
    mm.querySelectorAll(".mm-b").forEach(function(b){
      var br = b.getBoundingClientRect();
      var bx = br.left - R.left + (br.left + br.width/2 < cr.left + cr.width/2 ? br.width : 0);
      var by = br.top - R.top + Math.min(24, br.height / 2);
      var p = el("path", {d:"M"+cx+","+cy+" C"+((cx+bx)/2)+","+cy+" "+((cx+bx)/2)+","+by+" "+bx+","+by}, s);
      p.style.stroke = getComputedStyle(b).getPropertyValue("--bc") || "currentColor";
    });
  }
  panel.addEventListener("click", function(e){
    var b = e.target.closest("[data-go]"); if (b) { select(b.dataset.go, true); return; }
    var s = e.target.closest(".mv-share");
    if (s){ e.preventDefault(); var u = location.href.split("#")[0] + s.getAttribute("href");
      if (navigator.clipboard) navigator.clipboard.writeText(u).then(function(){ s.textContent = "Enlace copiado"; }, function(){});
    }
  });
  window.addEventListener("resize", drawMM);

  document.querySelectorAll(".mv-tab").forEach(function(b){ b.addEventListener("click", function(){ setView(b.dataset.v); }); });
  document.getElementById("mv-svg").addEventListener("click", function(e){
    if (!e.target.closest(".mv-n") && selected){ selected = null; for (var k in gN) gN[k].classList.remove("sel"); mark(null, "dim"); }
  });

  var first = "arbol";
  try { first = localStorage.getItem("mv-view") || "arbol"; } catch(e){}
  if (!V[first]) first = "arbol";
  setView(first);
  var h = location.hash.match(/^#mapa\/([\w-]+)/);
  select(h && byId[h[1]] ? h[1] : "teamtowers", false);
  if (h && byId[h[1]]) document.getElementById("mapa").scrollIntoView();

  /* ---------- Avatar: preguntas y respuestas ---------- */
  var log = document.getElementById("av-log"), form = document.getElementById("av-form"), inp = document.getElementById("av-q");
  var sugg = document.getElementById("av-sugg");
  function norm(s){ return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9ñ ]/g, " "); }
  var STOP = " que de la el en y a los las un una es por con para mi tu te me lo se del al como cual tus sus eres ".split(" ");
  function tokens(s){ return norm(s).split(/\s+/).filter(function(w){ return w.length > 1 && STOP.indexOf(w) < 0; }); }
  function match(w, k){ return w === k || (w.length > 3 && k.length > 3 && (w.indexOf(k) === 0 || k.indexOf(w) === 0)); }
  function answer(q){
    var ws = tokens(q), best = null, bs = 0;
    M.respuestas.forEach(function(r){
      var s = 0;
      ws.forEach(function(w){ r.k.forEach(function(k){ if (match(w, k)) s++; }); });
      if (s > bs){ bs = s; best = r; }
    });
    if (best) return {a:best.a, n:best.n, audio:best.audio};
    var nbest = null, ns = 0;
    M.nodos.forEach(function(n){
      var hay = tokens(n.t + " " + n.txt + " " + (n.lugar || "")), s = 0;
      ws.forEach(function(w){ if (w.length > 3 && hay.some(function(h){ return match(w, h); })) s++; });
      if (s > ns){ ns = s; nbest = n; }
    });
    if (nbest) return {a:"Esto aún no lo he contado con mis palabras. Lo más cercano en el mapa es «" + nbest.t + "»: " + nbest.txt, n:[nbest.id]};
    return {a:"Esto todavía no lo he contado. Lo apunto para los próximos audios. Si te corre prisa, escríbeme a asolache@mac.com.", n:[]};
  }
  var canSpeak = "speechSynthesis" in window;
  function ask(q){
    q = q.trim(); if (!q) return;
    var r = answer(q);
    var d = document.createElement("div");
    d.className = "av-turn";
    d.innerHTML = '<p class="av-me">' + esc(q) + '</p><div class="av-it"><span class="av-face" aria-hidden="true">ÁS</span><div><p>' + esc(r.a) + '</p>' +
      (r.n.length ? '<p class="av-see">En el mapa: ' + r.n.map(function(id){ return '<button type="button" class="mv-go" data-go="' + id + '">' + esc(byId[id].s) + '</button>'; }).join(" ") + '</p>' : '') +
      (r.audio ? '<audio controls preload="none" src="' + esc(r.audio) + '"></audio>'
        : (canSpeak ? '<button type="button" class="av-say">Leer en voz alta</button> <small>Voz del navegador, no la mía. La mía llega con los audios.</small>' : '')) +
      '</div></div>';
    log.appendChild(d);
    while (log.children.length > 4) log.removeChild(log.firstChild);
    d.querySelector(".av-it").setAttribute("tabindex", "-1");
    d.scrollIntoView({block:"nearest"});
    var say = d.querySelector(".av-say");
    if (say) say.addEventListener("click", function(){
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(r.a); u.lang = "es-ES"; speechSynthesis.speak(u);
    });
  }
  M.respuestas.forEach(function(r){
    var b = document.createElement("button");
    b.type = "button"; b.className = "chip av-chip"; b.textContent = r.q;
    b.addEventListener("click", function(){ ask(r.q); });
    sugg.appendChild(b);
  });
  form.addEventListener("submit", function(e){ e.preventDefault(); ask(inp.value); inp.value = ""; });
  log.addEventListener("click", function(e){
    var b = e.target.closest("[data-go]");
    if (b){ select(b.dataset.go, true); document.getElementById("mv-panel").scrollIntoView({behavior:"smooth", block:"start"}); }
  });
})();
