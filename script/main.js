console.log("Terhubung");

const jumlahs = document.querySelectorAll('.operand h4:nth-child(3)')
const minus = document.querySelectorAll('.operand h4:nth-child(1)');
var display = document.querySelectorAll('.operand h4:nth-child(2)');
var jumlahItem = document.querySelector('.jumlahItem span');
var jumlahHarga = document.querySelector('.totalHarga span')
let totalItem = 0;
let dispalyCard = 0;
let totalHarga = 0;

function tambah(n){
    totalItem +=  n;
    jumlahItem.innerHTML = String(totalItem);
}
function tambahHarga(i){
    totalHarga += (objects[i].harga) ;
    jumlahHarga.innerHTML = String(totalHarga);
}
function tambahCard(i,n){
    objects[i].jumlah += 1;
    display[i].innerHTML = String(objects[i].jumlah)
}
function kurang(n){
    totalItem -= n;
    jumlahItem.innerHTML = String(totalItem);
}
function kurangiHarga(i){
    totalHarga -= (objects[i].harga) ;
    jumlahHarga.innerHTML = String(totalHarga);
}
function kurangiCard(i,n){
    objects[i].jumlah -= 1;
    display[i].innerHTML = String(objects[i].jumlah)
}
for (let i = 0; i < jumlahs.length; i++){
    jumlahs[i].addEventListener('click',function(){
        tambahCard(i,1)
        tambah(1);
        tambahHarga(i);
    });
    minus[i].addEventListener('click', function(){
        if (objects[i].jumlah === 0 ){
            let var0 = 0;
            display[i].innerHTML = String(var0)
        } else{
            kurangiCard(i,1);
            kurang(1);
            kurangiHarga(i);
        }
    });
};
/*
for (let i = 0; i < minus.length; i++){
    minus[i].addEventListener('click',function(){
    if (listObjects[i].jumlah < 1){
        listObjects[i].jumlah = 0;
        display[i].innerHTML = String(listObjects[i].jumlah);
    }else{
        listObjects[i].jumlah -= 1;
        display[i].innerHTML = String(listObjects[i].jumlah);
    }
    }
)};

*/