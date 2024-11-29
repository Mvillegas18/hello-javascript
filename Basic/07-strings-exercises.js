/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/
    const firstName = "Miguel"
    const lastName = "Villegas Arango"

// 1. Concatena dos cadenas de texto

    console.log(firstName + lastName)

// 2. Muestra la longitud de una cadena de texto

    console.log(firstName.length)
// 3. Muestra el primer y último carácter de un string

    console.log(firstName.at(0))
    console.log(firstName.at(-1))

// 4. Convierte a mayúsculas y minúsculas un string

    console.log(firstName.toLocaleUpperCase())
    console.log(firstName.toLocaleLowerCase())

// 5. Crea una cadena de texto en varias líneas

    const textVariasLineas = `este texto
                                es de varias
                                lineas`

// 6. Interpola el valor de una variable en un string
    console.log(`${firstName} ${lastName}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
    const texto = "Hola, Carlos, bienvenido a Bogotá."
    console.log(texto.replaceAll(" ", "-"))


// 8. Comprueba si una cadena de texto contiene una palabra concreta

    const word = texto.includes("bienvenido")
    console.log(word)
// 9. Comprueba si dos strings son iguales

    console.log(firstName === lastName)

// 10. Comprueba si dos strings tienen la misma longitud
    console.log(firstName.length === lastName.length);
    