var a = +prompt('введите число')
var b = +prompt('введите число')
var c = +prompt('введите число')
if(a<b || b>c){
    alert(b)
}else if(b<a || a>c){
    alert(a)
}else if(a<c || c>b){
    alert(c)
}
