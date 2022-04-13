function miniMaxSum(arr) {
    // Write your code here
    let sum= arr.reduce((a,b)=> a+b);
    const max= Math.max(...arr);
    const min= Math.min(...arr)
     console.log(sum-max,sum-min)

}