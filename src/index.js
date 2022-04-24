import {first} from './firstTab';
import {second} from './secondTab';
import {third} from './thirdTab';

const content = document.getElementById("content");

function createEl(type, src, className, elContent) {
    const element = document.createElement(type);
    if (typeof className !== "undefined") {
        element.classList.add(className);
    }
    element.textContent = elContent;
    if (type === "img") {
        element.src = src;
    }
    return element;
}

function menuItem(...itemContent) {

    for (let i = 0; i < arguments.length; i++) {
        const menuEl = createEl("li", undefined, undefined, undefined);
        const link = createEl("a", undefined, "menu-link", arguments[i]);
        link.setAttribute("href", "#");
        menuEl.appendChild(link);
        render(menu, menuEl);
    }
}

function render(parent, ...children) {
    for (let i = 1; i < arguments.length; i++) {
        parent.appendChild(arguments[i]);
    }
}

const header = createEl("h1", undefined, undefined, "The Pizza Factory");
const menu = createEl("ul", undefined, undefined, undefined);

const main = createEl("div", undefined, "main", undefined);
const footer = createEl("div", undefined, "footer", undefined);

const copyright = createEl("p", undefined, "copyright", "All rights reserved for The Pizza Factory © 2022 | Pizza Pic by Ivan Torres (Unsplash) | Pizza Menu by EDIT.org (Pinterest)");

menuItem("Home", "Menu", "Contact");
render(content, header, menu, main, footer);
render(footer, copyright);

const menuLinks = document.querySelectorAll(".menu-link");

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function () {
        if (menuLinks[i].textContent === "Home") {
            first();
        } else if (menuLinks[i].textContent === "Menu") {
            second();
        } else if (menuLinks[i].textContent === "Contact") {
            third();
        }
    });
};

first();
export {createEl, render, main};