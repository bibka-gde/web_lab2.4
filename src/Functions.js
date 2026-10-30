/*
  Напишите коллбек для array.filter, который отбирает все числа больше num
*/
export function higherThan(num) {
    // Функция возвращает другую функцию, которая проверит каждый элемент массива
    return (element) => element > num;
}

/*
  Напишите коллбек для array.filter, который отбирает из массива все строки, 
  включающие в себя substr. Регистр важен.
*/
export function hasSubstring(substr) {
    // Метод .includes() проверяет, содержит ли строка подстроку (с учётом регистра)
    return (element) => element.includes(substr);
}

/*
  Напишите функцию `multiply(num)`, которая работает вот так:
  console.log(multiply(5)(10)); // 50
*/
export function multiply(num) {
    // Возвращаем функцию, которая запоминает первое число (num)
    // и умножает его на второе число (multiplier), которое придёт позже
    return (multiplier) => num * multiplier;
}
