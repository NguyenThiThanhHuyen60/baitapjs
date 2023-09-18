function tinhtong(){
    var input=document.getElementById("hai-so").value*1;
    var hangDonVi=input%10;
    var hangChuc=Math.floor(input/10);
    var output=hangDonVi+hangChuc;
    document.getElementById("result").innerText=`Tổng là:${output}`;
}