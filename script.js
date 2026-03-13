async function cargarUsuarios(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const usuarios = await response.json()
    const lista = document.getElementById("listaUsuarios")
    lista.innerHTML = ""
    usuarios.forEach(usuario => {
    const item = document.createElement("li")
    item.textContent = usuario.name
    lista.appendChild(item)
    })
    }