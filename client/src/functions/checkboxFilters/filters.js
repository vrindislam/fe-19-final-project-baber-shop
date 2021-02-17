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
    for (const key in obj) {
        if (key === 'maxPrice' || key === 'minPrice') {
            delete obj[key]
        } else if (Array.isArray(obj[key])) {
            console.log('array --->', key, obj[key]);
            // for (const arrItem of obj[el]) {
                // object[type] = object[el];
                // delete object[type];
                // const object = Object.assign()
                // object.type = arrItem;
                // console.log(object);
            // }
            // el = {el: obj[el]};
            // arr.push(el);
        } else {
            arr.push(key);
        }
    }
    console.log('this array--->', arr);
    return arr
}