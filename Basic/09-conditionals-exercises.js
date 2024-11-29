/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
    const variable = "hola"

    if(variable === "hola"){
        console.log("Mi nombre es Miguel")
    }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
    const contraseña = "agfdsfresc"
    const usuario = "Miguel"
    if(contraseña === "agfdsfresc" && usuario === "Miguel"){
        console.log("Haz iniciado sesion");
        
    }else{
        console.log("Contraseño incorrecta");
        
    }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    const numero = -10;
    if(numero > 0){
        console.log("El numero es positivo");
        
    }else if(numero == 0){
        console.log("El numero es cero");
        
    }else{
        console.log("El numero es negativo");
        
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

    const edad = 20;
    if(edad >= 18){
        console.log("Tienes perimitido votar, tienes " + edad);
        
    }else{
        const añosFaltantes = 18 - edad
        console.log(`Eres menor de edad. Te hacen falta ${añosFaltantes} años`);
        
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
    const persona = edad < 18 ? "menor" : "Adulto"
    console.log(persona)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
    const idioma = "español"

    switch(idioma){
        case "español":
            console.log("Hola");
            break;
        case "ingles":
            console.log("Hello");
            break;
        case "frances":
            console.log("Bonjour");
            break;
        default:
            console.log("Idioma no soportado");
            break;
    }

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7