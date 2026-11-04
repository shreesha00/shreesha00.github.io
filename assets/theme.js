(function () {
    const root = document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    let preference = null;
    let toggle = null;

    try {
        const saved = window.localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') preference = saved;
    } catch (error) {
        // The toggle still works when browser storage is unavailable.
    }

    function applyTheme(theme) {
        const dark = theme === 'dark';
        root.dataset.theme = theme;
        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) themeColor.content = dark ? '#15171a' : '#ffffff';
        if (toggle) {
            toggle.setAttribute('aria-pressed', String(dark));
            toggle.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
        }
    }

    // Apply the theme before the page paints to avoid a light flash on reload.
    applyTheme(preference || (systemTheme.matches ? 'dark' : 'light'));

    document.addEventListener('DOMContentLoaded', function () {
        toggle = document.getElementById('theme-toggle');
        if (!toggle) return;
        applyTheme(root.dataset.theme);
        toggle.hidden = false;
        toggle.addEventListener('click', function () {
            preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme(preference);
            try {
                window.localStorage.setItem('theme', preference);
            } catch (error) {
                // Keep the choice for this visit even if it cannot be saved.
            }
        });
    });

    systemTheme.addEventListener('change', function (event) {
        if (!preference) applyTheme(event.matches ? 'dark' : 'light');
    });
}());
