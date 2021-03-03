const express = require('express');
const app = express();

module.exports = function (worker, companyPercentage, dentalSegurity) {
  let dataEmployee = {};
  if (worker.age <= 65) {
    dataEmployee.age = worker.age;
    dataEmployee.childs = worker.childs;
    dataEmployee.percentage_company = `${companyPercentage * 100}%`;
    dataEmployee.total_payment = `${worker.uf} UF`;
    dataEmployee.company_payment = `${(worker.uf * companyPercentage)} UF`;
    dataEmployee.employee_payment = `${(worker.uf - (worker.uf * companyPercentage))} UF`;
    const dentalPlanEmployee = calculoDental(worker, companyPercentage, dentalSegurity);
    dataEmployee.dental_plan_employee = dentalPlanEmployee;
    return dataEmployee;
  } else {
    dataEmployee.age = worker.age;
    dataEmployee.childs = worker.childs;
    dataEmployee.percentage_company = `${companyPercentage * 100}%`;
    dataEmployee.total_payment = `${worker.uf} UF`;
    dataEmployee.company_payment = `${(worker.uf * 0)} UF`;
    dataEmployee.employee_payment = `${(worker.uf - (worker.uf * 0))} UF`;
    const dentalPlanEmployee = calculoDental(worker, 0, dentalSegurity);
    dataEmployee.dental_plan_employee = dentalPlanEmployee;
    return dataEmployee;
  }
};

function calculoDental(worker, companyPercentage, dentalSegurity){
  let dentalPlanEmploye = {}
  if (dentalSegurity){
    dentalPlanEmploye.active = dentalSegurity;
    dentalPlanEmploye.total_payment_dental = `${worker.ufDental} UF`;
    dentalPlanEmploye.company_payment_dental = `${(worker.ufDental * companyPercentage)} UF`;
    dentalPlanEmploye.employee_payment_dental = `${(worker.ufDental - (worker.ufDental * companyPercentage))} UF`;
    return dentalPlanEmploye;
  } else {
    dentalPlanEmploye.active = dentalSegurity;
    dentalPlanEmploye.total_payment_dental = `${0} UF`;
    dentalPlanEmploye.company_payment_dental = `${0} UF`;
    dentalPlanEmploye.employee_payment_dental = `${0} UF`;
    return dentalPlanEmploye;
  }
}