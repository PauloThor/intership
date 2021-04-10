const solution = (n, m) => {
    let arr = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
        arr.push(0)
    }

    let index = 0;
    while (arr[index] === 0) {
        count++
        arr[index] = 1
        index += m
        if (index >= n) {
            index -= n;
        }
        if (arr[index] === 1) {return count}
    }
}

console.log(solution(10,4))