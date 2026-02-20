//importing data
import jsonData from "./data.json" with { type: "json" };

//accessing DOM elements
const extensionsContainer = document.getElementById("extensions-container");
const themeBtn = document.getElementById("theme-btn");
const svg = document.querySelector("svg");
const allBtn = document.getElementById("all-btn");
const activeBtn = document.getElementById("active-btn");
const filterSec = document.querySelector(".filter-buttons");

const filterBtns = filterSec.querySelectorAll("button, span");
const inActiveBtn = document.getElementById("inactive-btn");

function removeExtension(e) {
    const extension = e.currentTarget.closest(".extension");
    if (extension) extension.remove();
}

const showExtension = () => {
    let html = "";
    jsonData.forEach((data, index) => {
        html += `<div class="extension" id="extension-${index}"><div class="info"><img src=${data.logo}><div class="text-info"><h3>${data.name}</h3><p id="desc">${data.description}</p></div></div><div class="control-btns"><button class="remove-btn">Remove</button><label class="switch">
        <input class="active-switch" type="checkbox" ${data.isActive ? "checked" : ""} />
        <span class="slider round"></span>
        </label></div></div>`;
    });

    extensionsContainer.innerHTML = html;

    const removeButtons = extensionsContainer.querySelectorAll(".remove-btn");
    removeButtons.forEach((btn) =>
        btn.addEventListener("click", removeExtension),
    );
};

const toggleBtn = (btn) => {
    filterBtns.forEach((button) => {
        if (button.id === btn.id) {
            button.classList.add("btn-active");
        } else {
            button.classList.remove("btn-active");
        }
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
    toggleBtn(activeBtn);
};

document.addEventListener("DOMContentLoaded", () => {
    showExtension();
    filterExtensions();
});

const filterByBtn = (btn) => {
    const extensions = document.querySelectorAll(".extension");
    extensions.forEach((extension) => {
        const isChecked = extension.querySelector(
            "input[type='checkbox']",
        ).checked;
        if (btn.id === "all-btn") {
            extension.style.display = "flex";
        } else if (btn.id === "active-btn") {
            extension.style.display = isChecked ? "flex" : "none";
        } else if (btn.id === "inactive-btn") {
            extension.style.display = isChecked ? "none" : "flex";
        }
    });
};

allBtn.addEventListener("click", () => {
    toggleBtn(allBtn);
    filterByBtn(allBtn);
});

activeBtn.addEventListener("click", () => {
    toggleBtn(activeBtn);
    filterByBtn(activeBtn);
});

inActiveBtn.addEventListener("click", () => {
    toggleBtn(inActiveBtn);
    filterByBtn(inActiveBtn);
});

const themeSwitch = () => {
    if (!document.body.classList.contains("light-theme")) {
        document.body.classList.add("light-theme");
        svg.children[1].setAttribute("fill", "#091540");
        themeBtn
            .querySelector("img")
            .setAttribute("src", "./assets/images/icon-moon.svg");
    } else {
        document.body.classList.remove("light-theme");
        svg.children[1].setAttribute("fill", "#fff");
        themeBtn
            .querySelector("img")
            .setAttribute("src", "./assets/images/icon-sun.svg");
    }
};

//working with DOM
themeBtn.addEventListener("click", themeSwitch);
