// auth.js (same file where you defined isAuthenticated)

export function signOut() {
    // Clear the authentication token (remove it from storage)
    localStorage.removeItem("token"); // Change this to your preferred storage mechanism
  }
  