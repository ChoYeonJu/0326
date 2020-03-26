// Object 객체는 객체의 가장 기본적인 형태를 가지고 있는객체
// 아무것도 상속받지 않은 순수한 객체, 모든객체들이 가지고 있는 기능
//https://developer.mozilla.org/ko/  api 문서

//Obejct.keys
var arr = ['a','b','c'];
console.log('Object.keys(arr)', Object.keys(arr));

// Object.prototype.toString() : 객체가 담고있는 값이 무었인가를 
// 사람이 보기 좋게 출력해주는 기능
var o = new Object();
Object.create('o.toString()',o.toString());

var a =[1,2,3];
a.toString();
// 결과 : "1,2,3" 
// array를 사용할때 obejct 
var a1 = new Array(1,2,3);
console.log('a1.toString()', a.toString());

//Objec.prototype.toString = function(){}

var my_obj = Object.create({}, {
    getFoo : {value : function() {return this.foo}}
});
my_obj.foo = 1;

console.log(Object.keys(my_obj));

// var o = {'name':'egoing','city':'seoul'}
// console.log(o.contain('egoing')); // 배열에 값이 존재하는지 boolean 으로 반환
// var a = ['egoing', 'leezche', 'grapittie'];
// console.log(a.contain('leezche'));

// object 확장의 위험
Object.prototype.contain = function(needle){
    for(var name in this){
        if(this[name]===needle){
            return true;
        }
    }
    return false;
}

//hasOwnProperty 그 객체에 직접적으로 정의 되어있는지 확인
for(var name in o){
    if(o.hasOwnProperty(name)){
        console.log(name);
        
    }
}


