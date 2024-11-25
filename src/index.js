import "./style.css";
import { pageLoad } from "./page-load-function.js";
import { menu } from "./menu-function.js";
import { contact } from "./contact-function.js";

pageLoad();


function tapSwitch(){
    const homeBtn = document.querySelector('#HomeBtn');
    homeBtn.addEventListener("click", () => {
        clearContent();
        pageLoad();
    });

    const menuBtn = document.querySelector("#MenuBtn");
    menuBtn.addEventListener("click", () => {
        clearContent();
        menu();
    });

    const contactBtn = document.querySelector("#ContactBtn");
    contactBtn.addEventListener("click", () => {
        clearContent();
        contact();
    });
}

function clearContent(){
    const content = document.querySelector("#content");
    const menuDiv = document.querySelector("#menu");
    const contactDiv = document.querySelector("#contact");
    
    if(document.body.contains(menuDiv)){
        document.body.removeChild(menuDiv);
    } else if (document.body.contains(contactDiv)){
        document.body.removeChild(contactDiv);
    } else if (document.body.contains(content)){
        document.body.removeChild(content);
    }
}

tapSwitch();