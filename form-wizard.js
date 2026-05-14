/**
 * Form Wizard - Multi-step form navigation
 * Handles step navigation, validation, and progress tracking
 */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('application-form');
    if (!form) return;

    let currentStep = 1;
    const totalSteps = 2;

    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn2');

    // Initialize
    showStep(currentStep);

    // Next button handler
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
            }
        });
    }

    // Previous button handler
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentStep--;
            showStep(currentStep);
        });
    }

    function showStep(step) {
        // Hide all steps
        const steps = document.querySelectorAll('.form-step');
        steps.forEach(s => s.classList.remove('active'));

        // Show current step
        const currentStepElement = document.querySelector(`.form-step[data-step="${step}"]`);
        if (currentStepElement) {
            currentStepElement.classList.add('active');
        }

        // Update progress indicator
        updateProgressIndicator(step);

        // Scroll to top of form
        const formContainer = document.querySelector('.form-container');
        if (formContainer) {
            formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function updateProgressIndicator(step) {
        const progressSteps = document.querySelectorAll('.progress-step');

        progressSteps.forEach((progressStep, index) => {
            const stepNumber = index + 1;

            if (stepNumber < step) {
                progressStep.classList.add('completed');
                progressStep.classList.remove('active');
            } else if (stepNumber === step) {
                progressStep.classList.add('active');
                progressStep.classList.remove('completed');
            } else {
                progressStep.classList.remove('active', 'completed');
            }
        });
    }

    function validateStep(step) {
        const currentStepElement = document.querySelector(`.form-step[data-step="${step}"]`);
        if (!currentStepElement) return false;

        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;
        let firstInvalidField = null;

        requiredFields.forEach(field => {
            // Remove previous error styling
            field.style.borderColor = '';

            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#f44336';

                if (!firstInvalidField) {
                    firstInvalidField = field;
                }
            } else if (field.type === 'email') {
                // Validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    isValid = false;
                    field.style.borderColor = '#f44336';

                    if (!firstInvalidField) {
                        firstInvalidField = field;
                    }
                }
            } else if (field.type === 'url') {
                // Validate URL format (specifically LinkedIn)
                if (field.id === 'linkedin' && !field.value.includes('linkedin.com')) {
                    isValid = false;
                    field.style.borderColor = '#f44336';

                    if (!firstInvalidField) {
                        firstInvalidField = field;
                    }
                }
            }
        });

        if (!isValid) {
            // Show error message
            showValidationError('Please fill in all required fields correctly.');

            // Focus on first invalid field
            if (firstInvalidField) {
                firstInvalidField.focus();
                firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            return false;
        }

        return true;
    }

    function showValidationError(message) {
        // Remove any existing error messages
        const existingError = document.querySelector('.validation-error');
        if (existingError) {
            existingError.remove();
        }

        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'validation-error';
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>${message}</span>
        `;

        // Insert at top of current step
        const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        if (currentStepElement) {
            currentStepElement.insertBefore(errorDiv, currentStepElement.firstChild);

            // Auto-remove after 5 seconds
            setTimeout(() => {
                errorDiv.classList.add('fade-out');
                setTimeout(() => errorDiv.remove(), 300);
            }, 5000);
        }
    }

    // Clear error styling on input
    const allInputs = form.querySelectorAll('input, textarea, select');
    allInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '';
        });
    });
});
