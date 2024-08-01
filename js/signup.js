document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordStrengthDiv = document.getElementById('password-strength');
    const passwordMatchDiv = document.getElementById('password-match');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Perform form validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Passwords do not match.');
            return;
        }

        const data = new FormData(form);
        fetch('/signup', {
            method: 'POST',
            body: data
        }).then(response => response.json())
          .then(data => {
              if (data.success) {
                  alert('Sign up successful!');
                  window.location.href = 'signin.html';
              } else {
                  alert('Sign up failed. Please try again.');
              }
          });
    });

    passwordInput.addEventListener('input', () => {
        const strength = calculatePasswordStrength(passwordInput.value);
        passwordStrengthDiv.textContent = `Password Strength: ${strength}`;
    });

    confirmPasswordInput.addEventListener('input', () => {
        if (passwordInput.value === confirmPasswordInput.value) {
            passwordMatchDiv.textContent = 'Passwords match';
            passwordMatchDiv.style.color = 'green';
        } else {
            passwordMatchDiv.textContent = 'Passwords do not match';
            passwordMatchDiv.style.color = 'red';
        }
    });

    // Load translations
    loadTranslations();
});

function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    switch (strength) {
        case 1:
        case 2:
            return 'Weak';
        case 3:
        case 4:
            return 'Moderate';
        case 5:
            return 'Strong';
        default:
            return '';
    }
}
