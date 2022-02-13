export function romanToInteger(str) {
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'I':
                result += 1;
                break;
            case 'V':
                if (str[i - 1] === 'I') {
                    result += 3;
                } else {
                    result += 5;
                }
                break;
            case 'X':
                if (str[i - 1] === 'I') {
                    result += 8;
                } else {
                    result += 10;
                }
                break;
            case 'L':
                if (str[i - 1] === 'X') {
                    result += 30;
                } else {
                    result += 50;
                }
                break;
            case 'C':
                if (str[i - 1] === 'X') {
                    result += 80;
                } else {
                    result += 100;
                }
                break;
            case 'D':
                if (str[i - 1] === 'C') {
                    result += 300;
                } else {
                    result += 500;
                }
                break;
            case 'M':
                if (str[i - 1] === 'C') {
                    result += 800;
                } else {
                    result += 1000;
                }
                break;
        }
    }

    return result;
}
