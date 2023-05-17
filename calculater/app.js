function getNum(num){
    console.log(num)
document.getElementById('result').value += num;

}
function clearScr(){
    document.getElementById('result').value = "";
}

function removeNum(){
   var res = decument.getElementById('result').value
   document.getElementById('result').value
   =document.getElementById('result').value.slice(0,res.lenght-1);
}
function getAns(){
    decument.getElementById('result').value
     = eval(document.getElementById('result').value);
    console.log(document.getElementById('result').value)
}