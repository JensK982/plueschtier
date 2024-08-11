import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { isAdminGuard } from './guards/is-admin.guard';


export const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
    {
        path: 'login',
        loadChildren: () =>
          import('./modules/log-in/pages/login/log-in.module').then(
            (m) => m.LogInModule
          ), canActivate: []
    },
    {
      path: 'register',
      loadChildren: () =>
        import('./modules/log-in/pages/register/register.module').then(
          (m) => m.RegisterModule
        ), canActivate: []
  },
    {
      path: 'management',
      loadChildren: () =>
        import('./modules/management/pages/management/management.module').then(
          (m) => m.ManagementModule
        ), canActivate: [isAdminGuard] 
  },

  { path: 'error/:errorCode', component: ErrorComponent},
  { path: '**', component: ErrorComponent }
];
