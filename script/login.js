console.log("terhubung");
var login = document.querySelector('.tombol');
var checkBox = document.getElementById("myCheck");


function checkSetuju(){
    if (checkBox.checked == true){
        login.setAttribute('href','mainPage.html');
    } else{
        alert("Di mohon untuk Cheklist Box untuk menyetujui !");
        login.setAttribute('href','#');
    }
}

function checking(namaX,mejaX){
    if (namaX === "" || mejaX === ""){
        alert("Anda belum memasukkan Nama dan ID Meja !");
        login.setAttribute('href','#')
    } else{
        checkSetuju();
    }
}

login.addEventListener('click',function(){
    var nama = document.forms['formNama']['nama'].value;
    var meja = document.forms['formMeja']['meja'].value;
    checking(nama,meja);

})
