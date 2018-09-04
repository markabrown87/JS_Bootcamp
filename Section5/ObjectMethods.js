let object = {
    name: "anObject",
    me: function() {
        console.log(this);
    }
}

function func() {
    console.log("THE BELOW IS THE GLOBAL OBJECT");
    console.log(this)
    console.log("THE ABOVE IS THE GLOBAL OBJECT");
}

function strictFunc() {
    'use strict';
    console.log(this);
}

object.me();
func();
strictFunc();
strictFunc.call(object); // this within strictFunc now refers to object!
