 import React, { useState } from "react";

 const Hero1 = () => {
  const [nexoraFormData, setNexoraFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    jobTitle: "",
    countryCode: "+91"
  });
  const [nexoraFormSubmitted, setNexoraFormSubmitted] = useState(false);
  const [nexoraFormError, setNexoraFormError] = useState("");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const countryCodes = [
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+61", name: "Australia", flag: "🇦🇺" },
    { code: "+1", name: "Canada", flag: "🇨🇦" },
    { code: "+49", name: "Germany", flag: "🇩🇪" },
    { code: "+33", name: "France", flag: "🇫🇷" },
    { code: "+81", name: "Japan", flag: "🇯🇵" },
    { code: "+86", name: "China", flag: "🇨🇳" },
    { code: "+39", name: "Italy", flag: "🇮🇹" },
    { code: "+34", name: "Spain", flag: "🇪🇸" },
    { code: "+7", name: "Russia", flag: "🇷🇺" },
    { code: "+55", name: "Brazil", flag: "🇧🇷" },
    { code: "+52", name: "Mexico", flag: "🇲🇽" },
    { code: "+82", name: "South Korea", flag: "🇰🇷" },
    { code: "+31", name: "Netherlands", flag: "🇳🇱" },
    { code: "+46", name: "Sweden", flag: "🇸🇪" },
    { code: "+41", name: "Switzerland", flag: "🇨🇭" },
    { code: "+351", name: "Portugal", flag: "🇵🇹" },
    { code: "+358", name: "Finland", flag: "🇫🇮" },
    { code: "+47", name: "Norway", flag: "🇳🇴" },
    { code: "+45", name: "Denmark", flag: "🇩🇰" },
    { code: "+43", name: "Austria", flag: "🇦🇹" },
    { code: "+32", name: "Belgium", flag: "🇧🇪" },
    { code: "+48", name: "Poland", flag: "🇵🇱" },
    { code: "+420", name: "Czech Republic", flag: "🇨🇿" },
    { code: "+421", name: "Slovakia", flag: "🇸🇰" },
    { code: "+36", name: "Hungary", flag: "🇭🇺" },
    { code: "+40", name: "Romania", flag: "🇷🇴" },
    { code: "+30", name: "Greece", flag: "🇬🇷" },
    { code: "+90", name: "Turkey", flag: "🇹🇷" },
    { code: "+971", name: "United Arab Emirates", flag: "🇦🇪" },
    { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
    { code: "+974", name: "Qatar", flag: "🇶🇦" },
    { code: "+968", name: "Oman", flag: "🇴🇲" },
    { code: "+973", name: "Bahrain", flag: "🇧🇭" },
    { code: "+965", name: "Kuwait", flag: "🇰🇼" },
    { code: "+65", name: "Singapore", flag: "🇸🇬" },
    { code: "+60", name: "Malaysia", flag: "🇲🇾" },
    { code: "+62", name: "Indonesia", flag: "🇮🇩" },
    { code: "+63", name: "Philippines", flag: "🇵🇭" },
    { code: "+66", name: "Thailand", flag: "🇹🇭" },
    { code: "+84", name: "Vietnam", flag: "🇻🇳" },
    { code: "+855", name: "Cambodia", flag: "🇰🇭" },
    { code: "+95", name: "Myanmar", flag: "🇲🇲" },
    { code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
    { code: "+92", name: "Pakistan", flag: "🇵🇰" },
    { code: "+93", name: "Afghanistan", flag: "🇦🇫" },
    { code: "+98", name: "Iran", flag: "🇮🇷" },
    { code: "+964", name: "Iraq", flag: "🇮🇶" },
    { code: "+962", name: "Jordan", flag: "🇯🇴" },
    { code: "+961", name: "Lebanon", flag: "🇱🇧" },
    { code: "+970", name: "Palestine", flag: "🇵🇸" },
    { code: "+20", name: "Egypt", flag: "🇪🇬" },
    { code: "+27", name: "South Africa", flag: "🇿🇦" },
    { code: "+234", name: "Nigeria", flag: "🇳🇬" },
    { code: "+254", name: "Kenya", flag: "🇰🇪" },
    { code: "+233", name: "Ghana", flag: "🇬🇭" },
    { code: "+231", name: "Liberia", flag: "🇱🇷" },
    { code: "+509", name: "Haiti", flag: "🇭🇹" },
    { code: "+504", name: "Honduras", flag: "🇭🇳" },
    { code: "+852", name: "Hong Kong", flag: "🇭🇰" },
    { code: "+354", name: "Iceland", flag: "🇮🇸" },
    { code: "+503", name: "El Salvador", flag: "🇸🇻" },
    { code: "+502", name: "Guatemala", flag: "🇬🇹" },
    { code: "+501", name: "Belize", flag: "🇧🇿" },
    { code: "+506", name: "Costa Rica", flag: "🇨🇷" },
    { code: "+507", name: "Panama", flag: "🇵🇦" },
    { code: "+57", name: "Colombia", flag: "🇨🇴" },
    { code: "+56", name: "Chile", flag: "🇨🇱" },
    { code: "+54", name: "Argentina", flag: "🇦🇷" },
    { code: "+53", name: "Cuba", flag: "🇨🇺" },
    { code: "+51", name: "Peru", flag: "🇵🇪" },
    { code: "+58", name: "Venezuela", flag: "🇻🇪" },
    { code: "+591", name: "Bolivia", flag: "🇧🇴" },
    { code: "+593", name: "Ecuador", flag: "🇪🇨" },
    { code: "+595", name: "Paraguay", flag: "🇵🇾" },
    { code: "+598", name: "Uruguay", flag: "🇺🇾" },
    { code: "+352", name: "Luxembourg", flag: "🇱🇺" },
    { code: "+353", name: "Ireland", flag: "🇮🇪" },
    { code: "+370", name: "Lithuania", flag: "🇱🇹" },
    { code: "+371", name: "Latvia", flag: "🇱🇻" },
    { code: "+372", name: "Estonia", flag: "🇪🇪" },
    { code: "+380", name: "Ukraine", flag: "🇺🇦" },
    { code: "+381", name: "Serbia", flag: "🇷🇸" },
    { code: "+385", name: "Croatia", flag: "🇭🇷" },
    { code: "+386", name: "Slovenia", flag: "🇸🇮" },
    { code: "+387", name: "Bosnia", flag: "🇧🇦" },
    { code: "+389", name: "North Macedonia", flag: "🇲🇰" },
    { code: "+373", name: "Moldova", flag: "🇲🇩" },
    { code: "+374", name: "Armenia", flag: "🇦🇲" },
    { code: "+375", name: "Belarus", flag: "🇧🇾" },
    { code: "+377", name: "Monaco", flag: "🇲🇨" },
    { code: "+378", name: "San Marino", flag: "🇸🇲" },
    { code: "+376", name: "Andorra", flag: "🇦🇩" },
    { code: "+359", name: "Bulgaria", flag: "🇧🇬" },
    { code: "+382", name: "Montenegro", flag: "🇲🇪" },
    { code: "+994", name: "Azerbaijan", flag: "🇦🇿" },
    { code: "+995", name: "Georgia", flag: "🇬🇪" },
    { code: "+996", name: "Kyrgyzstan", flag: "🇰🇬" },
    { code: "+998", name: "Uzbekistan", flag: "🇺🇿" },
    { code: "+992", name: "Tajikistan", flag: "🇹🇯" },
    { code: "+993", name: "Turkmenistan", flag: "🇹🇲" },
    { code: "+7", name: "Kazakhstan", flag: "🇰🇿" },
    { code: "+850", name: "North Korea", flag: "🇰🇵" },
    { code: "+264", name: "Namibia", flag: "🇳🇦" },
    { code: "+260", name: "Zambia", flag: "🇿🇲" },
    { code: "+263", name: "Zimbabwe", flag: "🇿🇼" },
    { code: "+268", name: "Eswatini", flag: "🇸🇿" },
    { code: "+267", name: "Botswana", flag: "🇧🇼" },
    { code: "+265", name: "Malawi", flag: "🇲🇼" },
    { code: "+266", name: "Lesotho", flag: "🇱🇸" },
    { code: "+261", name: "Madagascar", flag: "🇲🇬" },
    { code: "+258", name: "Mozambique", flag: "🇲🇿" },
    { code: "+257", name: "Burundi", flag: "🇧🇮" },
    { code: "+256", name: "Uganda", flag: "🇺🇬" },
    { code: "+255", name: "Tanzania", flag: "🇹🇿" },
    { code: "+253", name: "Djibouti", flag: "🇩🇯" },
    { code: "+252", name: "Somalia", flag: "🇸🇴" },
    { code: "+251", name: "Ethiopia", flag: "🇪🇹" },
    { code: "+250", name: "Rwanda", flag: "🇷🇼" },
    { code: "+243", name: "DR Congo", flag: "🇨🇩" },
    { code: "+242", name: "Congo", flag: "🇨🇬" },
    { code: "+241", name: "Gabon", flag: "🇬🇦" },
    { code: "+240", name: "Equatorial Guinea", flag: "🇬🇶" },
    { code: "+239", name: "Sao Tome", flag: "🇸🇹" },
    { code: "+238", name: "Cape Verde", flag: "🇨🇻" },
    { code: "+237", name: "Cameroon", flag: "🇨🇲" },
    { code: "+236", name: "Central African Republic", flag: "�🇫" },
    { code: "+235", name: "Chad", flag: "�🇹🇩" },
    { code: "+228", name: "Togo", flag: "🇹🇬" },
    { code: "+227", name: "Niger", flag: "🇳🇪" },
    { code: "+226", name: "Burkina Faso", flag: "🇧🇫" },
    { code: "+225", name: "Ivory Coast", flag: "🇨🇮" },
    { code: "+224", name: "Guinea", flag: "🇬🇳" },
    { code: "+223", name: "Mali", flag: "🇲🇱" },
    { code: "+222", name: "Mauritania", flag: "🇲🇷" },
    { code: "+221", name: "Senegal", flag: "🇸🇳" },
    { code: "+220", name: "Gambia", flag: "🇬🇲" },
    { code: "+213", name: "Algeria", flag: "🇩🇿" },
    { code: "+212", name: "Morocco", flag: "🇲🇦" },
    { code: "+211", name: "South Sudan", flag: "🇸🇸" },
    { code: "+210", name: "Western Sahara", flag: "🇪🇭" },
    { code: "+248", name: "Seychelles", flag: "🇸🇨" },
    { code: "+249", name: "Comoros", flag: "🇰🇲" },
    { code: "+230", name: "Mauritius", flag: "🇲🇺" },
    { code: "+687", name: "New Caledonia", flag: "🇳🇨" },
    { code: "+685", name: "Samoa", flag: "🇼🇸" },
    { code: "+684", name: "Cook Islands", flag: "🇨🇰" },
    { code: "+683", name: "Niue", flag: "🇳🇺" },
    { code: "+682", name: "Tokelau", flag: "🇹🇰" },
    { code: "+681", name: "Wallis", flag: "🇼🇫" },
    { code: "+680", name: "Palau", flag: "🇵🇼" },
    { code: "+679", name: "Fiji", flag: "🇫🇯" },
    { code: "+678", name: "Vanuatu", flag: "🇻🇺" },
    { code: "+677", name: "Solomon Islands", flag: "🇸🇧" },
    { code: "+676", name: "Tonga", flag: "🇹🇴" },
    { code: "+675", name: "Papua New Guinea", flag: "🇵🇬" },
    { code: "+674", name: "Nauru", flag: "🇳🇷" },
    { code: "+673", name: "Brunei", flag: "🇧🇳" },
    { code: "+672", name: "Antarctica", flag: "🇦🇶" },
    { code: "+670", name: "Timor-Leste", flag: "🇹🇱" },
    { code: "+692", name: "Marshall Islands", flag: "🇲🇭" },
    { code: "+691", name: "Micronesia", flag: "🇫🇲" },
    { code: "+690", name: "Tuvalu", flag: "🇹🇻" },
    { code: "+688", name: "Kiribati", flag: "🇰🇮" },
    { code: "+689", name: "French Polynesia", flag: "🇵🇫" },
    { code: "+357", name: "Cyprus", flag: "🇨🇾" },
    { code: "+356", name: "Malta", flag: "🇲🇹" },
    { code: "+972", name: "Israel", flag: "🇮🇱" },
    { code: "+355", name: "Albania", flag: "🇦🇱" },
    { code: "+354", name: "Iceland", flag: "🇮🇸" },
    { code: "+353", name: "Ireland", flag: "🇮🇪" },
    { code: "+352", name: "Luxembourg", flag: "🇱🇺" },
    { code: "+351", name: "Portugal", flag: "🇵🇹" },
    { code: "+350", name: "Gibraltar", flag: "🇬🇮" },
    { code: "+44", name: "Isle of Man", flag: "🇮🇲" },
    { code: "+44", name: "Jersey", flag: "🇯🇪" },
    { code: "+44", name: "Guernsey", flag: "🇬🇬" },
    { code: "+44", name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
    { code: "+44", name: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
    { code: "+44", name: "Northern Ireland", flag: "🏴󠁧󠁢󠁮󠁢󠁧󠁿" },
    { code: "+378", name: "Vatican City", flag: "🇻🇦" },
    { code: "+377", name: "Monaco", flag: "🇲🇨" },
    { code: "+376", name: "Andorra", flag: "🇦🇩" },
    { code: "+375", name: "Belarus", flag: "🇧🇾" },
    { code: "+374", name: "Armenia", flag: "🇦🇲" },
    { code: "+373", name: "Moldova", flag: "🇲🇩" },
    { code: "+372", name: "Estonia", flag: "🇪🇪" },
    { code: "+371", name: "Latvia", flag: "🇱🇻" },
    { code: "+370", name: "Lithuania", flag: "🇱🇹" },
    { code: "+389", name: "North Macedonia", flag: "🇲🇰" },
    { code: "+387", name: "Bosnia", flag: "🇧🇦" },
    { code: "+386", name: "Slovenia", flag: "🇸🇮" },
    { code: "+385", name: "Croatia", flag: "🇭🇷" },
    { code: "+382", name: "Montenegro", flag: "🇲🇪" },
    { code: "+381", name: "Serbia", flag: "🇷🇸" },
    { code: "+380", name: "Ukraine", flag: "🇺🇦" },
    { code: "+359", name: "Bulgaria", flag: "🇧🇬" },
    { code: "+358", name: "Finland", flag: "🇫🇮" },
    { code: "+357", name: "Cyprus", flag: "🇨🇾" },
    { code: "+356", name: "Malta", flag: "🇲🇹" },
    { code: "+355", name: "Albania", flag: "🇦🇱" },
    { code: "+354", name: "Iceland", flag: "🇮🇸" },
    { code: "+353", name: "Ireland", flag: "🇮🇪" },
    { code: "+352", name: "Luxembourg", flag: "🇱🇺" },
    { code: "+351", name: "Portugal", flag: "🇵🇹" },
    { code: "+350", name: "Gibraltar", flag: "🇬🇮" },
    { code: "+41", name: "Liechtenstein", flag: "🇱🇮" },
    { code: "+423", name: "Liechtenstein", flag: "��" },
  ];

  const validateCompanyEmail = (email) => {
    const forbiddenDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com", "mail.com", "protonmail.com", "zoho.com", "yandex.com"];
    const domain = email.split("@")[1]?.toLowerCase();
    return !forbiddenDomains.includes(domain);
  };

  const handleNexoraFormChange = (e) => {
    setNexoraFormData({
      ...nexoraFormData,
      [e.target.name]: e.target.value
    });
    setNexoraFormError("");
  };

  const handleCountrySelect = (country) => {
    setNexoraFormData({
      ...nexoraFormData,
      countryCode: country.code
    });
    setCountryDropdownOpen(false);
  };

  const handleNexoraFormSubmit = async (e) => {
    e.preventDefault();

    // Validate company email
    if (!validateCompanyEmail(nexoraFormData.email)) {
      setNexoraFormError("Please use a company email address (not gmail, yahoo, etc.)");
      return;
    }

    try {
      const response = await fetch("/api/nexora-free-trial.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...nexoraFormData,
          phone: nexoraFormData.countryCode + nexoraFormData.phone
        }),
      });

      if (response.ok) {
        setNexoraFormSubmitted(true);
        setNexoraFormData({ email: "", fullName: "", phone: "", jobTitle: "", countryCode: "+91" });
      } else {
        setNexoraFormError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setNexoraFormError("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="ppd-home-hero">
      <div className="nexora-banner">
        <img src="/assets/images/Nexora Logo_Blue.svg" alt="Nexora Logo" className="nexora-logo" />
         <h2><b>The Timing Layer for </b><br/> <span className="fraunces-text">Predictable Revenue</span>
        </h2><br/>
        <p>
          GTM AI platform, makes revenue predictable,revealing what's next, the right stakeholders to engage, and exactly when to act.
        </p>

        {/* Free Trial Form */}
        <div className="nexora-free-trial-form">
          {nexoraFormSubmitted ? (
            <div className="nexora-form-success">
              <p>Thank you! We'll be in touch soon.</p>
            </div>
          ) : (
            <>
              <form onSubmit={handleNexoraFormSubmit}>
                <div className="nexora-form-grid">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={nexoraFormData.email}
                    onChange={handleNexoraFormChange}
                    required
                  />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name *"
                    value={nexoraFormData.fullName}
                    onChange={handleNexoraFormChange}
                    required
                  />
                  <div className="nexora-phone-input">
                    <div className="nexora-country-selector">
                      <button
                        type="button"
                        className="nexora-country-button"
                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                      >
                        {countryCodes.find(c => c.code === nexoraFormData.countryCode)?.flag} {nexoraFormData.countryCode}
                        <span className="nexora-dropdown-arrow">▼</span>
                      </button>
                      {countryDropdownOpen && (
                        <div className="nexora-country-dropdown">
                          {countryCodes.map((country) => (
                            <div
                              key={country.code}
                              className="nexora-country-option"
                              onClick={() => handleCountrySelect(country)}
                            >
                              <span className="nexora-country-flag">{country.flag}</span>
                              <span className="nexora-country-name">{country.name}</span>
                              <span className="nexora-country-code">{country.code}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number *"
                      value={nexoraFormData.phone}
                      onChange={handleNexoraFormChange}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job title *"
                    value={nexoraFormData.jobTitle}
                    onChange={handleNexoraFormChange}
                    required
                  />
                </div>
                {nexoraFormError && (
                  <p className="nexora-form-error">{nexoraFormError}</p>
                )}
                <button type="submit" className="nexora-submit-btn">
                  Free trial
                </button>
              </form>
              <p className="nexora-form-privacy">
                By submitting this form, you agree to ProPlus Data's Privacy Policy and Terms of Use. You may unsubscribe at any time.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
 };

export default Hero1;
