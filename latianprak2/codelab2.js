function Register(){
    const nama = document.getElementById("nama-lengkap").value;
    const email = document.getElementById("email").value;
    const alamat = document.getElementById('alamat').value;

    if (nama === "" || alamat === "") {
        alert("Data Harus DIisi");
    }else{
        alert("Nama " + nama + "\nEmail " + email + "\nAlamat " +alamat);
    }
}