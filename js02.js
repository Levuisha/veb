console.log(3>2);
console.log(2=='2');
console.log('02' !=2);

let result = 100<99;
console.log(result);

console.log('Anastasija' > 'Dimitrije');

let answer = prompt('Koliko imati godina?', 'Unesite vase godine');

if(answer < 18){
    console.log('Vi ste maloletna osoba');
}else{
    console.log('Vi ste punoletna osoba');
}

let newAnswer = prompt('Koliko imate godina?', 'Unesite vase godine');

if(newAnswer >= 19){
    console.log('Vi ste zavrsili srednju skolu.');
}else if (newAnswer >= 15 && newAnswer <= 19){
    console.log('Vi ste ucenik srednje skole');
}else if(newAnswer < 15 && newAnswer >= 7){
    console.log('Vi ste ucenik osnovne skole');
}else {
    console.log('U vrticu ste!');
}

console.log('Terenarni operator');
let age = prompt('Unesite godine', 'godine');

let isAdult = (age > 18) ? true : false;
console.log(isAdult);


console.log('Visestruki terenarni operator');
let newAge = prompt('Unesite godine', 'godine');

let message = (newAge >= 19) ? 'Zavrsili ste srednju skolu' : (newAge >= 15 && newAge <= 19) ? 'Srednjoskolac ste' : (newAge <15 && newAge >= 7) ? 'Osnovac ste' : 'Idete u vrtic';

console.log(message);

let smer = prompt ('Koji ste smer upisali u nasoj skoli');
switch (smer){
    case 'Informacione tehonlogije': console.log('Izabrali ste jedan od najpopularnijih smerova');
    break;
    case 'Telekomunikacije': console,log('Bicete medju najboljim poznavaocima prenosa informacija');
    break;
    case 'Mehatronika': console.log('U buducnosti cete imati veoma popularno zanimanje');
    break;
    case 'Multimedija': console.log('Izabrali ste veoma popularan smer');
    default: console.log('U skoli cete steci sva potrebna znanja za Vase zanimanje');
}


console.log('While petlja')
let i = 1
while (i<=5){
    console.log(i);
    i++;
}

console.log('Do ..... While petlja');

let j=1;
do {
    console.log(j);
    j++;
}while(j<5);

console.log('For petlja');
for(let i=1; i<=5; i++){
    console.log(i);
}

console.log('For...in...petlja');
let person = {
    firstName: 'Vojin',
    lastName: 'Knezevic',
    isAdult: false 
}

let propsValues = '';
function iterateInObject(obj){

    for(let i in obj) {
        propsValues += obj[i] + ' ';
    }
    console.log(propsValues);
}
iterateInObject(person);

console.log('For...of petlja');
let programmingLanguages = ['JavaScript', 'PHP', 'C#'];
for(item of programmingLanguages){
    console.log(item);
}

console.log('Break');
for(let i=1; i<=5;i++){
    console.log(i);
    if(i==3){
        break;
    }
}

console.log('Continue');
for(let i=1; i<=5; i++){
    if(i===3){
        continue;
    }
    console.log(i);
}

