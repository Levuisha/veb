let user1={}
let user2= new Object;

let person={
    firstName:'anastasija',
    lastName:'djukic',
    age: 17,
    isAdult: true,
    'is student':true
}

console.log(person.firstName);

console.log(person['age']);
console.log(person['is student']);

person.newValue='nova vrednost';
console.log(person);

delete person.newValue;
console.log(person);
delete person['is student'];
console.log(person);

const mara={
    firstName:'mara',
    lastName: 'maric',
    age: 40,
    yearStartProgramming: 1998,
    isJavaScriptProgrammer: true,
    languages: ['php', 'JavaScript', 'C#'],

    calc: function() {
        this.ageOfProgramming = 2021 - this.yearStartProgramming;
    }
}

console.log(mara);
console.log(mara.firstName);
console.log(mara['firstName']);

const key = 'Name';
console.log(mara['first' + key]);
console.log(mara['last' + key]);
mara.location='Srbija';
console.log(mara);
console.log(mara.calc());
console.log('..........');
console.log(mara);
console.log(mara.languages[1]);

for(let key in mara){
    console.log(`${key} ima vrednost ${mara[key]}`);
}

// 01

console.log(`${mara.firstName} ${mara.lastName} ima ${mara.age} godina
     i zna ${mara.languages.length} programskih jezika, programira vec
      ${mara.ageOfProgramming} godine`);

// 02

let test = {
    test1: 'test1',
    test2: 'test2',
    test3: 'test3'
}

console.log(test);
console.log('lista svojstava objekata test su;');
for (let key in test) {
    console.log(`     = ${key}`);
}

// 03

delete test.test3;
console.log(test);

// 04

test['novi test'] = 'nova vrednost';
console.log(test);

// 05

test.getValues=function() {
    let values=[];
    for (let key in test) {
        values.push(test[key]);
    }
    return values;
}

// 06

console.log('..........');
console.log(test.getValues());

// 07

console.log(test.length);

Object.size=function(obj) {
    counter=0;
    for (let key in obj){
        counter++;
    }
    return counter;
}
console.log(Object.size(test));
console.log(Object.size(mara));
console.log(mara);

// 08

let knjizara = [
    {
        naslov: ' na drini cuprija',
        autor: 'ivo andric',
        'na stanju': true
    },
    {
        naslov: 'lovac na zmajeve',
        autor: 'haled hoseini',
        'na stanju': false
    },
    {
        naslov: 'koreni',
        autor: 'dobrica cosic',
        'na stanju': true
    }
]

let stampa = function(arr) {
    for (let item of arr) {
        let stanje = (item['na stanju']) ? 'ima' : 'nema';
        console.log(`${item.naslov} autora ${item.autor} ${stanje} na stanju`);
    }
}
console.log(stampa(knjizara));