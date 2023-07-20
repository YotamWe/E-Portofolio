(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    const themeBtn = document.querySelector(".theme-btn");
    const icon = themeBtn.querySelector("i");
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (icon.classList.contains("fa-moon")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("bi-brightness-high-fill");
          } else {
            icon.classList.remove("bi-brightness-high-fill");
            icon.classList.add("fa-moon");
          }
    });

})
();
