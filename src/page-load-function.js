import chef from './image/chef.png';
export function pageLoad(){
    const footer = document.querySelector("#footer");
    const content = document.createElement('div');
    content.setAttribute("id", "content");
    document.body.insertBefore(content, footer);

    const description = document.createElement('p');
    description.textContent = 'Best pizza in your country';
    content.appendChild(description);

    const description1 = document.createElement('p');
    description1.textContent = 'Made with passion since 1908';
    content.appendChild(description1);

    const image = document.createElement('img');
    image.src = chef;
    content.appendChild(image);

    const description2 = document.createElement('p');
    description2.textContent = 'Order online or visit us!';
    content.appendChild(description2);
}
