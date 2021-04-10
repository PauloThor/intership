let obj = {

}

const solution = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i]
        if (!obj.hasOwnProperty(currentNumber)) {
            obj[currentNumber] = 1;
        }
        else {
            obj[currentNumber]++
        }
    }
    for (number in obj) {
        if (obj[number] % 2 !== 0) {
            return number
    }
}
}

let arr1 = [0,0,2,2,4,4,6,6,7,9,7,8,9,8,9,9,2];

console.log(solution(arr1))
