export default function divideFunction(numerator, denominator) {
	return denominator === 0 ? new Error('cannot divide by 0') : numerator / denominator;
}

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));
