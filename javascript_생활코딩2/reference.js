// 복제 : 현실의 사물과 다르게 전자화된 시스템 위에 데이터를 복제 하는데에는 비용이 들지 않음
// 참조 : 변수에 담겨있는 데이터가 원시형이면 그안에 
// 실데이터가 있고, 객체면 변수 안에는 데이터에 대한 참조 방법이 있음
var a= {'id':1};
var b= a;  
// b = {'id':2}
b.id = 2;   //참조
// 원시 데이터 타입을 인자로 넘겼을때
var a = 1;
function func(b){
    b =2;
}
func(a); // b=a
console.log(a);
//참조 데이터 타입을 인자로 넘겼을 때
var a = {'id':1};
function func (b){
    b={'id':2};
}   
func(a);
console.log(a.id);  //1

function func2(b){
    b.id = 2;
}
func(a);
console.log(a.id);  //2
// 파라미터 b는 객체 a의 참조변수


