// Salary Validation
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

// Name Validation
const text = document.querySelector('#name');
const textError = document.querySelector('.text-error');
text.oninput = function(){
  let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
  if (nameRegex.test(text.value)) textError.textContent = "";
  else textError.textContent = "Name is Incorrect";
};

class Employee_Payroll_Data 
{
	constructor(...params) {
        this.name = params[0];
        this.profilePic = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.note = params[6];
    }

    /**
     * setter and getter methods
     * validating the user inputs using regular expression
     */
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if (nameRegex.test(name)) this._name = name;
        else throw "Name is incorrect";
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) { this._department = department; }

    get salary() { return this._salary; }
    set salary(salary) { this._salary = salary; }

    get startDdate() { return this._startDate; }
    set startDdate(startDate) {
        let future = new Date();
        future.setDate(future.getDate() + 30);
        if (startDate < new Date() || startDate < future)
            this._startDate = startDate;
        else
            throw "**** START DATE is Incorrect ****";
    }

	get note() { return this._note; }
    set note(note) { this._note = note; }

    toString() {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const empDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return (
            "Name = " + this.name +
            ", ProfilePic = " + this.profilePic +
			", Gender = " + this.gender +
            ", Department = " + this.department +
            ", Salary = " + this.salary +
            ", StartDate = " + empDate +
            ", Note = " + this.note
        );
    }
}