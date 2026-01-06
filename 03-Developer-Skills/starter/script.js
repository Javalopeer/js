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

/* const employees = [
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

    if (certified) {
        score += 15;
    }

    return score;
}

let maxScore = 0;
let bestEmployee = '';
let elegible = 0;

for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    const finalScore = calcScorePerEmployee(emp.age, emp.experience, emp.certified)

    const elegibility = finalScore >= 25
        ? 'es elegible para la promocion.'
        : 'no es elegible.';

    console.log(`${emp.name} tiene un puntaje de ${finalScore} y ${elegibility}`);

    if (finalScore > maxScore) {
        maxScore = finalScore;
        bestEmployee = emp.name;
    }

    if (finalScore >= 25) {
        elegible++;
    }


}

console.log(`El empleado con mayor puntaje es ${bestEmployee} con ${maxScore} puntos.`);
console.log(`Hay ${elegible} empleados elegibles para la promocion.`);
 */



/* const employees = [
    { name: "Ana", age: 28, experience: 3, certified: true, warnings: 0 },
    { name: "Luis", age: 22, experience: 1, certified: false, warnings: 1 },
    { name: "María", age: 35, experience: 10, certified: true, warnings: 0 },
    { name: "Carlos", age: 19, experience: 0, certified: false, warnings: 3 },
    { name: "Sofía", age: 30, experience: 5, certified: false, warnings: 2 }
]; */


/* Challenge mas dificil que el previo */


/* const timeExperience = year => year > 0 ? year * 2 : 0;
const warningPointDecreaser = warning => warning > 0 ? (warning * 5) * -1 : 0

let bestEmployeeName = '';
let bestEmployeeScore = 0;

let worstEmployeeName = '';
let worstEmployeeScore = Infinity;

let amountBonifEmployees = 0;
let amountRiskEmployees = 0;

for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    let score = 0;

    if (emp.age >= 25) {
        score += 10;
    }

    if (emp.experience > 0) {
        score += timeExperience(emp.experience);
    }

    if (emp.certified) {
        score += 15;
    }

    if (emp.warnings > 0) {
        score += warningPointDecreaser(emp.warnings);
    }

    const bonification = score >= 30 && emp.warnings <= 1
        ? `SI`
        : `NO`;

    const risk = score < 10 || emp.warnings >= 3
        ? `SI`
        : `NO`;


    if (score > bestEmployeeScore) {
        bestEmployeeScore = score;
        bestEmployeeName = emp.name;
    }

    if (score < worstEmployeeScore) {
        worstEmployeeName = emp.name;
        worstEmployeeScore = score;
    }

    if (bonification === `SI`) {
        amountBonifEmployees++;
    }

    if (risk === `SI`) {
        amountRiskEmployees++;
    }

    console.log(`${emp.name} -> Puntaje: ${score} | Bonificacion: ${bonification} | Riesgo: ${risk}`);

}

console.log(`Mayor puntaje: ${bestEmployeeName} (${bestEmployeeScore})`);
console.log(`Menos puntaje: ${worstEmployeeName} (${worstEmployeeScore})`);
console.log(`Cantidad total de empleados con bonificacion: ${amountBonifEmployees}`);
console.log(`Cantidad total de empleados en riesgo: ${amountRiskEmployees}`); */

/* let totalApproves = 0;
let totalRejects = 0;
let maxScore = 0;
let lessScore = Infinity;

let maxScoreDelivery = '';
let lessScoreDelivery = '';

const orders = [
    { id: 1, customer: "Ana", amount: 120, status: "PAID", fraud: false },
    { id: 2, customer: "Luis", amount: 80, status: "PENDING", fraud: false },
    { id: 3, customer: "María", amount: 300, status: "PAID", fraud: true },
    { id: 4, customer: "Carlos", amount: 50, status: "CANCELLED", fraud: false },
    { id: 5, customer: "Sofía", amount: 200, status: "PAID", fraud: false },
    { id: 6, customer: "Mario", amount: 500, status: "PAID", fraud: true },
];


for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    let score = 0;


    if (order.amount > 100) {
        score += 10;
    }

    if (order.status === "PAID") {
        score += 20;
    }

    if (order.status === "CANCELLED") {
        score = 0;
    }

    if (order.fraud) {
        score -= 50;
    }

    const approve = score >= 20 && order.fraud != true
        ? `APROBADO`
        : score < 20 || order.fraud
            ? `RECHAZADO` : `RECHAZADO`;

    if (approve === `APROBADO`) {
        totalApproves++;
    }

    if (approve === `RECHAZADO`) {
        totalRejects++;
    }

    if (maxScore < score) {
        maxScore = score;
        maxScoreDelivery = `Pedido ${order.id} (${score}.)`
    }

    if (lessScore > score) {
        lessScore = score;
        lessScoreDelivery = `Pedido ${order.id} (${score}.)`
    }

    console.log(`Pedido ${order.id} (${order.customer}) => Score: ${score} | Estado: ${approve} `);

}

console.log(`Total aprobados: ${totalApproves}`);
console.log(`Total rechazados: ${totalRejects}`);
console.log(`Mayor score: ${maxScoreDelivery}`);
console.log(`Menor score: ${lessScoreDelivery}`); */

/* const measureKelvin = function () {
    const measurement = {
        type: 'tem',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius:'))
    }

    console.log(measurement);

    console.log(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
}
// A) Identify the bug
console.log(measureKelvin()); */

/* const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}~C ... ${data1[1]}~C ... ${data1[2]}~C ...`);

const printForecast = arr => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}~C...`;
    }
    console.log(str);
}

printForecast(data1)
 */

