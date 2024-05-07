import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPannelComponent } from './admin-pannel.component';
import { AuthGuard } from '../helper/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminPannelComponent,
    canActivate: [AuthGuard],

    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'queries', loadChildren: () => import('./queries/queries.module').then(m => m.QueriesModule) },
      { path: 'subscribers', loadChildren: () => import('./subscribers/subscribers.module').then(m => m.SubscribersModule) },
      { path: 'change-password', loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPannelRouting { }
