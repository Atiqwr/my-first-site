


/* =========================
   1. ФОРМА КОНТАКТОВ
========================= */

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");

if (form && nameInput) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();

        if (!name) {
            alert("Пожалуйста, введи своё имя.");
            nameInput.focus();
            return;
        }

        alert(`Спасибо, ${name}! Форма отправлена.`);

        form.reset();
    });
}



/* =========================
   2. ПЕРЕКЛЮЧЕНИЕ ТЕМЫ
========================= */

const themeButton = document.getElementById("themeButton");
const themeKey = "portfolio-theme";

function updateThemeButton() {
    if (!themeButton) return;

    const isLight =
        document.body.classList.contains("light-theme");

    themeButton.textContent = isLight
        ? "🌙 Тёмная тема"
        : "☀️ Светлая тема";

    themeButton.setAttribute(
        "aria-label",
        isLight
            ? "Переключить на тёмную тему"
            : "Переключить на светлую тему"
    );
}

// Восстанавливаем сохранённую тему
try {
    const savedTheme = localStorage.getItem(themeKey);

    document.body.classList.toggle(
        "light-theme",
        savedTheme === "light"
    );
} catch (error) {
    // Сайт продолжает работать без сохранения настроек.
}

updateThemeButton();

// Переключаем тему
if (themeButton) {
    themeButton.addEventListener("click", function() {
        const isLight =
            document.body.classList.toggle("light-theme");

        try {
            localStorage.setItem(
                themeKey,
                isLight ? "light" : "dark"
            );
        } catch (error) {
            // Переключение останется рабочим до перезагрузки.
        }

        updateThemeButton();
    });
}

