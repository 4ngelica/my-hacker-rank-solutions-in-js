function divisibleSumPairs(n, k, ar) {

let i; let j;
let result = 0;

for(i=0;i<n-1;i++){
  for(j=i+1;j<n;j++){
    if((ar[i]+ar[j])%k===0){
      result = result + 1
    }
  }
}
return result;
}
