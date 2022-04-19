function CheckAge(age) {
    age_transform = Number(age)
    if (isNaN(age)){
        alert('АЛЯРМ! АЛЯРМ! АХТУНГ!!')
    }
    else if (age_transform < 18) {
        alert('You don`t have access cause your age is '+ age + ' It`s less then ')
    }
    else if ((age_transform >=  18) && (age_transform < 60)) {
        alert('Welcome  !')
    }
    else if (age_transform  > 60) {
        alert('Keep calm and look Culture channel')
    }
    else {
        alert('Technical work')
        }
    }
    let age = prompt("Введите ваш возраст",100);
    CheckAge(age)
