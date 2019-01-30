var resultat;

function addition(val1, val2) {
    resultat = val1 + val2;
    return resultat;
}

function soustraction(val1, val2) {
    resultat = val1 - val2;
    return resultat;
}

function multiplication(val1, val2) {
    resultat = val1 * val2;
    return resultat;
}

function division(val1, val2) {
    resultat = val1 / val2;
    return resultat;
}

function date2000(today = new Date()) {
    const newYear2000 = new Date(2000, 0, 1, 0, 0, 0);
    var dif = (today - newYear2000)/1000;
    // dif = Math.ceil(dif);
    return dif;
}

module.exports = { addition: addition, soustraction: soustraction, multiplication: multiplication, division: division, date2000: date2000 };