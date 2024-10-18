function jePalindrom(str) {
    const obrnut = str.split('').reverse().join('');
    return str === obrnut;
}

const testString = "racecar";
console.log(jePalindrom(testString));

const testString2 = "danas";
console.log(jePalindrom(testString2)); 
