/**
 * Form Handler for Expats with Roots Application
 * Submits form data to Google Sheets via Apps Script
 */

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwwx5uA49HR2oMXs_6hDeaHC63zFT4mGBLlegyHa1i_6FfZiML7yVBaafJsa8VFM7OU/exec';

document.addEventListener('DOMContentLoaded', function() {
    const applicationForm = document.getElementById('application-form');

    if (applicationForm) {
        applicationForm.addEventListener('submit', handleFormSubmit);

        // Handle "Other" option for accelerator affiliation
        const acceleratorRadios = document.querySelectorAll('input[name="accelerator"]');
        const otherInput = document.getElementById('accelerator-other');

        acceleratorRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'Other' && this.checked) {
                    otherInput.style.display = 'block';
                    otherInput.required = true;
                } else if (this.value !== 'Other') {
                    otherInput.style.display = 'none';
                    otherInput.required = false;
                    otherInput.value = '';
                }
            });
        });
    }
});

async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;

    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

    // Collect form data
    const formData = {
        timestamp: new Date().toISOString(),
        name: form.querySelector('#name').value.trim(),
        position: form.querySelector('#position').value.trim(),
        company: form.querySelector('#company').value.trim(),
        accelerator: getAcceleratorValue(form),
        email: form.querySelector('#email').value.trim(),
        linkedin: form.querySelector('#linkedin').value.trim(),
        whatsapp: form.querySelector('#whatsapp').value.trim(),
        bottleneck: form.querySelector('input[name="bottleneck"]:checked')?.value || '',
        challenges: form.querySelector('#challenges').value.trim(),
        resources: form.querySelector('#resources').value.trim(),
        tried: form.querySelector('#tried').value.trim(),
        success: form.querySelector('#success').value.trim(),
        consent: form.querySelector('#consent').checked
    };

    // Validate required fields
    if (!validateFormData(formData)) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
        showNotification('Please fill in all required fields', 'error');
        return;
    }

    try {
        // Submit to Google Sheets
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Show success screen
        showSuccessScreen();

    } catch (error) {
        console.error('Error submitting form:', error);
        showNotification('There was an error submitting your application. Please try again or contact us directly.', 'error');

        // Re-enable submit button on error
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
}

function showSuccessScreen() {
    // Hide the form
    const form = document.getElementById('application-form');
    const progressIndicator = document.querySelector('.progress-indicator');
    const formHeader = document.querySelector('.form-header');

    if (form) form.style.display = 'none';
    if (progressIndicator) progressIndicator.style.display = 'none';
    if (formHeader) formHeader.style.display = 'none';

    // Show success screen
    const successScreen = document.getElementById('success-screen');
    if (successScreen) {
        successScreen.style.display = 'block';

        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Scroll the success screen into view
        setTimeout(() => {
            successScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

function getAcceleratorValue(form) {
    const checkedRadio = form.querySelector('input[name="accelerator"]:checked');
    if (!checkedRadio) return '';

    if (checkedRadio.value === 'Other') {
        return form.querySelector('#accelerator-other-text').value.trim();
    }
    return checkedRadio.value;
}

function validateFormData(data) {
    // Check required fields
    const requiredFields = ['name', 'position', 'company', 'email', 'linkedin', 'consent'];

    for (const field of requiredFields) {
        if (!data[field]) {
            return false;
        }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }

    // Validate LinkedIn URL format
    if (data.linkedin && !data.linkedin.includes('linkedin.com')) {
        showNotification('Please enter a valid LinkedIn profile URL', 'error');
        return false;
    }

    return true;
}

function showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.form-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `form-notification form-notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    // Insert at the top of the page
    document.body.insertBefore(notification, document.body.firstChild);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}
