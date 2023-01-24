function login() {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "mobilsahabat@gmail.com" && password == "adminsahabat") {

        alert("Selamat Datang Admin!");
        location.replace("Kendaraan.html");
    } else {
        alert("Selamat Datang!");
        location.replace("home.html");
    }
}