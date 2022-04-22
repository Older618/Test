function checkage(age) {
    let age_2 = 18
    let age_3 = 60
    if (String(age) == Number(age)) {
       if (age < age_2) {
            alert("You don’t have access cause your age is " + age +". It’s less then " + age_2);
        }
        else if (age >= age_2 && age < age_3) {
            alert("Welcome!")
        }
        else if (age > age_3) {
            alert("Keep calm and look Culture channel")
        } else {
            alert("Technical work")
        }   
    } alert("Error!!!")
}
let age = prompt('Сколько тебе лет?', 100);
checkage(age)