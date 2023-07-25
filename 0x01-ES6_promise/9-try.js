export default function guardrail(mathFunction) {
	let queue = [], result = mathFunction();
	queue[0] = typeof result == "number" ? result : 'Error: ' + result.message;
	queue[1] = 'Guardrail was processed';
	return queue;
}
