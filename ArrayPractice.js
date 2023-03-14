// Move all negative numbers to beginning and positive to end with constant extra space

function arrangeNegatives(arr,n){
    let n = arr.length;
    let j = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] < 0 ){
            if(i!=j){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
        }
          j++;
    }
    return arr;
}



const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
console.log(arr)
console.log("After arranging")
console.log(arrangeNegatives(arr))

