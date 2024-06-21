document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
   
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Registration failed');
    }
  });
   
  document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
   
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      alert(data.message);
      if (response.status === 200) {
        window.location.href = '/dashboard';
      }
    } catch (error) {
      alert('Login failed');
    }
  });
   
  document.getElementById('changePasswordForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('changeUsername').value;
    const newPassword = document.getElementById('changePassword').value;
   
    try {
      const response = await fetch('/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, newPassword }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Password change failed');
    }
  });