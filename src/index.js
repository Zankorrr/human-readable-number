module.exports = function toReadable (number) {
    const string = String(number);
    const zero = 'zero';
    const one = 'one';
    const two = 'two';
    const three = 'three';
    const four = 'four';
    const five = 'five';
    const six = 'six';
    const seven = 'seven';
    const eight = 'eight';
    const nine = 'nine';
    const ten = 'ten';
    const eleven = 'eleven';
    const twelve = 'twelve';
    const thir = 'thir';
    const fif = 'fif';
    const eigh = 'eigh';
    const twenty = 'twenty';
    const forty = 'forty';
    const hundred = ' hundred';
    if (number < 14 || number == 15 || number == 18 || number == 20 ||
         number == 30 || number == 40 || number == 50 || number == 80) {
        switch(string) {
            case '0': return zero;
            case '1':
            case '01': return one;
            case '2':
            case '02':  return two;
            case '3':
            case '03':  return three;
            case '4':
            case '04': return four;
            case '5':
            case '05': return five;
            case '6':
            case '06': return six;
            case '7':
            case '07': return seven;
            case '8':
            case '08': return eight;
            case '9':
            case '09': return nine;
            case '10': return ten;
            case '11': return eleven;
            case '12': return twelve;
            case '13': return thir + "teen";
            case '15': return fif + "teen";
            case '18': return eigh + "teen";
            case '20': return twenty;
            case '30': return thir + "ty";
            case '40': return forty;
            case '50': return fif + "ty";
            case '80': return eigh + "ty";
        }
    } else if (number > 13 && number < 20) {
        return toReadable(string[1]) + "teen";
    } else if (number > 20 && number < 30) {
        return twenty + " " + toReadable(string[1])
    } else if (number > 30 && number < 40) {
        return thir + "ty " + toReadable(string[1])
    } else if (number > 40 && number < 50) {
        return forty + " " + toReadable(string[1])
    } else if (number > 50 && number < 60) {
        return fif + "ty " + toReadable(string[1])
    } else if ((number > 59 && number < 81) || (number > 89 && number < 100)) {
        if (number % 10 == 0) {
            return toReadable(string[0]) + "ty";
        } else {
            return toReadable(string[0]) + "ty " + toReadable(string[1])
        }
    } else if (number > 80 && number < 90) {
        return toReadable(string[0]) + "y " + toReadable(string[1])
    } else if (number > 99) {
        if (number % 100 == 0) {
            return toReadable(string[0]) + hundred;
        } else {
           return toReadable(string[0]) + hundred + " " + toReadable(string.slice(1)) 
        }
    }
}

