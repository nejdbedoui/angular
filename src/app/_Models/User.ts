export class User{
    idCustomer: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
    password: string;
    profession: string;
    accountCategory: string;
    picture:string;

    constructor(
        idCustomer: number,
        firstName: string,
        lastName: string,
        birthDate: string,
        email: string,
        password: string,
        profession: string,
        accountCategory: string,
        picture: string
      ) {
        this.idCustomer = idCustomer;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        this.profession = profession;
        this.accountCategory = accountCategory;
        this.picture = picture;
      } 
}