function backBtn() {
    const btn = document.createElement("button");
    btn.classList.add("back-btn");
    btn.innerHTML = "⬅️";

    btn.addEventListener("click", () => history.back());

    document.body.appendChild(btn);
}

backBtn();