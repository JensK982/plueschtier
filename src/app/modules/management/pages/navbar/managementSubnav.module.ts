import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ManagementSubNavComponent } from './managementSubnav.component';
import { SubnavRoutes } from './managementSubnav.routing';


@NgModule({
  declarations: [ManagementSubNavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SubnavRoutes),
    
  ],

})

export class ManagementSubnavModule { }
