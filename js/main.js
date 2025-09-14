// small script: menu toggling, year setter, form validation
document.addEventListener('DOMContentLoaded', () => {
  // menu toggle
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // set year in footers
  const year = new Date().getFullYear();
  ['year','year-2','year-3','year-4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = year;
  });

  // simple client-side form validation / UX
  const form = document.getElementById('contact-form');
  if (form) {
    const result = document.getElementById('form-result');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      // basic checks
      if (!name.value || name.value.length < 2) {
        result.textContent = 'Please enter your name (min 2 characters).';
        name.focus();
        return;
      }
      if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
        result.textContent = 'Please enter a valid email address.';
        email.focus();
        return;
      }
      if (!message.value || message.value.length < 10) {
        result.textContent = 'Message must be at least 10 characters.';
        message.focus();
        return;
      }

      // if you want to hook this to a backend / Formspree / Netlify forms, replace here
      result.textContent = 'Thanks — your message was validated locally. (No server configured.)';
      form.reset();
    });
  }
});
