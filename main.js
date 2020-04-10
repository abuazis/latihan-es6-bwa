// const user_place = document.getElementById('user');
// const cart_items = document.getElementById('cart');
// const skills_holder = document.getElementById('skills');
const data = document.getElementById('data');

// ES5
// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct("IPhone 11", "Gadget");
// console.log(getProduct);

// const user_logged = "Tony";
// user_place.innerHTML = "Hi" + user_logged + "Apa Kabar?";

// var myName = "BuildWith Angga"

// myName = "Belajar Koding"
// myName = "Bagi Code"
// console.log(myName);

// ES6
class Siswa {
    constructor(username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }

    gabung() {
        console.log(this.username + ' Telah Bergabung Pada Kelas ' + this.nama_kelas);
    }

    hitungMember() {
        console.log("Tersedia 100 Member");
    }
}

class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    gabungPaket() {
        console.log('Hi ' + this.username + ' telah berlangganan paket ' + this.paket);
    }
}

let tambahLangganan = new Langganan('bwastudiox', 'Premium');
tambahLangganan.hitungMember();

// let tambahSiswa = new Siswa('angga dog', 'wuyer7r7', "Web Desain");
// tambahSiswa.gabung();

// const yourSkill = ['UX Design', 'Web Development', 'Video Editor'];

// const myPrimarySkill = yourSkill.filter(skill => {
//     return skill !== "Video Editor";
// });

// skills_holder.innerHTML = myPrimarySkill;

// yourSkill.push('DevOps');

// var parent = '<ul>';

// yourSkill.forEach((skill) => {
//     parent += '<li>' + skill + '</li>';
//     console.log(`${skill}`);
// });

// parent += '</ul>';
// skills_holder.innerHTML = parent;

// function addProduct(name, category) {
//     return {
//         name,
//         category
//     }
// }

// var getProduct = addProduct("IPhone 11", "Gadget");
// cart_items.innerHTML = `Product: ${getProduct.name} Category ${getProduct.category}`;

// const user_logged = "Tony";
// user_place.innerHTML = `Hi, ${user_logged} Apa Kabar?`;

// let myCar = "Miata RF5";
// myCar = "Agya"
// console.log(myCar);

// let myCars = ['BMW', 'Mazda', 'Toyota'];

// for (let i = 0; i < myCars.length; i++) {
//     console.log(myCars[i]);
// }

// console.log(i);