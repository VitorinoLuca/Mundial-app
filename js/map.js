if (localStorage.getItem('logged') === null) {
    window.location.href = 'index.html'
}
const objetoMapa = [
    {
        jugador: "Qatar 2022",
        coordenada: [25.2841478, 51.4419568],
        ciudad: "World Cup",
    },
    {
        jugador: "Messi",
        coordenada: [-32.9520457, -60.766679],
        ciudad: "Rosario",
    },
    {
        jugador: "Di María",
        coordenada: [-32.9520457, -60.766679],
        ciudad: "Rosario",
    },
    {
        jugador: "Otamendi",
        coordenada: [-34.4718607, -58.6715832],
        ciudad: "El Talar",
    },
    {
        jugador: "Julián Álvarez",
        coordenada: [-31.6679028, -63.2032357],
        ciudad: "Calchín",
    },
    {
        jugador: "Dibu Martínez",
        coordenada: [-38.0174106, -57.6705734],
        ciudad: "Mar del Plata",
    },
];


objetoMapa.forEach(player => {
    let option = document.createElement("option")
    const select = document.getElementById("select")
    select.appendChild(option)
    option.innerHTML = player.jugador
})








let center = [25.2841478, 51.4419568]
let map = L.map("map").setView(center, 12)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
}).addTo(map);
let marker = L.marker(center).addTo(map);
marker.bindPopup("Mundial Qatar 2022").openPopup();

const changeMap = () => {
    const objeto = objetoMapa.find((item) => item.jugador === select.value);
    map.setView(new L.LatLng(...objeto.coordenada), 11);
    marker = L.marker(objeto.coordenada, { marker }).addTo(map);
    marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
}

const logout = document.getElementById("logout")
logout.addEventListener("click", () => {
    window.location.href = "index.html"
    localStorage.removeItem('logged')
})

const navbar_toggler = document.querySelector(".navbar-toggler ")
navbar_toggler.addEventListener("click", () => {
    const mapContainer = document.getElementById("map")
    mapContainer.classList.toggle("map-responsive")
})