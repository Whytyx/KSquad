/* Born East contact form -> Worker /lead (same endpoint as the chat). No keys here: this file is public. */
(function(){
  var form = document.getElementById('lead-form'); if (!form) return;
  var EP = (window.BORN_EAST_CHAT_ENDPOINT || '').replace(/\/+$/, '');
  var note = document.getElementById('fnote');
  var EN = {
    thanks_this_form_isn_t: 'Thanks — this form isn’t connected yet, so your enquiry has not been sent.',
    form_sending: 'Sending…',
    form_ok_hot: 'Thanks! The owner will contact you today.',
    form_ok_warm: 'Thanks! The owner will contact you within 2-3 days.',
    form_invalid: 'Please check your name, business name and email address.',
    form_fail: 'Sorry, we couldn’t send your enquiry right now, so nothing was sent. Please try again later.'
  };
  // Fresh element per status so the TH/EN switcher always translates the current message.
  function status(key, cls){ var old = document.getElementById('fmsg'), p = document.createElement('p');
    p.id = 'fmsg'; p.className = 'note' + (cls ? ' ' + cls : ''); p.setAttribute('aria-live', 'polite'); p.setAttribute('data-i18n', key); p.innerHTML = EN[key];
    old.parentNode.replaceChild(p, old); if (window.BE_I18N) window.BE_I18N.apply(p.parentNode); }
  function post(body){ return fetch(EP + '/lead', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)})
    .then(function(r){ return r.json().catch(function(){ return {}; }); }); }
  function notConfigured(){ note.hidden = false; }
  if (!EP) notConfigured();
  else post({probe: true}).then(function(j){ if (j && j.reason === 'not_configured') notConfigured(); }).catch(function(){});
  form.addEventListener('submit', function(e){
    e.preventDefault(); if (!form.reportValidity()) return;
    var f = form.elements, btn = form.querySelector('button[type=submit]'), lang = (window.BE_I18N && window.BE_I18N.lang()) === 'th' ? 'th' : 'en';
    var type = f.start.checked ? 'hot' : 'warm';
    if (!EP) { status('thanks_this_form_isn_t'); return; }
    btn.disabled = true; status('form_sending');
    post({ type: type, name: f.name.value, business: f.business.value, email: f.email.value, phone: '', service: f.service.value,
           lang: lang, note: f.msg.value, messages: [], website: f.website.value, source: 'contact-form' })
      .then(function(j){
        if (j && j.ok === true) { status(type === 'hot' ? 'form_ok_hot' : 'form_ok_warm', 'ok'); form.reset(); }
        else if (j && j.reason === 'not_configured') { notConfigured(); status('thanks_this_form_isn_t'); }
        else if (j && j.reason === 'invalid') status('form_invalid');
        else status('form_fail');
      })
      .catch(function(){ status('form_fail'); })
      .then(function(){ btn.disabled = false; });
  });
})();
