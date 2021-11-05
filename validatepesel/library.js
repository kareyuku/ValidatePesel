module.exports.validPesel = ( pesel ) => {

    const peselregex = /[^0-9]/

    if( peselregex.test( pesel ) ) return false;

    const peselInt = pesel;

    if( isNaN(peselInt) || pesel.length != 11 ) return false;

    const yearFromPesel = parseInt( peselInt.slice(0, 2) ) <= parseInt(new Date().getFullYear().toString().slice(2)) ? "20" + peselInt.slice(0, 2) : "19" + peselInt.slice(0, 2);
    const monthFromPesel = peselInt.slice(2, 4);

    if( parseInt( monthFromPesel ) >= 13 || parseInt( monthFromPesel ) <= 0 ) return false;

    const dayFromPesel = peselInt.slice(4, 6)

    if( parseInt( dayFromPesel ) > 31 || 0 >= parseInt( dayFromPesel ) ) return false;

    const genderFromPesel = peselInt.slice(9, 10) % 2 == 1 ? "male" : "female";

    return { data: { year: yearFromPesel, month: monthFromPesel, day: dayFromPesel, gender: genderFromPesel } };

}