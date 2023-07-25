function getResponseFromAPI() {
	return new Promise((res,rej)=>{
		res(1);
	});
}
let res = getResponseFromAPI();
console.log(res instanceof Promise);
