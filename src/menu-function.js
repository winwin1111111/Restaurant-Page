import salsiccia from "./image/salsiccia.png";
import gamberi from "./image/gamberi.png";
import pepe from "./image/pepe.png";
import disgustoso from "./image/disgustoso.png";
import colorato from "./image/colorato.png";
import pomodoro from "./image/pomodoro.png";
import crema from "./image/crema.png";
import carne from "./image/carne.png";
export function menu(){
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute("id", "menu");
    var footer = document.querySelector('#footer');
    document.body.insertBefore(menuContainer, footer);

    const menuContent = {
        name:["Salsiccia", "Gamberi", "Pepe", "Disgustoso", "Colorato", "Pomodoro", "Crema", "Carne"],
        description:["Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil", "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil", "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil", "Tomato sauce, Bacon, Pineapple, Olives, Basil", "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil", "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli", "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil", "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"],
        image:[salsiccia, gamberi, pepe, disgustoso, colorato, pomodoro, crema, carne]
    };


    for(var i = 0; i < menuContent.name.length; i++){
        const pizzaContainer = document.createElement('div');
        pizzaContainer.setAttribute("id", "pizzaContainer");
        menuContainer.appendChild(pizzaContainer);

        const pizzaImg = document.createElement('img');
        pizzaImg.src = menuContent.image[i];
        pizzaContainer.appendChild(pizzaImg);

        const name = document.createElement('h2');
        name.textContent = menuContent.name[i];
        pizzaContainer.appendChild(name);

        const description = document.createElement('p');
        description.textContent = menuContent.description[i];
        pizzaContainer.appendChild(description);
    }

}