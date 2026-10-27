# Career Form Setup Instructions

## Overview
This custom career form allows users to submit job applications with resume uploads. The form uses PHP for backend processing and is designed for GoDaddy cPanel deployment.

## Files Created

### Backend
- `public/api/career-submit.php` - PHP script for handling form submissions
- `public/uploads/resumes/.gitkeep` - Directory for uploaded resumes

### Frontend
- `src/components/CareerForm.jsx` - React form component
- `src/components/CareerForm.css` - Form styling

### Updated Components
- `src/components/VoiceSpecialistComponent.jsx` - Uses new form
- `src/components/WebTechComponent.jsx` - Uses new form
- `src/components/EmailMarketingcomponent.jsx` - Uses new form

## Deployment Steps for GoDaddy cPanel

### 1. Upload Files
- Upload the entire React build to your public_html directory
- Ensure the following directories exist:
  - `public/api/`
  - `public/uploads/resumes/`

### 2. Set Directory Permissions
In cPanel File Manager:
- Right-click on `public/uploads/resumes/`
- Select "Change Permissions"
- Set permissions to `755` (or `777` if 755 doesn't work)

### 3. Configure PHP Email
The form sends email notifications. Ensure your server's PHP mail function is configured:
- Most GoDaddy hosting accounts have this enabled by default
- Update the `$to` email in `career-submit.php` line 31 to your preferred email

### 4. Test the Form
- Visit a career page (e.g., /voice-specialist)
- Fill out the form with test data
- Upload a test PDF or Word document
- Submit and check:
  - Success message appears
  - Email is received
  - File is uploaded to `public/uploads/resumes/`

## Form Features

### File Upload
- Accepts: PDF, DOC, DOCX
- Max file size: 5MB
- Files are stored with unique names in `public/uploads/resumes/`

### Form Fields
- Full Name (required)
- Email (required)
- Phone (required)
- Position (auto-filled, read-only)
- Years of Experience (optional)
- Cover Letter (optional)
- Resume (required)

### Security
- File type validation
- File size validation
- Input sanitization
- Email validation

## Customization

### Change Email Recipient
Edit `public/api/career-submit.php` line 31:
```php
$to = 'careers@proplusdata.co'; // Change to your email
```

### Add Database Storage
If you want to store submissions in a database, add this to `career-submit.php`:

```php
// After file upload, add:
$conn = new mysqli('localhost', 'username', 'password', 'database');
$stmt = $conn->prepare("INSERT INTO career_applications (full_name, email, phone, position, experience, cover_letter, resume_path) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $fullName, $email, $phone, $position, $experience, $coverLetter, $resumePath);
$stmt->execute();
```

### Change Upload Directory
Edit `public/api/career-submit.php` line 53:
```php
$uploadDir = __DIR__ . '/../uploads/resumes/'; // Change path as needed
```

## Troubleshooting

### File Upload Not Working
- Check directory permissions (755 or 777)
- Verify PHP `upload_max_filesize` and `post_max_size` in php.ini
- Check server error logs

### Email Not Sending
- Verify PHP mail function is enabled
- Check spam folder
- Try using SMTP instead of PHP mail (requires additional setup)

### Form Not Submitting
- Check browser console for errors
- Verify the API path is correct
- Check CORS settings in PHP file

## Building the React App

Before deployment, build the React app:
```bash
npm run build
```

Upload the contents of the `build/` folder to your public_html directory.
