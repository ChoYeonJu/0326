//처리의 위임 , 값으로써의 함수
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(numbers.sort());

// a와 b의 순서를 바꾸면 정렬순서가 반대가 됨
var sortfunc = function(a, b) {
  console.log(a, b);
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};
function sortNumber(a, b) {
  return b - a;
}
var numbs = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// callback 함수를 수신받는 sort 함수가 내부적으로 호출하는 것을 통해서
// sort 라는 함수가 동작하는 동작 방법을 사용자가 
// 변경
// 오리지널 메소드에 값을 전달하는 것을 통해서 완전하게 바꾸는 것
// callback
console.log(numbs.sort(sortfunc));

//비동기 처리 : ex) 만명의 구독자에게 메일을 보내기 ,현재 작업을 실행할수 있지만
//                  나중에 처리
// 콜백은 비동기처리에서 유용하게 처리 
//ajax(asynchronous {비동기} javascript and xml )

// datasource.json.js  {"title":"JavaScript","author":"egoing"}
//     
$.get('./datasource.json.js', function(result){
    console.log(result);
}, 'json');
