function calculateNetSalary() {
    let basicSalary = parseInt(prompt("Enter Basic Salary (Ksh):"));
    let benefits = parseInt(prompt("Enter Benefits (Ksh):"));

    let grossSalary = basicSalary + benefits;

    let nssfContributionEmployee = calculateNSSFContribution(basicSalary);
    let nssfContributionEmployer = nssfContributionEmployee; 
    let totalNSSF = nssfContributionEmployee + nssfContributionEmployer;

    let nhifDeduction = calculateNHIFDeduction(grossSalary);

    let annualTaxablePay = grossSalary * 12;

    let paye = calculatePAYE(annualTaxablePay);

    let netSalary = grossSalary - paye - nhifDeduction - totalNSSF;

    alert("Gross Salary: Ksh " + grossSalary.toFixed(2));
    alert("PAYE (Tax): Ksh " + paye.toFixed(2));
    alert("NHIF Deduction: Ksh " + nhifDeduction.toFixed(2));
    alert("NSSF Deduction: Ksh " + totalNSSF.toFixed(2));
    alert("Net Salary: Ksh " + netSalary.toFixed(2));
}

function calculateNSSFContribution(basicSalary) {
    if (basicSalary <= 7000) {
        return 0.06 * basicSalary;
    } else if (basicSalary <= 36000) {
        return 0.06 * 7000; 
    } else {
        return 0.06 * basicSalary; 
    }
}

function calculateNHIFDeduction(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

function calculatePAYE(annualTaxablePay) {
    if (annualTaxablePay <= 288000) {
        return annualTaxablePay * 0.10 / 12;
    } else if (annualTaxablePay <= 388000) {
        return (28800 + (annualTaxablePay - 288000) * 0.25) / 12;
    } else if (annualTaxablePay <= 6000000) {
        return (38800 + (annualTaxablePay - 388000) * 0.30) / 12;
    } else if (annualTaxablePay <= 9600000) {
        return (1438000 + (annualTaxablePay - 6000000) * 0.325) / 12;
    } else {
        return (2392000 + (annualTaxablePay - 9600000) * 0.35) / 12;
    }
}

calculateNetSalary()

