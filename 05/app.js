console.log('DOM');

const curr = document.querySelector('.js-curr');
const currParent = curr.parentElement;

//create button 
const btn = document.createElement('button');
currParent.appendChild(btn);
btn.textContent= 'Usuń z koszyka';

//for each child of first article add class siblings
const children = currParent.children;
for (const child in children) {
    if (children.hasOwnProperty(child)) {
        // console.log(child, children[child]);
        children[child].classList.add('siblings');
    }
}

//add title to second article
currParent.nextElementSibling.title = 'nextElementSibling';

//create p element and add it before button
const mainParent = currParent.parentElement;//section class=articless
const para = document.createElement('p');
const lastArticle = mainParent.lastElementChild
const lastArticleChildren = [...lastArticle.children ];
lastArticle.insertBefore(para, lastArticleChildren[lastArticleChildren.length-1]);

const clone = mainParent.children[0].cloneNode(true);
mainParent.insertBefore(clone, mainParent.children[0]);