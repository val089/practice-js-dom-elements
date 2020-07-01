console.log('DOM');

//FIRST SOLUTION

const nav = document.querySelector('nav');

// const template = `
//     <ul>
//         <li><a href="/">home</a></li>
//         <li><a href="/gallery">gallery</a></li>
//         <li><a href="/contact">contact</a></li>
//     </ul>
// `;

// nav.innerHTML = template;

//SECOND SOLUTION

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

// console.log(menuItems);

const ul = document.createElement('ul');
nav.appendChild(ul);

menuItems.forEach(menuItem => {
    // console.log(menuItem);
    const li = document.createElement('li');
    const link = document.createElement('a');

    for (const key in menuItem) {
        if (menuItem.hasOwnProperty(key)) {
            // console.log(key, menuItem[key]);

            if (key === 'url') {
                link.setAttribute('href', menuItem.url);
            } 
            else {
                link.textContent = menuItem.text;
            }
        }
    }

    ul.appendChild(li);
    li.appendChild(link);
})
