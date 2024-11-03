document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const submitBtn = document.querySelector('.submit-btn');
  const registerLink = document.getElementById('registerLink');

  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const nrp = document.getElementById('nrpInput').value;
    const password = document.getElementById('passwordInput').value;

    // Validation
    if (!nrp || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nrp, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Login successful!');
        // You can redirect here to another page
        // window.location.href = 'dashboard.html';
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  });

  // Optional: Handle registration link
  registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Add registration logic or redirect to registration page
    alert('Registration functionality to be implemented');
  });
  //P INFO
});