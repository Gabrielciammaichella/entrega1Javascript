function validarEmailFor() {
    let email;
    let numeroArrobas;
    const tieneArroba = false;
  
    while (!tieneArroba) {
      email = prompt("Ingresá tu dirección de correo electrónico:");
  
      numeroArrobas = 0;
      for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
          numeroArrobas++;
        }
      }
  
      let tieneEspacio = false;
      for (let i = 0; i < email.length; i++) {
        if (email[i] === " ") {
          tieneEspacio = true;
          break;
        }
      }
  
      if (tieneEspacio) {
        alert("El email es inválido. No debe contener espacios.");
      } else if (numeroArrobas === 1) {
        // No puedo utilizar const para "tieneArroba", ya que me cambia su valor
        tieneArroba = true; 
      } else if (numeroArrobas > 1) {
        alert("El email es inválido. Debe contener solo un '@'.");
      } else {
        alert("El email es inválido. Debe contener un '@'.");
      }
    }
  
    console.log(`El email es válido.`);
  }
  
  validarEmailFor();