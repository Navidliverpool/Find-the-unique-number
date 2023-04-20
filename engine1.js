function findUniq(arr) {
    let a = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            console.log("arr[i]:", arr[i])
            console.log("arr[i + 1]:", arr[i + 1])
            a = arr[i];
            break;
        }
    }
    const g = arr.find(element => element != a);
    return g;
}
let array = [3, 10, 3, 3, 3];
console.log(findUniq(array))