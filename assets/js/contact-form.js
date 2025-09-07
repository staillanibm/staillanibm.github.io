// Contact form AJAX submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const submitText = submitBtn.querySelector('.submit-text');
  const submitLoading = submitBtn.querySelector('.submit-loading');
  const formMessage = document.getElementById('formMessage');

  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Show loading state
    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoading.style.display = 'inline';
    formMessage.style.display = 'none';

    try {
      const formData = new FormData(form);
      
      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Success
        formMessage.innerHTML = `
          <div style="padding: 1rem; background: #10b981; color: white; border-radius: 8px; text-align: center;">
            <strong>Message sent successfully!</strong><br>
            I'll get back to you within 24 hours.
          </div>
        `;
        formMessage.style.display = 'block';
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // Error
      formMessage.innerHTML = `
        <div style="padding: 1rem; background: #ef4444; color: white; border-radius: 8px; text-align: center;">
          <strong>Sorry, something went wrong.</strong><br>
          Please try again or contact me directly on LinkedIn.
        </div>
      `;
      formMessage.style.display = 'block';
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitText.style.display = 'inline';
      submitLoading.style.display = 'none';
    }
  });
});