
//HW2
  //2.3
  const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница','Суббота','Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
}
function getNameOfDay(){
    const lang = 'en';
    const day = 7;
    for(let keys in namesOfDays){
    
    if(lang !== keys){
        console.log(namesOfDays.ru[day-1]);
    }
    else{
        console.log(namesOfDays.en[day-1]);
    }
  }
}

getNameOfDay() /// 'Sunday'

