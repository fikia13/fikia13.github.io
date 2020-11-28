console.log("terhubung");
var satu = document.querySelector(".nomer1");
var dua = document.querySelector(".nomer2");
var tiga = document.querySelector(".nomer3");
var pesanan = document.querySelector(".tanda");
var logot = document.querySelector(".tombolOut")

logot.style.display = 'none'
function test(){
    setTimeout("satu.style.backgroundColor = 'yellowgreen'",4000);
}
function test2(){
    setTimeout("dua.style.backgroundColor = 'yellow'",5000);
    setTimeout("pesanan.innerHTML ='<h2>Pesanan Anda Di Proses</h2>'",5000);
    setTimeout("dua.style.backgroundColor = 'yellowgreen'",8000)
};
function test3(){
    setTimeout("tiga.style.backgroundColor = 'yellow'",9000);
    setTimeout("pesanan.innerHTML ='<h2>Pesanan Anda Selesai</h2>'",12000);
    setTimeout("tiga.style.backgroundColor = 'yellowgreen'",12000)
    setTimeout("logot.style.display = 'block'",13000)
}
test();
test2();
test3()