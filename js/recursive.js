
module.exports.gcd= function gcd(a,b){
  return b ? gcd(b,a %b) :Math.abs(a);
}
