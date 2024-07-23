document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');

  if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault();
      handleRegister();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      handleLogin();
    });
  }

  async function handleRegister() {
    const formData = new FormData(registerForm);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch('http://127.0.0.1:8000/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        messageContainer.innerHTML = `<p class="success-message">${result.details}</p>`;
        window.location.href = '../pages/LandingPage/home.html'; // Redirect to landing page
      } else {
        messageContainer.innerHTML = `<p class="error-message">${result.error}</p>`;
        if (result.error === 'This email already exists!') {
          // Provide additional instructions or redirect to login if needed
        }
      }
    } catch (error) {
      console.error('Error:', error);
      messageContainer.innerHTML = `<p class="error-message">An error occurred. Please try again.</p>`;
    }
  }


  async function handleLogin() {
    const formData = new FormData(loginForm);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        messageContainer.innerHTML = `<p class="success-message">${result.details || 'Login successful. Redirecting...'}</p>`;
        window.location.href = result.redirect || '../pages/LandingPage/home.html'; // Redirect to the specified URL or landing page
      } else {
        messageContainer.innerHTML = `<p class="error-message">${result.error}</p>`;
        if (result.error === 'Please verify your email before logging in.') {
          // Provide additional instructions or redirect to registration if needed
        }
      }
    } catch (error) {
      console.error('Error:', error);
      messageContainer.innerHTML = `<p class="error-message">An error occurred. Please try again.</p>`;
    }
  }

});
