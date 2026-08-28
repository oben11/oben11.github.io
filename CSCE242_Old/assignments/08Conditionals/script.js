document.addEventListener('DOMContentLoaded', () => {
    // Nav and Nav toggle
    let toggle = false;
    const navToggleBTN = document.getElementById("nav-toggle");
    const navList = document.getElementById("nav-list");

    // Exercise 1 elms
    const range = document.getElementById("range");
    const result = document.getElementById("range-result");
    const text = document.getElementById("range-text");
    // Exercise 2 elms
    const countdown = document.getElementById("Countdown");

    // Toggle nav
    navToggleBTN.onclick = () => {
        toggle = !toggle;
        navToggleBTN.classList.toggle("true", toggle);
        navList.classList.toggle("true", toggle);
    };

    // Show and hide exercises
    document.getElementById("Exercise-1-btn").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("Exercise-2").classList.add("hidden");
        document.getElementById("Exercise-1").classList.remove("hidden");
    });
    document.getElementById("Exercise-2-btn").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("Exercise-1").classList.add("hidden");
        document.getElementById("Exercise-2").classList.remove("hidden");
    });

    // range input listener
    range.addEventListener("input", function () {
        result.textContent = this.value + " minutes";
        if (this.value > 45) {
            text.textContent = "Time to Shower";
        } else if (this.value > 30) {
            text.textContent = "Eat breakfast";
        } else if (this.value > 15) {
            text.textContent = "Pack your bag";
        } else {
            text.textContent = "Time to head out!";
        }
    });

    const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
    );

    // start time (8:30am est)
    const start = new Date(now);
    start.setHours(8, 30, 0, 0);

    // Minutes until class
    const minutes = Math.floor((start - now) / 60000);

    let status;

    if (minutes > 15) status = "More than 15 minutes";
    else if (minutes > 10) status = "Between 10 and 15 minutes";
    else if (minutes > 5) status = "Between 5 and 10 minutes";
    else if (minutes >= 0) status = "Between 0 and 5 minutes";
    else if (minutes >= -5) status = "Class started up to 5 minutes ago";
    else if (minutes >= -15) status = "Class started up to 15 minutes ago";
    else status = "Class started more than 15 minutes ago";
    countdown.textContent = status;
});
