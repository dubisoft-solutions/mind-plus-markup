//= ../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
//= ../../node_modules/jquery/dist/jquery.slim.min.js
//= ../../node_modules/bootstrap-select/dist/js/bootstrap-select.min.js

//= https://www.google.com/recaptcha/api.js


$(function() {
    $('.selectpicker').selectpicker();
    initRecaptcha('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', ".grecaptcha");
    initFormValidation();
});

function initRecaptcha(sitekey, containerSelector) {
    const recaptchaContainers = document.querySelectorAll(containerSelector);
    recaptchaContainers.forEach(recaptchaContainer => {
        // If reCAPTCHA is still loading, grecaptcha will be undefined.
        grecaptcha.ready(function() {
            grecaptcha.render(recaptchaContainer, {
                sitekey: sitekey
            });
        });
    })
}

function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
}