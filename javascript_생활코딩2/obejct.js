// 객체 생성, 객체에서의 인덱스는 문자열
var grades = {'egoing' : 10, 'k8805':6, 'sorialgi' : 80};
// 빈 객체 생성
var grades2 = {};
grades['egoing'] = 10;
grades['k8805']=6;
grades['sorialgi']=80;

for(key in grades){
    console.log("key : "+key+" value : " + grades[key]);
}
var arr = ['a', 'b', 'c'];
for(var i =0;i<arr.length;i++){
    console.log(arr[i]);
}

var jo = ['조연주','조연주1','조연주2'];
for(name in jo){
    console.log(jo[name]);
    
}

var grades3 = {
    'list' : {'egoing' : 10, 'k8805' : 8, 'sorialgi' : 80},
    'show' : function(){
        for(var name in this.list){
            console.log(name, this.list[name]);
        }
        //alert('Hello world');
        console.log(this.list);
    }
}
//grades3['show']();
grades3.show();