export default function () {
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = "Welcome!";
    const p = document.createElement("p");
    p.textContent =
      "Join us and keep your todos organized.";
    contentContainer.appendChild(h2);
    contentContainer.appendChild(p);
  }
  