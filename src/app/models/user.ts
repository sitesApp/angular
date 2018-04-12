export class User {
    private username: string;
    private firstname: string;
    private lastname: string;
    private email: string;
    private password:string;
    private logo: string;
    private cel1: number;
    private cel2: number;
    private linkFacebook: string;
    private linkInstragram: string;

constructor(username:string, email:string, password:string, firstname: string, lastname: string, logo:string,
                cel1:number, cel2:number, linkFacebook:string, linkInstragram:string) {

        this.username=username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email=email;
        this.password=password;
        this.logo=logo;
        this.cel1=cel1;
        this.cel2=cel2;
        this.linkInstragram=linkInstragram;
        this.linkFacebook=linkFacebook;
    }
}

