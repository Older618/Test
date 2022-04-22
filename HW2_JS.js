//возводим 2 в степень
let x = 2
let i = 1
while (i<11) {
    console.log('степень -',i,' результат = ',x)
    x=x*2
    i++
}
//выводим отсечку для читаемости
console.log('-------------------------------------------------------------------------------------------')

//функция возведения в степень числа 2
function degree(number) {
    return console.log(Math.pow(2, number))
}
//тест
degree (0)
degree (1)
degree (5)
degree (10)

//выводим отсечку для читаемости
console.log('-------------------------------------------------------------------------------------------')

//плодим смайлики
let smile=':)'
for (let i=0; i<5; i++) {
    console.log(smile)
    smile = smile + ':)'
}
//выводим отсечку для читаемости
console.log('-------------------------------------------------------------------------------------------')

//функция разомножения %)

function printSmile(stroka, numberOfRows){
let result = ''
for (let i=0; i<numberOfRows; i++) {
    result = result + stroka
    console.log(result)
}
}
printSmile(':)',5)
printSmile('xxx',3)

//выводим отсечку для читаемости
console.log('-------------------------------------------------------------------------------------------')

//cчитаем гласные/согласные
function getWordStructure(word){
let vowel = 0
let consonants = 0
let vowels = 'аиеёоуыэюя'
for (var i = 0; i < word.length; i++) {
  if (vowels.indexOf(word[i]) > -1 ) {
    vowel ++;
  } else {
      consonants ++;
  }
}
console.log('Слово ',word,' состоит из  ',vowel,' гласных и ',consonants,' согласных букв');
}
//тесты
getWordStructure('тыква')
getWordStructure('да')
getWordStructure('автоматизация')

//выводим отсечку для читаемости
console.log('-------------------------------------------------------------------------------------------')

//проверка на палиндром
function isPalindrom(word){
let temp = ''
for (var i = word.length - 1; i >=0; i--) {
    temp = temp + word[i]
}
if (word == temp){
    return console.log('ПАЛИНДРОМ')
}
else {
    return console.log('НЕ ПАЛИНДРОМ')
}
}
//тесты
isPalindrom('довод')
isPalindrom('невод')