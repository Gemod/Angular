import { Pipe, PipeTransform } from "@angular/core";



@Pipe({name:'WeirdUpperAndLowerCase'})
export class WeirdUpperAndLowerCasePipe implements PipeTransform {
    transform(value: String) : string {
        console.log(value)
        let result=""
        for (let i = 0 ; i<value.length ;i++){
            if(i%2==0){
                result +=value.charAt(i).toUpperCase()
            }else{
                result+=value.charAt(i).toLowerCase()
            }
        }
        console.log("result is : "+result)
        return result;

    }
}