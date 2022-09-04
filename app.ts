class Department {
    private employees:string[]=[];
    constructor(private id: string, public name: String) {
    }
    showUser(this:Department){
        console.log(`${this.id} ${this.name}`)
    }
    addUser(user:string){
    this.employees.push(user)
    }
    showUserInfo(){
        console.log(this.employees)
    }
}
let output = new Department('1', 'name')
output.showUser();
output.addUser('amir')
output.showUserInfo()