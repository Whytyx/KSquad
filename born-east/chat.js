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
      '<div class="bec-foot"><button type="button" class="bec-ready" hidden>I’m ready</button></div>'+
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
          error: 'Sorry, chat isn’t available right now. Please try again later or visit our <a href="contact.html">Contact page</a>.',
          ready: 'I’m ready', closeQ: 'Ready for the next step?', hot: 'Start now', warm: 'Get more info first',
          fHot: 'Great, let’s get you started.', fWarm: 'Happy to send you more information.',
          name: 'Your name', business: 'Business name', email: 'Email', phone: 'Phone (optional)',
          consent: 'We’ll use this only to contact you about your enquiry.', send: 'Send', cancel: 'Cancel', sending: 'Sending…',
          need: 'Please fill in your name, business name and email.', badEmail: 'Please enter a valid email address.', badPhone: 'Please check the phone number.',
          okHot: 'Thanks! The owner will contact you today.', okWarm: 'Thanks! The owner will contact you within 2-3 days.',
          notConf: 'Thanks! Sending details through the chat isn’t switched on yet, so your details have <strong>not</strong> been sent. Please see our <a href="contact.html">Contact page</a> (contact details coming soon).',
          fail: 'Sorry, we couldn’t send your details right now, so nothing was sent. Please try again later or visit our <a href="contact.html">Contact page</a>.' },
    th: { hello: 'สวัสดี 👋 สอบถามเรื่องบริการหรือรูปแบบการทำงานของ Born East ได้เลย', ph: 'พิมพ์คำถามของคุณ…', typing: 'กำลังพิมพ์…',
          noanswer: 'ขออภัย ยังไม่มีข้อมูลสำหรับคำถามนี้ โปรดดูที่หน้าติดต่อเรา',
          error: 'ขออภัย ขณะนี้ระบบแชทยังใช้งานไม่ได้ โปรดลองใหม่อีกครั้งภายหลัง หรือแวะดู<a href="contact.html">หน้าติดต่อเรา</a>',
          ready: 'พร้อมเริ่มแล้ว', closeQ: 'พร้อมไปขั้นตอนถัดไปไหมครับ', hot: 'เริ่มงานเลย', warm: 'ขอข้อมูลเพิ่มก่อน',
          fHot: 'ยอดเลยครับ มาเริ่มกันเลย', fWarm: 'ยินดีส่งข้อมูลเพิ่มเติมให้ครับ',
          name: 'ชื่อของคุณ', business: 'ชื่อธุรกิจ', email: 'อีเมล', phone: 'เบอร์โทร (ไม่บังคับ)',
          consent: 'เราจะใช้ข้อมูลนี้เพื่อติดต่อกลับเรื่องที่คุณสอบถามเท่านั้น', send: 'ส่งข้อมูล', cancel: 'ยกเลิก', sending: 'กำลังส่ง…',
          need: 'กรุณากรอกชื่อ ชื่อธุรกิจ และอีเมล', badEmail: 'กรุณากรอกอีเมลให้ถูกต้อง', badPhone: 'กรุณาตรวจสอบเบอร์โทรอีกครั้ง',
          okHot: 'ขอบคุณครับ เจ้าของจะติดต่อกลับภายในวันนี้', okWarm: 'ขอบคุณครับ เจ้าของจะติดต่อกลับภายใน 2-3 วัน',
          notConf: 'ขอบคุณครับ ตอนนี้ระบบส่งข้อมูลผ่านแชทยังไม่เปิดใช้งาน ข้อมูลของคุณจึง<strong>ยังไม่ได้ถูกส่ง</strong> โปรดดูที่<a href="contact.html">หน้าติดต่อเรา</a> (ช่องทางติดต่อจะแจ้งให้ทราบเร็ว ๆ นี้)',
          fail: 'ขออภัย ขณะนี้ส่งข้อมูลไม่สำเร็จ ข้อมูลจึงยังไม่ได้ถูกส่ง โปรดลองใหม่อีกครั้งภายหลัง หรือแวะดู<a href="contact.html">หน้าติดต่อเรา</a>' }
  };
  var LKEY = 'be-chat-lang', chatLang = null, gen = 0, closed = false, lastService = 'general';
  var readyBtn = root.querySelector('.bec-ready');
  try { var sv = sessionStorage.getItem(LKEY); if (sv === 'th' || sv === 'en') chatLang = sv; } catch (e) {}
  var siteLang = function(){ return (window.BE_I18N && window.BE_I18N.lang && window.BE_I18N.lang()) === 'th' ? 'th' : 'en'; };
  var sendBtn = form.querySelector('button');
  function lockInput(locked){ input.disabled = locked; sendBtn.disabled = locked;
    input.removeAttribute('data-i18n-attr');
    input.placeholder = locked ? 'เลือกภาษาก่อน / Choose a language first' : CL[chatLang].ph;
    input.setAttribute('lang', chatLang || ''); }
  function setReady(){ if (!EP) return; var l = chatLang || siteLang(); readyBtn.hidden = false; readyBtn.textContent = '✋ ' + CL[l].ready; readyBtn.setAttribute('lang', l); }
  function esc(t){ return String(t).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function closeCard(service){ var L = CL[chatLang]; lastService = service || 'general';
    var old = log.querySelector('.bec-close'); if (old) old.remove();
    var d = add('bot', null, '<span class="bec-pick-q">'+esc(L.closeQ)+'</span><span class="bec-pick">'+
      '<button type="button" class="sug" data-lead="hot">🔥 '+esc(L.hot)+'</button><button type="button" data-lead="warm">'+esc(L.warm)+'</button></span>');
    d.classList.add('bec-close'); d.setAttribute('lang', chatLang); }
  function leadForm(type){ var L = CL[chatLang]; var old = log.querySelector('.bec-lead'); if (old) old.remove();
    var d = document.createElement('form'); d.className = 'bec-m bec-bot bec-lead'; d.setAttribute('lang', chatLang); d.noValidate = true;
    d.innerHTML = '<strong class="bec-lead-t">'+esc(type === 'hot' ? L.fHot : L.fWarm)+'</strong>'+
      '<label>'+esc(L.name)+'<input name="name" maxlength="100" autocomplete="name" required></label>'+
      '<label>'+esc(L.business)+'<input name="business" maxlength="120" autocomplete="organization" required></label>'+
      '<label>'+esc(L.email)+'<input name="email" type="email" maxlength="200" autocomplete="email" required></label>'+
      '<label>'+esc(L.phone)+'<input name="phone" type="tel" maxlength="40" autocomplete="tel"></label>'+
      '<label class="bec-hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>'+
      '<small class="bec-consent">'+esc(L.consent)+'</small><p class="bec-err" role="alert" hidden></p>'+
      '<span class="bec-pick"><button type="submit" class="sug">'+esc(L.send)+'</button><button type="button" data-cancel>'+esc(L.cancel)+'</button></span>';
    log.appendChild(d); d.scrollIntoView({block:'nearest'}); log.scrollTop = log.scrollHeight; d.querySelector('[name=name]').focus();
    d.querySelector('[data-cancel]').addEventListener('click', function(){ d.remove(); input.focus(); });
    d.addEventListener('submit', function(e){ e.preventDefault(); var f = d.elements, err = d.querySelector('.bec-err'), my = gen;
      var v = { name: f.name.value.trim(), business: f.business.value.trim(), email: f.email.value.trim(), phone: f.phone.value.trim() };
      var msg = (!v.name || !v.business || !v.email) ? L.need : !/^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[A-Za-z]{2,}$/.test(v.email) ? L.badEmail : (v.phone && !/^[0-9+()\-.\s]{6,40}$/.test(v.phone)) ? L.badPhone : '';
      if (msg) { err.textContent = msg; err.hidden = false; return; }
      err.hidden = true; var sb = d.querySelector('[type=submit]'); sb.disabled = true; sb.textContent = L.sending;
      fetch(EP.replace(/\/+$/, '') + '/lead', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({
        type: type, name: v.name, business: v.business, email: v.email, phone: v.phone, service: lastService, lang: chatLang,
        messages: msgs, website: f.website.value, source: 'chat' })})
        .then(function(r){ return r.json().catch(function(){ return {}; }); })
        .then(function(j){ if (my !== gen) return;
          if (j && j.ok === true) { d.remove(); add('bot', type === 'hot' ? L.okHot : L.okWarm).setAttribute('lang', chatLang); }
          else if (j && j.reason === 'not_configured') { d.remove(); add('bot', null, L.notConf).setAttribute('lang', chatLang); }
          else if (j && j.reason === 'invalid') { err.textContent = (j.fields || []).indexOf('email') > -1 ? L.badEmail : (j.fields || []).indexOf('phone') > -1 ? L.badPhone : L.need; err.hidden = false; sb.disabled = false; sb.textContent = L.send; }
          else { d.remove(); add('bot', null, L.fail).setAttribute('lang', chatLang); } })
        .catch(function(){ if (my !== gen) return; d.remove(); add('bot', null, L.fail).setAttribute('lang', chatLang); });
    }); }
  log.addEventListener('click', function(e){ var b = e.target.closest && e.target.closest('[data-lead]'); if (!b || !chatLang) return; leadForm(b.getAttribute('data-lead')); });
  readyBtn.addEventListener('click', function(){ if (!chatLang) pick(siteLang()); leadForm('hot'); });
  function markHeader(){ var b = root.querySelectorAll('[data-chat-lang]');
    for (var i = 0; i < b.length; i++) b[i].setAttribute('aria-pressed', b[i].getAttribute('data-chat-lang') === chatLang); }
  function showPicker(){ log.innerHTML = ''; msgs = []; var sug = siteLang();
    var d = add('bot', null, '<span class="bec-pick-q">เลือกภาษาที่ต้องการคุย<br>Choose your language</span>'+
      '<span class="bec-pick"><button type="button" data-chat-lang="th" lang="th"'+(sug==='th'?' class="sug"':'')+'>ไทย</button>'+
      '<button type="button" data-chat-lang="en" lang="en"'+(sug==='en'?' class="sug"':'')+'>English</button></span>');
    d.classList.add('bec-picker'); lockInput(true); markHeader();
    var s2 = d.querySelector('.sug'); if (s2) s2.focus(); }
  function pick(l){ chatLang = l; try { sessionStorage.setItem(LKEY, l); } catch (e) {}
    gen++; log.innerHTML = ''; msgs = []; busy = false; closed = false; lastService = 'general';
    var g = add('bot', CL[l].hello); g.setAttribute('lang', l);
    lockInput(false); markHeader(); setReady(); input.focus(); }
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
  if (EP) { lockInput(!chatLang); markHeader(); setReady(); document.addEventListener('be:lang', function(){ if (!chatLang) setReady(); }); }
  else { root.querySelector('.bec-lang').hidden = true; input.disabled = true; input.setAttribute('data-i18n-attr', 'placeholder:chat_soon_ph'); input.placeholder = 'Chat is coming soon'; form.querySelector('button').disabled = true; }
  fab.addEventListener('click', function(){ open(panel.hidden); });
  root.querySelector('.bec-x').addEventListener('click', function(){ open(false); fab.focus(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && !panel.hidden) { open(false); fab.focus(); } });
  form.addEventListener('submit', function(e){
    e.preventDefault(); var t = input.value.trim(); if (!t || busy || !EP || !chatLang) return;
    input.value = ''; add('user', t); msgs.push({role:'user', content:t}); msgs = msgs.slice(-10);
    busy = true; var my = gen, L = CL[chatLang], w = add('bot', L.typing); w.setAttribute('lang', chatLang); w.classList.add('bec-wait');
    fetch(EP, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({messages: msgs, lang: chatLang, closed: closed})})
      .then(function(r){ return r.json().then(function(j){ if (!r.ok) throw new Error(j.error || r.status); return j; }); })
        .then(function(j){ if (my !== gen) return; var a = (j.reply || '').trim() || L.noanswer;
        w.classList.remove('bec-wait'); w.textContent = a; msgs.push({role:'assistant', content:a});
        if (j.close) { closed = true; closeCard(j.close); } })
        .catch(function(){ if (my !== gen) return; w.classList.remove('bec-wait'); w.innerHTML = L.error; msgs.pop(); })
      .then(function(){ if (my !== gen) return; busy = false; log.scrollTop = log.scrollHeight; });
  });
})();
