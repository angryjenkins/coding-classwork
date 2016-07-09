function Factory() {
    this.createEmployee = function (type) {
        var employee;
 
        if (type === "hourly") {
            employee = new Hourly();
        } else if (type === "intern") {
            employee = new Intern();
        } else if (type === "salary1") {
            employee = new Salary1();
        } else if (type === "salary2") {
            employee = new Salary2();
        }
 
        employee.type = type;
 
        employee.say = function () {
            log.add(this.type + ": rate " + this.hourly + "/hour");
        }
 
        return employee;
    }
}
 
var Hourly = function () {
    this.wage = "$10";
    this.maxHours = 50;
};
 
var Intern = function () {
    this.wage = "$5";
    this.maxHours = 15;
};
 
var Salary1 = function () {
    this.wage = "$10";
    this.maxHours = 60;
    this.daysOff = 4;
};
 
var Salary2 = function () {
    this.wage = "$10";
    this.maxHours = 60;
    this.daysOff = 4;
};
 
// log helper
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    var employees = [];
    var factory = new Factory();
 
    employees.push(factory.createEmployee("hourly"));
    employees.push(factory.createEmployee("intern"));
    employees.push(factory.createEmployee("salary1"));
    employees.push(factory.createEmployee("salary2"));
    
    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }
 
    log.show();
}