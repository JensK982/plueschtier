import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { managementRoutes } from './management.routing';
import { ManagementComponent } from './management.component';


@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(managementRoutes),
    
  ],

})

export class ManagementModule { }
