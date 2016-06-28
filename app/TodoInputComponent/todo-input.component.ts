import { Component } from '@angular/core';

@Component({
    selector:'todo'
    ,templateUrl:'./todo.html'

})

export class TodoInputComponent{
    message:string;

    clickMe(){
        this.message = "to-do";
    }

}