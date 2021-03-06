
function maxDigit(value: number): number {
    let vS: string[] = value.toString().split('')
    let vN: number[] = []
    vS.forEach(i => {
        vN.push(Number(i))
    })
    let sortedArray: number[] = vN.sort((n1,n2) => n2 - n1);
    return sortedArray[0]
}

console.log('Example:');
console.log(maxDigit(12345), 5);
console.log(maxDigit(0), 0);
console.log(maxDigit(52), 5);
console.log(maxDigit(634), 6);
console.log(maxDigit(1), 1);
console.log(maxDigit(10000), 1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");