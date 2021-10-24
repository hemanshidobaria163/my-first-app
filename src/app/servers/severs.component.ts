import { Component } from "@angular/core";

@Component ({
   selector:'app-servers',
//    template:`
//         <app-server></app-server>
//         <app-server></app-server>`,
    templateUrl:"./servers.componet.html"
})
export class ServersComponent {

    allowNewServer = false
    serverCreationStatus = 'Server is not created!'
    constructor (){
        setTimeout(() => {
            this.allowNewServer =true;
        },2000)


    }
    serverclick(){

        this.serverCreationStatus = "server is created!!!"
    }

} 