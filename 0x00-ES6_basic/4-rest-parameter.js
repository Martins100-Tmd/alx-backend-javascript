export default function returnHowManyArguments(...args){
	return args.length;
}

console.log(returnHowManyArguments(1, 'two', true));
