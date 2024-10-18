
let niz = [];
for (let i = 0; i < 5; i++) {
niz.push(i);
}


 niz = [];
for (let i = 0; i < 10; i += 2) {
niz.push(i);
} 



 niz = [];
for (let i=10; i > 0; i-=2) {
niz.push(i);
}



 niz = [10,9,8,7,6];
for (let i = 0; i < niz.length; i++) {
console.log(niz[i]);
}


 niz = [
[1,2,3], ['Petar','Petrovic'], ['Novi Sad', 42]
];
for (let i=0; i < niz.length; i++) {
for (let j=0; j < niz[i].length; j++) {
console.log(niz[i][j]);
}
}


let ourArray = [];
let i = 0;
while(i < 5) {
ourArray.push(i);
i++;
}


let lastName = prompt('Kako se prezivas?');
console.log(lastName);

Primer8.
Switch

let job = prompt('Čime se Petar bavi ?');
switch (job) {
case 'programer':
console.log('Petar je programer.');
break;
case 'nastavnik':
console.log('Petar je nastavnik.');
break;
case 'dizajner':
console.log('Petar je dizajner.');
break;
case 'lekar':
console.log('Petar je lekar.');
break;
default:
console.log('Petar je,...hm....stvarno nisam sigurna');
}



let brojGodinaPera = 15;
let brojGodinaMika = 14;
let brojGodinaLaza = 13;
let bodoviPera, bodoviMika, bodoviLaza;

let sklekoviPera = 12;
let sklekoviMika = 13;
let sklekoviLaza = 11;
bodoviPera = brojGodinaPera + 5*sklekoviPera;
bodoviMika = brojGodinaMika + 5*sklekoviMika;
bodoviLaza = brojGodinaLaza + 5*sklekoviLaza;
if (bodoviPera > bodoviMika && bodoviPera > bodoviLaza) {
console.log('Pera je pobednik sa ukupno ' + bodoviPera + ' bodova!');
} else if ( bodoviMika > bodoviPera && bodoviMika > bodoviLaza){
console.log('Mika je pobednik sa ukupno ' + bodoviMika + ' bodova!');
} else if (bodoviLaza > bodoviPera && bodoviLaza > bodoviMika) {
console.log('Laza je pobednik sa ukupno ' + bodoviLaza + ' bodova!');
} else if ( bodoviPera === bodoviMika === bodoviLaza) {
console.log('Bravo za sve!');
}



let names = ['Mika', 'Pera', 'Laza'];
let years = new Array(2004, 2005, 2006);

console.log(years);
console.log(years[0]);
console.log(years[1]);
console.log(years[2]);



let petar = ['Petar', 'Petrovic'];
console.log(petar);
petar.push(2005);
console.log(petar);





 years = [2005, 2011, 2014];
let ages = [];
programiranju
let seniorDeveloper = []; 
function printSeniorDeveloper (years) {
for (let i = 0; i < years.length; i++) {
ages[i] = 2017 - years[i];
}
for (let i = 0; i < ages.length; i++) {
if (ages[i] >= 5) {
console.log ('Person ' + (i+1) +' is a senior programmer with ' +
ages[i] + ' years of experience');
seniorDeveloper[i] = true;
}
else {
console.log('Person ' + (i+1) + ' is a senior programmer with ' +
ages[i] + ' years of experience');
seniorDeveloper[i] = false;
}
}
return seniorDeveloper;
}
let isSenior = printSeniorDeveloper (years);

console.log(isSenior);