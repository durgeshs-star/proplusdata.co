import React, { useState } from "react";
import "./CareerForm.css";

export default function CareerForm({ position }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: position || '',
    experience: '',
    coverLetter: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('coverLetter', formData.coverLetter);

      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch('/api/career-submit.php', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: position || '',
          experience: '',
          coverLetter: '',
          resume: null
        });
      } else {
        setSubmitStatus('error');
        alert(result.message || 'Failed to submit application');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ppd-career-form-container">
      <h2 className="ppd-career-form-title">Apply <span>Now</span></h2>

      {submitStatus === 'success' ? (
        <div className="ppd-career-form-success">
          <div className="ppd-career-form-success-icon">✓</div>
          <h3>Application Submitted Successfully!</h3>
          <p>Thank you for your interest. We will review your application and get back to you soon.</p>
          <button
            className="ppd-career-form-reset"
            onClick={() => setSubmitStatus(null)}
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form className="ppd-career-form" onSubmit={handleSubmit}>
          <div className="ppd-career-form-row">
            <div className="ppd-career-form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="ppd-career-form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="ppd-career-form-row">
            <div className="ppd-career-form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="ppd-career-form-group">
              <label htmlFor="experience">Years of Experience</label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g., 2-3 years"
              />
            </div>
          </div>

          <div className="ppd-career-form-group">
            <label htmlFor="position">Position *</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              placeholder="Position you're applying for"
              readOnly
            />
          </div>

          <div className="ppd-career-form-group">
            <label htmlFor="coverLetter">Cover Letter</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us why you're a great fit for this role..."
            />
          </div>

          <div className="ppd-career-form-group">
            <label htmlFor="resume">Resume (PDF/Word, Max 5MB) *</label>
            <div className="ppd-career-form-file">
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
              />
              {formData.resume && (
                <div className="ppd-career-form-file-info">
                  <span className="ppd-career-form-file-name">{formData.resume.name}</span>
                  <span className="ppd-career-form-file-size">
                    {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="ppd-career-form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      )}
    </div>
  );
}
