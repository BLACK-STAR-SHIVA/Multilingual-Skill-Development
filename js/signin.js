document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signinForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = new FormData(form);
        fetch('/signin', {
            method: 'POST',
            body: data
        }).then(response => response.json())
          .then(data => {
              if (data.success) {
                  alert('Sign in successful!');
                  window.location.href = 'dashboard.html'; // Change this to the actual dashboard or home page
              } else {
                  alert('Sign in failed. Please try again.');
              }
          });
    });

    // Load translations
    loadTranslations();
});
