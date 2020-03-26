// 데이터 타입 
// 원시 데이터 타입(primitive type) = 기본
//숫자 문자열 불리언 null undefined
// 객체 데이터 타입 = 참조 데이터 타입 , 원 데이터 데입을 제외한 모든 것
var str = 'coding';  //str  = new String('coding')
//str '.' <- 객체 접근 연산자 
console.log(str.length);        //6
console.log(str.charAt(0));     //'c'

var str2 = 'cdoing';
str.prop = 'everybody';
console.log(str.prop);      //undefined
// 문자열을 객체처럼 사용하려고 하면 자바스크립트에서 객체로 만들어줌
// 래퍼 객제(wrappter object) 원시 데이터 타입을 객체 타입으로 감싸주는 객체
// 숫자 -> Number       // 경우에 따라서 자동으로 객체화
// 문자열 -> String
//불리언 -> Boolean
//null, undefined -> x

