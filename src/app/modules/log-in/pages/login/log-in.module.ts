import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,} from '@angular/forms';
import { LogInComponent } from './log-in.component';
import { RouterModule } from '@angular/router';
import { logInRoutes } from './log-in.routing';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild(logInRoutes),
    ReactiveFormsModule  
  ]
})
export class LogInModule { }
