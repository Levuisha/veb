function obrniRecenicu(recenica) {
    return recenica.split(' ').reverse().join(' ');
}


const recenica = "danas je lep dan";
console.log(obrniRecenicu(recenica));
