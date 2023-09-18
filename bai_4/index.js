function nuttinh(){
    var chieuDai=document.getElementById("chieu-dai").value*1;
    var chieuRong=document.getElementById("chieu-rong").value*1;
    var dienTich= chieuDai*chieuRong;
    var chuVi=(chieuDai+chieuRong)*2;
    document.getElementById("result").innerText=`Diện tích là:${dienTich}-Chu vi là:${chuVi}`;

}