// 함수 == 객체, 거의 모든 언어가 함수를 가짐
a = {
    //객체 내의 함수는 메소드
    b:function(){

    }
}

// function cal(func, num){
//     return func(num);
// }
// function increase(num){
//     return num +1;
// }
// function decrease(num){
//     return num-1
// }
// alert(cal(increase, 1));
// alert(cal(decrease,1));
//리턴값으로의 함수의 사용
function cal2(mode){
    var funcs = {
        'plus' : function(left, right){
            return left+ right
        },
        'minus' : function(left, right){
            return left+right
        }
    }

    return funcs[mode];
}

alert(cal2('plus')(2,1))
alert(cal2('minus')(2,1))

var process = [
    function(input){
        return input + 10;
    },
    function(input){
        return input * input;
    },
    function(input){
        return input / 2;
    }
];
var input = 1;
for(var i =0;i<process.length;i++){
    input = process[i](input);
}
alert(input);