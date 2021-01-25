"use strict";


let password = prompt('Введите пароль', ''),
    currentPassword = '123';

if (password == currentPassword) {
   alert('Верный пароль');
} 
else if (password > currentPassword) {
   alert('Неверный пароль');
   alert('Попробуйте еще раз');
} 
else if (password < currentPassword) {
    alert('Неверный пароль');
    alert('Попробуйте еще раз');
 } 
 else if (password == '') {
    alert('Неверный пароль');
    alert('Попробуйте еще раз');
 } 






    



