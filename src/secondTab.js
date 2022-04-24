import {createEl, render, main} from './index';

const menuImage = createEl("img", "./menu.jpeg", "pizzaMenu", undefined);

function second() {
    main.textContent = "";
    render(main, menuImage);
}

export {second};