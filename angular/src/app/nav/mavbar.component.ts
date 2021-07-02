import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";


@Component({
    selector:'nav-bar',
    templateUrl:'./nav-bar.component.html',
    styles:
    [
        `
        .nav.navbar-nav {font-size : 15px;}
        #searchForm {margin-right:50px;}
        `
    ]
})
export class NavBarComponent{

}