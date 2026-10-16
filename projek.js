const produk = {
    nama: "Laptop",
    harga: 20000,
    diskon:10,
    stok:3,

    tampilProduk: function(){
        console.log("Nama Produk: " + this.nama);
        console.log("Harga Produk Rp " + this.harga);
        console.log("Stok tersedia: " + this.stok);
    },
    hitungDiskon: function(){
        let potongan = (this.harga * this.diskon) / 100;
        let akhir = this.harga - potongan;
        console.log("Harga setelah diskon Rp " + akhir);
    },
    beliProduk: function(jumlah){
        if(this.stok >= jumlah){
            this.stok -= jumlah;
            console.log("Pembelian berhasil. Anda membeli " + jumlah + " laptop. \n Sisa stok: " + this.stok);
        } else {
            console.log("Maaf, stok Habisss"); 
        }
    }
};
produk.tampilProduk();
produk.hitungDiskon();
produk.beliProduk(1);
produk.beliProduk(2);
produk.beliProduk(1);