/*
    1]const:  The const does not reassign
              and redeclared
    2]let
    3]var
*/
const a=10;
a=20;
console.log(a);
var b=10;
let c=20;
{
    var b=30;
    let c=40;
    console.log(a,b);
}

console.log(b,c);