const solution = (n, m) => {
    let arr = [];
    let output = [];

    for (let i = 0; i < n; i++) {
        arr.push(i)
    }

    let index = 0;
    while (!output.includes(arr[index])) {
        output.push(arr[index])
        index += m;
        if (index >= n) {
            index -= n;
        }
    }
    return output.length
}

console.log(solution(10,4))


const solution2 = (n, m) => {
    let arr = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
        arr.push(0)
    }

    let index = 0;
    while (arr[index] !== 1) {
        count++
        arr[index] = 1
        index += m
        if (index >= n) {
            index -= n;
        }
        if (arr[index] === 1) {return count}
    }
    // return count
}

console.log(solution2(10,4))


const solution3 = (n, m) => {
    let arr = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
        arr.push(0)
    }

    for (let j = 0; j < 999; j+=m) {
        if (arr[j] === 1) {return count}
        count++
        arr[j] = 1
        if (j >= n) {
            j -= n;
        }
    }
}

console.log(solution2(10,4))