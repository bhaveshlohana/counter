let count = 0;
let span = document.getElementById("span");
var btns = document.querySelectorAll(".btn");
btns.forEach(function(btn) {
    btn.addEventListener("click", (event) => {
        let styles = event.currentTarget.classList;

        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            confirm("Do you want to reset?");
            count = 0;
        }
        span.textContent = count;

    });
});