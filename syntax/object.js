var member = ['egoing', 'k8805', 'hoya'];
console.log(member[1]);
var i = 0;
while(i < member.length){
    console.log('array loop',member[i]);
    i = i + 1;
}

var roles = {
    'programmer' : 'egoing',
    'designer' : 'k8805',
    'manager' : 'hoya'
};

console.log(roles.designer);
console.log(roles['designer']);

for(var name in roles){
    console.log('object =>', name, 'value =>', roles[name]);
}


console.log("------------------------------")

var f = function(){
    console.log(1+1);
    console.log(1+2);
  }
  var a = [f];
  a[0]();
   
  var o = {
    func:f
  }
  o.func();


console.log("------------------------------")

var q = {
    v1:'v1',
    v2:'v2',
    f1:function (){
      console.log(this.v1);
    },
    f2:function(){
      console.log(this.v2);
    }
  }
   
  q.f1();
  q.f2();