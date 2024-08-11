import { Component } from '@angular/core';

@Component({ templateUrl: 'managementSubnav.component.html' })
export class ManagementSubNavComponent { 
    onLinkClick(){
        console.log("Klick ausgeführt.");
    }
}