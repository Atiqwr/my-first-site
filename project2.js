document.addEventListener("DOMContentLoaded", function () {
  const demoButton = document.getElementById("demoButton");
  const demoOrb = document.getElementById("demoOrb");
  const demoMessage = document.getElementById("demoMessage");
  const demoCount = document.getElementById("demoCount");

  // Если элементов демонстрации нет на странице,
  // спокойно завершаем выполнение скрипта.
  if (!demoButton || !demoOrb || !demoMessage || !demoCount) {
    return;
  }

  let count = 0;

  // Обрабатываем нажатие кнопки
  demoButton.addEventListener("click", function () {
    count++;

    // Меняем внешний вид круга
    demoOrb.classList.toggle("is-active");

    // Обновляем счётчик
    demoCount.textContent = count;

    // Меняем сообщение
    if (count % 2 === 1) {
      demoMessage.textContent = "Отлично! JavaScript работает ✨";
    } else {
      demoMessage.textContent = "Попробуй нажать ещё раз!";
    }
  });
});
