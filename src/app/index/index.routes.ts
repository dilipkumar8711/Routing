import { LoginGuard } from './../gaurd/login.guard';
import { Route } from '@angular/router';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';

export const IndexRoutes: Route[] = [
    {
        path:'', component: IndexComponent,
        canActivate:[LoginGuard],
        children: [
            {path:'login', component: LoginComponent},
            {path:'signup', component: SignupComponent},
            {path:'forgot', component: ForgotComponent}
        ]
    }
]