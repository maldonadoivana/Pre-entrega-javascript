let continuar = true;

while (continuar) {

    // MOSTRAR  UN MENSAJE DE OPCIÓN 

    let opcion  = parseInt(prompt("Sigue los siguientes pasos: \n 1- Logueo \n 2- Turnero \n 3- Salir "))
    
    // EVALUAR LA OPCIÓN SELECCIONADA

    switch (opcion) {
        case 1: // if opcion === 1
        let usuario = prompt("Ingrese un nombre de usuario administrador").toLowerCase(); 
        let contrasenia = prompt("Ingrese una contraseña de administrador").toUpperCase(); 
        
        while (usuario != "admin" || contrasenia != "ADMIN123") { 
            alert("El usuario o contraseña no son válidos");
        
            usuario = prompt("Ingrese un nombre de usuario administrador");
            contrasenia = prompt("Ingrese una contraseña de administrador");
        }
            alert("Bienvenido, ya estás logueado para comenzar con el turnero");
        
            break;

            case 2: //else  if opcion === 2
            for (let i = 1; i <= 5; i++) {
                let ingresarNombrePaciente = prompt("Ingrese nombre de paciente");
                let ingresarEspecialidad = prompt("Ingrese Especialidad");
                
                alert("Paciente: " + ingresarNombrePaciente + " / Turno n°:  " + i + " / Especialidad:  "  + ingresarEspecialidad);
                console.log("Paciente: " + ingresarNombrePaciente + " / Turno n°:  " + i + " / Especialidad:  "  + ingresarEspecialidad);
        
            }
            alert("Los pacientes serán llamados por pantalla")
                break;

                case 3: // else if opcion === 3
                    continuar = false; // termina el ciclo, por eso esta opción nos lleva al alert de abajo
                    break;
        default: // else
            alert("Opción inválida. Por favor ingrese una opción correcta");
            break;
    }
}


alert("Gracias por venir");