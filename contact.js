
(function () {
  const select     = document.getElementById('contact-how');
  const emailBox   = document.getElementById('email-box');
  const phoneBox   = document.getElementById('phone-box');
  const emailInput = document.getElementById('email-input');
  const phoneInput = document.getElementById('phone-input');
  const announce   = document.getElementById('announce');
  const optNone  = document.getElementById('opt-none');
  const optEmail = document.getElementById('opt-email');
  const optPhone = document.getElementById('opt-phone');

  function hideAll() {
    emailBox.style.display = 'none';
    phoneBox.style.display = 'none';
    emailInput.required = false;
    phoneInput.required = false;
    announce.textContent = '';
  }

  function handleChange(value) {
    hideAll();
    if (value === 'email') {
      emailBox.style.display = 'block';
      emailInput.required = true;
      emailInput.focus();
      announce.textContent = `Field for ${optEmail.textContent.toLowerCase()} is now visible.`;
    } else if (value === 'phone') {
      phoneBox.style.display = 'block';
      phoneInput.required = true;
      phoneInput.focus();
      announce.textContent = `Field for ${optPhone.textContent.toLowerCase()} is now visible.`;
    }
  }

  hideAll();
  select.value = optNone.value;

  select.addEventListener('change', (e) => handleChange(e.target.value));

  document.getElementById('contact-form').addEventListener('submit', (e) => {
    if (!select.value) {
      e.preventDefault();
      announce.textContent = 'Please choose how we should contact you.';
      select.focus();
    }
  });
})();
