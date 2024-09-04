document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidePanel = document.getElementById('side-panel');
    if (sidePanel.classList.contains('side-panel-visible')) {
        sidePanel.classList.remove('side-panel-visible');
        sidePanel.classList.add('side-panel-hidden');
    } else {
        sidePanel.classList.remove('side-panel-hidden');
        sidePanel.classList.add('side-panel-visible');
    }
});