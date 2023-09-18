function doitien(){
    var motUSD=23500;
    var USD=document.getElementById("usd").value*1;
    var vnd=motUSD*USD;
    console.log ("vnd",motUSD,"usd",USD,vnd);
    document.getElementById("result").innerText=`
    Tiền việt là:${vnd.toLocaleString()}vnd`;
}