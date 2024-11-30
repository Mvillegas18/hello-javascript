/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

    const animals = ["vaca", "caballo", "pajaro", "cebra", "leon"]
    console.log(animals);


// 2. Añade dos más. Uno al principio y otro al final
    animals.push("cerdo") // Añade al final
    animals.unshift("lagarto") // Añade al principio
    console.log(animals);

// 3. Elimina el que se encuentra en tercera posición
    const myNewArray = animals.splice(2, 1)
    console.log(animals);
    

// 4. Crea un set que almacene cinco libros
    const set = new Set()
    set.add("libro 1")
    set.add("libro 2")
    set.add("libro 3")
    set.add("libro 4")
    set.add("libro 5")
    console.log(set);

// 5. Añade dos más. Uno de ellos repetido
    set.add("libro 6")
    set.add("libro 1")
    console.log(set);

// 6. Elimina uno concreto a tu elección
    set.delete("libro 1")
    console.log(set);
    

// 7. Crea un mapa que asocie el número del mes a su nombre
    const newMap = new Map([
        [1, "enero"],
        [2, "febrero"],
        [3, "marzo"],
        [4, "abril"],
        [5, "mayo"],
        [6, "junio"],
        [7, "julio"],
        [8, "agosto"],
        [9, "septiembre"],
        [10, "octubre"],
        [11, "noviembre"],
        [12, "diciembre"],
    ])
    console.log(newMap);
    

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    const value = newMap.has(5)
    if(value) console.log(newMap.get(5));
    
// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

    const meses = [1, 2, 3, 4, 5, 7, 9, 8, 1]
    console.log(meses);

    const mesesSet = new Set(meses)
    console.log(mesesSet);

    const map = new Map()
    map.set("mi set", mesesSet)
    console.log(map);
    
    
    