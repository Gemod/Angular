import { LEADING_TRIVIA_CHARS } from "@angular/compiler/src/render3/view/template";
import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

   public currentUser: IUser
    loginUser(username: string, password: string) {
        this.currentUser = {
            id: 1,
            firstname: 'jack',
            lastname: 'john',
            username: 'Gemod'
        }
    }

    isAuthenticated(){
        return !!this.currentUser
    }

    updateUserInfo(firstname:string,lastname:string){
        this.currentUser.firstname=firstname
        this.currentUser.lastname=lastname
    }

}