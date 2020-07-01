console.log('DOM');

document.addEventListener("DOMContentLoaded", function() {

    const el = document.querySelector('.comments__item.comments__item--newest');
   
    const spans = el.querySelectorAll('span');
    
    const arr = [...spans];
    
    const dataInfo = arr.filter(el => {
        if(el.hasAttribute('data-info')) {
            return el;
        }
    })

    console.log(dataInfo.length);dfsd
});