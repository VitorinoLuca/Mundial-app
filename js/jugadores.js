if (localStorage.getItem('logged') === null) {
    window.location.href = 'index.html'
}
const logout = document.getElementById("logout")
logout.addEventListener("click", () => {
    window.location.href = "index.html"
    localStorage.removeItem('logged')
})
fetch("https://639a535a3a5fbccb5264b073.mockapi.io/jugadores")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(jugador => {
            const section = document.querySelector(".section")

            section.innerHTML += `
                <div class="card">
                    <div class="card__background" 
                    style="background:url(https://julioavantt.github.io/guayerd-project-images/img/${jugador.dorsal}.jpg);
                    height:250px;
                    background-size:cover;
                    background-position:top;">
                    </div>
                    <span class="dorsal">${jugador.dorsal}</span>
                    <div class="card-body">
                        <h5 class="card-title">${jugador.name}</h5>
                        <p class="card-text">
                        Edad: ${jugador.edad}<br>
                        Posición: ${jugador.posicion}<br>
                        Peso: ${jugador["stats-fisico"].peso}<br>
                        Altura: ${jugador["stats-fisico"].altura}<br>
                        Equipo actual: ${jugador["equipo-actual"]}<br>
                        Fecha de nacimiento: ${jugador["fecha-nacimiento"]}
                </p>
            </div>
        </div>
            `
        })
    })