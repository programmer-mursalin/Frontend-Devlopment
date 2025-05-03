// Token save function
function setAuthToken(token, expiresInSeconds = 10) {
  const expiresAt = new Date().getTime() + expiresInSeconds * 1000;
  const authData = {
    token,
    expiresAt,
  };
  localStorage.setItem('authToken', JSON.stringify(authData));
}

// Token read/check function
function getAuthToken() {
  const data = localStorage.getItem('authToken');
  return data ? JSON.parse(data) : null;
}

// Token validity check
function isTokenValid() {
  const authData = getAuthToken();
  if (!authData) return false;

  const now = new Date().getTime();
  return now < authData.expiresAt;
}

// Simulated login
function login() {
  const fakeToken = 'abc123token';
  setAuthToken(fakeToken, 10); // 10 seconds expiry
  document.getElementById('output').innerText = '✅ Logged in! Token saved.';
}

// Check token
function checkToken() {
  if (isTokenValid()) {
    const token = getAuthToken().token;
    document.getElementById('output').innerText = `✅ Token is valid: ${token}`;
  } else {
    document.getElementById('output').innerText =
      '❌ Token is invalid or expired.';
  }
}

// Logout
function logout() {
  localStorage.removeItem('authToken');
  document.getElementById('output').innerText = '🚪 Logged out!';
}
