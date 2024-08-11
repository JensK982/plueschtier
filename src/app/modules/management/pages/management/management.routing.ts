import { Routes } from "@angular/router";
import { ManagementComponent } from "./management.component";
import { ManagementSubNavComponent } from "../navbar/managementSubnav.component";
import { SubnavRoutes } from "../navbar/managementSubnav.routing";

export const managementRoutes: Routes = [
  {
    path: '',
    component: ManagementComponent,
  },
  {
        path: '',
        component: ManagementSubNavComponent,
        outlet: 'subnav',
        children: SubnavRoutes
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('../list/list.module').then(
        (m) => m.ListModule
      )
  }
]


