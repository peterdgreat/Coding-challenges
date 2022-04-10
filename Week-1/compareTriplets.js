function compareTriplets(a, b) {
    const rate = [];
    let ali=0;
    let bob=0;
for(let i=0; i<3; i++){
 
    if (a[i] > b[i]) {
        ali++;
    }
    else if (a[i]< b[i]){
        bob++;
    }
}
rate.push(ali,bob);
return rate;
}
