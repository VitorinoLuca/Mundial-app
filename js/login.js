const credenciales = {
    email: "estudiante@guayerd.com",
    password: "123456"
}
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userEmail = document.getElementById("exampleInputEmail1").value
    const userPassword = document.getElementById("exampleInputPassword1").value
    if (userEmail === credenciales.email) {
        if (userPassword === credenciales.password) {
            localStorage.setItem("logged", true)
            window.location.href = "map.html"
        }
        else {
            alert("Las credenciales introducidas son inválidas")
        }
    }
    else {
        alert("Las credenciales introducidas son inválidas")
    }
})