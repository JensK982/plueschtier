import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { registerRoutes } from './register.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild(registerRoutes),
    ReactiveFormsModule  
  ]
})
export class RegisterModule { }
