const mod=require('./modulo').mod;
const modInverse=require('./modulo').modInverse;
const gcd = require('./modulo').gcd;


/**
* @param messsage plain texts
* @param public key n = pq
* generating plain texts into public encoded messages
*/

module.exports.encrypt =function encrypt(msg,e,p,q){
  // encrypting msg into charCode
  try{
    var arr=[]
    for(i in msg){
      arr.push(msg.charAt(i).charCodeAt());
    }
  }catch(e){
    console.log(e);
  }
  let encoded='';
  error=new Error("invalid e for gcd(e,p-1*q-1) != 1");
  if(gcd(e,p-1*q-1)!= 1){return error;}
  arr.map((value)=>{
    ciphertext=((value)**e)%(p*q)
    console.log(ciphertext);
    encoded+=ciphertext.toString();
  })
  return encoded;
}

/**
* @param charA => arbitary character from abc
* @param charZ => arbitary characcter that must be less than charA
* retrieved from 'http://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-alphabet-in-jquery'
* generate a char array from given string
* only alphabate
*/

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
