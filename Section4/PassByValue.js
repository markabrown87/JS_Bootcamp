let primitive = 5;
let aNull = null;
let objectOne = {this: "unchanged"};
let objectTwo = {this: "unchanged"};

function change(a, b, c, d) {
    a = 0;
    b = {this: "changed"};
    c.this = "changed";
    d = 5;
}

change(primitive, objectOne, objectTwo, aNull);

console.log(primitive) // This should still print 5 because it is a primitive and is passed by value
console.log(aNull) // This should still print null because null is considered a primitive
console.log(objectOne.this) 
// This should still print "unchanged" because a copy of the reference was passed. We then created a new Object 
// and changed the reference to point to the new object. BUT we didn't change or manipulate the original object
// Thus, objectOne will still have "unchanged"
console.log(objectTwo.this)
// This will be changed because we passed a copy of the reference and, via that copy, manipulated the original object
// Thus, this will print "changed"