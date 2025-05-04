// Load saved theme from localStorage on page load
function loadTheme() {
    const theme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('themeToggle');
    const themeStatus = document.getElementById('themeStatus');
    if (theme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.textContent = 'Switch to Light Mode';
        themeStatus.textContent = 'Current theme: Dark';
    } else {
        document.body.classList.remove('dark');
        themeToggle.textContent = 'Switch to Dark Mode';
        themeStatus.textContent = 'Current theme: Light';
    }
}

// Toggle theme and save to localStorage
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    const themeToggle = document.getElementById('themeToggle');
    const themeStatus = document.getElementById('themeStatus');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    themeStatus.textContent = `Current theme: ${isDark ? 'Dark' : 'Light'}`;
}

// Trigger CSS animation on box
function triggerAnimation() {
    const box = document.getElementById('animatedBox');
    box.classList.remove('bounce');
    // Trigger reflow to restart animation
    void box.offsetWidth;
    box.classList.add('bounce');
}

// Event Listeners
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('animateBox').addEventListener('click', triggerAnimation);

// Load theme on page load
document.addEventListener('DOMContentLoaded', loadTheme);
