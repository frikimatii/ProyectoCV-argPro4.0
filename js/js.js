class RandomUser {
    constructor() {}

    static fetchFromAPI() {
        let URL = `https://randomuser.me/api/`;
        fetch(URL)
            .then(response => response.json())
            .then(data => RandomUser.renderUserData(data))
            .catch(error => alert(error))
    }
    static renderUserData(data) {
        /// console.log(data)
        let user = data.results[0]
        let imagen = user.picture.large
        let apellido = user.name.last
        let nombre = user.name.first
        let pais = user.location.country
        let phone = user.phone
        let edad = user.dob.age
        let email = user.email


        let fotoPerfil = document.getElementsByClassName(`perfilPhoto`);
        fotoPerfil[0].innerHTML = ` <figure class="figure">
        <img src="${imagen}" class="figure-img img-fluid rounded animate__animated animate__fadeInLeft" alt="gente random">
        <figcaption class="figure-caption"></figcaption>
      </figure>`

        document.getElementById(`nombre`).innerHTML = `<span> ${nombre}</span>`
        document.getElementById(`apellido`).innerHTML = `<span> ${apellido}</span>`
        document.getElementById(`year`).innerHTML = `<span>${edad}</span>`
        document.getElementById(`email`).innerHTML = `<span>${email}</span>`
        document.getElementById(`phone`).innerHTML = `<span>${phone}</span>`
        document.getElementById(`country`).innerHTML = `<span>${pais}</span>`

    }
}

document.getElementById(`btn-generate`).addEventListener(`click`, () => {
    RandomUser.fetchFromAPI()
})
document.documentElement.style.setProperty('--animate-duration', '5s')

ScrollReveal().reveal('.experiencia', {
    reset: true
});
ScrollReveal().reveal('#videojuegos', {
    delay: 2000
});
ScrollReveal().reveal('#musica', {
    delay: 1500
});
ScrollReveal().reveal('#fiesta', {
    delay: 1000
});
ScrollReveal().reveal('#viajar', {
    delay: 500
});
ScrollReveal().reveal('#foco', {
    delay: 500
});
ScrollReveal().reveal('.futbol', {
    delay: 1000
});
ScrollReveal().reveal('#creation', {
    delay: 1500
});
ScrollReveal().reveal('#pasear', {
    delay: 2000
});
ScrollReveal().reveal('');
ScrollReveal().reveal('');


document.getElementById(`btnOn`).addEventListener(`click`, () => {

    let off = document.getElementById(`box`).innerHTML = ` 
    <div class="col blanco">
    <h6 class=""><i class="bi bi-controller fs-1 control " ></i></h6>
    <p>VideosJuevos</p>
    </div>
    <div class="col blanco">
    <h6 class=""><i
            class="bi bi-earbuds fs-1 "></i></h6>
    <p>Musica</p>
    </div>
    <div class="col blanco">
    <h6 class=""> <i
            class="bi bi-emoji-sunglasses fs-1"></i></h6>
    <p>Fiesta</p>
    </div>
    <div class="col blanco">
    <h6 class="" ><i class="bi bi-airplane-fill fs-1"></i></h6>
    <p>Viajar</p>
    </div>
    <div class="col blanco">
    <h6><i class="fa-solid fa-chevron-left fs-1 "
            id=""></i>/<i
            class="fa-solid fa-chevron-right fs-1 "
            id=""></i></h6>
    <p>Programar</p>
    </div>
    <div class="col blanco">
    <h6 class=""><i
            class="bi bi-lightbulb-fill fs-1" ></i></h6>
    <p>Pensar</p>
    </div>
    <div class="col blanco">
    <h6 class=""><i class="fa-solid fa-futbol fs-1 "></i></h6>
    <p>Futbol</p>
    </div>
    <div class="col blanco">
    <h6 class=" "><i
            class="fa-sharp fa-solid fa-hammer fs-1" ></i></h6>
    <p>Crear</p>
    </div>
    <div class="col blanco">
    <h6 class=""><i
            class="bi bi-bicycle fs-1" ></i></h6>
    <p>Pasear</p>
    </div>
    `
})




document.getElementById(`btnOff`).addEventListener(`click`, () => {

        let encendido = document.getElementById(`box`).innerHTML = `
        <div class="row align-items-start" id="box">
        <div class="col">
            <h6 class="animate__animated animate__tada animate__infinite "><i
                    class="bi bi-controller fs-1 control" id="videojuegos"></i></h6>
            <p>VideosJuevos</p>
        </div>
        <div class="col">
            <h6 class="animate__animated animate__bounceIn animate__infinite"><i
                    class="bi bi-earbuds fs-1 " id="musica"></i></h6>
            <p>Musica</p>
        </div>
        <div class="col">
            <h6 class="animate__animated animate__flip  animate__infinite"> <i
                    class="bi bi-emoji-sunglasses fs-1" id="fiesta"></i></h6>
            <p>Fiesta</p>
        </div>
        <div class="col">
            <h6 class=" animate__animated animate__slideOutUp animate__infinite"><i
                    class="bi bi-airplane-fill fs-1" id="viajar"></i></h6>
            <p>Viajar</p>
        </div>
        <div class="col">
            <h6><i class="fa-solid fa-chevron-left fs-1 animate__animated animate__fadeInBottomLeft animate__infinite"
                    id="left-code"></i>/<i
                    class="fa-solid fa-chevron-right fs-1 animate__animated animate__fadeInTopRight animate__infinite"
                    id="right-code"></i></h6>
            <p>Programar</p>
        </div>
        <div class="col">
            <h6 class="animate__animated animate__heartBeat animate__infinite"><i
                    class="bi bi-lightbulb-fill fs-1" id="foco"></i></h6>
            <p>Pensar</p>
        </div>
        <div class="col">
            <h6 class="animate__animated animate__bounce animate__infinite"><i
                    class="fa-solid fa-futbol fs-1 futbol"></i></h6>
            <p>Futbol</p>
        </div>
        <div class="col">
            <h6 class="animate__animated animate__infinite "><i
                    class="fa-sharp fa-solid fa-hammer fs-1" id="creation"></i></h6>
            <p>Crear</p>
        </div>
        <div class="col">
            <h6 class="animate__animated animate__fadeInLeft animate__infinite "><i
                    class="bi bi-bicycle fs-1" id="pasear"></i></h6>
            <p>Pasear</p>
        </div>
    </div>
        `


})


function hora (){
const horafull = document.getElementById(`hh`)


 const now = new Date()
 let hh = now.getHours()
 let mm = now.getMinutes()
 let ss = now.getSeconds()

 hh = (hh<10) ? "0" + hh : hh
 mm = (mm<10) ? "0" + mm : mm
ss = (ss<10) ? "0" + ss : ss
 
const fullHora = `${hh}:${mm}:${ss}`
horafull.innerText = fullHora
}
setInterval (hora, 1000) 

function fecha (){
    const fullday = document.getElementById("ff")

    const now = new Date()
    let dd = now.getDate()
    let mm = now.getMonth()+1
    let yy = now.getFullYear()
    const dmy = `${dd}/${mm}/${yy}`
    fullday.innerText = dmy
}
fecha()