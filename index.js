//importing data
import jsonData from "./data.json" with { type: "json" };

// console.log(jsonData); it returns array of object
//accessing DOM elements
const extensionsContainer = document.getElementById("extensions-container");
const themeBtn = document.getElementById("theme-btn");
const svg = document.querySelector("svg");
const allBtn = document.getElementById("all-btn");
const activeBtn = document.getElementById("active-btn");
const inActiveBtn = document.getElementById("inactive-btn");
const removeBtn = document.getElementById("remove-btn");
const activeSwitch = document.querySelector(".active-switch");
//functionality

const showExtension = () => {
    jsonData.forEach((data, index) => {
        extensionsContainer.innerHTML += `<div class="extension" id="extension-${index}"><div class="info"><img src=${data.logo}><div class="text-info"><h3>${data.name}</h3><p id="desc">${data.description}</p></div></div><div class="control-btns"><button id="remove-btn">Remove</button><label class="switch">
        <input class="active-switch" type="checkbox" ${data.isActive ? "checked" : ""}/>
        <span class="slider round"></span>
        </label></div></div>`;
    });
};
const filterExtensions = () => {
    const extensions = document.querySelectorAll(".extension");

    extensions.forEach((extension) => {
        const isChecked = extension.querySelector(
            "input[type='checkbox']",
        ).checked;
        if (!isChecked) {
            extension.style.display = "none";
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    showExtension();
    filterExtensions();
});

const filterSelected = () => {};

const themeSwitch = () => {
    if (!document.body.classList.contains("light-theme")) {
        document.body.classList.add("light-theme");
        svg.children[1].setAttribute("fill", "#091540");
    } else {
        document.body.classList.remove("light-theme");
        svg.children[1].setAttribute("fill", "#fff");
    }
};

//working with DOM
themeBtn.addEventListener("click", themeSwitch);
