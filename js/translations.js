const translations = {
    en: {
        signUpTitle: "Sign Up",
        signInTitle: "Sign In",
        username: "Username",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        language: "Language",
        signUpButton: "Sign Up",
        signInButton: "Sign In",
        haveAccount: "Already have an account?",
        noAccount: "Don't have an account?",
        signInLink: "Sign In",
        signUpLink: "Sign Up"
    },
    es: {
        signUpTitle: "Registrarse",
        signInTitle: "Iniciar sesión",
        username: "Nombre de usuario",
        email: "Correo electrónico",
        password: "Contraseña",
        confirmPassword: "Confirmar Contraseña",
        language: "Idioma",
        signUpButton: "Registrarse",
        signInButton: "Iniciar sesión",
        haveAccount: "¿Ya tienes una cuenta?",
        noAccount: "¿No tienes una cuenta?",
        signInLink: "Iniciar sesión",
        signUpLink: "Registrarse"
    },
    fr: {
        signUpTitle: "S'inscrire",
        signInTitle: "Se connecter",
        username: "Nom d'utilisateur",
        email: "Email",
        password: "Mot de passe",
        confirmPassword: "Confirmer Mot de passe",
        language: "Langue",
        signUpButton: "S'inscrire",
        signInButton: "Se connecter",
        haveAccount: "Vous avez déjà un compte?",
        noAccount: "Vous n'avez pas de compte?",
        signInLink: "Se connecter",
        signUpLink: "S'inscrire"
    }
    // Add more languages as needed
};

function loadTranslations() {
    const userLanguage = document.getElementById('language')?.value || 'en';
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[userLanguage] && translations[userLanguage][key]) {
            element.textContent = translations[userLanguage][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadTranslations();
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
        languageSelect.addEventListener('change', loadTranslations);
    }
});
