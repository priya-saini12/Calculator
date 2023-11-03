function show(val) {
    document.getElementById('display').value += val;    
}
function result() {
    let a = document.getElementById("display").value;
     let   resultt = eval(a);
        document.getElementById('display').value=resultt;
}
function clr() {
    document.getElementById("display").value="";
}