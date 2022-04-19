//переделываем логику в отдельную функцию
function CheckAge(age) {
if (age < 18) {
    console.log('You don’t have access cause your age is ',age,' It’s less then ')
}
else if ((age >=  18) && (age < 60)) {
    console.log('Welcome  !')
}
else if (age  > 60) {
    console.log('Keep calm and look Culture channel')
}
else {
    console.log('Technical work')
    }
}
//тестовые данные
CheckAge(17)
CheckAge(18)
CheckAge(61)

//функция с проверкой типа данных

function CheckAge(age) {
    if (typeof(age) != 'number') {
        console.log('АЛЯРМ! АЛЯРМ! АХТУНГ!!')
    }
    else if (age < 18) {
        console.log('You don’t have access cause your age is ',age,' It’s less then ')
    }
    else if ((age >=  18) && (age < 60)) {
        console.log('Welcome  !')
    }
    else if (age  > 60) {
        console.log('Keep calm and look Culture channel')
    }
    else {
        console.log('Technical work')
        }
    }
//тестовые данные
CheckAge(17)
CheckAge(18)
CheckAge(61)
CheckAge('ошибка')

//функция корректно работает с '17'
function CheckAge(age) {
        age_transform = Number(age)
        if (isNaN(age)){
            console.log('АЛЯРМ! АЛЯРМ! АХТУНГ!!')
        }
        else if (age_transform < 18) {
            console.log('You don’t have access cause your age is ',age,' It’s less then ')
        }
        else if ((age_transform >=  18) && (age_transform < 60)) {
            console.log('Welcome  !')
        }
        else if (age_transform  > 60) {
            console.log('Keep calm and look Culture channel')
        }
        else {
            console.log('Technical work')
            }
        }
//тестовые данные
CheckAge('17')
CheckAge(17)
CheckAge(18)
CheckAge(61)
CheckAge('ошибка')
CheckAge('-2')
CheckAge('2e1')
        