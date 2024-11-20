// Check user role on page load
window.onload = function () {
    const role = localStorage.getItem('role'); // Assume the role is saved in localStorage after login
    
    if (role) {
        if (role === 'admin') {
            window.location.href = 'admin-dashboard.html';
        } else if (role === 'user') {
            window.location.href = 'user-dashboard.html';
        } else if (role === 'investor') {
            window.location.href = 'investor-dashboard.html';
        } else {
            window.location.href = 'login.html'; // Default to login if no role is set
        }
    }
};

// Example function to simulate login and save role
function login(role) {
    // Save the user role to localStorage (this is for simulation; for production, use JWT)
    localStorage.setItem('role', role);
    window.location.href = role + '-dashboard.html';
}

// Example: Login as admin
document.getElementById('login-as-admin').addEventListener('click', () => login('admin'));

// Example: Login as user
document.getElementById('login-as-user').addEventListener('click', () => login('user'));

// Example: Login as investor
document.getElementById('login-as-investor').addEventListener('click', () => login('investor'));
