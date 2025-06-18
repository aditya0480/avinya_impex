function loadHeader(currentPage) {
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            
            // Set active page
            const header = document.querySelector('.header-style-1');
            header.setAttribute('data-current-page', currentPage);
            
            // Add active class to current page link
            const currentLink = document.querySelector(`[data-page="${currentPage}"]`);
            if (currentLink) {
                currentLink.parentElement.classList.add('active');
            }
            
            // Reinitialize any necessary scripts
            if (window.initializeHeaderScripts) {
                window.initializeHeaderScripts();
            }
        });
}
