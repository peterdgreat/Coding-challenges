function birthdayCakeCandles(candles) {
    // Write your code here
    let arry=[]
    let count =0;
let max= Math.max(...candles)
candles.forEach((x)=> {
    if(x===max){
count++;   
    }
})

return count;
}
