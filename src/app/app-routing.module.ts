import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { RegisterComponent } from './register/register.component';
import { ResetpwComponent } from './resetpw/resetpw.component';


const routes: Routes = [
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent
  },
  {
    path: 'forgotpw',
    pathMatch: 'full',
    component: ForgotpwComponent
  },
  {
    path: 'resetpw/:token',
    pathMatch: 'full',
    component: ResetpwComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
