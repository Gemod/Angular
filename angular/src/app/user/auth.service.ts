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
        return true
    }

}