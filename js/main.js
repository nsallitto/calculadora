const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;//RETURN TERMINA LA FUNCION Y NO EJECUTA LO DE ABAJO
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);//SLICE CORTA EL ULTIMO ELEMENTO (DESDE EL 0 AL -1)
            }
            return;
        }

        if (boton.id === "igual") {
            try { //TRY ESTE METODO EVALUA SI PUEDE EJECUTAR LO QUE PEDIMOS Y SI NO PUEDE PASA A CATCH.
                pantalla.textContent = eval(pantalla.textContent);//EVAL EVALUA CONJUNTO STRINGS CON OPERACIONES MATEMATICAS.
                
            } catch {
                pantalla.textContent = "Error!";
            }
            return;


        }




        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;            
        }
    })
})