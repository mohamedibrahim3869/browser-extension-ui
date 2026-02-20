//importing data
import jsonData from "./data.json" with { type: "json" };

// console.log(jsonData); it returns array of object
//accessing DOM elements
const extensionsContainer = document.getElementById("extensions-container");

//functionality
const showExtension = () => {
    jsonData.forEach((data, index) => {
        extensionsContainer.innerHTML += `<div class="extension" id="extension-${index}"><div class="info"><img src=${data.logo}><div class="text-info"><h3>${data.name}</h3><p id="desc">${data.description}</p></div></div><div class="control-btns"><button>Remove</button><label class="switch">
        <input type="checkbox" ${data.isActive ? "checked" : ""}/>
        <span class="slider round"></span>
    </label></div></div>`;
    });
};

//working with DOM
document.addEventListener("DOMContentLoaded", showExtension);
