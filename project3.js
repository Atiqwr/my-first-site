document.addEventListener("DOMContentLoaded", function () {
  const palettePreview = document.getElementById("palettePreview");
  const paletteColorName = document.getElementById("paletteColorName");
  const paletteStatus = document.getElementById("paletteStatus");
  const swatches = document.querySelectorAll(".palette-swatch");

  // Если элементов палитры нет на странице,
  // спокойно завершаем выполнение скрипта.
  if (
    !palettePreview ||
    !paletteColorName ||
    !paletteStatus ||
    swatches.length === 0
  ) {
    return;
  }

  const colors = {
    "#9b87ff": "Фиолетовый",
    "#43dfb2": "Бирюзовый",
    "#ff8caa": "Розовый",
    "#ffbd69": "Оранжевый",
  };

  swatches.forEach(function (swatch) {
    swatch.addEventListener("click", function () {
      const color = swatch.dataset.color;
      const colorName = colors[color] || "Выбранный цвет";

      palettePreview.style.setProperty("--palette-accent", color);

      paletteColorName.textContent = `${colorName} · ${color.toUpperCase()}`;

      paletteStatus.textContent = `Выбран цвет: ${colorName.toLowerCase()}.`;

      swatches.forEach(function (item) {
        const selected = item === swatch;

        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
    });
  });
});
