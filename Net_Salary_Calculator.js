function calculateNetSalary() {
    let basicSalary = parseInt(prompt("Enter your basic salary :"));
    let benefits = parseInt(prompt("Enter your benefits:"));
  
    const taxRates = {
        tax1: { rate: 0.1, threshold: 24000 },
        tax2: { rate: 0.25, threshold: 32333 },
        tax3: { rate: 0.3, threshold: 40333 },
        tax4: { rate: 0.325, threshold: 48333 }
    };
    const nhif = [
        { min: 0, max: 5999, rate: 150 },
        { min: 6000, max: 7999, rate: 300 },
        { min: 8000, max: 11999, rate: 400 },
        { min: 12000, max: 14999, rate: 500 },
        { min: 15000, max: 19999, rate: 600 },
        { min: 20000, max: 24999, rate: 750 },
        { min: 25000, max: 29999, rate: 850 },
        { min: 30000, max: 34999, rate: 900 },
        { min: 35000, max: 39999, rate: 950 },
        { min: 40000, max: 44999, rate: 1000 },
        { min: 45000, max: 49999, rate: 1100 },
        { min: 50000, max: 59999, rate: 1200 },
        { min: 60000, max: 69999, rate: 1300 },
        { min: 70000, max: 79999, rate: 1400 },
        { min: 80000, max: 89999, rate: 1500 },
        { min: 90000, max: 99999, rate: 1600 },
        { min: 100000, max: Infinity, rate: 1700 }
    ];
    const nssf = 0.06;
  
    let grossSalary = basicSalary + benefits;
  
    let taxableIncome = grossSalary - 2400; 
    let payee = 0;
  
    if (taxableIncome <= 0) {
        payee = 0;
    } else if (taxableIncome <= 24000) {
        payee = taxableIncome * taxRates.tax1.rate;
    } else if (taxableIncome <= 32333) {
        payee = (24000 * taxRates.tax1.rate) + ((taxableIncome - 24000) * taxRates.tax2.rate);
    } else if (taxableIncome <= 40333) {
        payee = (24000 * taxRates.tax1.rate) + ((32333 - 24000) * taxRates.tax2.rate) + ((taxableIncome - 32333) * taxRates.tax3.rate);
    } else {
        payee = (24000 * taxRates.tax1.rate) + ((32333 - 24000) * taxRates.tax2.rate) + ((40333 - 32333) * taxRates.tax3.rate) + ((taxableIncome - 40333) * taxRates.tax4.rate);
    }
    
    let nhifDeduction = 0;
    for (let i = 0; i < nhif.length; i++) {
        if (grossSalary >= nhif[i].min && grossSalary <= nhif[i].max) {
            nhifDeduction = nhif[i].rate;
            break;
        }
    }
  
    let nssfDeduction = grossSalary * nssf;
  
    let netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;
    console.log(`Gross Salary: Ksh ${grossSalary}`);
    console.log(`PAYE (Tax): Ksh ${payee}`);
    console.log(`NHIF Deductions: Ksh ${nhifDeduction.toFixed(2)}`);
    console.log(`NSSF Deductions (Employee): Ksh ${nssfDeduction}`);
    console.log(`Net Salary: Ksh ${netSalary}`);
  }