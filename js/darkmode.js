// ===== DARK MODE =====
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle ? themeToggle.querySelector('i') : null;

    function setTheme(dark) {
        if (dark) {
            body.classList.add('dark');
            if (icon) icon.className = 'fas fa-sun';
        } else {
            body.classList.remove('dark');
            if (icon) icon.className = 'fas fa-moon';
        }
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            setTheme(!body.classList.contains('dark'));
        });
    }
});