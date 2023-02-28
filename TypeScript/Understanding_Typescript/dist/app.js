"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.companyName);
    }
    describe() {
        console.log(`welcome to the ${this.name}, ${this.id} department`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    static createEmployee(name) {
        return { name: name };
    }
    printEmployeeInfo() {
        console.log(this.employees.length, this.employees);
    }
}
Department.companyName = "ACME Ltd";
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    describeDept() {
        console.log(`welcome to the ${this.id}`);
    }
    getAdmins() {
        console.log('admins are', this.admins);
        return { admins: this.admins };
    }
}
;
class AccountingDep extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(r) {
        if (r) {
            this.addReport(r);
            return;
        }
        console.log('Please privide a valid argument');
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.employees = ['John'];
        this.lastReport = reports[0];
    }
    describeDept() {
        console.log(`welcome to the ${this.id}`);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    addEmployee(employee) {
        if (!this.employees.includes(employee)) {
            this.employees.push(employee);
            return;
        }
        this.addReport(`Failed to add already added employee ${employee}: ${Date()}`);
        console.log(`${employee} already works here`);
    }
    printReports() {
        console.log('Reports ', this.reports);
    }
}
AccountingDep.currentFinancialYear = '2023';
const it = new ItDepartment('d3', ['David']);
const accounting = new AccountingDep('A1', [`dept created: ${Date()}`]);
const employee1 = Department.createEmployee("Leon");
console.log("employee1: ", employee1);
accounting.mostRecentReport = 'Manually added report';
console.log("current financial year: ", AccountingDep.currentFinancialYear);
console.log("Most recent report: ", accounting.mostRecentReport);
accounting.addEmployee('John');
accounting.addEmployee('Philip');
accounting.describeDept();
accounting.printEmployeeInfo();
accounting.printReports();
it.describe();
it.getAdmins();
it.addEmployee('david');
it.addEmployee('Jane');
it.printEmployeeInfo();
//# sourceMappingURL=app.js.map