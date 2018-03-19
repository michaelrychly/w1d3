var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
var result = {};

function calculateSalesTax(salesData, taxRates) {

  for (var i = 0; i < salesData.length; i++) {
    //var taxRate = 0;
    var totalTaxes = 0;
    var totalSales = 0;
    var company= "";

    for (var j = 0; j < salesData[i].sales.length; j++) {
      company = salesData[i].name;
      totalSales += Number(salesData[i].sales[j]);
      totalTaxes += calculateTax(Number(salesData[i].sales[j]), taxRates[salesData[i].province]);
    }
    addToResult(company, totalSales, totalTaxes);
  }
  return result;
}

function addToResult(name, sales, taxes){
  var company = {totalSales: sales, totalTaxes:taxes};

  if (Object.keys(result).length === 0) {
    result[name] = company;
  } else {
      for(var part in result) {
        var count = 1;
        if (name === part){
          result[part].totalSales += sales;
          result[part].totalTaxes += taxes;
        } else if (count === Object.keys(result).length){
          result[name] = company;
        }
        count++;
      }
  }
}

function calculateTax(sale, tax) {
  return sale * tax;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/