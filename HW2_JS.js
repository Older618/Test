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
    //console.log(Math.pow(2, number))
    let x = 1
    for  (let i=1; i <= number; i++){
        x=x*2
    }
return console.log(x)
}
//тест
degree (0)
degree (1)
degree (5)
degree (10)
degree (50)

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
let consonant = 0
let vowels = 'aeiouy'
let consonants = 'bcdfghjklmnopqrstvwxz'
for (let i = 0; i < word.length; i++) {
  if (vowels.indexOf(word[i]) > -1 ) {
    vowel ++;
  } else if (consonants.indexOf(word[i]) > -1 ){
      consonant ++
  }
}
console.log('Слово ',word,' состоит из  ',vowel,' гласных и ',consonant,' согласных букв')
}
//тесты
getWordStructure('deer')
getWordStructure('fly')
getWordStructure('cartoon')

//выводим отсечку для читаемости
console.log('-------------------------------------------------------------------------------------------')

//проверка на палиндром
function isPalindrom(word){
let temp = ''
for (let i = word.length - 1; i >=0; i--) {
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