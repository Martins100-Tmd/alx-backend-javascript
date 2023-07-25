export default function uploadPhoto(filename) {
	return new Promise((res, rej) => {
		rej(new Error(`${filename} cannot be proccessed`));
	});
}

console.log(uploadPhoto('guillaume.jpg'));
