// Referral Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Company list
    const companies = [
        'Google',
        'Meta (Facebook)',
        'Amazon',
        'Microsoft',
        'Apple',
        'Netflix',
        'Uber',
        'Airbnb',
        'Spotify',
        'Tesla',
        'SAP',
        'Siemens',
        'BMW',
        'Mercedes-Benz',
        'Volkswagen',
        'Delivery Hero',
        'Zalando',
        'N26',
        'HelloFresh',
        'SoundCloud',
        'Booking.com',
        'Adidas',
        'Allianz',
        'Deutsche Bank',
        'Salesforce',
        'Oracle',
        'Adobe',
        'IBM',
        'Intel',
        'NVIDIA',
        'Stripe',
        'PayPal',
        'Twitter (X)',
        'LinkedIn',
        'Snap',
        'TikTok',
        'Reddit',
        'Shopify',
        'Square',
        'Lyft',
        'DoorDash',
        'Instacart',
        'GitHub',
        'GitLab',
        'Atlassian',
        'Zoom',
        'Slack',
        'Figma',
        'Notion',
        'Dropbox'
    ].sort(); // Sort alphabetically

    // Autocomplete elements
    const companySearchInput = document.getElementById('companySearch');
    const companySelectHidden = document.getElementById('companySelect');
    const isExistingCompanyHidden = document.getElementById('isExistingCompany');
    const autocompleteList = document.getElementById('autocompleteList');
    const referralForm = document.getElementById('referralForm');

    let selectedIndex = -1;
    let filteredCompanies = [];
    let selectedCompany = null;
    let isExistingCompany = false;

    // Autocomplete functionality
    if (companySearchInput) {
        companySearchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim();

            if (searchTerm.length === 0) {
                hideAutocomplete();
                return;
            }

            // Filter companies
            filteredCompanies = companies.filter(company =>
                company.toLowerCase().includes(searchTerm.toLowerCase())
            );

            // Show results
            showAutocomplete(searchTerm);
        });

        // Keyboard navigation
        companySearchInput.addEventListener('keydown', function(e) {
            const items = autocompleteList.querySelectorAll('.autocomplete-item');

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
                updateSelection(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                selectedIndex = Math.max(selectedIndex - 1, -1);
                updateSelection(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (selectedIndex >= 0 && items[selectedIndex]) {
                    items[selectedIndex].click();
                } else if (filteredCompanies.length === 0 && this.value.trim()) {
                    selectOtherCompany(this.value.trim());
                }
            } else if (e.key === 'Escape') {
                hideAutocomplete();
            }
        });

        // Click outside to close
        document.addEventListener('click', function(e) {
            if (!companySearchInput.contains(e.target) && !autocompleteList.contains(e.target)) {
                hideAutocomplete();
            }
        });
    }

    function showAutocomplete(searchTerm) {
        autocompleteList.innerHTML = '';
        selectedIndex = -1;

        if (filteredCompanies.length > 0) {
            filteredCompanies.forEach((company, index) => {
                const item = createAutocompleteItem(company, searchTerm, false);
                autocompleteList.appendChild(item);
            });
        }

        // Show "Not listed" option if no exact match or if user wants to add new company
        if (filteredCompanies.length === 0 || !filteredCompanies.some(c => c.toLowerCase() === searchTerm.toLowerCase())) {
            const otherItem = createAutocompleteItem(
                `"${searchTerm}" (not in our list yet)`,
                searchTerm,
                true
            );
            autocompleteList.appendChild(otherItem);
        }

        autocompleteList.classList.add('active');
    }

    function createAutocompleteItem(text, searchTerm, isOther) {
        const item = document.createElement('div');
        item.className = 'autocomplete-item' + (isOther ? ' other-option' : '');

        if (isOther) {
            item.innerHTML = `<i class="fas fa-plus-circle"></i>${text}`;
            item.addEventListener('click', function() {
                selectOtherCompany(searchTerm);
            });
        } else {
            // Highlight matching text
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const highlightedText = text.replace(regex, '<span class="company-match-highlight">$1</span>');
            item.innerHTML = highlightedText;

            item.addEventListener('click', function() {
                selectCompany(text);
            });
        }

        return item;
    }

    function selectCompany(company) {
        selectedCompany = company;
        isExistingCompany = true;
        companySearchInput.value = company;
        companySelectHidden.value = company;
        isExistingCompanyHidden.value = 'true';
        hideAutocomplete();
    }

    function selectOtherCompany(companyName) {
        selectedCompany = companyName;
        isExistingCompany = false;
        companySearchInput.value = companyName;
        companySelectHidden.value = companyName;
        isExistingCompanyHidden.value = 'false';
        hideAutocomplete();
    }

    function updateSelection(items) {
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        });
    }

    function hideAutocomplete() {
        autocompleteList.classList.remove('active');
        selectedIndex = -1;
    }

    // Form submission handler
    if (referralForm) {
        referralForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                linkedinProfile: document.getElementById('linkedinProfile').value,
                jobUrl: document.getElementById('jobUrl').value,
                company: companySearchInput.value,
                isExistingCompany: isExistingCompany,
                message: document.getElementById('message').value,
                consent: document.getElementById('consent').checked,
                timestamp: new Date().toISOString()
            };

            // Validate
            if (!formData.consent) {
                alert('Please agree to share your information before submitting.');
                return;
            }

            // Log form data (for development - replace with actual API call)
            console.log('Form Data:', formData);

            // Show loading state
            const submitButton = referralForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitButton.disabled = true;

            // Google Apps Script Web App URL
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyKDJc-9Ma_tub_zshkNqLL7TxFoOjdy0bUJ4ENFkP_ETlNdVxngRUPXCw46X7weit7NA/exec';

            // Send data to Google Sheets
            if (GOOGLE_SCRIPT_URL !== 'REPLACE_WITH_YOUR_GOOGLE_SCRIPT_URL') {
                fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })
                .then(() => {
                    console.log('Data sent to Google Sheets');
                    // Store in localStorage for confirmation page
                    localStorage.setItem('referralSubmission', JSON.stringify(formData));
                    // Redirect to confirmation page
                    window.location.href = 'confirmation.html';
                })
                .catch((error) => {
                    console.error('Error sending to Google Sheets:', error);
                    // Still redirect even if there's an error
                    alert('Your request was submitted but there was an error saving to our database. We will contact you at the email provided.');
                    localStorage.setItem('referralSubmission', JSON.stringify(formData));
                    window.location.href = 'confirmation.html';
                });
            } else {
                // No Google Script URL configured - just store locally and redirect
                console.warn('Google Sheets integration not configured. See GOOGLE_SHEETS_SETUP.md');
                localStorage.setItem('referralSubmission', JSON.stringify(formData));
                setTimeout(() => {
                    window.location.href = 'confirmation.html';
                }, 1500);
            }
        });
    }

    // Form validation helpers
    function validateLinkedInUrl(url) {
        const linkedinPattern = /^https?:\/\/(www\.)?linkedin\.com\/.+/i;
        return linkedinPattern.test(url);
    }

    function validateJobUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    // Add real-time validation feedback
    const linkedinInput = document.getElementById('linkedinProfile');
    const jobUrlInput = document.getElementById('jobUrl');

    if (linkedinInput) {
        linkedinInput.addEventListener('blur', function() {
            if (this.value && !validateLinkedInUrl(this.value)) {
                this.style.borderColor = '#dc143c';
                showValidationMessage(this, 'Please enter a valid LinkedIn profile URL');
            } else {
                this.style.borderColor = '#e6e6e6';
                removeValidationMessage(this);
            }
        });
    }

    if (jobUrlInput) {
        jobUrlInput.addEventListener('blur', function() {
            if (this.value && !validateJobUrl(this.value)) {
                this.style.borderColor = '#dc143c';
                showValidationMessage(this, 'Please enter a valid URL');
            } else {
                this.style.borderColor = '#e6e6e6';
                removeValidationMessage(this);
            }
        });
    }

    function showValidationMessage(element, message) {
        removeValidationMessage(element);
        const errorDiv = document.createElement('small');
        errorDiv.className = 'validation-error';
        errorDiv.style.color = '#dc143c';
        errorDiv.style.fontSize = '0.9rem';
        errorDiv.textContent = message;
        element.parentNode.appendChild(errorDiv);
    }

    function removeValidationMessage(element) {
        const existingError = element.parentNode.querySelector('.validation-error');
        if (existingError) {
            existingError.remove();
        }
    }

    // Clear validation on input
    const allInputs = referralForm?.querySelectorAll('input[type="url"]');
    if (allInputs) {
        allInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '#e6e6e6';
                removeValidationMessage(this);
            });
        });
    }
});
