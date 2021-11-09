/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  if (!str.trim()) return '';

  const wordArray = str.trim().split(' ');
  const capitalizedWordArray = wordArray.map(function (item) {
    return item[0].toUpperCase() + item.slice(1);
  });

  return capitalizedWordArray.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
