import {createEl, render, main} from './index';

const form = createEl("form", undefined, "contact-form", undefined);

const fullName = genInput("text", "fullname", "fullName", "Full Name");
const email = genInput("email", "email", "email", "Email");
const subject = genInput("text", "subject", "subject", "Subject");
const message = createEl("textarea", undefined, undefined, undefined);
message.placeholder = "Your message";
const button = genInput("submit", "send", "send", undefined);
button.value = "Send";

function genInput(type, id, name, placeholder) {
    const input = createEl("input", undefined, undefined, undefined);
    input.setAttribute("type", type);
    input.id = id;
    input.name = name;
    input.placeholder = placeholder;
    return input;
}

function third() {
    main.textContent = "";
    form.append(fullName, email, subject, message, button);
    render(main, form);
};

export {third};