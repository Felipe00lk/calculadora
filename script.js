/* script.js */
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const themeToggle = document.getElementById("themeToggle");
let darkMode = false;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");

    if (value === "C") {
      display.value = "";
      return;
    }

    if (value === "DEL") {
      display.value = display.value.slice(0, -1);
      return;
    }

    if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Erro";
      }
      return;
    }

    display.value += value;
  });
});

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark", darkMode);
  themeToggle.textContent = darkMode ? "☀️" : "🌙";
});
