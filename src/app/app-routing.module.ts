import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent
  }, {
    path: 'forgotpw',
    pathMatch: 'full',
    component: ForgotpwComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
