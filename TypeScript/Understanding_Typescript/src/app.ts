//**************************************
// Base abstract class extended by subclassses
// **********************************************
//
abstract class Department {
  //Static property available without insantiating class with 'new'
  static companyName: string = "ACME Ltd"
  protected employees: string[] = []
  constructor(readonly id: string, public name: string) {
    //access static class with classname as not accessible with this keyword
    console.log(Department.companyName)
  }

  // create an abstract method that must be implemented in inheriting classes
  abstract describeDept(this: Department): void

  describe(this: Department) {
    console.log(`welcome to the ${this.name}, ${this.id} department`)
  }
  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  static createEmployee(name: string) {
    return { name: name }
  }

  public printEmployeeInfo() {
    console.log(this.employees.length, this.employees)
  }
}

class ItDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
  // Implement abstract method from parent class Department
  describeDept(this: ItDepartment): void {
    console.log(`welcome to the ${this.id}`)
  }

  getAdmins() {
    console.log('admins are', this.admins)
    return { admins: this.admins }
  }
};

class AccountingDep extends Department {
  static currentFinancialYear: String = '2023'
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found')
  }

  set mostRecentReport(r: string) {
    if (r) {
      this.addReport(r)
      return
    }
    console.log('Please privide a valid argument')
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.employees = ['John']
    this.lastReport = reports[0];
  }


  describeDept(this: AccountingDep): void {
    console.log(`welcome to the ${this.id}`)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text;
  }
  addEmployee(employee: string): void {
    if (!this.employees.includes(employee)) {
      this.employees.push(employee)
      return
    }
    this.addReport(`Failed to add already added employee ${employee}: ${Date()}`)
    console.log(`${employee} already works here`)
  }

  printReports() {
    console.log('Reports ', this.reports)
  }
}

const it = new ItDepartment('d3', ['David'])
const accounting = new AccountingDep('A1', [`dept created: ${Date()}`]);
//const accountingCopy = { name: 'copy', describe: accounting.describe }
const employee1 = Department.createEmployee("Leon")
console.log("employee1: ", employee1)
//accountingCopy.describe()
accounting.mostRecentReport = 'Manually added report'
console.log("current financial year: ", AccountingDep.currentFinancialYear)
console.log("Most recent report: ", accounting.mostRecentReport)
accounting.addEmployee('John')
accounting.addEmployee('Philip')
accounting.describeDept()
accounting.printEmployeeInfo()
accounting.printReports()
it.describe()
it.getAdmins()
it.addEmployee('david')
it.addEmployee('Jane')
it.printEmployeeInfo()
