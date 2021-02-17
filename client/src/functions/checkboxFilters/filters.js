export function pickUpValues(array) {
    const res = []
    for (let i = 0; i < array.length; i++) {
        res[i] = {[array[i].type]: [array[i].name]}
    }
    return res
}

export function groupValues(array) {
    const res = {};
    for (const el of array) {
        for (const elKey in el) {
            const e = res[elKey] || [];
            e.push(...el[elKey]);
            res[elKey] = e;
        }
    }
    return res
}

export function degroupValues(obj) {
    const arr = [];
    for (const el in obj) {
        if (el === 'maxPrice' || el === 'minPrice') {
            delete obj[el]
        } else if (Array.isArray(obj[el])) {
            console.log('array!!!', el, obj[el]);
            for (const arrItem of obj[el]) {
                console.log(arrItem)
                // arr.push(object);
            }
            // el = {el: obj[el]};
            // arr.push(el);
        }

        arr.push(el);
    }
    console.log('this array--->', arr);
    return arr
}