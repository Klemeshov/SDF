const arr = [1, 3, 59, 4, 5];


arr.forEach((value, index) => {
    // console.log(value);
});

const mapArr = arr.map((value) => {
    return value + 2;
})
// console.log(mapArr);


const a = arr.find((value, index) => {
    return value < 0;
})

const b = arr.findLast((value, index) => {
    return value > 2;
});
//сам
arr.findIndex(() => {});

const filteredArr = arr.filter((value, index) => {
    return value < 5;
})

const reducedValue = arr.reduce((previousValue, value, index) => {
    return previousValue + value;
}, 0)

const sorted = arr.sort((a, b) => {
    // 1 - если a > b
    // 0 - eсли a = b
    // -1 - eсли a < b
    return a < b ? 1 : a === b ? 0 : -1;
});
// arr.flatMap(() => {})

const str = arr.join(', ');

const newArray = str.split(', ').map((value) => Number(value));
console.log(newArray);


//HOF - High order function

const HOF = (func) => {
    const a = 'qwe';
    console.log(a);

    const b = func(a);

    return b;
}

