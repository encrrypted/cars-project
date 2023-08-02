export class User {


 userName: string;
 log: string;
 pass: string;
 fav:any []

 constructor(userName: string, log: string, pass: string, fav:any []) {
     this.userName = userName
     this.log = log
     this.pass = pass
     this.fav = fav
 }

 
}