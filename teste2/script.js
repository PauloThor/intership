const solution = (arr) => {
    let output = []
    for (let i = 0; i < arr.length; i++) {
        if (!output.includes(arr[i])) {
            output.push(arr[i])
        }
    }
    return output.length
}

const arr1 = [0,0,1,1,2,3,4,5,5,5,7,9]

console.log(solution(arr1))