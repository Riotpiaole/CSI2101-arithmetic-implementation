/**
*
*/

module.exports.mod=function mod(n,p){
  r = n%p
  if(((p>0) && (r<0))||((p<0)  && (r>0))){
      r+=p;
  }
  return r
}


module.exports.modInverse=function modInverse(n,p){
  n= mod(n,p);
  for(x= 1; x<p;x++){
    if(mod(n*x,p)==1) return x;
  }
  return 0;
}

module.exports.gcd=function gcd(a,b){
  //Euclidean algorithm approach
  a=Math.abs(a);
  b=Math.abs(b);

  if(b>a){
    var temp=a;
    a=b;
    b=temp;
  }

  while(true){
    a%= b;
    if(a === 0) return b;
    b%=a;
    if(b === 0) return a;
  }
}
