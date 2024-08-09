import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Account } from '../../models/account';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  currentUser: Account | null = null;


  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

}


