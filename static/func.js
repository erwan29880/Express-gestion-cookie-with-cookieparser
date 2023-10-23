const accept = document.querySelector("#accepter");
const refuser = document.querySelector("#refuser");
const container = document.querySelector(".container");

const setCookie = () => {
    fetch("/setcookie").then(res => console.log(res.status));
}

const refuseCookie = () => {
    container.innerHTML = "";
    const p = document.createElement("p");
    p.innerText = "Vous avez refusé les cookies, vous ne pouvez pas accéder aux accès sécurisés du site.";
    container.appendChild(p);
}

accept.addEventListener("click", setCookie);
refuser.addEventListener("click", refuseCookie);