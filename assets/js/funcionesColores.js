
  function pintar(color) {
    const cuadroAzul = document.getElementById("dv1");
    cuadroAzul.style.backgroundColor = "blue";
  
    const cuadroRojo = document.getElementById("dv2");
    cuadroRojo.style.backgroundColor = "red";
  
    const cuadroVerde = document.getElementById("dv3");
    cuadroVerde.style.backgroundColor = "green";
  
    const cuadroAmarillo = document.getElementById("dv4");
    cuadroAmarillo.style.backgroundColor = "yellow";
  }
  
  pintar("blue");
  pintar("red");
  pintar("green");
  pintar("yellow");
  
  
  const pintar3 = "";
  function pintarNegro(elemento, color) {
    chageTodosColor();
    elemento.style.backgroundColor = color;
  }
  function chageTodosColor() {
    document.getElementsByClassName(".negro > div").forEach(e => {
      e.style.backgroundColor = pintar3;
    });
  }
  
 
  let color2 = "";
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "a" || e.key === "A") {
      color2 = "pink"
      document.getElementById('dv5').style.backgroundColor = "pink";
    } else if (e.key === "s" || e.key === "S") {
      color2 = "orange"
      document.getElementById('dv5').style.backgroundColor = "orange";
    } else if (e.key === "d" || e.key === "D") {
      color2 = "skyblue"
      document.getElementById('dv5').style.backgroundColor = "skyblue";
    }
  
  })
  
  const changeColor = (id, newcolor) => document.querySelector("#" + id).style.backgroundColor = newcolor
  
  document.addEventListener("click", (e) => changeColor(e.target.id, color2))
  
  document.addEventListener("keydown", function (event) {
    if (event.key === "q" || event.key === "Q") {
      agregadiv1();
    } else if (event.key === "w" || event.key === "W") {
      agregadiv2();
    } else if (event.key === "e" || event.key === "E") {
      agregadiv3();
    }
  });
  
  function agregadiv1() {

    contenedor = document.getElementById("contenedor");
    nuevoElemento = document.createElement("div");
    nuevoElemento.style.backgroundColor = 'purple';
    nuevoElemento.textContent = "Elemento agregado";
    contenedor.appendChild(nuevoElemento);
  }
  
  function agregadiv2() {
    contenedor = document.getElementById("contenedor");
    nuevoElemento2 = document.createElement("div");
    nuevoElemento2.style.backgroundColor = 'grey';
    nuevoElemento2.textContent = "Elemento agregado";
    contenedor.appendChild(nuevoElemento2);
  }
  function agregadiv3() {
    contenedor = document.getElementById("contenedor");
    nuevoElemento3 = document.createElement("div");
    nuevoElemento3.style.backgroundColor = 'brown';
    nuevoElemento3.textContent = "Elemento agregado";
    contenedor.appendChild(nuevoElemento3);
  }