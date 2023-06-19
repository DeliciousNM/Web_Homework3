const temperature = prompt("Введите температуру в градусах Цельсиях")
alert(`Цельсий: ${temperature}, Фаренгейт ${(9/5 * temperature + 32).toFixed(1)}`);