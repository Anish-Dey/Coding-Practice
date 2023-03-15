// Minimize the maximum difference between the heights

// Approach 1:

function MinimizeHeightDiffAp1(arr, n, k){
    // It is a greedy approach
    // First, Sort the array
    arr.sort((a,b)=>{
        return a-b
    }) // sorting the array in ascending order

    let ans = arr[n-1] - arr[0] // Initially the difference between the highest and lowest

    // If we add 'k' to the first element, it will jump towards maximum and if we subtract 'k' from all other elements
    // we can find element which maybe lower
    // If we subtract 'k' from the last element, it will move the element to the minimum and if we add 'k' to all other elements
    // we can find element which maybe higher

    // for that

    for(let i=1;i<n;i++){
        let maxH = Math.max(arr[n-1]-k, arr[i-1]+k)
        let minH = Math.min(arr[0]+k, arr[i]-k)

        if(minH < 0)
            continue
        
        ans = Math.min(ans, maxH - minH); // and eventually we take the difference between newly found Highest and lowest 
                                            // comparing it with initial ans and store the minimum ans
    }
    return ans
}


function MinimizeHeightDiffAp2(arr, n, k){
    // We will first find the difference between Highest and Lowest value
    let maxVal = Math.max(...arr) // Maximum value of the array
    let minVal = Math.min(...arr) // Minimum value of the array 
    let initDiff = maxVal - minVal // The initial difference between the largest and smallest element
    let avgVal = (maxVal+minVal)/2 // The Average value of max value and min value

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= avgVal) 
            arr[i] += k
        else
            arr[i] -= k
    }// adding k to the elements less than or equal to average value and subtracting k from those who greater
    let newMaxVal = Math.max(...arr) // New Minimum value of the array 
    let newMinVal = Math.min(...arr) // New Minimum value of the array 

    let newDiff = newMaxVal - newMinVal // The final difference between the largest and smallest element

    return (newDiff<initDiff)? newDiff:initDiff // If new diff is less then return it

}


const arr = [2,1,2,8,7,2,3,4,10]
let n = arr.length
console.log(arr)
console.log(MinimizeHeightDiffAp1(arr,n,5))
console.log(MinimizeHeightDiffAp2(arr, n, 5))