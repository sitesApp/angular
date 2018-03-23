export class User {
    private username: string;
    private firstname: string;
    private lastname: string;
    private email: string;
    private password:string;

constructor(username:string, email:string, password:string, firstname: string, lastname: string) {

        this.username=username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email=email;
        this.password=password
    }
}

