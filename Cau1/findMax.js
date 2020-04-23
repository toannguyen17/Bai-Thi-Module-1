

/**
	* Câu 1:
	* Viết Hàm findMax tìm điểm cao nhất bằng vòng lặp for
	* 
	* @param: Array
	* @return: Number
*/

function findMax(arr){
	let max = arr[0];

	for (let i = arr.length - 1; i > 0; i--) {
		let checkMax = arr[i];
		if (checkMax > max) {
			max = checkMax;
		}
	}

	return max;
}

let arrPoint = [5, 7, 23, 8, 16, 23, 1];

let maxPoint = findMax(arrPoint);

console.log(maxPoint);
