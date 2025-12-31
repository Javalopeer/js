// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* 
Para practicar conocimiento antes de empezar el nuevo segmento del curso.
*/

/* 
Sistema de Evaluación de Empleados

Tienes una empresa y quieres evaluar empleados según:
- Edad.
- Años de experiencia.
- Si tiene certificación técnica.

Dado el arreglo se debe crear una funcion que:
1. Calcule un puntaje para cada empelado.
2. Devuelva un resumen en texto.

Reglas del puntaje:
1. Edad: 
    1.1. +10 puntos si tiene 25 anos o mas.
2. Experiencia:
    2.1. +2 puntos por cada ano de experiencia.
3. Certificacion:
    3.1. +15 puntos si esta certificado.

Resultado esperado:
Ana tiene un puntaje de 31 y es elegiblke para promocion.
Luis tiene un puntaje de 2 y no es elegible para promocion.

Regla final:
Si el puntaje es 25 o mas -> Elegible para promocion.
Si es menor -> No es elegible.

*/

const employees = [
    { name: "Ana", age: 28, experience: 3, certified: true },
    { name: "Luis", age: 22, experience: 1, certified: false },
    { name: "María", age: 35, experience: 10, certified: true },
    { name: "Carlos", age: 19, experience: 0, certified: false },
    { name: "Sofía", age: 30, experience: 5, certified: false }
];


const scoreDueExperience = years => {
    let score = 0;
    for (let i = 0; i < years; i++) {
        score += 2;
    }
    return score;
}

const calcScorePerEmployee = (age, experience, certified) => {
    let score = 0;

    if (age >= 25) {
        score += 10;
    }

    if (experience > 0) {
        score += scoreDueExperience(experience);
    }

    if (certified === true)
        score += 15;

    return score;
}

console.log(calcScorePerEmployee(25, 1, true));