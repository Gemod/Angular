import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";


@Component({
    selector:'nav-bar',
    templateUrl:'./nav-bar.component.html',
    styles:
    [
        `
        .nav.navbar-nav {font-size : 15px;}
        #searchForm {margin-right:50px;}
        li> a.active{color: #F97924;}
        `
    ]
})
export class NavBarComponent{

    constructor(public  authService : AuthService){

    }

}