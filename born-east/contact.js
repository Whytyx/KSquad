/* Born East contact form -> Worker POST /contact (Worker sends via Web3Forms). No keys here: this file is public. */
(function(){
  var form = document.getElementById('lead-form'); if (!form) return;
  var EP = (window.BORN_EAST_CHAT_ENDPOINT || '').replace(/\/+$/, '');
  var note = document.getElementById('fnote');
  var EN = {
    form_not_live: 'Preview: the enquiry service is not switched on yet, so messages cannot be sent from this page.',
    form_sending: 'Sending…',
    form_ok: 'Thank you. We’ve received your enquiry and will be in touch to discuss next steps.',
    form_missing: 'Please complete the required fields: ',
    form_bad_email: 'Please check your email address.',
    form_rate: 'Too many attempts. Please wait a minute and try again.',
    form_fail: 'Sorry, we couldn’t send your enquiry right now, so nothing was sent. Please try again later.',
    fl_name: 'Name', fl_business: 'Business name', fl_email: 'Email address', fl_service: 'Type of support', fl_msg: 'Description', fl_phone: 'Phone number'
  };
  function T(k){ return window.BE_I18N ? window.BE_I18N.t(k, EN[k]) : EN[k]; }
  var cur = null;
  function status(key, cls, fields){ cur = [key, cls, fields]; var p = document.getElementById('fmsg');
    p.hidden = false; p.className = 'note' + (cls ? ' ' + cls : ''); p.setAttribute('role', cls === 'err' ? 'alert' : 'status');
    p.textContent = T(key) + (fields ? fields.map(function(f){ return T('fl_' + f); }).join(', ') + '.' : ''); }
  document.addEventListener('be:lang', function(){ if (cur) status(cur[0], cur[1], cur[2]); });
  function mark(fields){ ['name','business','email','phone','service','msg'].forEach(function(n){ var el = form.elements[n]; if (el) el.removeAttribute('aria-invalid'); });
    (fields || []).forEach(function(n){ var el = form.elements[n]; if (el) el.setAttribute('aria-invalid', 'true'); });
    if (fields && fields.length && form.elements[fields[0]]) form.elements[fields[0]].focus(); }
  function check(){ var f = form.elements, bad = [];
    ['name','business','email','service','msg'].forEach(function(n){ if (!f[n].value.trim()) bad.push(n); });
    return bad; }
  if (!EP) note.hidden = false;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var bad = check(); if (bad.length) { mark(bad); status('form_missing', 'err', bad); return; }
    var f = form.elements;
    if (!f.email.checkValidity()) { mark(['email']); status('form_bad_email', 'err'); return; }
    mark([]);
    if (!EP) { status('form_not_live', 'err'); return; }
    var btn = form.querySelector('button[type=submit]'); btn.disabled = true; status('form_sending');
    fetch(EP + '/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
      name: f.name.value, business: f.business.value, email: f.email.value, phone: f.phone.value, service: f.service.value,
      message: f.msg.value, website: f.website.value, lang: (window.BE_I18N && window.BE_I18N.lang()) === 'th' ? 'th' : 'en' }) })
      .then(function(r){ return r.json().catch(function(){ return { _status: r.status }; }).then(function(j){ j._status = r.status; return j; }); })
      .then(function(j){
        if (j.ok === true) { status('form_ok', 'ok'); form.reset(); }
        else if (j.reason === 'invalid' && j.fields) { mark(j.fields); var only = j.fields.filter(function(x){ return x !== 'email' && x !== 'phone'; });
          status(only.length ? 'form_missing' : 'form_bad_email', 'err', only.length ? only : null); }
        else if (j.reason === 'rate_limited') status('form_rate', 'err');
        else if (j.reason === 'not_configured' || j._status === 404 || j._status === 403) { note.hidden = false; status('form_not_live', 'err'); }
        else status('form_fail', 'err');
      })
      .catch(function(){ status('form_fail', 'err'); })
      .then(function(){ btn.disabled = false; });
  });
})();
/* Free 20-min call: contact.html?call=1 shows the Cal.com inline booking calendar (official embed, no keys)
   above the enquiry form. ?service=people etc. still preselects the support type in the form below.
   Cal.com is only loaded on ?call=1, so the plain contact page makes no third-party requests. */
(function(){ try{ var q=new URLSearchParams(location.search), f=document.getElementById('lead-form'); if(!f) return;
  var s=q.get('service'); if(s&&f.elements.service.querySelector('option[value="'+s+'"]')) f.elements.service.value=s;
  if(q.get('call')!=='1') return;
  var n=document.getElementById('callnote'); if(n) n.hidden=false;
  var box=document.getElementById('bk-cal'); if(!box) return;
  (function (C, A, L) { var p = function (a, ar) { a.q.push(ar); }; var d = C.document; C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { var api = function () { p(api, arguments); }; var namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
  var NS='be-call', LINK='borneastsolutions/free-20-minute-call';
  Cal('init', NS, { origin: 'https://app.cal.com' });
  Cal.ns[NS]('inline', { elementOrSelector: '#bk-cal', calLink: LINK, layout: 'month_view', config: { layout: 'month_view', theme: 'light' } });
  Cal.ns[NS]('ui', { theme: 'light', hideEventTypeDetails: false, layout: 'month_view', cssVarsPerTheme: { light: { 'cal-brand': '#121212' } } });
  Cal.ns[NS]('on', { action: 'linkReady', callback: function(){ var l=document.getElementById('bk-load'); if(l) l.hidden=true; box.classList.add('ready'); } });
}catch(e){} })();
