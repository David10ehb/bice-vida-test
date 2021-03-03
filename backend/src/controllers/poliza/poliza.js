
const request = require('request');
const calculo = require('../../services/datapoliza.service');

let getData = {};
const datapoliza = {
  url: 'https://dn8mlk7hdujby.cloudfront.net/interview/insurance/policy',
  json: true
};

request(datapoliza, function (err, res, body) {
  getData = body;
});

exports.calculoPoliza = async (req, res) => {
  const data = getData;
  const activePoliza = data.success;
  const employee = data.policy.workers;
  const dentalSegurity = data.policy.has_dental_care;
  const percentage = (data.policy.company_percentage / 100);
  const workers = {};
  let dataExtraida = {};
  const arregloObtenido = [];
  let uf = 0;
  let ufDental = 0;
  console.log('url: ', data);
  const childs = 0;
  if (activePoliza && employee.length > 0) {
    employee[0].forEach((emplo) => {
      /*  
        a. Costo por empleado por cobertura de salud/vida:
          i. Un empleado sin hijo/as tiene un costo de 0,279 UF.
          ii. Un empleado con 1 hijo/a tiene un costo de 0,4396 UF.
          iii. Un empleado con 2 o hijo/as tiene un costo de 0,5599 UF.
        b. Costo por empleado por cobertura dental:
          i. Un empleado sin hijo/as tiene un costo de 0,12 UF.
          ii. Un empleado con 1 hijo/as tiene un costo de 0,1950 UF.
          iii. Un empleado con 2 o más hijo/as tiene un costo de 0,2480 UF.
        c. Empleados mayores a 65 años no tienen cobertura y por ende no tienen
        costo para la empresa.
        d. El % de la empresa es el costo que asumirá la empresa del costo total de la
        póliza, el resto es cubierto por cada empleado.
   */

      switch (emplo.childs) {
        case 0:
          uf = 0.279;
          ufDental = dentalSegurity ? 0.12 : 0;
          workers.uf = uf;
          workers.ufDental = ufDental;
          workers.age = emplo.age;
          workers.childs = emplo.childs;
          dataExtraida = calculo(workers, percentage, dentalSegurity);
          arregloObtenido.push(dataExtraida);
          break;
        case 1:
          uf = 0.4396;
          ufDental = dentalSegurity ? 0.1950 : 0;
          workers.uf = uf;
          workers.ufDental = ufDental;
          workers.age = emplo.age;
          workers.childs = emplo.childs;
          dataExtraida = calculo(workers, percentage, dentalSegurity);
          arregloObtenido.push(dataExtraida);
          break;
        default:
          uf = 0.5599;
          ufDental = dentalSegurity ? 0.2480 : 0;
          workers.uf = uf;
          workers.ufDental = ufDental;
          workers.age = emplo.age;
          workers.childs = emplo.childs;
          dataExtraida = calculo(workers, percentage, dentalSegurity);
          arregloObtenido.push(dataExtraida);
          break;
      }
    });
  }
  console.log('resultado: ', JSON.stringify(arregloObtenido, null, 2));
  res.send(arregloObtenido);
}

/*
{
  age
  childs
  percentage_company
  total_payment
  company_payment
  empleeyo_payment
  has_dental_care {
    active
    total_payment
    compant_payment
    empleeyo_payment
  }
}

*/