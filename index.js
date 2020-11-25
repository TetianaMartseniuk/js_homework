1.1
for(i=1; i<=10; i++) {
    if(i%2 == 0){
    console.log('Fiz')}
    if(i%3 == 0 ){
    console.log('FizBuz')}
    if(i%3 !=0 && i%2 !=0){
    console.log('Buz')}

}

1.2


var inputNumber = prompt('Please enter an integer');
var total = 1;

for (i = 1; i <= inputNumber; ++i){
total = total * i;
}

console.log(inputNumber + '! = ' + total);



1.3

const SheetsInRemPaper = 500;
const ConsumptionPerWeek = 1200;
const WeekAmount = 8;
let minAmount = ConsumptionPerWeek/SheetsInRemPaper*WeekAmount;
 let j = minAmount;

   if(j%2 == 0){
    console.log(j);
   }else{
   console.log(Math.ceil(j));
}

1.4

function floor(n, m) {
    const roomsOnfloor = 3;
    const floors = 9;
    const roomnumber = 216;
    m = userNum/roomsOnfloor/roomnumber/floors;
    return Math.ceil(m);
}
    var userNum=+prompt('Введите номер квартиры');
    console.log(floor (userNum));

function porch(n) {
    const roomsOnfloor = 3;
    const floors = 9;
    const roomnumber = 216;
    n = userNum/(roomsOnfloor*floors);
    return Math.ceil(n);
    
}
    var userNum=+prompt('Введите номер квартиры');
    console.log(porch (userNum));
