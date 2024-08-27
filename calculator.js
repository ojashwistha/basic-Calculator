function add(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    if (n1 === "" || n2 ===""){
        alert("please enter two values");
        return false;
    }
    var el = document.getElementById("result");
    var n3 = parseInt(n1) + parseInt(n2)
    document.getElementById("result").innerText = n3;
}
function sub(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    if (n1 === "" || n2 ===""){
        alert("please enter two values");
        return false;
    }
    var el = document.getElementById("result");
    var n3 = parseInt(n1) - parseInt(n2)
    document.getElementById("result").innerText = n3;
}
function mul(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    if (n1 === "" || n2 ===""){
        alert("please enter two values");
        return false;
    }
    var el = document.getElementById("result");
    var n3 = parseInt(n1) * parseInt(n2)
    document.getElementById("result").innerText = n3;
}
function div(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    if (n1 === "" || n2 ===""){
        alert("please enter two values");
        return false;
    }
    var el = document.getElementById("result");
    var n3 = parseInt(n1) / parseInt(n2)
    document.getElementById("result").innerText = n3;
}
