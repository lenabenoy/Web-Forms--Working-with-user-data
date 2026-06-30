document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    // Helper functions to manage style validation state wrappers
    function invalidateField(inputElement, errorElementId) {
        inputElement.parentElement.classList.add('invalid-state');
        if (errorElementId) {
            document.getElementById(errorElementId).style.display = 'block';
        }
    }

    function resetFieldState(inputElement, errorElementId) {
        inputElement.parentElement.classList.remove('invalid-state');
        if (errorElementId) {
            document.getElementById(errorElementId).style.display = 'none';
        }
    }

    // Intercept default submission loop pipelines
    form.addEventListener('submit', (event) => {
        let isFormValid = true;

        // 1. Full Name Processing
        const username = document.getElementById('username');
        if (username.value.trim().length < 3) {
            invalidateField(username, 'name-error');
            isFormValid = false;
        } else {
            resetFieldState(username, 'name-error');
        }

        // 2. Email Regular Expression Parsing Verification
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            invalidateField(email, 'email-error');
            isFormValid = false;
        } else {
            resetFieldState(email, 'email-error');
        }

        // 3. Password Minimum Matrix Bounds Checks
        const password = document.getElementById('password');
        if (password.value.length < 8) {
            invalidateField(password, 'password-error');
            isFormValid = false;
        } else {
            resetFieldState(password, 'password-error');
        }

        // 4. Age Boundary Metrics Limits
        const age = document.getElementById('age');
        if (!age.value || age.value < 18 || age.value > 120) {
            invalidateField(age, 'age-error');
            isFormValid = false;
        } else {
            resetFieldState(age, 'age-error');
        }

        // 5. Native Select Elements Verification
        const role = document.getElementById('role');
        if (!role.value) {
            invalidateField(role, 'role-error');
            isFormValid = false;
        } else {
            resetFieldState(role, 'role-error');
        }

        // 6. Explicit Checkbox State Validations
        const terms = document.getElementById('terms');
        const termsError = document.getElementById('terms-error');
        if (!terms.checked) {
            termsError.style.display = 'block';
            isFormValid = false;
        } else {
            termsError.style.display = 'none';
        }

        // Fallback execution handler block
        if (!isFormValid) {
            event.preventDefault(); // HALT payload routing if constraints failed
        } else {
            alert('Form submitted successfully! 🎉');
        }
    });
});