console.log('DOM');

document.addEventListener("DOMContentLoaded", function() {

    const links = document.querySelectorAll('a');
    console.log(links);

    links.forEach(link => {
        //set attribute if we have data-url attribute
        if (link.hasAttribute('data-url')) {
            const url = link.getAttribute('data-url');
            link.setAttribute('href', url);
        }
    });
});