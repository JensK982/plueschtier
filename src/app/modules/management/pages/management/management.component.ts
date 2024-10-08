import { Component, OnInit } from '@angular/core';
import { Account } from '../../../../models/account';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent implements OnInit {
currentUser: Account | null = null; 

constructor(private authService: AuthService){}

ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
}
}
