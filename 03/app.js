// console.log('DOM');

const parentForButton = document.querySelector('.parent-for-button');
const btn = document.createElement('button');
parentForButton.appendChild(btn);

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

for (const key in buttonSettings) {
    if (buttonSettings.hasOwnProperty(key)) {
        // console.log(key);
        // console.log(key, buttonSettings[key]);

        if (key === 'attr') {
            btn.classList.add(buttonSettings.attr.className);
            btn.title = buttonSettings.attr.title;
        } 
        else if (key === 'css') {
            const cssButtonSettings = buttonSettings[key];
            console.log(cssButtonSettings);

            for (const cssKey in cssButtonSettings) {
                btn.style[cssKey] = cssButtonSettings[cssKey];
            }

        // btn.style.border = cssSettings.css.border
        // btn.style.padding = cssSettings.css.padding
        // btn.style.backgroundColor = cssSettings.css.color
        } 
        else {
            btn.textContent = buttonSettings.text; 
        }
    }
}