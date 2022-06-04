function validateForm() {
    var validateFlag = true; //Возращаемая функцией логическая переменная
    for (var i = 0; i < 4; i++) //Проверяем первые 4 поля формы
    {
        var countElem = document.anketa.elements[i];
        if (countElem.value == '') //Текущий элемент пустой?
        { //Если да, то
            var validateFlag = false; //Устанавливаем флаг в false
            alert('Fill every field');
            break; //Цикл можно не продолжать
        }
    }
    if (validateFlag) //Если вся анкета заполнена
        alert('Thank you')
    return validateFlag;
}