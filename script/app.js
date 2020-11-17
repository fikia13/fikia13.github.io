
function dataItem(namaKue, harga){
    this.namaKue = namaKue;
    this.harga = harga;
    this.jumlah = 0;
    this.totalHarga = 0;
}

const item0 = new dataItem('Burger Keng', 30000);
const item1 = new dataItem('KueTart',25000);
const item2 = new dataItem('Shusi Daging', 50000);
const item3 = new dataItem("Kebab Manis",10000);
const item4 = new dataItem('coklat manis',6000);
const item5 = new dataItem('Grey Oreo',9000);
const item6 = new dataItem('Es Kacang Ijo ', 7500);
const item7 = new dataItem("Milky Milk", 4000);

objects = [item0,item1,item2,item3,item4,item5,item6,item7];

