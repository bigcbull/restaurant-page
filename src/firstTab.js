import {createEl, render, main} from './index';

const image = createEl("img", "./pizza.jpg", "pizza", undefined);
const description = createEl("p", undefined, "description", "The Pizza Factory combines flavors & inspiration from the Far East & the West to create what we think is the best! Home to the original pesto, we specialize in pizzas, as well as handmade appetizers, sandwiches, salads, and gluten friendly, vegetarian, & vegan selections. Feel free to indulge in a tiki drink or craft beer with our fantastic unique cuisine. Cheers!");

function first() {
    main.textContent = "";
    render(main, image, description);
};

export {first};