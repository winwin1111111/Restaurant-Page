import location from "./image/restaurant-location.png"
export function contact(){
    const footer = document.querySelector("#footer");
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contact");
    document.body.insertBefore(contactContainer, footer);

    const number = document.createElement("h2");
    number.textContent = "📞 123 456 789";
    contactContainer.appendChild(number);

    const address = document.createElement("h2");
    address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";
    contactContainer.appendChild(address);

    const addressImg = document.createElement("img");
    addressImg.src = location;
    contactContainer.appendChild(addressImg);

}