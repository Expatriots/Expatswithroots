// Referrer Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // DATA - Cities by Country
    // ========================================
    const citiesByCountry = {
        'Germany': ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hanover', 'Nuremberg', 'Duisburg', 'Bonn', 'Mannheim', 'Karlsruhe', 'Wiesbaden', 'Münster'],
        'United States': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'San Francisco', 'Charlotte', 'Indianapolis', 'Seattle', 'Denver', 'Boston', 'Washington DC', 'Nashville', 'Detroit', 'Portland', 'Las Vegas', 'Miami', 'Atlanta', 'Minneapolis', 'Tampa', 'Orlando'],
        'United Kingdom': ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Newcastle', 'Sheffield', 'Leeds', 'Edinburgh', 'Bristol', 'Cardiff', 'Belfast', 'Nottingham', 'Southampton', 'Leicester', 'Coventry', 'Bradford', 'Hull', 'Plymouth', 'Stoke-on-Trent'],
        'Canada': ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener', 'London', 'Victoria', 'Halifax', 'Oshawa', 'Windsor', 'Saskatoon', 'Regina', 'St. Catharines', 'Barrie', 'Kelowna'],
        'Netherlands': ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Almere', 'Breda', 'Nijmegen', 'Enschede', 'Haarlem', 'Arnhem', 'Zaanstad', 'Amersfoort', 'Apeldoorn', 'Den Bosch', 'Hoofddorp', 'Maastricht', 'Leiden'],
        'Switzerland': ['Zurich', 'Geneva', 'Basel', 'Lausanne', 'Bern', 'Winterthur', 'Lucerne', 'St. Gallen', 'Lugano', 'Biel/Bienne', 'Thun', 'Köniz', 'La Chaux-de-Fonds', 'Schaffhausen', 'Fribourg', 'Chur', 'Vernier', 'Neuchâtel', 'Uster', 'Sion'],
        'Austria': ['Vienna', 'Graz', 'Linz', 'Salzburg', 'Innsbruck', 'Klagenfurt', 'Villach', 'Wels', 'Sankt Pölten', 'Dornbirn', 'Steyr', 'Wiener Neustadt', 'Feldkirch', 'Bregenz', 'Leonding', 'Klosterneuburg', 'Baden', 'Wolfsberg', 'Leoben', 'Krems'],
        'France': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon', 'Grenoble', 'Dijon', 'Angers', 'Nîmes', 'Villeurbanne'],
        'Sweden': ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping', 'Helsingborg', 'Jönköping', 'Norrköping', 'Lund', 'Umeå', 'Gävle', 'Borås', 'Södertälje', 'Eskilstuna', 'Halmstad', 'Växjö', 'Karlstad', 'Sundsvall'],
        'UAE': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Khor Fakkan', 'Dibba Al-Fujairah', 'Kalba', 'Jebel Ali', 'Dhaid', 'Ruwais', 'Liwa Oasis', 'Ghayathi', 'Madinat Zayed', 'Al Reem Island', 'Yas Island', 'Saadiyat Island']
    };

    // Company list - These are companies where we have active referrers
    const companies = [
        'ABBAS Global Law Firm',
        'Adidas',
        'Agentic AI Nexus',
        'AI4Moms',
        'Alcemy',
        'Amazon',
        'Amazon Web Services (AWS)',
        'AmaliTech',
        'bAhead GmbH',
        'Babbel',
        'Bayer AG',
        'Bitbang Software',
        'Booking.com',
        'Boehringer Ingelheim',
        'Bosch Security Systems',
        'Broadcast Solutions GmbH',
        'BwBM',
        'Capgemini',
        'CB GmbH',
        'Check24',
        'Cloudpioneer',
        'Cloudstrive GmbH',
        'Dassault Systèmes',
        'Data Reply',
        'Deloitte',
        'Delivery Hero',
        'Digital Charging Solutions',
        'DKBcodefactory',
        'DocuSign',
        'DTU Denmark (PhD)',
        'eeaser GmbH',
        'eGentic GmbH',
        'Epay',
        'Essity',
        'Evotec',
        'FH Dortmund',
        'Flixbus',
        'FoodCloud',
        'HelloFresh',
        'Henkel',
        'Hotelkit',
        'HQS',
        'Humboldt University Berlin',
        'Idaratech',
        'Ideabay.AI',
        'ImmoScout24',
        'Infineon Technologies AG',
        'Intel Corporation',
        'Klarna',
        'KPMG',
        'Landesbank Baden-Württemberg',
        'LeasingMarkt',
        'Live-e',
        'LucaNet AG',
        'Magna Telemotive',
        'Manulife',
        'Mein Paul',
        'MHP - A Porsche Company',
        'Microsoft',
        'NEAFS',
        'nonoxx Pro GmbH',
        'NXP Semiconductors',
        'Odido',
        'Oxford University',
        'Paretos',
        'Promatis',
        'Roadsurfer',
        'Sum Up',
        'Sylndr',
        'Taleb IT Beratung',
        'Technical University of Munich',
        'Ten Watts GmbH',
        'Tübingen AI Center',
        'University of Hildesheim',
        'VWFS (Volkswagen Financial Services)',
        'Vodafone',
        'Volkswagen',
        'Walaplus',
        'Web.de/1&1/United Group',
        'Wolt',
        'Yamaha eBike Systems',
        'Yassir (YC W20)',
        'Zalando',
        'ZF',
        'Zufall Logistics'
    ].sort(); // Sort alphabetically

    // ========================================
    // GET FORM ELEMENTS
    // ========================================
    const referrerForm = document.getElementById('referrerForm');
    const countryOfOriginSelect = document.getElementById('countryOfOrigin');
    const otherOriginGroup = document.getElementById('otherOriginGroup');
    const otherOriginInput = document.getElementById('otherOrigin');
    const currentCountrySelect = document.getElementById('currentCountry');
    const otherCurrentCountryGroup = document.getElementById('otherCurrentCountryGroup');
    const otherCurrentCountryInput = document.getElementById('otherCurrentCountry');
    const currentCityInput = document.getElementById('currentCity');
    const cityAutocompleteList = document.getElementById('cityAutocompleteList');
    const industrySelect = document.getElementById('industry');
    const otherIndustryGroup = document.getElementById('otherIndustryGroup');
    const otherIndustryInput = document.getElementById('otherIndustry');
    const techDomainGroup = document.getElementById('techDomainGroup');
    const techDomainOtherCheckbox = document.getElementById('techDomainOther');
    const otherTechDomainGroup = document.getElementById('otherTechDomainGroup');
    const otherTechDomainInput = document.getElementById('otherTechDomain');
    const additionalExpertiseTextarea = document.getElementById('additionalExpertise');
    const charCounter = document.getElementById('charCounter');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const companySearchInput = document.getElementById('companySearch');
    const companySelectHidden = document.getElementById('companySelect');
    const autocompleteList = document.getElementById('autocompleteList');

    let selectedIndex = -1;
    let filteredCompanies = [];
    let citySelectedIndex = -1;
    let filteredCities = [];

    // ========================================
    // COUNTRY OF ORIGIN - Show/Hide Other Field
    // ========================================
    if (countryOfOriginSelect && otherOriginGroup && otherOriginInput) {
        countryOfOriginSelect.addEventListener('change', function() {
            if (this.value === 'Other') {
                otherOriginGroup.style.display = 'block';
                otherOriginInput.required = true;
            } else {
                otherOriginGroup.style.display = 'none';
                otherOriginInput.required = false;
                otherOriginInput.value = '';
            }
        });
    }

    // ========================================
    // CURRENT COUNTRY - Show/Hide Other Field & Update Cities
    // ========================================
    if (currentCountrySelect && otherCurrentCountryGroup && otherCurrentCountryInput) {
        currentCountrySelect.addEventListener('change', function() {
            if (this.value === 'Other') {
                otherCurrentCountryGroup.style.display = 'block';
                otherCurrentCountryInput.required = true;
            } else {
                otherCurrentCountryGroup.style.display = 'none';
                otherCurrentCountryInput.required = false;
                otherCurrentCountryInput.value = '';
            }
        });
    }

    // ========================================
    // CITY AUTOCOMPLETE
    // ========================================
    if (currentCityInput && cityAutocompleteList) {
        currentCityInput.addEventListener('input', function() {
            const searchTerm = this.value.trim();

            if (searchTerm.length === 0) {
                hideCityAutocomplete();
                return;
            }

            // Get cities based on selected country
            const selectedCountry = currentCountrySelect.value;
            let citiesToSearch = [];

            if (selectedCountry && selectedCountry !== 'Other' && citiesByCountry[selectedCountry]) {
                citiesToSearch = citiesByCountry[selectedCountry];
            } else {
                // If no country selected or Other, search all cities
                citiesToSearch = Object.values(citiesByCountry).flat();
            }

            // Filter cities
            filteredCities = citiesToSearch.filter(city =>
                city.toLowerCase().includes(searchTerm.toLowerCase())
            );

            // Show results
            showCityAutocomplete(searchTerm);
        });

        // Keyboard navigation for cities
        currentCityInput.addEventListener('keydown', function(e) {
            const items = cityAutocompleteList.querySelectorAll('.autocomplete-item');

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                citySelectedIndex = Math.min(citySelectedIndex + 1, items.length - 1);
                updateCitySelection(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                citySelectedIndex = Math.max(citySelectedIndex - 1, -1);
                updateCitySelection(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (citySelectedIndex >= 0 && items[citySelectedIndex]) {
                    items[citySelectedIndex].click();
                }
            } else if (e.key === 'Escape') {
                hideCityAutocomplete();
            }
        });

        // Click outside to close city autocomplete
        document.addEventListener('click', function(e) {
            if (!currentCityInput.contains(e.target) && !cityAutocompleteList.contains(e.target)) {
                hideCityAutocomplete();
            }
        });
    }

    function showCityAutocomplete(searchTerm) {
        cityAutocompleteList.innerHTML = '';
        citySelectedIndex = -1;

        if (filteredCities.length > 0) {
            filteredCities.slice(0, 10).forEach((city) => { // Show max 10 results
                const item = createCityAutocompleteItem(city, searchTerm);
                cityAutocompleteList.appendChild(item);
            });
        }

        // Always allow custom entry
        if (filteredCities.length === 0 || !filteredCities.some(c => c.toLowerCase() === searchTerm.toLowerCase())) {
            const customItem = document.createElement('div');
            customItem.className = 'autocomplete-item other-option';
            customItem.innerHTML = `<i class="fas fa-map-marker-alt"></i> "${searchTerm}"`;
            customItem.addEventListener('click', function() {
                selectCity(searchTerm);
            });
            cityAutocompleteList.appendChild(customItem);
        }

        cityAutocompleteList.classList.add('active');
    }

    function createCityAutocompleteItem(text, searchTerm) {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';

        // Highlight matching text
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const highlightedText = text.replace(regex, '<span class="company-match-highlight">$1</span>');
        item.innerHTML = highlightedText;

        item.addEventListener('click', function() {
            selectCity(text);
        });

        return item;
    }

    function selectCity(city) {
        currentCityInput.value = city;
        hideCityAutocomplete();
    }

    function updateCitySelection(items) {
        items.forEach((item, index) => {
            if (index === citySelectedIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        });
    }

    function hideCityAutocomplete() {
        cityAutocompleteList.classList.remove('active');
        citySelectedIndex = -1;
    }

    // ========================================
    // INDUSTRY - Show/Hide Other Field & Tech Domain
    // ========================================
    if (industrySelect && otherIndustryGroup && techDomainGroup) {
        industrySelect.addEventListener('change', function() {
            // Handle "Other" industry
            if (this.value === 'Other') {
                otherIndustryGroup.style.display = 'block';
                otherIndustryInput.required = true;
            } else {
                otherIndustryGroup.style.display = 'none';
                otherIndustryInput.required = false;
                otherIndustryInput.value = '';
            }

            // Show/hide tech domain based on industry
            if (this.value === 'Technology') {
                techDomainGroup.style.display = 'block';
            } else {
                techDomainGroup.style.display = 'none';
                // Uncheck all tech domains
                const techDomainCheckboxes = document.querySelectorAll('input[name="techDomain"]');
                techDomainCheckboxes.forEach(cb => cb.checked = false);
                // Hide other tech domain input
                otherTechDomainGroup.style.display = 'none';
                otherTechDomainInput.required = false;
                otherTechDomainInput.value = '';
            }
        });
    }

    // ========================================
    // TECH DOMAIN - Show/Hide Other Field
    // ========================================
    if (techDomainOtherCheckbox && otherTechDomainGroup && otherTechDomainInput) {
        techDomainOtherCheckbox.addEventListener('change', function() {
            if (this.checked) {
                otherTechDomainGroup.style.display = 'block';
                otherTechDomainInput.required = true;
            } else {
                otherTechDomainGroup.style.display = 'none';
                otherTechDomainInput.required = false;
                otherTechDomainInput.value = '';
            }
        });
    }

    // ========================================
    // CHARACTER COUNTER
    // ========================================
    if (additionalExpertiseTextarea && charCounter) {
        additionalExpertiseTextarea.addEventListener('input', function() {
            const count = this.value.length;
            charCounter.textContent = `${count}/1000`;

            if (count >= 1000) {
                charCounter.style.color = '#dc143c';
            } else if (count >= 900) {
                charCounter.style.color = '#ff9800';
            } else {
                charCounter.style.color = '#999';
            }
        });
    }

    // ========================================
    // COMPANY AUTOCOMPLETE
    // ========================================
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
                } else if (this.value.trim()) {
                    selectCompany(this.value.trim());
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
            filteredCompanies.forEach((company) => {
                const item = createAutocompleteItem(company, searchTerm);
                autocompleteList.appendChild(item);
            });
        }

        // Always allow custom company entry
        if (filteredCompanies.length === 0 || !filteredCompanies.some(c => c.toLowerCase() === searchTerm.toLowerCase())) {
            const otherItem = document.createElement('div');
            otherItem.className = 'autocomplete-item other-option';
            otherItem.innerHTML = `<i class="fas fa-plus-circle"></i> "${searchTerm}"`;
            otherItem.addEventListener('click', function() {
                selectCompany(searchTerm);
            });
            autocompleteList.appendChild(otherItem);
        }

        autocompleteList.classList.add('active');
    }

    function createAutocompleteItem(text, searchTerm) {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';

        // Highlight matching text
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const highlightedText = text.replace(regex, '<span class="company-match-highlight">$1</span>');
        item.innerHTML = highlightedText;

        item.addEventListener('click', function() {
            selectCompany(text);
        });

        return item;
    }

    function selectCompany(company) {
        companySearchInput.value = company;
        companySelectHidden.value = company;
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

    // ========================================
    // VALIDATION HELPERS
    // ========================================
    function validateLinkedInUrl(url) {
        const linkedinPattern = /^https?:\/\/(www\.)?linkedin\.com\/.+/i;
        return linkedinPattern.test(url);
    }

    function validatePhoneNumber(phone) {
        // Basic phone validation - should start with + and have at least 10 digits
        const phonePattern = /^\+?[\d\s\-()]+$/;
        return phonePattern.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }

    // Add real-time validation feedback
    const linkedinInput = document.getElementById('linkedinProfile');

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

    if (phoneNumberInput) {
        phoneNumberInput.addEventListener('blur', function() {
            if (this.value && !validatePhoneNumber(this.value)) {
                this.style.borderColor = '#dc143c';
                showValidationMessage(this, 'Please enter a valid phone number with country code');
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
        errorDiv.style.display = 'block';
        errorDiv.style.marginTop = '4px';
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
    const allInputs = referrerForm?.querySelectorAll('input[type="url"], input[type="tel"]');
    if (allInputs) {
        allInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '#e6e6e6';
                removeValidationMessage(this);
            });
        });
    }

    // ========================================
    // FORM SUBMISSION
    // ========================================
    if (referrerForm) {
        referrerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate at least one communication channel is selected
            const communicationCheckboxes = document.querySelectorAll('input[name="communication"]:checked');
            if (communicationCheckboxes.length === 0) {
                alert('Please select at least one preferred communication channel.');
                return;
            }

            // If industry is Technology, validate at least one tech domain is selected
            if (industrySelect.value === 'Technology') {
                const techDomainCheckboxes = document.querySelectorAll('input[name="techDomain"]:checked');
                if (techDomainCheckboxes.length === 0) {
                    alert('Please select at least one tech domain.');
                    return;
                }
            }

            // Collect tech domains
            const techDomains = Array.from(document.querySelectorAll('input[name="techDomain"]:checked')).map(cb => cb.value);
            // If "Other" is selected, replace it with the actual value
            if (techDomains.includes('Other') && otherTechDomainInput.value) {
                const index = techDomains.indexOf('Other');
                techDomains[index] = otherTechDomainInput.value;
            }

            // Determine final country of origin
            let finalCountryOfOrigin = countryOfOriginSelect.value;
            if (finalCountryOfOrigin === 'Other' && otherOriginInput.value) {
                finalCountryOfOrigin = otherOriginInput.value;
            }

            // Determine final current country
            let finalCurrentCountry = currentCountrySelect.value;
            if (finalCurrentCountry === 'Other' && otherCurrentCountryInput.value) {
                finalCurrentCountry = otherCurrentCountryInput.value;
            }

            // Determine final industry
            let finalIndustry = industrySelect.value;
            if (finalIndustry === 'Other' && otherIndustryInput.value) {
                finalIndustry = otherIndustryInput.value;
            }

            // Collect form data
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phoneNumber: phoneNumberInput.value,
                linkedinProfile: document.getElementById('linkedinProfile').value,
                countryOfOrigin: finalCountryOfOrigin,
                currentCountry: finalCurrentCountry,
                currentCity: currentCityInput.value,
                industry: finalIndustry,
                techDomain: techDomains,
                company: companySearchInput.value,
                jobTitle: document.getElementById('jobTitle').value,
                additionalExpertise: document.getElementById('additionalExpertise').value,
                referralCapacity: document.getElementById('referralCapacity').value,
                consultingAvailability: document.getElementById('consultingAvailability').value,
                communication: Array.from(document.querySelectorAll('input[name="communication"]:checked')).map(cb => cb.value),
                consent: document.getElementById('consent').checked,
                newsletter: document.getElementById('newsletter').checked,
                timestamp: new Date().toISOString()
            };

            // Validate consent
            if (!formData.consent) {
                alert('Please agree to the terms before submitting.');
                return;
            }

            // Log form data (for development - replace with actual API call)
            console.log('Expats with Roots Form Data:', formData);

            // Show loading state
            const submitButton = referrerForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitButton.disabled = true;

            // Google Apps Script Web App URL
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby-D3a_lkkvn9QjqObHs7TxZwcY5IwrAyvCpotTIF2bLqk6bfwv2VNe8bxVg05LrbmBfw/exec';

            // Send data to Google Sheets
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
                localStorage.setItem('referrerSubmission', JSON.stringify(formData));
                // Redirect to confirmation page
                window.location.href = 'join-confirmation.html';
            })
            .catch((error) => {
                console.error('Error sending to Google Sheets:', error);
                // Still redirect even if there's an error (no-cors mode doesn't return actual errors)
                localStorage.setItem('referrerSubmission', JSON.stringify(formData));
                window.location.href = 'join-confirmation.html';
            });
        });
    }
});
