
button1.onclick = function(){
var num = +prompt('Введите свой возраст в цифрах.')
if(num<=0){
    alert('Введите правильные данные!')
}else if(num < 18){
    alert ('Вы ещё молоды. Вам надо учиться.');
}else if(num>=18 && num<=50) {
    alert('Вам нужно работать.')
}else if(num>50 && num<=59) {
    alert('Вам скоро на пенсию')
}else if(num>59 && num<=150) {
    alert('Вы пенсионер.')
}else{
    alert('Что-то пошло не так!')
}
}


button2.onclick = function() {
var num2 = +prompt('Введите число от 0 до 24')
  switch(num2){
    case 1:
        alert('Час ночи');
    break;
    case 2:
        alert('Два часа ночи');
    break;
    case 3:
        alert('Три часа ночи');
    break;
    case 4:
        alert('Четыри часа утра');
    break;
    case 5:
        alert('Пять часов утра');
    break;
    case 6:
        alert('Шесть часов утра');
    break;
    case 7:
        alert('Семь часов утра');
    break;
    case 8:
        alert('Восемь часов утра');
    break;
    case 9:
        alert('Девять часов утра');
    break;
    case 10:
        alert('Десять часов утра');
    break;
    case 11:
        alert('Одинадцать часов утра');
    break;
    case 12:
        alert('Полдень');
    break;
    case 13:
        alert('13 часов');
    break;
    case 14:
        alert('Два часа');
    break;
    case 15:
        alert('3 часа');
    break;
    case 16:
        alert('4 часа');
    break;
    case 17:
        alert('5 часов');
    break;
    case 18:
        alert('6 часов');
    break;
    case 19:
        alert('Семь часов вечера');
    break;
    case 20:
        alert('Восемь часов вечера');
    break;
    case 21:
        alert('Девять часов вечера');
    break;
    case 22:
        alert('Десять часов вечера');
    break;
    case 23:
        alert('11 вечера');
    break;
    case 24:
        alert('Полночь');
    break;

    default:
        alert ('Неправильные данные!');
    break;
}
}

button3.onclick = function(){
    var a = +prompt('Введите первое число');
    var b = +prompt('Введите второе число');
    var c = +prompt('Введите третье число');

    a=Number(a);
    b=Number(b);
    c=Number(c);

    if (a<b && b<c){
        alert(b);
    }else if (a<c && c<b){
        alert(c);
    }else if (b<a && a<c){
        alert(a);
    }else if (b<c && c<a){
        alert(c);
    }else if (c<a && a<b){
        alert(a);
    }else if (c<b && b<a){
        alert(b);
    }else{
        alert('Произошла ошибка! Попробуйте ещё раз.');
    }
}