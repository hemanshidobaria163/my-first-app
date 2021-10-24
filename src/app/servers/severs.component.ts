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
    serverCreated = false
    serverName=""
    servers =['Testserver','Testserver2']

    constructor (){
        setTimeout(() => {
            this.allowNewServer =true;
        },2000)


    }
    onCreateServer(){
        
        this.serverCreated=true
        this.servers.push(this.serverName);
        this.serverCreationStatus = "server is created! Name is "+ this.serverName;
    }
    onUpdateServerName(event: Event){
        this.serverName= (<HTMLInputElement>event.target).value;
        console.log("here")

    }

} 