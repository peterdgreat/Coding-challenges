function timeConversion(s) {
    const array = s.slice(0, s.length - 2).split(':')

    array[0] = (s.indexOf('PM') > -1) ?
        (array[0] == 12 ? '12' : Number(array[0]) + 12) :
        (array[0] == 12 ? '00' : array[0]);
    return array.join(':');
}