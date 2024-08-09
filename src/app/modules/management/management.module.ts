import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { managementRoutes } from './management.routing';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(managementRoutes),
    
  ]
})
export class ManagementModule { }
