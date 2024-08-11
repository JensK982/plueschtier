import { Routes } from "@angular/router";
import { ManagementSubNavComponent } from "./managementSubnav.component";
import { ListComponent } from "../list/list.component";

export const SubnavRoutes: Routes = [
  {
    path: '',
    component: ManagementSubNavComponent,
    outlet: 'subnav'
  },

];


