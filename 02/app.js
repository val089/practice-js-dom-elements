console.log('DOM');

document.addEventListener("DOMContentLoaded", function() {

    const links = document.querySelectorAll('a');
    console.log(links);

    links.forEach(link => {
        if (link.hasAttribute('data-url')) {
            const url = link.getAttribute('data-url');
            link.setAttribute('href', url);
        }
    });
});