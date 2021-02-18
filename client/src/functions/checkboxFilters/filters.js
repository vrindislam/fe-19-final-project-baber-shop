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