function trungbinh(){
    var soMot=document.getElementById("so-thu-1").value*1;
    var soHai=document.getElementById("so-thu-2").value*1;
    var soBa=document.getElementById("so-thu-3").value*1;
    var soBon=document.getElementById("so-thu-4").value*1;
    var soNam=document.getElementById("so-thu-5").value*1;
    var trungBinh=(soMot+soHai+soBa+soBon+soNam)/5;
    console.log(soMot,soHai,soBa,soBon,soNam,trungBinh);
    document.getElementById("result").innerText=`Giá trị trung bình:${trungBinh}`;

}