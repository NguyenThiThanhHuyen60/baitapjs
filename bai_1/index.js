function totalsalary(){
    var oneDay=document.getElementById("oneday").value*1;
    var toTalDay=document.getElementById("totalday").value*1;
    var tienLuong=oneDay*toTalDay;
    console.log(oneDay,toTalDay,tienLuong);
    document.getElementById("result").innerText=`Tổng Tiền Lương là:${tienLuong.toLocaleString()}VND`;

}
    
