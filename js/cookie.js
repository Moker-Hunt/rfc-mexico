document.getElementById("accept-cookies").addEventListener("click", function () {
    document.getElementById("cookie-overlay").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
});

// Проверка, принял ли пользователь куки ранее
if (localStorage.getItem("cookiesAccepted") === "true") {
    document.getElementById("cookie-overlay").style.display = "none";
}