import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { Role } from '../models/role';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

// Assuming user data might be stored in local storage or fetched from an API
private currentUser: Account | null = null;

  constructor(private router: Router) { 
    this.currentUser = {
      id: '1',
      firstName: 'Mia',
      lastName: 'Kühnler',
      email: 'jens.kuehnler@me.com',
      role: Role.Admin
    };
  }

isAdmin(): boolean {
  return this.currentUser?.role === Role.Admin;
}

getCurrentUser(): Account| null {
  return this.currentUser;
}
logout(){
  this.router.navigate(['/login']);
}
}
