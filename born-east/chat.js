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
  function add(role, text, html, key){ var d = document.createElement('div'); d.className = 'bec-m bec-' + role;
    if (key) d.setAttribute('data-i18n', key);
    if (html) d.innerHTML = html; else d.textContent = text; log.appendChild(d); log.scrollTop = log.scrollHeight; return d; }
  function open(o){ panel.hidden = !o; fab.setAttribute('aria-expanded', o); root.classList.toggle('open', o);
    if (o && !log.childNodes.length) {
      if (EP) add('bot', null, 'Hi! 👋 Ask me anything about Born East’s services or how we work.', 'chat_hello');
      else add('bot', null, 'Hi! 👋 Chat is coming soon. In the meantime, have a look at our <a href="contact.html">Contact page</a>.', 'chat_soon');
      if (window.BE_I18N) window.BE_I18N.apply(log);
    }
    if (o && EP) input.focus(); }
  if (!EP) { input.disabled = true; input.setAttribute('data-i18n-attr', 'placeholder:chat_soon_ph'); input.placeholder = 'Chat is coming soon'; form.querySelector('button').disabled = true; }
  fab.addEventListener('click', function(){ open(panel.hidden); });
  root.querySelector('.bec-x').addEventListener('click', function(){ open(false); fab.focus(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && !panel.hidden) { open(false); fab.focus(); } });
  form.addEventListener('submit', function(e){
    e.preventDefault(); var t = input.value.trim(); if (!t || busy || !EP) return;
    input.value = ''; add('user', t); msgs.push({role:'user', content:t}); msgs = msgs.slice(-10);
    busy = true; var w = add('bot', T('chat_typing', 'Typing…')); w.classList.add('bec-wait');
    fetch(EP, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({messages: msgs})})
      .then(function(r){ return r.json().then(function(j){ if (!r.ok) throw new Error(j.error || r.status); return j; }); })
      .then(function(j){ var a = (j.reply || '').trim() || T('chat_noanswer', 'Sorry, I don’t have an answer for that. Please see our Contact page.');
        w.classList.remove('bec-wait'); w.textContent = a; msgs.push({role:'assistant', content:a}); })
      .catch(function(){ w.classList.remove('bec-wait'); w.innerHTML = T('chat_error', 'Sorry, chat isn’t available right now. Please try again later or visit our <a href="contact.html">Contact page</a>.'); msgs.pop(); })
      .then(function(){ busy = false; log.scrollTop = log.scrollHeight; });
  });
})();
