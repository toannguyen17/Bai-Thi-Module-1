
/**
	* Câu 2:
	* Viết Hàm tryRemoveFromArray xóa giá trị trong mảng
	* 
	* @param:  [Array]  arr
	* @param:  [Number] x
	* @return: [Array]  arr
*/

let tryRemoveFromArray = function(arr, x) {
	let newArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		let check = arr[i];
		if (check == x) {
			continue;
		}
		newArr.push(check);
	}
	return newArr;
}

let testArr  = [4,3,5,6,7,8,3,3,5,7];
let checkArr = tryRemoveFromArray(testArr, 3);
console.log(checkArr);
