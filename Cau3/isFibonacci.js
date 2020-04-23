
/**
	* Câu 2:
*/

/**
	* Hàm isPerfectSquare kiểm tra căn bậc hai của một số
	* có phải là số nguyên không
	*
	* @param:  [Number]  x
	* @return: [Boolean]
*/
function isPerfectSquare(x)
{
	let s = Math.sqrt(x)>>0;
	return (s*s == x);
}

/**
	* Hàm isFibonacci kiểm tra 1 số có phải là số fibonacci
	*
	* @param:  [Number]  x
	* @return: [Boolean]
*/
function isFibonacci(n)
{
	return isPerfectSquare(5*n*n + 4) || isPerfectSquare(5*n*n - 4);
}

// test
/**
for (let i = 0; i < 10000; i++) {
	let check = isFibonacci(i);
	if(check){
		console.log(i);
	}
}
*/

console.log(isFibonacci(3));
