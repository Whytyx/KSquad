/* Born East chat widget. Set the endpoint below once the Worker is deployed.
   NEVER put an API key here: this file is public. The key lives only in the Worker secret. */
window.BORN_EAST_CHAT_ENDPOINT = window.BORN_EAST_CHAT_ENDPOINT || 'https://born-east-chat.borneast.workers.dev';
(function(){
  var EP = window.BORN_EAST_CHAT_ENDPOINT, msgs = [], busy = false;
  var root = document.createElement('div'); root.className = 'bec';
  root.innerHTML =
    '<button class="bec-fab" type="button" aria-expanded="false" aria-controls="bec-panel" aria-label="Open chat" data-i18n-attr="aria-label:chat_open">'+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg><span data-i18n="chat_fab">Ask us</span></button>'+
    '<section class="bec-panel" id="bec-panel" role="dialog" aria-label="Chat with Born East" data-i18n-attr="aria-label:chat_dialog" hidden>'+
      '<header class="bec-hd"><div><strong>Born East</strong><small data-i18n="chat_sub">Quick questions about our services</small></div>'+
      '<div class="bec-lang" role="group" aria-label="Chat language / ภาษาแชท"><button type="button" data-chat-lang="th" lang="th" aria-pressed="false">TH</button><button type="button" data-chat-lang="en" lang="en" aria-pressed="false">EN</button></div>'+
      '<button class="bec-x" type="button" aria-label="Close chat" data-i18n-attr="aria-label:chat_close">×</button></header>'+
      '<div class="bec-log" aria-live="polite"></div>'+
      '<form class="bec-form"><label class="bec-sr" for="bec-in" data-i18n="chat_label">Your message</label>'+
      '<input id="bec-in" maxlength="500" autocomplete="off" placeholder="Type your question…" data-i18n-attr="placeholder:chat_placeholder">'+
      '<button type="submit" aria-label="Send" data-i18n-attr="aria-label:chat_send">↑</button></form>'+
      '<p class="bec-fine" data-i18n="chat_fine">AI answers can be wrong. For anything important, use the <a href="contact.html">Contact page</a>.</p>'+
    '</section>';
  document.body.appendChild(root);
  if (window.BE_I18N) window.BE_I18N.apply(root);
  var fab = root.querySelector('.bec-fab'), panel = root.querySelector('.bec-panel'), log = root.querySelector('.bec-log'),
      form = root.querySelector('.bec-form'), input = root.querySelector('#bec-in');
  var T = function(k, en){ return window.BE_I18N ? window.BE_I18N.t(k, en) : en; };
  /* Strings that follow the CHAT language (chosen by the visitor), not the site language. */
  var CL = {
    en: { hello: 'Hi! 👋 Ask me anything about Born East’s services or how we work.', ph: 'Type your question…', typing: 'Typing…',
          noanswer: 'Sorry, I don’t have an answer for that. Please see our Contact page.',
          error: 'Sorry, chat isn’t available right now. Please try again later or visit our <a href="contact.html">Contact page</a>.' },
    th: { hello: 'สวัสดี 👋 สอบถามเรื่องบริการหรือรูปแบบการทำงานของ Born East ได้เลย', ph: 'พิมพ์คำถามของคุณ…', typing: 'กำลังพิมพ์…',
          noanswer: 'ขออภัย ยังไม่มีข้อมูลสำหรับคำถามนี้ โปรดดูที่หน้าติดต่อเรา',
          error: 'ขออภัย ขณะนี้ระบบแชทยังใช้งานไม่ได้ โปรดลองใหม่อีกครั้งภายหลัง หรือแวะดู<a href="contact.html">หน้าติดต่อเรา</a>' }
  };
  var LKEY = 'be-chat-lang', chatLang = null, gen = 0;
  try { var sv = sessionStorage.getItem(LKEY); if (sv === 'th' || sv === 'en') chatLang = sv; } catch (e) {}
  var siteLang = function(){ return (window.BE_I18N && window.BE_I18N.lang && window.BE_I18N.lang()) === 'th' ? 'th' : 'en'; };
  var sendBtn = form.querySelector('button');
  function lockInput(locked){ input.disabled = locked; sendBtn.disabled = locked;
    input.removeAttribute('data-i18n-attr');
    input.placeholder = locked ? 'เลือกภาษาก่อน / Choose a language first' : CL[chatLang].ph;
    input.setAttribute('lang', chatLang || ''); }
  function markHeader(){ var b = root.querySelectorAll('[data-chat-lang]');
    for (var i = 0; i < b.length; i++) b[i].setAttribute('aria-pressed', b[i].getAttribute('data-chat-lang') === chatLang); }
  function showPicker(){ log.innerHTML = ''; msgs = []; var sug = siteLang();
    var d = add('bot', null, '<span class="bec-pick-q">เลือกภาษาที่ต้องการคุย<br>Choose your language</span>'+
      '<span class="bec-pick"><button type="button" data-chat-lang="th" lang="th"'+(sug==='th'?' class="sug"':'')+'>ไทย</button>'+
      '<button type="button" data-chat-lang="en" lang="en"'+(sug==='en'?' class="sug"':'')+'>English</button></span>');
    d.classList.add('bec-picker'); lockInput(true); markHeader();
    var s2 = d.querySelector('.sug'); if (s2) s2.focus(); }
  function pick(l){ chatLang = l; try { sessionStorage.setItem(LKEY, l); } catch (e) {}
    gen++; log.innerHTML = ''; msgs = []; busy = false;
    var g = add('bot', CL[l].hello); g.setAttribute('lang', l);
    lockInput(false); markHeader(); input.focus(); }
  root.addEventListener('click', function(e){ var b = e.target.closest && e.target.closest('[data-chat-lang]'); if (!b || !EP) return;
    var l = b.getAttribute('data-chat-lang'); if (l === chatLang && log.childNodes.length && !log.querySelector('.bec-picker')) return; pick(l); });
  function add(role, text, html, key){ var d = document.createElement('div'); d.className = 'bec-m bec-' + role;
    if (key) d.setAttribute('data-i18n', key);
    if (html) d.innerHTML = html; else d.textContent = text; log.appendChild(d); log.scrollTop = log.scrollHeight; return d; }
  function open(o){ panel.hidden = !o; fab.setAttribute('aria-expanded', o); root.classList.toggle('open', o);
    if (o && !log.childNodes.length) {
      if (EP) { if (chatLang) pick(chatLang); else showPicker(); }
      else add('bot', null, 'Hi! 👋 Chat is coming soon. In the meantime, have a look at our <a href="contact.html">Contact page</a>.', 'chat_soon');
      if (window.BE_I18N) window.BE_I18N.apply(log);
    }
    if (o && EP && chatLang) input.focus(); }
  if (EP) { lockInput(!chatLang); markHeader(); }
  else { root.querySelector('.bec-lang').hidden = true; input.disabled = true; input.setAttribute('data-i18n-attr', 'placeholder:chat_soon_ph'); input.placeholder = 'Chat is coming soon'; form.querySelector('button').disabled = true; }
  fab.addEventListener('click', function(){ open(panel.hidden); });
  root.querySelector('.bec-x').addEventListener('click', function(){ open(false); fab.focus(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && !panel.hidden) { open(false); fab.focus(); } });
  form.addEventListener('submit', function(e){
    e.preventDefault(); var t = input.value.trim(); if (!t || busy || !EP || !chatLang) return;
    input.value = ''; add('user', t); msgs.push({role:'user', content:t}); msgs = msgs.slice(-10);
    busy = true; var my = gen, L = CL[chatLang], w = add('bot', L.typing); w.setAttribute('lang', chatLang); w.classList.add('bec-wait');
    fetch(EP, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({messages: msgs, lang: chatLang})})
      .then(function(r){ return r.json().then(function(j){ if (!r.ok) throw new Error(j.error || r.status); return j; }); })
        .then(function(j){ if (my !== gen) return; var a = (j.reply || '').trim() || L.noanswer;
        w.classList.remove('bec-wait'); w.textContent = a; msgs.push({role:'assistant', content:a}); })
        .catch(function(){ if (my !== gen) return; w.classList.remove('bec-wait'); w.innerHTML = L.error; msgs.pop(); })
      .then(function(){ if (my !== gen) return; busy = false; log.scrollTop = log.scrollHeight; });
  });
})();
