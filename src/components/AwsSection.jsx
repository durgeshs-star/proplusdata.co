import React from 'react';



function AwsSection() {
//   const countries = [
//     "United States", "Canada", "United Kingdom", "India", "Australia", "Germany", "France", "Japan", "China", "Brazil", "South Korea"
//   ];
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
  "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
  "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
  "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
  "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan",
  "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
  "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
  "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
].sort();


  const validateForm = () => {
    const form = document.forms["myForm"];
    const firstName = form["firstName"].value.trim();
    const lastName = form["lastName"].value.trim();
    const jobTitle = form["jobTitle"].value.trim();
    const companyName = form["companyName"].value.trim();
    const email = form["email"].value.trim();
    const country = form["country"].value.trim();
    const checkbox = form["agreement"].checked;

    if (!firstName || !lastName || !jobTitle || !companyName || !email || !country) {
      alert("Please fill out all fields.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!checkbox) {
      alert("Please accept the terms and conditions to proceed.");
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      window.open("GC-MMB_vmw-mig-ess_ebook_Final_EN.pdf", "_blank");
    }
  };

  return (
    <section>
         <div className="about_area pt-100 pb-50">
         <div className="container">
     <div className="row">
        {/* Image Section */}
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-4">
            <div className="about_thumb about-page ml-4">
              <img src="/assets/images/aws-page.jpg" alt="About" />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-8">
          <div className="section_title text_left mb-40 mt-3">
              
              <div className="section_main_title text-left">
                <h1>4 Essentials for Modernising VMware Workloads: Lift & Optimize with AWS</h1>
              </div>
             
             
            </div>
           
            <div className="singel_about_left mb-30">
              <div className="singel_about_left_inner mb-3">
                <div className="singel-about-content text-left">
               
                  <p> In an era where agility, scalability, and innovation define long-term business success, traditional on-premises virtualisation can hinder progress. Migrating VMware workloads to the cloud with AWS provides organisations the opportunity to break free from these constraints and embrace modernisation. By transitioning to the cloud, businesses can reduce costs, optimise resources, and enable automation, while empowering teams with new skills and capabilities. AWS, as the leading cloud provider for VMware workloads, offers tailored tools and pathways for seamless migration and replatforming, including options for containers, serverless architecture, and DevOps integration. </p>
                  <p>With AWS’s robust support and emerging technologies such as generative AI, organisations can confidently reshape their IT strategy, driving innovation and transformation for a future-ready business. This transition not only addresses immediate needs but also establishes a scalable foundation for ongoing growth and adaptability.</p>
                  <div className="singel_about_left_inner">
    
    </div>
                </div>
               
              </div>
             
              
            </div>
            </div>
            </div>
      <center>
        <div className="usecase-aws">
          <h1 className='text-center pb-4'>Download this free whitepaper now!</h1>
          <form onSubmit={handleSubmit} name="myForm">
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="firstName">First Name*</label>
              <input type="text" name="firstName" id="firstName" required />
            </div>
            <div className="form-group half-width">
              <label htmlFor="lastName">Last Name*</label>
              <input type="text" name="lastName" id="lastName" required />
            </div>
            </div>
            <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="email">Email Address*</label>
              <input type="email" name="email" id="email" required />
            </div>
            
            <div className="form-group half-width">
              <label htmlFor="companyName">Company Name*</label>
              <input type="text" name="companyName" id="companyName" required />
            </div>
            </div>
            <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="jobTitle">Job Title*</label>
              <input type="text" name="jobTitle" id="jobTitle" required />
            </div>
            <div className="form-group half-width">
              <label htmlFor="country">Country</label>
              <select name="country" id="country" className="form-control" required>
                <option value=""> Country*</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>
            </div>
            <div className="form-group privacy-line">
              <input type="checkbox" name="agreement" id="agreement" />
              <label htmlFor="agreement"> By downloading this asset, you agree to ProPlus Data’s, < a href='https://proplusdata.co/privacy-policy'>Privacy & Cookie Policy</a>, and consent to receive updates and promotional messages<br/> from us and select partners.</label>
            </div>
            <div className="form-group">
              <button type="submit">Download Now</button>
            </div>
          </form>
        </div>
      </center>
      </div>
      </div>
    </section>
  );
}

export default AwsSection;
