import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { listRoutes } from './list.routing';
import { ListComponent } from './list.component';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(listRoutes),
  ]
})
export class ListModule { }
