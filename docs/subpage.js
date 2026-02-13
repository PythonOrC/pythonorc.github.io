// Theme management for subpages
(function () {
    var saved = localStorage.getItem('theme');
    var theme = saved === 'dark' || saved === 'light' ? saved : 'light';
    document.documentElement.setAttribute('data-theme', theme);

    function updateIcons(t) {
        var toggle = document.getElementById('theme-toggle');
        if (!toggle) return;
        var sun = toggle.querySelector('.sun-icon');
        var moon = toggle.querySelector('.moon-icon');
        if (sun && moon) {
            sun.style.display = t === 'dark' ? 'block' : 'none';
            moon.style.display = t === 'dark' ? 'none' : 'block';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        updateIcons(theme);

        var toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', function () {
                var current = document.documentElement.getAttribute('data-theme');
                var next = current === 'light' ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
                updateIcons(next);
                toggle.setAttribute('aria-label',
                    next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
                );
            });
        }
    });
})();
