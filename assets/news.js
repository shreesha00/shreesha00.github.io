(function () {
    const newsList = document.getElementById('news-list');
    const toggle = document.getElementById('news-toggle');
    if (!newsList || !toggle) return;

    // Keep entries newest first in the HTML; older entries collapse automatically.
    const archivedItems = Array.from(newsList.querySelectorAll('.news-item')).slice(6);
    if (archivedItems.length === 0) return;

    function setExpanded(expanded) {
        archivedItems.forEach(function (item) {
            item.hidden = !expanded;
        });
        toggle.textContent = expanded ? 'Less' : 'More';
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.setAttribute('aria-label', expanded ? 'Show less news' : 'Show more news');
    }

    setExpanded(false);
    toggle.hidden = false;
    toggle.addEventListener('click', function () {
        setExpanded(toggle.getAttribute('aria-expanded') !== 'true');
    });
}());
