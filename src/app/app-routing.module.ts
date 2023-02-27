import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankcomponentComponent } from './layouts/blankcomponent/blankcomponent.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: BlankcomponentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./authentication-module/authentication-module.module').then(m => m.AuthenticationModuleModule)
      },

    ],
    // canActivate: [PublicGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
